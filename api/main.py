from flask import Flask, request
from flask import Flask,jsonify, send_from_directory, render_template, redirect, request, session,url_for
from flask_sqlalchemy import SQLAlchemy
import os
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.db"
db = SQLAlchemy(app)

class users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ism = db.Column(db.String, unique=True, nullable=False)
    tg_id = db.Column(db.Integer)
    tel = db.Column(db.Integer)

class tashkilot(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nomi = db.Column(db.String)
    ish_vaqti = db.Column(db.String)
    rasm = db.Column(db.String)
    turi = db.Column(db.Integer)

@app.get("/")
def get_stores():
    return render_template('index.html')

@app.post("/tashkilot/<id>")
def tashkilotfunc(id):
    if id=='1':
        tashkilotlar = []
        data = tashkilot.query.all()
        for x in data:
            dicc = {"id":x.id,"nomi":x.nomi,"ish_vaqti":x.ish_vaqti,"rasm":x.rasm,"turi":x.turi}
            tashkilotlar.append(dicc)
        return jsonify(json_list=tashkilotlar)
    else:
        return {"Do'kon":"OK"}


@app.post("/")
@app.post("/<string:bulim>/<id>")
def create_item(bulim=None,id=None):
    if bulim!=None and id!=None:
        return  {"name": 'Tovar', "id": 99999}
    elif bulim!=None and id==None:
        return  {"name": 'Tashkilot', "id": 99999}
    else:
        return  {"name": 'Home', "id": 99999}
   

@app.get("/img/<string:file>")
def get_file(file):
    uploads = os.path.join('static', 'img')
    return send_from_directory(uploads, file)
if __name__ == '__main__':
    app.run(debug=True,port=2525,host='0.0.0.0')