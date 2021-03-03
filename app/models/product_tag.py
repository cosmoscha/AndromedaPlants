from .db import db
from sqlalchemy.orm import relationship, backref
import datetime
class ProductTag(db.Model):
    __tablename__ = "productTags"

    id = db.Column(db.Integer, primary_key=True)
    tags_id = db.Column(db.Integer, db.ForeignKey("tags.id"), primary_key=True)
    products_id = db.Column(db.Integer, db.ForeignKey("products.id"), primary_key=True)
    reviews = db.Column(db.Text, nullable=True)
    ratings = db.Column(db.Integer, nullable=True)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updatedAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    tag = db.relationship("Tag", back_populates="products")
    product = db.relationship("Product", back_populates="tags")