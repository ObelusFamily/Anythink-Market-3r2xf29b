grep -i "@amazon" MOCK_DATA.csv | awk -F',' '{print $3, $2}'
