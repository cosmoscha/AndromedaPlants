from app.models import db, UserProduct


def seed_userProducts():
    demo1 = UserProduct(id = 1, users_id=1, products_id=1, reviews='ate my hamster', ratings = 1)
    demo2 = UserProduct(id = 2,users_id=1, products_id=2, reviews='boring', ratings = 2)
    demo3 = UserProduct(id = 3,users_id=1, products_id=3, reviews='its alright', ratings = 3)
    demo4 = UserProduct(id = 4,users_id=1, products_id=4, reviews='excellent', ratings = 4)
    demo5 = UserProduct(id = 5,users_id=1, products_id=5, reviews='the best', ratings = 5)

    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)
    db.session.add(demo5)
    db.session.commit()

def undo_userProducts():
    db.session.execute('TRUNCATE userProducts CASCADE;')
    db.session.execute("ALTER SEQUENCE userProducts_id_seq RESTART WITH 1")
    db.session.commit()
