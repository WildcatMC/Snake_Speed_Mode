input.onButtonPressed(Button.A, function () {
    Snake.turn(Direction.Left, 90)
    Direction2 += 3
    if (Direction2 > 3) {
        Direction2 += -4
    }
})
input.onButtonPressed(Button.B, function () {
    Snake.turn(Direction.Right, 90)
    Direction2 += 1
    if (Direction2 > 3) {
        Direction2 += -4
    }
})
let Forever = 0
let Direction2 = 0
let Snake: game.LedSprite = null
game.setScore(0)
let Apple = game.createSprite(randint(0, 4), randint(0, 4))
let xpos = 0
let ypos = 2
Snake = game.createSprite(xpos, ypos)
basic.forever(function () {
    if (Forever != 1) {
        basic.pause(1000 - game.score() * 9)
        Snake.move(1)
        if (Direction2 == 0) {
            xpos += 1
        } else if (Direction2 == 1) {
            ypos += -1
        } else if (Direction2 == 2) {
            xpos += -1
        } else {
            ypos += 1
        }
        if (Snake.get(LedSpriteProperty.X) == Apple.get(LedSpriteProperty.X) && Snake.get(LedSpriteProperty.Y) == Apple.get(LedSpriteProperty.Y)) {
            Apple.delete()
            Apple = game.createSprite(randint(0, 4), randint(0, 4))
            game.addScore(1)
        }
        if (xpos < 0 || xpos > 4 || (ypos < 0 || ypos > 4)) {
            Snake.delete()
            Apple.delete()
            basic.clearScreen()
            basic.showLeds(`
                . # . # .
                # # . # #
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.showString("Game Over! S: " + game.score())
            Forever = 1
            basic.clearScreen()
        }
        if (game.score() == 100) {
            basic.clearScreen()
            basic.showString("Victory! You ate 100 apples!")
            basic.clearScreen()
        }
    }
})
