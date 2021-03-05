from flask import Blueprint, jsonify
from app.models import Tag

tag_routes = Blueprint("tags", __name__)

@tag_routes.route('/')
def allTags():
    tags = Tag.query.all()
    return {"tags": [tag.to_dict() for tag in tags]}


@tag_routes.route('/<id>')
def oneTag(id):
    tag =Tag.query.get(id)
    return tag.to_dict()
