from app.models import db, Photo
from faker import Faker
import random

faker = Faker()


photo_keys = [
    "https://andromedaplants.s3.amazonaws.com/plonts/adelae.jpg",
    "https://andromedaplants.s3.amazonaws.com/plonts/117875695_2114986708645657_8571321500299727153_n.jpg",
    "https://andromedaplants.s3.amazonaws.com/plonts/agnata+red.jpg",
    "https://andromedaplants.s3.amazonaws.com/plonts/alpina.jpg",
    "https://andromedaplants.s3.amazonaws.com/plonts/baineskloof.jpg",
    "https://andromedaplants.s3.amazonaws.com/plonts/ceph.jpg",
    "https://andromedaplants.s3.amazonaws.com/plonts/falconeri+palmerton.jpg",
    "https://andromedaplants.s3.amazonaws.com/plonts/fulva.jpg",
    "https://andromedaplants.s3.amazonaws.com/plonts/gramo.jpg",
    "https://andromedaplants.s3.amazonaws.com/plonts/hamata.jpg",
    "https://andromedaplants.s3.amazonaws.com/plonts/lanata.jpg",
    "https://andromedaplants.s3.amazonaws.com/plonts/lotus+eater.jpg",
    "https://andromedaplants.s3.amazonaws.com/plonts/madagas.jpg",
    "https://andromedaplants.s3.amazonaws.com/plonts/microdent.jpg",
    "https://andromedaplants.s3.amazonaws.com/plonts/nelumbifolia+x+ren+flower.jpg",
    "https://andromedaplants.s3.amazonaws.com/plonts/paradoxa+TYPE.jpg",
    "https://andromedaplants.s3.amazonaws.com/plonts/petiolaris.jpg",
    "https://andromedaplants.s3.amazonaws.com/plonts/pictureeesflytrap.jpg",
    "https://andromedaplants.s3.amazonaws.com/plonts/porcelain.jpg",
    "https://andromedaplants.s3.amazonaws.com/plonts/potosiensis.jpg",
    "https://andromedaplants.s3.amazonaws.com/plonts/reniformis+x+nelum+roots.jpg",
    "https://andromedaplants.s3.amazonaws.com/plonts/reniformis+x+nelumbifolia+2.jpg",
    "https://andromedaplants.s3.amazonaws.com/plonts/reniformis+x+nelumbifolia.jpg",
    "https://andromedaplants.s3.amazonaws.com/plonts/slackii.jpg",
    "https://andromedaplants.s3.amazonaws.com/plonts/yucca+do+1713.jpg",
    "https://andromedaplants.s3.amazonaws.com/plonts/yuccado.jpg",

]


def seed_photos(n):
    for i in range(n):
        entry = Photo(
            productId= i+1, photoKey=photo_keys[i]
        )
        db.session.add(entry)
    db.session.commit()


def undo_photos():
    db.session.execute('TRUNCATE photos CASCADE;')
    db.session.execute("ALTER SEQUENCE photos_id_seq RESTART WITH 1")
    db.session.commit()
