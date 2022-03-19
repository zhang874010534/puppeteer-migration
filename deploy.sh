#!/bin/bash

# rm -rf dist && npm run build
groupName=yishenghuo-web
# 这个要改
projectArr=(ManagerForShuShuNew MPForShuShu)
# 这个要改
targetName=zhangce
for project in ${projectArr[@]}
do
  echo 拉取$project
  if ! git clone http://10.0.90.97/${groupName}/${project}.git
  then
    echo "Failed"
    exit 1
  else
    cd ./${project} && rm -rf .git
    git init
    git remote add origin http://10.0.90.97/${targetName}/${project}.git
    git add .
    git commit -m "Initial commit"
    git push -u origin master
    echo "Successful"
    exit 2
  fi
done
# 删除.git


# echo '上传代码到新项目'

# cd dist 8 scp -i ~/.ssh/vikingship.pem -r * root@121.199.70.72:/var/www




