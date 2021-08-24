import os
path = r'C:\Users\dhira\Documents\Projects\rssb music player\music'
dirListing = os.listdir(path)
editFiles = []
for item in dirListing:
    if ".mp3" in item:
        item = item.split(".")[0]
        editFiles.append(item)

print (editFiles)