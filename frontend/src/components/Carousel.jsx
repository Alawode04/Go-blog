
import Carousel from 'react-bootstrap/Carousel';
 

function CarouselCom() {
  return (
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://plus.unsplash.com/premium_photo-1661775756810-82dbd209fc95?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZSUyMGhlYWRlcnxlbnwwfHwwfHx8MA%3D%3D"
        alt="First slide"
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS89yzylHajrCWkDDfrkBqwtP8SBKTNT3AB6NdiCuHF3cQSPUDSLF3m0sg13JJXUu7-F0&usqp=CAU"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://img.freepik.com/premium-photo/online-learning-design-concept-top-view-student-table-with-tablet-headphone-stationeries-blue-table-background_315337-5800.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}

 

export default CarouselCom