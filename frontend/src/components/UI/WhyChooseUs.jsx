import './WhyChooseUs.css'

 const WhyChooseUs = () => {
  return (
<div className="why-choose-us">
  <div className="feature-card  discount-card">
    <div className="feature-icon">
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Capacitor</title><path d="M24 3.7l-5.766 5.766 5.725 5.736-3.713 3.712L5.073 3.742 8.786.03l5.736 5.726L20.284 0 24 3.7zM.029 8.785l3.713-3.713 15.173 15.173-3.713 3.714-5.732-5.726L3.7 24 0 20.285l5.754-5.764L.029 8.785z"/></svg>.
    </div>

    <div className="feature-content">
      <h2>Get 10% Off</h2>
      <p>On your first order</p>
      <button className="feature-btn">Use Code: WELCOME10</button>
    </div>
  </div>

  <div className="feature-card shipping-card">
    <div className="feature-icon">
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" > <title>AnyDesk</title> <path d="M8.322 3.677L0 12l8.322 8.323L16.645 12zm7.371.01l-1.849 1.85 6.49 6.456-6.49 6.49 1.85 1.817L24 11.993Z" /> </svg>
    </div>

    <div className="feature-content">
      <h2>Free Shipping</h2>
      <p>On Orders Over ₹499</p>
      <button className="feature-btn">Shop Now</button>
    </div>
  </div>

  <div className="feature-card student-card">
    <div className="feature-icon">
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Inkscape</title><path d="M7.666 14.871c.237.147 3.818.875 4.693 1.02.303.064.088.376-.33.587-.943.251-5.517-1.607-4.363-1.607zm5.647-13.264l3.505 3.56c.333.34.328.998.142 1.187l-1.74-1.392-.342 2.061-1.455-.767-2.328 1.47-.771-3.1L9.073 6.79H7.16c-.78 0-.871-.99-.163-1.698 1.237-1.335 2.657-2.696 3.429-3.485.776-.793 2.127-.77 2.887 0zM9.786.97l-8.86 9.066c-2.993 3.707 2.038 3.276 4.194 4.343.774.791-2.965 1.375-2.191 2.166.773.791 4.678 1.524 5.453 2.314.773.791-1.584 1.63-.81 2.42.773.792 2.563.042 2.898 1.868.238 1.304 3.224.56 4.684-.508.774-.791-1.48-.717-.706-1.508 1.923-1.967 3.715-.714 4.373-2.686.325-.974-2.832-1.501-2.057-2.292 2.226-1.3 9.919-2.146 6.268-5.796L13.85.97c-1.123-1.078-2.998-1.09-4.063 0zm10.177 17.475c0 .45 3.314.745 3.314-.106-.472-1.366-2.922-1.274-3.314.106zm-14.928 2.39c.784.679 1.997-.169 2.36-1.116-.76-1.01-3.607.037-2.36 1.116zm14.512-1.466c-1.011.908.114 1.828 1.111 1.242.222-.225-.006-1.016-1.11-1.242Z"/></svg>
    </div>

    <div className="feature-content">
      <h2>Student Discount</h2>
      <p>Extra 15% off with valid ID</p>
      <button className="feature-btn">Verify Now</button>
    </div>
  </div>
</div>
  );
};


export default WhyChooseUs