import streamlit as st
import json

st.set_page_config(page_title="LeetLog",page_icon="💻",layout="wide")

@st.cache_data()
def load_data():
    with open("dsa_data.json",'r',encoding="utf-8") as file:
        return json.load(file)
data = load_data()


st.sidebar.title("📂 LeetLog Archive")
st.sidebar.markdown("---")

folder = list(data.keys())

selected_category = st.sidebar.selectbox("Select Topic",folder)

if selected_category:
    files = list(data[selected_category].keys())

    selected_file = st.sidebar.radio("Select Problem",files)

if selected_category and selected_file:
    st.title(selected_file.replace(".cpp"," "))
    st.caption(f"Category: {selected_category}")
    st.markdown("---")

    code_content = data[selected_category][selected_file]
    st.code(code_content,language="cpp")
    st.markdown("---")