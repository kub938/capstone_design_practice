curl "https://naveropenapi.apigw.ntruss.com/map-direction-15/v1/driving?start=127.1058342,37.359708&goal=129.075986,35.179470&option=trafast"\
	-H "X-NCP-APIGW-API-KEY-ID: {애플리케이션 등록 시 발급받은 client id 값}" \
	-H "X-NCP-APIGW-API-KEY: {애플리케이션 등록 시 발급받은 client secret값}" -v