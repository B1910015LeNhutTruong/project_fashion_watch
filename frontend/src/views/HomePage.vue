<script>
import Header from "../components/Header.vue";
export default {
    components: {
        Header,
    }
}
</script>

<template>
    <title>Trang chủ</title>
    <div>
        <img src="../assets/img/home/banner-carousel-1.png" class="d-block w-100" alt="">
    </div>
    <div class="container mt-4">
        <div class="row">
            <div class="mb-4 col-lg-4 col-sm-6 banner_info_relative_home">
                <img class="w-100" src="../assets/img/home/banner_1.png" alt="">
                <div class="banner_info_absolute_home">
                    <p>ĐỒNG HỒ ĐEO TAY</p>
                    <a href="">MUA NGAY</a>
                </div>
            </div>
            <div class="mb-4 col-lg-4 col-sm-6 banner_info_relative_home">
                <img class="w-100" src="../assets/img/home/banner_2.png" alt="">
                <div class="banner_info_absolute_home">
                    <p>ĐỒNG HỒ ĐEO TAY</p>
                    <a href="">MUA NGAY</a>
                </div>
            </div>
            <div class="mb-4 col-lg-4 col-sm-6 banner_info_relative_home">
                <img class="w-100" src="../assets/img/home/banner_2.png" alt="">
                <div class="banner_info_absolute_home">
                    <p>ĐỒNG HỒ ĐEO TAY</p>
                    <a href="">MUA NGAY</a>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <h4 class="text-center title_section_home"><span>SẢN PHẨM NỔI BẬT</span></h4>
        <div class="row mt-5" id = "featured_products_home">
            <div class="col-lg-4 col-6 featured_products_item_home">
                <a href=""><img src="https://bizweb.dktcdn.net/100/438/171/products/sp10-c071025e-52d6-4c86-8e35-21f600ee136b.jpg?v=1632724245347" alt=""></a>
                <a href="" class="d-block text-center name_of_featured_products_home">Black Link</a>
                <p class="text-center">3.200.000</p>
            </div>
            <div class="col-lg-4 col-6 featured_products_item_home">
                <a href=""><img src="https://bizweb.dktcdn.net/100/438/171/products/sp1.jpg?v=1632716609323" alt=""></a>
                <a href="" class="d-block text-center name_of_featured_products_home">Orient Champion Gold</a>
                <p class="text-center">3.200.000</p>
            </div>
            <div class="col-lg-4 col-6 featured_products_item_home">
                <a href=""><img src="https://bizweb.dktcdn.net/100/438/171/products/sp3.jpg?v=1632717292173" alt=""></a>
                <a href="" class="d-block text-center name_of_featured_products_home">Hublot Axiom</a>
                <p class="text-center">3.200.000</p>
            </div>
            <div class="col-lg-4 col-6 featured_products_item_home">
                <a href=""><img src="https://bizweb.dktcdn.net/100/438/171/products/sp19.jpg?v=1632716413480" alt=""></a>
                <a href="" class="d-block text-center name_of_featured_products_home">MVMT Coronada Blanc</a>
                <p class="text-center">3.200.000</p>
            </div>
            <div class="col-lg-4 col-6 featured_products_item_home">
                <a href=""><img src="https://bizweb.dktcdn.net/100/438/171/products/sp15.jpg?v=1632715884937" alt=""></a>
                <a href="" class="d-block text-center name_of_featured_products_home">Rolex S1</a>
                <p class="text-center">3.200.000</p>
            </div>
            <div class="col-lg-4 col-6 featured_products_item_home">
                <a href=""><img src="https://bizweb.dktcdn.net/100/438/171/products/sp14.jpg?v=1632715768917" alt=""></a>
                <a href="" class="d-block text-center name_of_featured_products_home">Orient Aubrey</a>
                <p class="text-center">3.200.000</p>
            </div>
        </div>
    </div>

    <div style="background-color: #f5f5f5; padding: 50px 0;" class="container-fluid">
        <h4 class="text-center title_section_home"><span>FLASH SALE HÀNG TUẦN</span></h4>
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-5">
                    <img id="img_flash_sale_home" class="d-block" src="https://bizweb.dktcdn.net/100/438/171/products/sp10-c071025e-52d6-4c86-8e35-21f600ee136b.jpg?v=1632724245347" alt="">
                </div>
                <div style="padding: 30px" class="col-md-5">
                    <h3 style="font-weight: 600;">MVMT Black Link</h3>
                    <p><span style="font-size: 22px; color: #1097cf; font-weight: 600; margin-right: 20px;">3.200.000đ</span><span style="text-decoration: line-through;">4.500.000đ</span></p>
                    <p class="mt-5">Đồng hồ MVMT Black Link dòng Classic với thiết kế tối giản tinh tế cho các quý ông hiện đại. Nhập khẩu chính hãng từ US. Free Ship toàn quốc!</p>
                    <div id="buy_btn_flash_sale_home" class="text-center d-flex justify-content-center align-items-center">MUA NGAY</div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="container mt-5">
        <h4 class="text-center title_section_home"><span>SẢN PHẨM MỚI VỀ</span></h4>
        <div class="row mt-5" id="new_product_home">
            <div class="col-6 col-md-3 new_product_item_home">
                <a class="d-block" href=""><img src="https://bizweb.dktcdn.net/100/438/171/products/sp17.jpg?v=1632716177640" alt=""></a>
                <a href="" class="d-block text-center mt-3 name_of_new_product_home">MVMT Rodeo</a>
                <p class="text-center price_of_new_product_home">3.500.000đ</p>
            </div>
            <div class="col-6 col-md-3 new_product_item_home">
                <a class="d-block" href=""><img src="https://bizweb.dktcdn.net/100/438/171/products/sp23.jpg?v=1632726505467" alt=""></a>
                <a href="" class="d-block text-center mt-3 name_of_new_product_home">MVMT Twist Cuff</a>
                <p class="text-center price_of_new_product_home">2.400.000đ</p>
            </div>
            <div class="col-6 col-md-3 new_product_item_home">
                <a class="d-block" href=""><img src="https://bizweb.dktcdn.net/100/438/171/products/sp12.jpg?v=1632715269983" alt=""></a>
                <a href="" class="d-block text-center mt-3 name_of_new_product_home">Daniel Wellington Sherry</a>
                <p class="text-center price_of_new_product_home">3.600.000đ</p>
            </div>
            <div class="col-6 col-md-3 new_product_item_home">
                <a class="d-block" href=""><img src="https://bizweb.dktcdn.net/100/438/171/products/sp20.jpg?v=1632725889447" alt=""></a>
                <a href="" class="d-block text-center mt-3 name_of_new_product_home">MVMT Origin Bracelet</a>
                <p class="text-center price_of_new_product_home">2.800.000đ</p>
            </div>      
        </div>
    </div>

    <div class="container mt-4">
        <h4 class="text-center title_section_home"><span>TIN MỚI NHẤT</span></h4>
        <div class="row mt-5">
            <div class="col-md-4">
                <a class="d-block" href=""><img class="illustration_news" src="../assets/img/news/t2.webp" alt=""></a>
                <h5><a href="" class="link_news">Cách phối dây da đơn giản mà cực kỳ hiệu quả</a></h5>
                <div>
                    <span class="watch_news">Watch</span>&nbsp;&nbsp;&nbsp;
                    <span>5/3/2023</span>
                </div>
                <div class="summary_content_news">
                    Phối màu đồng bộ với mặt đồng hồ hoặc phù hợp với một chi tiết nhỏ của đồng hồ Hiện nay trên thị trường có rất n...
                </div>
            </div>
            <div class="col-md-4">
                <a class="d-block" href=""><img class="illustration_news" src="../assets/img/news/t3.webp" alt=""></a>
                <h5><a href="" class="link_news">Hướng dẫn cách lên dây cót đồng hồ cơ đúng cách</a></h5>
                <div>
                    <span class="watch_news">Watch</span>&nbsp;&nbsp;&nbsp;
                    <span>4/3/2023</span>
                </div>
                <div class="summary_content_news">
                    Phân loại đồng hồ dựa trên cách lên dây cót Có 2 loại đồng hồ cơ: Đồng hồ cơ lên dây cót bằng tay (Hand winding)...                    
                </div>
            </div>
            <div class="col-md-4">
                <a class="d-block" href=""><img class="illustration_news" src="../assets/img/news/t4.webp" alt=""></a>
                <h5><a href="" class="link_news">Mẹo nhỏ giúp bạn bảo quản và sử dụng đồng hồ đeo tay đúng cách</a></h5>
                <div>
                    <span class="watch_news">Watch</span>&nbsp;&nbsp;&nbsp;
                    <span>1/2/2023</span>
                </div>
                <div class="summary_content_news">
                    Để ý giới hạn chịu nước của đồng hồ Mỗi chiếc đồng hồ đều có giới hạn chịu nước khác nhau được ghi chú trên mặ...                    
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

*{
    font-family: 'Montserrat', sans-serif;
}

.banner_info_relative_home {
    position: relative;
}

.banner_info_absolute_home {
    position: absolute;
    top: 80px;
    left: 50px;
}

.banner_info_absolute_home p {
    color: #fff;
    font-weight: 600;
    font-size: 15px;
}

.banner_info_absolute_home a{
    text-decoration: none;
}

.title_section_home{
    font-weight: 800;
    color: black;
    font-size: 30px;
    position: relative;
}

.featured_products_item_home img{
    width: 70%;
    margin: 0 auto;
    display: block;
}

.name_of_featured_products_home{
    text-decoration: none;
    color: black;
    font-weight: 600;
}

.title_section_home span::before {
    content: "";
    position: absolute;
    width: 180px;
    height: 3px;
    left: 44%;
    top: 50px;
    background: #1097cf;
}

#img_flash_sale_home{
    width: 90%;
    margin: 0 auto;
}

#buy_btn_flash_sale_home{
    width: 150px;
    height: 50px;
    border: 1px solid #1097cf;
}

.new_product_item_home img{
    width: 80%;
    margin: 0 auto;
    display: block;
}

.name_of_new_product_home{
    text-decoration: none;
    font-weight: 600;
    color: black;
}

#big_illustration_news, .illustration_news{
    max-width: 100%;
    max-height: 100%;
    width: auto;
}

.illustration_news{
    margin-bottom: 20px;
}

.link_news{
    text-decoration: none;
    font-size: 18px;
    font-weight: 800;
    color: black;
}

.link_news:hover{
    color: #1097cf;
}

.watch_news{
    padding:5px;
    background-color: #1097cf;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
}

.summary_content_news{
    margin-top: 15px;
}
</style>