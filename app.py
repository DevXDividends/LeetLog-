import streamlit as st
import json

st.set_page_config(page_title="LeetLog",page_icon="💻",layout="wide")

@st.cache_data()
def load_data():
    with open("dsa_data.json",'r',encoding="utf-8") as file:
        return json.load(file)
    
def load_des():
    with open("dsa_descriptions.json",'r')as file:
        return json.load(file)
    
description = load_des()
data = load_data()

def get_problem_metadata(des,problem):
    if problem in des:
        return{
            "title": des[problem]["title"],
            "source":des[problem]["source"],
            "description":des[problem]["description"],
            "examples":des[problem]["examples"]
        }
    else:
        return {
            "title": "No data Found !"
        }
    
st.sidebar.title("📂 LeetLog Archive")
st.sidebar.markdown("---")

folder = list(data.keys())

selected_category = st.sidebar.selectbox("Select Topic",folder)

if selected_category:
    files = list(data[selected_category].keys())

    selected_file = st.sidebar.radio(
        "Select Problem",
        files,
        format_func=lambda x:x.replace(".cpp"," ")
        )

if selected_category and selected_file:

    des_data = get_problem_metadata(
        des=description,
        problem=selected_file
        )
    
    st.title(des_data["title"].replace(".cpp",""))

    st.caption(f"Category: {selected_category}")
    st.write(f"Source: {des_data["source"]}")
    st.subheader("Description")

    st.write(des_data["description"])
    st.subheader("Examples")

    for idx, ex in enumerate(des_data["examples"], start=1):
     with st.container(border=True):

        st.markdown(f"### Example {idx}")

        st.markdown("#### Input")
        st.code(ex["input"], language="cpp")

        st.markdown("#### Output")
        st.code(ex["output"], language="cpp")

        st.markdown("#### Explanation")
        st.write(ex["explanation"])

    code_content = data[selected_category][selected_file]
    st.code(code_content,language="cpp")
    st.markdown("---")