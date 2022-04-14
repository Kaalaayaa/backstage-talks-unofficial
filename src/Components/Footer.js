import './Footer.css';


function Footer() {

  function myfun(ele){
    let offsetTop  = document.getElementById(ele).offsetTop;
    window.scrollTo({
      top: offsetTop-100, 
      behavior: "smooth"
    });
  }

  return (
    <div className="Footer">
        <div className='left'>
            <p className='description'>Backstage Talks is a magazine of casual, but in depth dialogues on
            design and business. Our decisions shape and influence this complex world—to
            have a chance to make the right ones, we need to talk.
            </p>
            <span className='copyright'>© 2022 Published by studio Milk</span>
            <p className='pp'>Privacy Policy</p>
        </div>
        <div className='right'>
            <ul>
                <li onClick={() => myfun('issue5')}>Issue #5</li>
                <li onClick={() => myfun('issue4')}>Issue #4</li>
                <li onClick={() => myfun('issue3')}>Issue #3</li>
                <li onClick={() => myfun('issue2')}>Issue #2</li>
                <li onClick={() => myfun('issue1')}>Issue #1</li>
            </ul>
        </div>
    </div>
  );
}

export default Footer;