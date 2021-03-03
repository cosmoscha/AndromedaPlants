from .db import db
from sqlalchemy.orm import relationship, backref
class userProduct(db.Model):
    __tablename__ = 'userProducts'
    __table_args__ = (
        PrimaryKeyConstraint('users.id', 'products.id'),
    )

id = db.Column(db.Integer, primary_key=True)
userId = db.Column('user_id',db.Integer, db.ForeignKey("users.id"),primary_key = True)
productId = db.Column('product_id',db.Integer, db.ForeignKey("products.id"),primary_key = True)
reviews = db.Column(db.Text, nullable=True)
ratings = db.Column(db.Integer, nullable=True)
createdAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)
updatedAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)
user = db.relationship(User, backref=backref("userProducts", cascade="all, delete-orphan"))
product = db.relationship(Product, backref=backref("userProducts", cascade="all, delete-orphan"))
