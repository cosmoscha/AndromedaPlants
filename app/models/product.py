from .db import db
import datetime
class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    description = db.Column(db.Text, nullable=True)
    quantity = db.Column(db.Integer)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updatedAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    users = db.relationship("UserProduct", back_populates="product")
    photos = db.relationship("Photo", back_populates="product")
    tags = db.relationship("ProductTag", back_populates="product")
