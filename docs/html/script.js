// script.js 파일 완성하기
function sendMessage() {
    // 이전 코드 유지
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');
    const resultDiv = document.getElementById('result');
    
    if (nameInput.value === '' || messageInput.value === '') {
        alert('이름과 메시지를 모두 입력해주세요!');
        return;
    }
    
    const now = new Date();
    const timeString = `${now.getHours()}:${now.getMinutes()}`;
    
    // 4. 메시지 HTML 만들기
    const newMessage = `
        <div class="message">
            <strong>${nameInput.value}</strong> (${timeString})
            <p>${messageInput.value}</p>
        </div>
    `;
    
    // 5. 메시지 표시하기
    resultDiv.innerHTML += newMessage;
    
    // 6. 입력창 비우기
    messageInput.value = '';
}