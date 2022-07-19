# momentum clone - javaScript 연습

1. 시간 표시하기

   - 생성자로 Date() 값 받아오기
   - hours, minutes 값 받기
   - 삼항연산자 or padStart()로 0~9값을 00~09값으로 표시하기
   - padStart()는 문자열 값만 받기 떄문에 hours, minutes 값을 그대로 전달하면 타입에러
   - String()을 이용해서 문자열로 변환해서 사용

2. 사용자 이름 받기

   - submit 이벤트로 사용자 이름 받기
   - 기존 이벤트는 preventDefault()로 막아주기
   - 로컬스토리지에 사용자 이름 저장하기
   - 로컬스토리지에 값이 있을 경우 input 숨기고 greeting 메세지 보이기
   - 로컬스토리지에 값이 없을 경우 input 보이기 greeting 메세지 숨기기

3. ToDo List

   - "submit" 이벤트로 todo 받기
   - input 값을 받으면 ""로 초기화 시켜주기
   - toDos 배열에 {id, text}값 넣어주기
   - 화면에 그려주는 paint함수 작성
   - localStorage에 저장
   - localStorage에 값이 있을경우 todos 그려주기

4. 랜덤이미지, 랜덤명언

   - Math.floor(), Math.random() 이용해서 랜덤값 얻기
   - .length 이용해서 지정한 범위 값만 랜덤하게 출력

5. 날씨 정보
   - navigator.geolocation.getCurrentPosition()을 이용해서 경도, 위도값 받아오기
   - weatherApi를 통해서 위도,경도,API_KEY값을 줘서 원하는 데이터 가져오기
   - 받아온 데이터로 html에 그려주기
