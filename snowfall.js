// Lấy chiều cao của body
//const bodyHeight = document.body.clientHeight;

// Đặt chiều cao của snowfall bằng với chiều cao của body
//document.querySelector('.snowfall').style.height = `${bodyHeight}px`;
// Tạo một số lượng bông tuyết
const numberOfSnowflakes = 15;


// Hàm tạo và rơi bông tuyết liên tục
function createAndFallSnowflakes() {
    // Tạo một bông tuyết mới và thêm vào vùng hiển thị
    createSnowflake();
    createSnowflake();
    createSnowflake();
    createSnowflake();
    createSnowflake();    
    // Thiết lập thời gian chờ giữa mỗi lần tạo bông tuyết mới (ví dụ: 2 giây)
    const interval = 2000;

    // Lặp lại quá trình tạo và rơi bông tuyết sau mỗi khoảng thời gian interval
    setInterval(() => {
        //for (let i = 0; i < numberOfSnowflakes; i++) {
             createSnowflake();
        //}
    }, interval);
}

// Gọi hàm để bắt đầu quá trình tạo và rơi bông tuyết liên tục
createAndFallSnowflakes();

// Hàm tạo một bông tuyết
// Hàm tạo một bông tuyết
function createSnowflake() {
    const snowflake = document.createElement('img');
    snowflake.src = 'https://www.vib.com.vn/static/theme/2023/snow/snowflake2.png';
    snowflake.className = 'snowflake';
    document.querySelector('.all-snow').appendChild(snowflake);

    // Đặt vị trí và thời gian trễ xuất hiện ngẫu nhiên cho từng bông tuyết
    const randomX = Math.random() * window.innerWidth;
    const randomY = -30; // Bắt đầu từ trên cùng
    const randomDelay = Math.random() * 5; // Độ trễ từ 0 đến 5 giây
    const randomDuration = Math.random() * 25 + 3; // Thời gian rơi từ trên xuống từ 3 đến 6 giây
    const randomSize = Math.random() * 10 + 5; // Kích thước từ 10 đến 30 px
    const randomRotate = Math.random() * 360; // Góc xoay từ 0 đến 360 độ
    const randomDirection = Math.random() < 0.5 ? -1 : 1; // Hướng lượn trái hoặc phải

    snowflake.style.left = `${randomX}px`;
    snowflake.style.top = `${randomY}px`;
    snowflake.style.width = `${randomSize}px`;
    snowflake.style.height = `${randomSize}px`;
    snowflake.style.animationDelay = `-${randomDelay}s`;
    snowflake.style.animationDuration = `${randomDuration}s`;
    snowflake.style.transform = `rotate(${randomRotate}deg)`;
    
    snowflake.addEventListener('animationiteration', () => {
        // Khi một chu kỳ animation kết thúc, đặt lại vị trí của bông tuyết lên trên cùng
        snowflake.style.top = `${randomY}px`;

        // Thay đổi hướng lượn
        randomDirection = -randomDirection;
    });

    snowflake.addEventListener('animationiteration', () => {
        // Khi một chu kỳ animation kết thúc, đặt lại vị trí của bông tuyết lên trên cùng
        snowflake.style.top = `${randomY}px`;

        // Thay đổi hướng lượn
        randomDirection = -randomDirection;
    });

    // Thêm một hàm để lượn lờ bông tuyết theo hướng trái hoặc phải
    function float() {
        snowflake.style.left = `${parseFloat(snowflake.style.left) + randomDirection}px`;
        requestAnimationFrame(float);
    }

    float();
}
