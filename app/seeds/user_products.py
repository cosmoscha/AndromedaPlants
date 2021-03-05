from app.models import db, UserProduct


def seed_userProducts():

def undo_userProducts():
    db.session.execute('TRUNCATE userProducts CASCADE;')
    db.session.execute("ALTER SEQUENCE userProducts_id_seq RESTART WITH 1")
    db.session.commit()
