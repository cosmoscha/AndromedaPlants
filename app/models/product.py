from .db import db
from sqlalchemy.orm import relationship
import datetime
class Product(db.Model):
    __tablename__ = 'products'

id = db.Column(db.Integer, primary_key=True)
description = db.Column(db.text, nullable=False)
quantity = db.column(db.integer, nullable=False, default=0)
createdAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)
updatedAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)
users = db.relationship(, secondary="userProducts")
