/* ==========================================================================
   Tự động chạy cấu hình thuộc tính khi trang web tải xong (window.onload)
   ========================================================================== */
window.onload = function() {
    console.log("Trang web đã tải xong. Bắt đầu tự động chèn thuộc tính tabindex...");
    
    // Gọi hàm thực thi vòng lặp chèn tabindex cho các khối dự án
    initializeKeyboardAccessibility();
};

/**
 * Hàm tìm tất cả các khối dự án và gán thuộc tính tabindex
 */
function initializeKeyboardAccessibility() {
    // Lấy tất cả các phần tử có class là 'card-section'
    let projectCards = document.querySelectorAll(".card-section");
    
    // Sử dụng vòng lặp for để duyệt qua từng khối nội dung
    for (let i = 0; i < projectCards.length; i++) {
        // Tự động gán thuộc tính tabindex = 0
        projectCards[i].setAttribute("tabindex", "0");
    }
    
    console.log("Hệ thống đã tự động kích hoạt thành công tabindex cho " + projectCards.length + " khối dự án.");
}
