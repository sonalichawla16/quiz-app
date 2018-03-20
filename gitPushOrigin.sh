eval $(ssh-agent -s)
ssh-add -k ~/.ssh/id_rsa2

git config user.name "Aakash Verma"
git config user.email "aakashvermaee@gmail.com"

git push origin master

# export commitMsg;
# echo "Enter commit message: "
# read commitMsg
# echo "Commit message: " + $commitMsg
#
# git add .
# git commit -m $commitMsg
# git push origin master
