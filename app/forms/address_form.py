from flask_wtf import FlaskForm
from wtforms import StringField, SelectField
from app.models import Address
from wtforms.validators import DataRequired
from pub_data.city import city

verify = [DataRequired()]
options = [(city) for city in city.keys()]

class AddressForm(FlaskForm):
    street_address = StringField('Street Address', verify)
    city = SelectField('Street Address', verify,  choices=options)
    zip_code = StringField('Zip Code', verify)
