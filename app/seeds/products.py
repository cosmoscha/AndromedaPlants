from app.models import db, Product
from faker import Faker
import random


faker = Faker()

descriptions = [
    "this is my pet, i'm super proud!",
    "wouldn't trade this darling for the world!",
    "oh, who loves you!!!!",
    "this is my awesome pet",
    "I love this pet more than me",
    "this is my favorite favorite pet, i'm super proud!",
    "wouldn't trade this darling for the world!",
    "oh, who loves you!!!!",
    "check out my sweeties",
    "I love this pet so darn much",
    "this is my pet, i'm very very proud!",
    "wouldn't trade this companion for the world!",
    "oh, who loves you so much!!!!",
    "esto es mi favorite pet!",
    "I love this pet more than everything",
    "this is my pet, i have never been more proud",
    "wouldn't trade this awesomeness for the world!",
    "oh who loves my sweeties!!",
    "this is my favorite pet forever and ever",
    "I love this pet more than all the solar system!!!",
]



def seed_products(n):
    for i in range(n):
        entry = Product(
            description=descriptions[i], quantity=5
        )
        db.session.add(entry)
    db.session.commit()


def undo_products():
    db.session.execute('TRUNCATE posts CASCADE;')
    db.session.execute("ALTER SEQUENCE products_id_seq RESTART WITH 1")
    db.session.commit()
