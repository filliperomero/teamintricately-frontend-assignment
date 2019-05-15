<template>
  <footer>
    <div class="footer">
      <div>
        <div class="left-footer">
          <a class="btn" href="">Pricing</a>
          <span>|</span>
          <a class="btn" href="">Blog</a>
          <span>|</span>
          <a class="btn" href="">Webinars</a>
          <span>|</span>
          <a class="btn" href="">Events</a>
          <span>|</span>
          <a class="btn" href="">Help Center</a>
        </div>
        <div class="copyright">
          <p>@ Copyright 2017, Intricately, Inc. All rights Reserved</p>
        </div>
      </div>
      <div>
        <div>
          <a class="btn" href="">Terms and Conditions</a>
          <span>|</span>
          <a class="btn" href="">Privacy Policy</a>
        </div>
        <div class="social_media">
          <a href="http://www.linkedin.com" target="_blanket"><img src="../images/linkedin.svg" alt="Chrome"></a>
          <a href="http://www.facebook.com" target="_blanket"><img src="../images/facebook.svg" alt="Chrome"></a>
          <a href="http://www.twitter.com" target="_blanket"><img src="../images/twitter.svg" alt="Chrome"></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>
  footer {
    background-color: #F3F3F3;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1050px;
  }

  span {
    color: #646F9E;
  }

  .btn {
    color: #646F9E;
    border: none;
    background-color: transparent;
    font-size: .80rem;
  }

  .btn:hover {
    cursor: pointer;
  }

  .left-footer {
    margin: 20px 0 20px 0;
  }

  .copyright {
    color: #AAA;
    font-size: .75rem;
    margin: 0 0 30px 0;
  }

  img {
    width: 25px;
  }

  .social_media {
    display: flex;
  }

  .social_media a {
    margin-top: 12px;
  }
</style>
