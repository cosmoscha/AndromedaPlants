from flask import Blueprint, jsonify
from app.models import Product, db, Photo
from flask_login import current_user, login_user, logout_user, login_required

product_routes = Blueprint('products', __name__)

@product_routes.route('/')
def getAll():
    products = Product.query.all()
    response = {}
    products_data = []
    for product in products:
        photo_paths = []
        for photo in product.photos:
            photo_paths.append(photo.photoKey)
        product_datum = {
            "name" : product.name,
            "photos" : photo_paths
        }
        products_data.append(product_datum)
    response["products"] = products_data
    return response

@product_routes.route('/<int:id>')
def getOne(id):
    products = Product.query.filter_by(id=id).first()
    return products.to_dict()

# @product_routes.route('/<int:id>', methods=['POST'])
# def makeReview(id):
#     # form = ReviewForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         reviewData = request.form.get('reviews')
#         ratingData = request.form.get('ratings')
#         review = UserProduct(
#             users_Id=current_user.id,
#             products_id=id,
#             reviews=reviewData,
#             ratings=ratingData
#         )
#         db.session.add(review)
#         db.session.commit()

#         return to_dict(review)
#     return "Bad Data"
