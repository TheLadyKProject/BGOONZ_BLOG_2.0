---
title: title
subtitle: subtitle
date: '2022-01-03'
thumb_img_alt: lorem-ipsum
content_img_alt: lorem-ipsum
excerpt: lorem-ipsum
seo:
    title: ''
    description: ''
    robots: []
    extra: []
template: post
thumb_img_path: images/css-72a655a7.jpg
---

# To find files by case-insensitive extension (ex: .jpg, .JPG, .jpG):

find . -iname "\*.jpg"

# To find directories:

find . -type d

# To find files:

find . -type f

# To find files by octal permission:

find . -type f -perm 777

# To find files with setuid bit set:

find . -xdev \( -perm -4000 \) -type f -print0 | xargs -0 ls -l

# To find files with extension '.txt' and remove them:

find ./path/ -name '\*.txt' -exec rm '{}' \;

# To find files with extension '.txt' and look for a string into them:

find ./path/ -name '\*.txt' | xargs grep 'string'

# To find files with size bigger than 5 Mebibyte and sort them by size:

find . -size +5M -type f -print0 | xargs -0 ls -Ssh | sort -z

# To find files bigger than 2 Megabyte and list them:

find . -type f -size +200000000c -exec ls -lh {} \; | awk '{ print $9 ": " $5 }'

# To find files modified more than 7 days ago and list file information:

find . -type f -mtime +7d -ls

# To find symlinks owned by a user and list file information:

find . -type l -user <username-or-userid> -ls

# To search for and delete empty directories:

find . -type d -empty -exec rmdir {} \;

# To search for directories named build at a max depth of 2 directories:

find . -maxdepth 2 -name build -type d

# To search all files who are not in .git directory:

find . ! -iwholename '_.git_' -type f

# To find all files that have the same node (hard link) as MY_FILE_HERE:

find . -type f -samefile MY_FILE_HERE 2>/dev/null

# To find all files in the current directory and modify their permissions:

find . -type f -exec chmod 644 {} \;
