from PIL import Image
import numpy as np
import os


count = 0
dir = 'icons'

for filename in os.listdir(dir):
    f = os.path.join(dir, filename)
    if os.path.isfile(f):
        count += 1
        # Resize smoothly down to 16x16 pixels
        img = Image.open(f)
        imgSmall = img.resize((16,16), resample=Image.Resampling.BILINEAR)
        result = imgSmall.resize(img.size, Image.Resampling.NEAREST)
        result.save("icons_pix/" + filename)
