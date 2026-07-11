import sqlite3


conn = sqlite3.connect("chat.db")

cursor = conn.cursor()


cursor.execute("""
CREATE TABLE IF NOT EXISTS messages(

    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    message TEXT,
    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP

)
""")


conn.commit()


def save_message(username, message):

    cursor.execute(
        "INSERT INTO messages(username,message) VALUES(?,?)",
        (username,message)
    )

    conn.commit()



def get_messages():

    cursor.execute(
        "SELECT username,message,time FROM messages ORDER BY id DESC LIMIT 50"
    )

    return cursor.fetchall()