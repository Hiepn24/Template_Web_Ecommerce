document.addEventListener("DOMContentLoaded", function () {
    // Xử lý hiệu ứng menu khi scroll
    scrollMenu();
    function scrollMenu() {
        var menu = document.querySelector(".menu");
        window.addEventListener("scroll", function () {
            if (window.pageYOffset > 50) {
                menu.classList.add("fixed", "top-0");
            } else {
                menu.classList.remove("fixed", "top-0");
            }
        })
    }

    // Xử lý hiệu ứng slide
    slide();
    function slide() {
        var noidungslide = document.querySelectorAll(".noidungslide");
        var nutchuyenslide = document.querySelectorAll(".nutchuyenslide");
        console.log(nutchuyenslide);
        console.log(noidungslide);
        for (var i = 0; i < nutchuyenslide.length; i++) {
            nutchuyenslide[i].onclick = function () {
                for (var j = 0; j < nutchuyenslide.length; j++) {
                    nutchuyenslide[j].classList.remove("bg-blue-400");
                }
                this.classList.add("bg-blue-400");
                // Lấy chỉ số của hiện tại và hiển thị nội dung tương ứng
                var index = Array.from(nutchuyenslide).indexOf(this);
                for (var k = 0; k < noidungslide.length; k++) {
                    noidungslide[k].classList.add("hidden");
                }
                noidungslide[index].classList.remove("hidden");
            }
        }
    }

    // Xử lý hiệu ứng hiển thị các nút của khung sản phẩm khi hover vào
    showButton();
    function showButton() {
        var khung = document.querySelectorAll(".khung");

        khung.forEach(item => {
            // Lấy tất cả các nút bên trong khung hiện tại
            var buttons = item.querySelectorAll(".nut");

            // Sự kiện khi hover vào khung
            item.addEventListener('mouseenter', () => {
                buttons.forEach(button => {
                    button.classList.remove("opacity-0"); // Hiển thị nút
                    button.classList.add("opacity-100");
                });
            });

            // Sự kiện khi rời khỏi khung
            item.addEventListener('mouseleave', () => {
                buttons.forEach(button => {
                    button.classList.remove("opacity-100"); // Ẩn nút
                    button.classList.add("opacity-0");
                });
            });
        });
    }

    // Xử lý hiệu ứng filter sắp xếp
    filter();
    function filter() {
        var sapxep = document.querySelectorAll(".sapxep");
        for (var i = 0; i < sapxep.length; i++) {
            sapxep[i].addEventListener("click", function () {
                // Xóa class 'bg-red-500' và 'text-white' khỏi tất cả các nút, thêm lại 'bg-white'
                for (var j = 0; j < sapxep.length; j++) {
                    sapxep[j].classList.remove("bg-red-500", "text-white");
                    sapxep[j].classList.add("bg-white", "text-black"); // Đảm bảo nút khác có nền trắng và chữ đen
                }
                // Thêm class 'bg-red-500' và 'text-white' cho nút được bấm
                this.classList.remove("bg-white", "text-black"); // Xóa nền trắng và chữ đen khỏi nút được bấm
                this.classList.add("bg-red-500", "text-white");
            });
        }
    }

    // Xử lý hiệu ứng phân trang sản phẩm
    pagination()
    function pagination() {
        var phantrang = document.querySelectorAll(".phantrang");
        for (var i = 0; i < phantrang.length; i++) {
            phantrang[i].addEventListener("click", function () {
                for (var j = 0; j < phantrang.length; j++) {
                    phantrang[j].classList.remove("bg-blue-500", "text-white");
                    phantrang[j].classList.add("bg-white", "text-blue-500");
                }
                this.classList.remove("bg-white", "text-blue-500");
                this.classList.add("bg-blue-500", "text-white");
            });
        }
    }

    // Xử lý hiệu ứng nút yêu thích sản phẩm
    favouriteProduct();
    function favouriteProduct() {
        var btn_tym = document.querySelectorAll(".btn_tym"); // Chọn tất cả các nút
        for (var i = 0; i < btn_tym.length; i++) {
            btn_tym[i].addEventListener("click", function () {
                var icon_tym = this.querySelector(".icon_tym"); // Lấy thẻ <i> bên trong nút được nhấn
                icon_tym.classList.toggle("fas");
                icon_tym.classList.toggle("text-red-500");
            });
        }
    }

    // Xử lý hiệu ứng hiển thị list quản lý tài khoản
    QlTaiKhoan();
    function QlTaiKhoan() {

        var qltaikhoan = document.querySelector(".qltaikhoan");
        var dsqltaikhoan = document.querySelector(".dsqltaikhoan");

        // Kiểm tra trạng thái mở/đóng
        var isOpen = false;

        qltaikhoan.addEventListener("click", function (event) {
            event.stopPropagation(); // Ngăn sự kiện lan ra ngoài khi click vào icon
            if (!isOpen) {
                qltaikhoan.classList.add("bg-red-500", "text-white", "border-white");
                dsqltaikhoan.classList.remove("hidden");
                isOpen = true;
            } else {
                qltaikhoan.classList.remove("bg-red-500", "text-white", "border-white");
                dsqltaikhoan.classList.add("hidden");
                isOpen = false;
            }
        });

        // Đóng menu khi nhấn ra ngoài
        document.addEventListener("click", function () {
            if (isOpen) {
                qltaikhoan.classList.remove("bg-red-500", "text-white", "border-white");
                dsqltaikhoan.classList.add("hidden");
                isOpen = false;
            }
        });
    }

    //Xử lý hiệu ứng quản lý đơn hàng
    tabOrder();
    function tabOrder() {
        var tabItems = document.querySelectorAll(".tab-items");
        var content = document.querySelectorAll(".content");
        for (var i = 0; i < tabItems.length; i++) {
            tabItems[i].onclick = function () {
                for (var j = 0; j < tabItems.length; j++) {
                    tabItems[j].classList.remove("border-b-2", "border-orange-500", "text-orange-600");
                }
                this.classList.add("border-b-2", "border-orange-500", "text-orange-600");
                // Lấy chỉ số của tab hiện tại và hiển thị nội dung tương ứng
                var index = Array.from(tabItems).indexOf(this);
                for (var k = 0; k < content.length; k++) {
                    content[k].classList.add("hidden");
                }
                content[index].classList.remove("hidden");
            }
        }
    }

    //Xử lý hiệu ứng hiển thị đánh giá
    tabRating();
    function tabRating() {
        var tabRatings = document.querySelectorAll(".tab_danhgia");
        var contentRating = document.querySelectorAll(".noidungdanhgia");
        for (var i = 0; i < tabRatings.length; i++) {
            tabRatings[i].onclick = function () {
                for (var j = 0; j < tabRatings.length; j++) {
                    tabRatings[j].classList.remove("border-red-500", "text-red-500");
                }
                this.classList.add("border-red-500", "text-red-500");
                // Lấy chỉ số của tab hiện tại và hiển thị nội dung tương ứng
                var index = Array.from(tabRatings).indexOf(this);
                for (var k = 0; k < contentRating.length; k++) {
                    contentRating[k].classList.add("hidden");
                }
                contentRating[index].classList.remove("hidden");
            }
        }
    }

    // Xử lý hiệu ứng tăng/giảm số lượng
    inDeProduct();
    function inDeProduct() {
        var decrease = document.querySelector(".dec");
        var increase = document.querySelector(".inc");
        var quantityElement = document.querySelector(".quantity");

        // Lấy giá trị hiện tại và chuyển đổi thành số
        let quantity = parseInt(quantityElement.value);

        decrease.addEventListener("click", function () {
            if (quantity > 1) { // Đảm bảo không giảm dưới 1
                quantity--;
                quantityElement.value = quantity; // Cập nhật giá trị trong input
            }
        });

        increase.addEventListener("click", function () {
            quantity++;
            quantityElement.value = quantity; // Cập nhật giá trị trong input
        });
    }

    // Xử lý hiệu ứng chọn ảnh trong chi tiết sản phẩm
    proClassification();
    function proClassification() {
        var anhphanloaimau = document.querySelectorAll(".anhphanloaimau"),
            nutphanloaimau = document.querySelectorAll(".nutphanloaimau"),
            anhchinh = document.querySelector(".anhchinh");
        for (var i = 0; i < nutphanloaimau.length; i++) {
            nutphanloaimau[i].onclick = function () {
                for (var j = 0; j < nutphanloaimau.length; j++) {
                    nutphanloaimau[j].classList.remove("border-red-500");
                }
                anhchinh.classList.add("hidden");
                this.classList.add("border-red-500");
                // Lấy chỉ số của tab hiện tại và hiển thị nội dung tương ứng
                var index = Array.from(nutphanloaimau).indexOf(this);
                for (var k = 0; k < anhphanloaimau.length; k++) {
                    anhphanloaimau[k].classList.add("hidden");
                }
                anhphanloaimau[index].classList.remove("hidden");
            }
        }
    }

    // Xử lý hiển thị form đánh giá
    showFormRating();
    function showFormRating() {
        var nutdanhgia = document.querySelector(".nutdanhgia");
        var thoatdanhgia = document.querySelector(".thoatdanhgia");
        var den = document.querySelector(".den");
        var formdanhgia = document.querySelector(".formdanhgia");
        nutdanhgia.onclick = function () {
            formdanhgia.classList.remove("hidden");
        }
        thoatdanhgia.onclick = function () {
            formdanhgia.classList.add("hidden");
        }
        den.onclick = function () {
            formdanhgia.classList.add("hidden");
        }
    }

    // Xử lý hiệu ứng chọn số sao trong đánh giá
    starRating();
    function starRating() {
        const stars = document.querySelectorAll('#rating .fa-star');

        for (let i = 0; i < stars.length; i++) {
            stars[i].addEventListener('click', function () {
                const ratingValue = this.getAttribute('data-value');

                // Reset màu của tất cả các sao
                for (let j = 0; j < stars.length; j++) {
                    stars[j].classList.remove('text-yellow-300');
                }

                // Đổi màu các sao dựa trên rating
                for (let j = 0; j < ratingValue; j++) {
                    stars[j].classList.add('text-yellow-300');
                }
            });
        }

    }

}, false)