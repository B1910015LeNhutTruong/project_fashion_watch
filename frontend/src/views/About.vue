<template>
<!-- template đã check     -->
    <title>Giới thiệu</title>
    <div id="breadcrumb_background">
        <p id="title_breadcrumb" class="text-center">ĐỒNG HỒ ĐEO TAY CHÍNH HÃNG</p>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item"><router-link to="/">Trang chủ</router-link></li>&nbsp;
                <li class="breadcrumb-item active" aria-current="page"
                    style="color: #1097cf; font-weight: 600; font-size: 16px;">&nbsp;Đồng hồ đeo tay chính hãng</li>
            </ol>
        </nav>
    </div>
    <div class="container">
        <h3 id="title_about">GIỚI THIỆU</h3>
        <p>Đồng hồ - một sản phẩm phụ kiện không thể thiếu, một người bạn đồng hành để luôn sát cánh và là nguồn cảm hứng cho những người trẻ Việt trên hành trình chạm đến của giấc mơ của bản thân.</p>
        <h5>SỨ MỆNH</h5>
        <p>"Tệp khách hàng mà Chastain Watch hướng tới mọi lưới tuổi có đam mê với đồng hồ. Với những sản phẩm chất lượng, chúng tôi mang đến những sản phẩm, những biểu tượng tinh thần đầy cảm hứng để giúp họ thể hiện bản thân, để tự tin khám phá những tiềm năng và giá trị của chính bản thân mình."</p>
        <h5>SẢN PHẨM</h5>
        <p>Với phương châm “Bắt đầu bằng khách hàng, kết thúc bằng khách hàng”, mỗi sản phẩm của Chastain được nghiên cứu dựa trên nhu cầu mà khách hàng mong muốn, được thiết kế bằng trái tim đầy nhiệt huyết, khát khao và khối óc đầy sáng tạo của đội ngũ. Chastain khẳng định rằng chúng ta có khả năng phát triển những sản phẩm vươn ra tầm thế giới.</p>
</div>
</template>

<style scoped>
/* css đã check */
#breadcrumb_background{
    background-image: url("../assets/img/breadcrum_bg1.webp");
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 203px;
    padding: 60px 0 80px 0;
    margin-bottom: 30px;
}

#title_breadcrumb{
    font-weight: 800;
    color: #fff;
    font-size: 25px;
}

.breadcrumb-item + .breadcrumb-item::before{
    content: ">" !important;
    color: #fff;
 }

#breadcrumb_background a{
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
}

#breadcrumb_background a:hover{
    color: #1097cf;
}

#title_about{
    font-weight: 700;
    border-bottom: 2px solid #1097cf;
    padding-bottom: 10px;
    margin-bottom: 30px;
}
</style>