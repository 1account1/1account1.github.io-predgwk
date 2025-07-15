const sheetId = '1OBavU-kB-DgtTf5Ys7zNw7ag2MrX4ppMwwW9uY0YIo4';
const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;

fetch(url)
    .then(res => res.text())
    .then(csvText => {
    const rows = csvText.trim().split('\n').map(r => r.split(','));
    
    // 두 번째 열 값만 추출
    const secondColumnValues = rows.map(row => row[1]);

    // 출력
    const output = document.getElementById('output');
    secondColumnValues.forEach(value => {
        if (value) { // 값이 비어있지 않으면
        const li = document.createElement('li');
        li.textContent = value;
        output.appendChild(li);
        }
    });

    // 원한다면 콘솔로도 확인
    });

document.getElementById('output').scrollTop = document.getElementById('output').scrollHeight;