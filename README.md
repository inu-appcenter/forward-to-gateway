# forward-to-gateway

## 개요

3829포트로 들어오는 http 요청을 API Gateway로 포워드합니다.

## 상세

[금연의민족](https://github.com/inu-appcenter/NoSmokingPeople-android) 모바일 앱은 사용자의 피드백을 등록할 때에 `POST http://inucafeteriaaws.us.to:3829/errormsg` 요청을 보냅니다.

2021년 1월 1일부터 구 카페테리아 서버 운영을 중단하면서 해당 요청을 처리하기 위한 신규 API Gateway를 개설하였습니다.

해당 Gateway는 HTTPS 프로토콜 및 443포트만 지원합니다. 따라서 3829번 포트로 들어오는 HTTP 프로토콜을 처리할 수 없을 뿐만 아니라 `inucafeteriaaws.us.to` 도메인에 대한 인증서가 없어 커스텀 도메인을 연결할 수도 없습니다.

이를 해결하기 위해 앱센터 서버가 기존 클라이언트의 요청을 받아 API Gateway로 forawrd하도록 하였습니다.

## 배포

앱센터 서버에 배포합니다. `inucafeteriaaws.us.to` 도메인이 해당 서버를 바라보도록 설정합니다.

