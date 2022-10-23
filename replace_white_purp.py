from PIL import Image
import numpy as np
import os


count = 0
dir = 'icons_old'

for filename in os.listdir(dir):
    f = os.path.join(dir, filename)
    if os.path.isfile(f):
        count += 1
        
        im = Image.open(f)
        im.save("icons/icon_{}.png".format(str(count)))
        im = im.convert('RGBA')
        data = np.array(im)   # "data" is a height x width x 4 numpy array
        red, green, blue, alpha = data.T # Temporarily unpack the bands for readability

        # Replace white with red... (leaves alpha values alone...)
        white_areas = (red == 255) & (blue == 255) & (green == 255)
        data[..., :-1][white_areas.T] = (148, 0, 211) # Transpose back needed

        im2 = Image.fromarray(data)
        im2.save("icons/icon_purple_{}.png".format(str(count)))
