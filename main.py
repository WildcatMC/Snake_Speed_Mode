Snake: game.LedSprite = None
Snake.turn(Direction.LEFT, 90)
Apple = game.create_sprite(randint(0, 4), randint(0, 4))
Snake = game.create_sprite(2, 4)

def on_forever():
    basic.pause(1000)
    Snake.move(1)
basic.forever(on_forever)
