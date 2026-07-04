from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
from fastapi.exceptions import HTTPException

app = FastAPI()
origins = ["http://localhost:5173", "http://localhost","http://localhost:3000"]

app.add_middleware(
   CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
def load_data():
    with open("dsa_data.json",'r',encoding="utf-8") as file:
        return json.load(file)

    
def load_description():
    with open("dsa_descriptions.json",'r',encoding="utf-8")as file:
        return json.load(file)

data = load_data()
description = load_description()

@app.get("/Health")
def Health():
    return {
        "status":"ok",
        "message":"LeetLog backend is Running 👍"
        }
@app.get("/topics")
def topics():
    return list(data.keys())

@app.get("/topics/{topic}")
def getAllProblems(topic):
    if topic not in data:
        raise HTTPException(
            status_code=404,
            detail="Topic not found !"
        )
    return list(data[topic].keys())


@app.get("/topics/{topic}/problems/{problem_name}")
def get_problem(topic,problem_name):
    if not topic in data:
        raise HTTPException(
            status_code=404,
            detail="Invalid Topic !"
        )
    if not problem_name in data[topic]:
        raise HTTPException(
            status_code=404,
            detail="Problem not found !"
        ) 
    
    if not problem_name in description:
        raise HTTPException(
            status_code=404,
            detail=f"No Data found for {problem_name} "
        )
    return {
        "title":description[problem_name].get("title","No Title present for this problem"),
        "source":description[problem_name].get("source"," "),
        "description":description[problem_name].get("description","No Description present for this problem "),
        "examples":description[problem_name].get("examples",[]),
        "link":description[problem_name].get("link"," "),
        "constraints":description[problem_name].get("constraints",[]),
        "difficulty":description[problem_name].get("difficulty","Medium"),
        "code":data[topic].get(problem_name," ")
    }
    

