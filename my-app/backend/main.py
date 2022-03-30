from flask import Flask
""", g, request"""
from flask_cors import CORS
"""import pymysql
import logging
import datetime"""

app = Flask(__name__)
CORS(app)


@app.route('/',methods=["GET"])
def home():
    return "hello"