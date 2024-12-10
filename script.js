// 設定專注時間、短休息和長休息的時間，單位是秒
const focusTime = 25 * 60; // 25分鐘
const shortBreakTime = 5 * 60; // 5分鐘
const longBreakTime = 15 * 60; // 15分鐘

let timer;
let isRunning = false;
let remainingTime = focusTime; // 預設為專注時間

// 更新顯示的時間
function updateTimerDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    document.getElementById('timer').textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
}

// 格式化時間為兩位數
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// 開始或停止倒數計時
function startStopTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        document.getElementById('startBtn').textContent = "開始";
    } else {
        timer = setInterval(function() {
            if (remainingTime > 0) {
                remainingTime--;
                updateTimerDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                document.getElementById('startBtn').textContent = "開始";
                alert("時間到！");
            }
        }, 1000);
        isRunning = true;
        document.getElementById('startBtn').textContent = "停止";
    }
}

// 切換頁籤
document.getElementById('focusTab').addEventListener('click', function() {
    remainingTime = focusTime;
    updateTimerDisplay();
    resetButton();
});

document.getElementById('shortBreakTab').addEventListener('click', function() {
    remainingTime = shortBreakTime;
    updateTimerDisplay();
    resetButton();
});

document.getElementById('longBreakTab').addEventListener('click', function() {
    remainingTime = longBreakTime;
    updateTimerDisplay();
    resetButton();
});

// 點擊開始/停止按鈕
document.getElementById('startBtn').addEventListener('click', startStopTimer);

// 初始化時更新顯示的時間
updateTimerDisplay();

// 重置按鈕為"開始"
function resetButton() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        document.getElementById('startBtn').textContent = "開始";
    }
    updateTimerDisplay();
}
