balance = 1000


def get_balance():
    return balance


def update_balance(amount):
    global balance
    balance += amount
    return balance