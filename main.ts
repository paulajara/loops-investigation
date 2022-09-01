basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.pause(500)
    }
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            # . . . .
            # # . . .
            # . # . .
            # . . # .
            # # # # #
            `)
        basic.pause(100)
        basic.showLeds(`
            # # # # #
            . # . . #
            . . # . #
            . . . # #
            . . . . #
            `)
        basic.pause(200)
        basic.showLeds(`
            # # # # #
            # . . # .
            # . # . .
            # # . . .
            # . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # . #
            . # . . #
            # # # # #
            `)
        basic.pause(200)
    }
})
