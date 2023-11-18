"""
Created by: Liya G
Created on: Nov 2023
This module is a Micro:bit MicroPython program moves LED's diagonally across the microbit.
"""

from microbit import *


# variables
loop_counter = 0

# setup
display.clear()
display.show(Image.GIRAFFE)
sleep(1000)

# loop
while True:
    if button_a.is_pressed():
        # setup
        display.clear()
        loop_counter = 0

        # loop
        while loop_counter < 5:
            sleep(500)

            # show pixels x,y location
            display.set_pixel(loop_counter, loop_counter, 9)
            sleep(500)
            display.clear()

            # loop_counter goes up by 1
            loop_counter += 1

        display.show(Image.GIRAFFE)

    if button_b.is_pressed():
        # setup
        display.clear()
        loop_counter = 4

        # loop
        while loop_counter > -1:
            sleep(500)

            # show pixels x,y location
            display.set_pixel(loop_counter, loop_counter, 9)
            sleep(500)
            display.clear()

            # loop_counter goes down by 1
            loop_counter -= 1

        display.show(Image.GIRAFFE)
