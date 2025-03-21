import { useState } from 'react';
import './style.css';

function Card() {

  const [likes, setLikes] = useState(0);

  function handleLikes() {
    setLikes(likes + 1);
  }

  const [dislikes, setDislikes] = useState(0);

  function handleDislike() {
    setDislikes(dislikes + 1);
  }

  const [share, setShare] = useState(0);

  function handleShare() {
    setShare(share + 1);
  }

  return (
    <div>
      <div className="box1 sm:w-auto">
        <div className="image">
          <img src="dev.jpg" alt="" />
        </div>

        <div className="info">
          <p className="fs-4 fw-bold">Software Developer</p>
          {/* <p className='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ex fugiat totam cumque officia ducimus aliquam natus nihil neque mollitia?</p> */}
        </div>

        <p className='fs-5 fw-semibold text-center'>Social Links</p>
        <div className="social d-flex fs-3 justify-content-around align-items-center">
          <div className="linkedin">
            <i class="bi bi-linkedin"></i>
          </div>

          <div className="github">
            <i class="bi bi-github"></i>
          </div>

          <div className="wp">
            <i class="bi bi-whatsapp"></i>

          </div>

          <div className="portfolio">
            <i class="bi bi-person-fill"></i>

          </div>

        </div>
        <hr />

        <p className='fs-5 fw-semibold text-center'>Social Reactions</p>
        <div className="reactions d-flex fs-2 justify-content-around">
          <div className="like">
            <button className='position-relative' onClick={handleLikes}>
              <i class="bi bi-heart-fill"></i>
              <span className='position-absolute top-10 ms-2 start-100 translate-middle badge rounded-pill text-bg-danger fs-6'>+{likes}</span>
            </button>

          </div>

          <div className="dislike">
            <button className='position-relative' onClick={handleDislike}>
              <i class="bi bi-hand-thumbs-down-fill"></i>
              <span className='position-absolute top-10 ms-2 start-100 translate-middle badge rounded-pill text-bg-danger fs-6'>+{dislikes}</span>
            </button>
          </div>

          <div className="share">
            <button className='position-relative' onClick={handleShare}>
              <i class="bi bi-send-fill"></i>
              <span className='position-absolute top-10 ms-2 start-100 translate-middle badge rounded-pill text-bg-danger fs-6'>+{share}</span>
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
