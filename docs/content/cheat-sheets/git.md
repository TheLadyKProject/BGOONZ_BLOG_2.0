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
---
tags: [vcs]
---

# To set your identity:

git config --global user.name <name>
git config --global user.email <email>

# To set your editor:

git config --global core.editor <editor>

# To enable color:

git config --global color.ui true

# To stage all changes for commit:

git add --all

# To stash changes locally, this will keep the changes in a separate changelist

# called stash and the working directory is cleaned. You can apply changes

# from the stash anytime

git stash

# To stash changes with a message:

git stash push -m <message>

# To list all the stashed changes:

git stash list

# To apply the most recent change and remove the stash from the stash list:

git stash pop

# To apply any stash from the list of stashes. This does not remove the stash

# from the stash list

git stash apply stash@{6}

# To commit staged changes:

git commit -m <message>

# To edit previous commit message:

git commit --amend

# Git commit in the past

git commit --date="`date --date='2 day ago'`"
git commit --date="Jun 13 18:30:25 IST 2015"

# more recent versions of Git also support --date="2 days ago" directly

# To change the date of an existing commit:

git filter-branch --env-filter \
 'if [ $GIT_COMMIT = 119f9ecf58069b265ab22f1f97d2b648faf932e0 ]
then
export GIT_AUTHOR_DATE="Fri Jan 2 21:38:53 2009 -0800"
export GIT_COMMITTER_DATE="Sat May 19 01:01:01 2007 -0700"
fi'

# To remove staged and working directory changes:

git reset --hard

# To go 2 commits back:

git reset --hard HEAD~2

# To revert first/initial commit on a branch:

# Running git reset --hard HEAD~1 will give error:

# fatal: ambiguous argument 'HEAD~1': unknown revision or path not in the working tree.

git update-ref -d HEAD

# To remove untracked files:

git clean -f -d

# To remove untracked and ignored files:

git clean -f -d -x

# To push to the tracked master branch:

git push origin master

# To push to a specified repository:

git push git@github.com:<username>/<repo>.git

# To push a tag to remote:

git push origin <tagname>

# To force a push:

git push -f

# To delete the branch <branch>:

git branch -D <branch>

# To make an exisiting branch track a remote branch:

git branch -u upstream/foo

# To see who commited which line in a file:

git blame <file>

# To sync a fork with the master repo:

git remote add upstream git@github.com:<username>/<repo>.git # Set a new repo
git remote -v # Confirm new remote repo
git fetch upstream # Get branches
git branch -va # List local - remote branches
git checkout master # Checkout local master branch
git checkout -b new_branch # Create and checkout a new branch
git merge upstream/master # Merge remote into local repo
git show 83fb499 # Show what a commit did.
git show 83fb499:path/fo/file.ext # Shows the file as it appeared at 83fb499.
git diff branch_1 branch_2 # Check difference between branches
git log # Show all the commits
git status # Show the changes from last commit

# To view the commit history of a set of files:

git log --pretty=email --patch-with-stat --reverse --full-index -- Admin\*.py > Sripts.patch

# To import commits from another repo:

git --git-dir=../some_other_repo/.git format-patch -k -1 --stdout <commit SHA> | git am -3 -k

# To view commits that will be pushed:

git log @{u}..

# To view changes that are new on a feature branch:

git log -p feature --not master
git diff master...feature

# To perform an interactive rebase for the prior 7 commits:

git rebase -i @~7

# To diff files WITHOUT considering them a part of git:

# This can be used to diff files that are not in a git repo!

git diff --no-index path/to/file/A path/to/file/B

# To pull changes while overwriting any local commits:

git fetch --all
git reset --hard origin/master

# To update all submodules:

git submodule update --init --recursive

# To perform a shallow clone to only get latest commits:

# (helps save data when cloning large repos)

git clone --depth 1 <remote-url>

# To unshallow a clone:

git pull --unshallow

# To create a bare branch (one that has no commits on it):

git checkout --orphan branch_name

# To checkout a new branch from a different starting point:

git checkout -b master upstream/master

# To remove all stale branches (ones that have been deleted on remote):

# So if you have a lot of useless branches, delete them on Github and then run this

git remote prune origin

# To prune all remotes at once:

git remote prune $(git remote | tr '\n' ' ')

# Revisions can also be identified with :/text

# So, this will show the first commit that has "cool" in their message body

git show :/cool

# To undo parts of last commit in a specific file

git checkout -p HEAD^ -- /path/to/file

# To revert a commit and keep the history of the reverted change as a separate revert commit:

git revert <commit SHA>

# To pick a commit from a branch to current branch. This is different than merge as

# this just applies a single commit from a branch to current branch:

git cherry-pick <commit SHA1>