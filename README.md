# Covid-19
Covid-19 interactive web article

This article was carried out as a front-end internship project of Dong-A Media Group and received permission to use the portfolio.

<img width="1680" alt="image" src="https://user-images.githubusercontent.com/67743120/161905832-6fd4eef8-4c14-44e2-bc12-86f035fcfb1f.png">

초기 화면 구성이다. 주어진 배경화면과 제목은 position을 각각 relative, absolute로 설정해 줘서 겹쳤다. 제목의 효과는 그림자를 적절히 제거하는 것을 반복하여 깜빡이는 효과를 구현하였다.

<img width="1680" alt="image" src="https://user-images.githubusercontent.com/67743120/161906338-90da6eb8-e1f7-4fa2-a617-34a64b8e8ddd.png">

부드러운 화면 전환을 위해 화면 상단 10%, 하단 20%에 커서가 위치하면 화면을 전환하도록 구현하였다. 또한 Intersection Observer를 사용하여 로딩을 효율적으로 처리해 주어 로딩 속도를 빠르게 하였다.

<img width="1680" alt="image" src="https://user-images.githubusercontent.com/67743120/161906521-6224c72a-beea-4164-95a9-65974e3953cf.png">

D3.js를 사용하여 세계지도를 구성하였고, Css로 마우스 효과를 구현하였다. 확진자 수는 객체에 저장하여 나라 이름을 key로 사용해 value를 읽어오도록 구현했다. 

<img width="1680" alt="image" src="https://user-images.githubusercontent.com/67743120/161906725-91ab906d-472d-4960-8f98-b33578fb0557.png">

CSV 파일에서 데이터를 읽어와서 각각의 배열에 저장한 뒤 Chart.js 라이브러리를 사용하여 그래프로 표현하였다. 상단의 레이블을 통해 선택한 데이터만 볼 수 있도록 했다.

https://user-images.githubusercontent.com/67743120/161907029-b64b0893-4e31-455c-82cb-8dd3d4036bc6.mp4
