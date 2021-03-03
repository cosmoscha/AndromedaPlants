from app.models import db, Photo
from faker import Faker
import random

faker = Faker()


photo_keys = [
    "https://andromedaplants.s3.amazonaws.com/104707435_2049115241899471_2409481030156799029_o.jpg",
    "https://andromedaplants.s3.amazonaws.com/107123508_2069066973237631_7085080278469942117_n.jpg",
    "https://andromedaplants.s3.amazonaws.com/109507965_2081088382035490_4981221870352552347_o.jpg",
    "https://andromedaplants.s3.amazonaws.com/93379445_1982618745215788_1724003828279279616_n.jpg",
    "https://andromedaplants.s3.amazonaws.com/95606796_1997283697082626_4616065527859642368_n.jpg",
    "https://andromedaplants.s3.amazonaws.com/95606796_1997283697082626_4616065527859642368_n.jpg",
    "https://andromedaplants.s3.amazonaws.com/99439952_2019662218178107_6228214938733641728_o.jpg"
]


def seed_photos(n):
    for i in range(n):
        entry = Photo(
            productId= i+1, photoKey=photo_keys[i]
        )
        db.session.add(entry)
    db.session.commit()


def undo_photos():
    db.session.execute('TRUNCATE photos CASCADE;')
    db.session.execute("ALTER SEQUENCE photos_id_seq RESTART WITH 1")
    db.session.commit()
