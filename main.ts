/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program moves LED's diagonaly across the microbit
*/

let sprite: game.LedSprite = null
let loopCounter = 0

// setup
basic.clearScreen()
basic.pause(500)
basic.showIcon(IconNames.Silly)

// press button A
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

// press button 
input.onButtonPressed(Button.B, function () {
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
