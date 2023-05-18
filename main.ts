input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
let empty_obstacle_y = 0
let bird: game.LedSprite = null
let ticks = 0
let obstacles: game.LedSprite[] = []
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }
    for (let obstacle_2 of obstacles) {
        obstacle_2.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        empty_obstacle_y = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != empty_obstacle_y) {
                obstacles.push(game.createSprite(4, index))
            }
        }
    }
    for (let obstacle_3 of obstacles) {
        if (obstacle_3.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle_3.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(1000)
})
