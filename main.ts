input.onButtonPressed(Button.A, function () {
    m = randint(1, 3)
    if (m == 1) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (m == 2) {
        basic.showLeds(`
            . # # # #
            . # # # #
            . # # # #
            . # # # #
            # . . . .
            `)
    } else if (m == 3) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(1000)
        basic.showLeds(`
            . # # # .
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
    }
})
let m = 0
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(100)
    basic.clearScreen()
}
