import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {
    const settings = {
        dots:true,
        infinite: true,
        autoplay:true,
        speed: 1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
            breakpoint:992,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint:576,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            }  ,
        },
    ],
    };
  return (
 <Slider {...settings}>
<div className="testimonial py-4 px-3">
<p>This travel website is a gem! The intuitive interface and powerful search filters made planning my trip to a breeze. I found all the information I needed, from accommodations to local experiences, in one place. Highly recommended!.</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava01} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Chris Hemsworth</h6>
    <p>Hollywood actor,Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p> was impressed by the website's design and ease of navigation. The information presented was comprehensive and well-organized, making it easy to find what I was looking for. I particularly appreciated [specific feature, e.g., the interactive map, the detailed travel guides]. I highly recommend this website to anyone planning a trip."</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava02} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Samantha Ruth Prabhu</h6>
    <p>Actor,Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>여행 계획을 세우는데 큰 도움이 된 웹사이트입니다. 사용하기 편리한 인터페이스와 다양한 검색 옵션 덕분에 원하는 정보를 쉽게 찾을 수 있었습니다. 특히 [특정 기능, 예: 지역별 추천 여행지, 가격별 숙박 검색] 기능이 매우 유용했습니다. 추천합니다.</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava03} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Kim Taehyung</h6>
    <p>Kpop idol,Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p> 여행 계획을 세우는 데 필요한 모든 정보가 이 사이트에 잘 정리되어 있습니다. 숙박, 맛집, 액티비티 등 다양한 정보를 한눈에 볼 수 있어서 매우 편리했습니다. 특히, 지역별 추천 여행 코스가 매우 유용했습니다</p>
<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava03} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Jung Hosoek</h6>
    <p>kpop idol,Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Alias asperiores nisi quo, suscipit placeat consequuntur 
    neque, delectus culpa eaque consectetur dolore at, voluptatum ipsa! 
    Maxime, dicta.
     Dicta libero obcaecati expedita.</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava02} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Lia Franklin</h6>
    <p>Customer</p>
</div>
</div>
</div>
 </Slider>
  )
}

export default Testimonials
