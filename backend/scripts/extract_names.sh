grep -i "@amazon" $1 | awk -F',' '{print $2, $3}'
