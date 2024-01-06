import Header from '../components/Header.tsx'
import HeaderImage from '../images/header__bg2.png'
import StoryImage from '../images/about__story2.png'
import VisionImage from '../images/brands.png'
import AboutImage from '../images/sewing.png'
import './about.css'

const About = () => {
  return (
    <>
     <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum possimus impedit reiciendis amet ad at, consectetur quaerat soluta? Esse itaque dignissimos dolore commodi inventore quis illo, soluta facilis velit.
    </Header> 
    <section className="about-story">
<div className="container about__story-container">
  <div className="about__first-image">
    <img src={StoryImage} alt="Our Story Image" />
  </div>
  <div className='about__first__art-content'>
    <h1>Our Story</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi dolores inventore harum cum numquam, delectus odio recusandae quae, accusantium quidem laborum adipisci cumque magni explicabo qui hic eos repellat asperiores?
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae eos beatae, necessitatibus sequi nostrum assumenda, consectetur sit laudantium tempore ullam, a error voluptates quaerat fugiat earum fuga magni consequuntur nisi!
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem mollitia labore animi doloribus totam tempora quis inventore culpa numquam corrupti deleniti impedit error a aperiam, suscipit repellendus. Mollitia, velit modi!
    </p>
  </div>
</div>
</section>

<section className="about__vision">
<div className="about__second-image">
    <img src={VisionImage} alt="Our Vision Image" />
  </div>
<div className="container about__vision-container">
  <div className='about__second__art-content'>
    <h3>Our Story</h3>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi dolores inventore harum cum numquam, delectus odio recusandae quae, accusantium quidem laborum adipisci cumque magni explicabo qui hic eos repellat asperiores?
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae eos beatae, necessitatibus sequi nostrum assumenda, consectetur sit laudantium tempore ullam, a error voluptates quaerat fugiat earum fuga magni consequuntur nisi!
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem mollitia labore animi doloribus totam tempora quis inventore culpa numquam corrupti deleniti impedit error a aperiam, suscipit repellendus. Mollitia, velit modi!
    </p>
  </div>
</div>
</section>

<section className="about-story">
<div className="container about__story-container">
  <div className="about__third-image">
    <img src={AboutImage} alt="Our Story Image" />
  </div>
  <div className='about__third__art-content'>
    <h1>Our Story</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi dolores inventore harum cum numquam, delectus odio recusandae quae, accusantium quidem laborum adipisci cumque magni explicabo qui hic eos repellat asperiores?
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae eos beatae, necessitatibus sequi nostrum assumenda, consectetur sit laudantium tempore ullam, a error voluptates quaerat fugiat earum fuga magni consequuntur nisi!
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem mollitia labore animi doloribus totam tempora quis inventore culpa numquam corrupti deleniti impedit error a aperiam, suscipit repellendus. Mollitia, velit modi!
    </p>
  </div>
</div>
</section>
</>
  )
}

export default About