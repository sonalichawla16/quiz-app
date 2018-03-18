# export commitMsg;

# echo "Enter Commit Message: "
# read commitMsg;
# echo $commitMsg;

# git commit -am $commitMsg

eval $(ssh-agent -s)
ssh-add -k ~/.ssh/id_rsa2

git push origin master