/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Liya G
 * Created on: Nov 2023
 * This program moves LED's diagonaly across the microbit
*/

let sprite: game.LedSprite = null
let loopCounter = 0

// setup
basic.clearScreen()
basic.pause(500)
basic.showIcon(IconNames.Silly)

// move sprite diagonally from (0,0) to (4,4)
input.onButtonPressed(Button.A, function () {
  // setup
  basic.clearScreen()
  loopCounter = 0
  sprite = game.createSprite(0, 0)

  while (loopCounter <= 5) {
    basic.pause(500)
    sprite.set(LedSpriteProperty.X, loopCounter)
    sprite.set(LedSpriteProperty.Y, loopCounter)
    loopCounter++
  }

  sprite.delete()
  basic.showIcon(IconNames.Fabulous)
})

// move sprite diagonally from (4,4) to (0,0)
input.onButtonPressed(Button.B, function () {
  // setup
  basic.clearScreen()
  loopCounter = 5
  sprite = game.createSprite(5, 5)

  while (loopCounter >= -1) {
    basic.pause(500)
    sprite.set(LedSpriteProperty.X, loopCounter)
    sprite.set(LedSpriteProperty.Y, loopCounter)
    loopCounter--
  }

  sprite.delete()
  basic.showIcon(IconNames.Sad)
})
