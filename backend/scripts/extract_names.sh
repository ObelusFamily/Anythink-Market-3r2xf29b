grep -i "@amazon" $1 | awk -F',' '{print $3, $2}'
