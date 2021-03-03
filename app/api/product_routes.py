from flask import Blueprint, jsonify, session, request
from app.models import Products, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required

product_routes = Blueprint('products', __name__)

@product_routes('/')
def getAll():
    products = Product.query.all()
    return {"products": [product.to_dict() for product in products]}
