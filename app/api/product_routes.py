from flask import Blueprint, jsonify, session, request
from app.models import Product, db, Photo
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required

product_routes = Blueprint('products', __name__)

@product_routes.route('/')
def getAll():
    products = Product.query.all()
    photos = Photo.query.query.all()
    return {"photos": [photo.to_dict() for photo in photos]}
