"""
Created by: Liya G
Created on: Nov 2023
This module is a Micro:bit MicroPython program moves LED's diagonally across the microbit.
"""

from microbit import *


# variables
sprite = set_pixel(0, 0, 9)
loop_counter = 0

# setup
display.clear()
display.show(Image.FABULOUS)

# loop
while True:
    if button_a.is_pressed():
        # setup
        display.clear()
        loop_counter = 0

        while loop_counter <= 5:
            sleep(500)
            display.set_pixel(loop_counter, loop_counter, 9)
            loop_counter+=
    display.show(Image.ANGRY)

    if button_b.is_pressed():

