import streamlit as st
import json

st.set_page_config(page_title="LeetLog",page_icon="💻",layout="wide")

@st.cache_data()
def load_data():
    with open("dsa_data.json",'r',encoding="utf-8") as file:
        return(file)
data = load_data()


