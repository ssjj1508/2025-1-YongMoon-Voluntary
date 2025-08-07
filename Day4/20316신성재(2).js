const contents = {
      dream: `<h3>나의 꿈</h3>
        <p>머신러닝이나 딥러닝 개발자가 되어 여러 인공지능들이 실생활에서 사용 가능하도록 만들고 싶습니다.</p>`,
      goal: `<h3>나의 목표</h3>
        <ul>
          <li>내신 등급 2등급 이상 찍기</li>
          <li>모의고사 성적 올리기</li>
          <li>내가 할 수 있는 일에 최선을 다하기</li>
        </ul>`,
      hobby: `<h3>나의 취미</h3>
        <p><li>저의 취미는 프로미스나인 덕질하기 입니다.</li>  
        <li>특히 멤버 중 송하영을 제일 좋아합니다.</li>  
        <li>이 분들은 제 삶의 원동력입니다.</li></p>`
    };

    function showContent(key) {
      document.getElementById('content').innerHTML = contents[key];
    }
