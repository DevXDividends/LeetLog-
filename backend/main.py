from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
import psycopg
from psycopg.rows import dict_row
from fastapi.exceptions import HTTPException

conn = psycopg.connect(
    dbname = "leetlog",
    user= "postgres",
    password = "root",
    host = "localhost",
    row_factory=dict_row
)
cur = conn.cursor()

app = FastAPI()
origins = ["http://localhost:5173", "http://localhost","http://localhost:3000"]

app.add_middleware(
   CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/Health")
def Health():
    return {
        "status":"ok",
        "message":"LeetLog backend is Running 👍"
        }
@app.get("/topics")
def topics():
    try:
        query = """SELECT DISTINCT topic FROM Problems"""
        cur.execute(
            query=query
        )
        return [row["topic"] for row in cur.fetchall()]
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=404,detail=str(e))

@app.get("/topics/{topic}")
def getAllProblems(topic):
    try:
        query = f""" SELECT title FROM  problems WHERE topic = %s """
        cur.execute(query,(topic,))
        data = cur.fetchall()
        if  not  data:
            raise HTTPException(
                 status_code=404,
                detail="Topic not found !"
            )
        return [row["title"] for row in data]
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=404,detail=str(e))
    


@app.get("/topics/{topic}/problems/{problem_name}")
def get_problem(topic,problem_name):
    try:
        query = f"""
        SELECT 
	    title,source,description,examples,link,constraints,difficulty,editorial_code as code
			FROM problems 
	    WHERE topic  = %s AND title = %s 
        """
        cur.execute(query,(topic,problem_name))
        data =cur.fetchone()
        if not data:
            raise HTTPException(status_code=404,detail="Not found !")
        return data
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=404,detail=str(e))
        

