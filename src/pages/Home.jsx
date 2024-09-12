import React from 'react'
import "./Home.css"


function home() {
  return (
    <div className='react'>
   <header>
      <div class="header-div">
        <nav class="nav-container">
          <h3>Fitness</h3>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Service</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">About</a></li>
          </ul>
          <i class="fa-solid fa-bars"></i>
        </nav>
        <div class="banner-container">
          <div class="banner-info">
            <h3>Get body in <br /><span>shape</span> & stay healthy</h3>
            <p class="p-primary">
              A huge selection of health and fitness content, healthy recipes
              and transformation stories to help you get fit and stay fit!
            </p>
            <div class="btn-div">
              <button class="btn-primary">Join Club Now!</button>
              <button class="btn-primary download-btn">Download App</button>
            </div>
          </div>
          <div class="banner-img-div">
            <img src="images/Images2.png" alt="" />
            <p></p>
            <div class="icon-div">
              <div class="play-btn">
                <img src="images/play-btn.png" alt="" />
              </div>
              <p class="video">350+<br /><span>Video Tutorial</span></p>
            </div>
            <div class="icon-div-2">
              <h3>500+</h3>
              <p>Free workout video</p>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* <!-- Header Section End -->

    <!-- Habit Section Start --> */}
    <section>
      <div class="habit-div">
        <h2>Change Your Habits</h2>
        <p class="p-primary">
          We believe fitness should be accessible to everyone, everywhere,
          regardless of income or access to a gym.
        </p>
      </div>
      <div class="habit-container">
        <div class="habit-card">
          <img src="images/image 3.png" alt="" />
          <h3>Movement</h3>
          <p>We believe fitness should be accessible to everyone</p>
        </div>
        <div class="habit-card">
          <img src="images/image 2.png" alt="" />
          <h3>Time</h3>
          <p>You have to manage our time everyday for fitness</p>
        </div>
        <div class="habit-card">
          <img src="images/image 4.png" alt="" />
          <h3>Practice</h3>
          <p>You have to practice excersice everyday</p>
        </div>
        <div class="habit-card">
          <img src="images/image 5.png" alt="" />
          <h3>Weight Loss</h3>
          <p>You have to loos weight according your health</p>
        </div>
      </div>
    </section>
    {/* <!-- Habit Section End -->

    <!-- Run Section Start --> */}
    <section class="run-section">
      <div class="run">
        <h3>Run an Extra <br />Mile Easily</h3>
        <p>
          You should run everyday at leasr one hour for your body fit. If you do
          this everyday you feel fresh every time. Please keep your track of run
          everydaay
        </p>
        <button class="btn-primary btn">Join Now</button>
      </div>
      <div>
        <img class="run-img" src="images/run.jpg" alt="" />
      </div>
    </section>
    {/* <!-- Run Section End -->

    <!-- BMI Section Start --> */}
    <section>
      <div class="bmi-title">
        <h2>BMI Calculator</h2>
        <p>
          Here a calculator which can help you to know about your weight status
        </p>
      </div>
      <div class="bmi-div">
        <div class="bmi-container">
          <div class="table-container">
            <h3>BMI Calculator Chart</h3>
            <table class="table">
              <tr>
                <td class="th">BMI</td>
                <td class="th">Weight Status</td>
              </tr>
              <tr>
                <td>Below 18.5</td>
                <td>Underweight</td>
              </tr>
              <tr>
                <td>18.5 - 24.9</td>
                <td>Healthy</td>
              </tr>
              <tr>
                <td>25.0 - 29.9</td>
                <td>Overweight</td>
              </tr>
              <tr>
                <td>30.0 - and Over</td>
                <td>Obese</td>
              </tr>
            </table>
          </div>
          <div class="form-container">
            <h3>Calculate Your BMI</h3>
            <p>
              Please give your Information in the bellow form and see the
              calculation of BMI
            </p>
            <form class="" action="">
              <input class="input-box" type="number" placeholder="Height/cm" />
              <input class="input-box" type="number" placeholder="weight/kg" />
              <input class="input-box" type="number" placeholder="age" />
              <select class="input-box" name="" id="">
                <option value="">Sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <select class="input-box full-width" name="" id="">
                <option value="">Select an activity factor</option>
                <option value="Light Active">Light Active</option>
                <option value="Moderate Active">Moderate Active</option>
                <option value="Very Active">Very Active</option>
              </select>
            </form>
            <button class="btn-primary calc-btn">Calculate</button>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- BMI Section Start -->

    <!-- Team Section Start --> */}
    <section>
      <div class="team-title">
        <h3>Meet Our Team</h3>
        <p>
          We have a well trained instructor for the service of your health. They
          can provide best support for you
        </p>
      </div>
      <div class="team-card-div">
        <div class="trainer-card hide-card">
          <img class="trainer-ing" src="images/trainer1.png" alt="" />
          <div class="trainer-info">
            <h2>Jerome Bell</h2>
            <p>Trainer</p>
          </div>
        </div>
        <div class="trainer-card">
          <img class="trainer-ing" src="images/trainer2.png" alt="" />
          <div class="trainer-info">
            <h2>Cameron Williumaon</h2>
            <p>Trainer</p>
          </div>
        </div>
        <div class="trainer-card">
          <img class="trainer-ing" src="images/trainer3.png" alt="" />
          <div class="trainer-info">
            <h2>Darrel Steward</h2>
            <p>Trainer</p>
          </div>
        </div>
        <div class="trainer-card hide-card">
          <img class="trainer-ing" src="images/trainer4.png" alt="" />
          <div class="trainer-info">
            <h2>Dianne Russell</h2>
            <p>Trainer</p>
          </div>
        </div>
        <div class="trainer-card">
          <img class="trainer-ing" src="images/trainer5.png" alt="" />
          <div class="trainer-info">
            <h2>Cody Fisher</h2>
            <p>Trainer</p>
          </div>
        </div>
        <div class="trainer-card">
          <img class="trainer-ing" src="images/trainer6.png" alt="" />
          <div class="trainer-info">
            <h2>Theresa Webb</h2>
            <p>Trainer</p>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Team Section End --> */}

    <section class="activity-section">
      <div class="team-title">
        <h3>Our Activities</h3>
        <p>
          we fell hapy to share our Activities about our gym. Please see the
          album for our activities.
        </p>
      </div>
      <div class="activity-div">
        <img class="activity-img" src="images/1.jpeg" alt="" />
        <img class="activity-img" src="images/2.jpeg" alt="" />
        <img class="activity-img" src="images/3.jpeg" alt="" />
        <img class="activity-img" src="images/4.jpeg" alt="" />
        <img class="activity-img" src="images/5.jpeg" alt="" />
        <img class="activity-img" src="images/6.jpeg" alt="" />
        <img class="activity-img" src="images/7.jpeg" alt="" />
        <img class="activity-img" src="images/8.jpeg" alt="" />
        <img class="activity-img" src="images/9.jpeg" alt="" />
        <img class="activity-img" src="images/10.jpeg" alt="" />
        <img class="activity-img" src="images/11.jpeg" alt="" />
        <img class="activity-img" src="images/12.jpeg" alt="" />
      </div>
    </section>
    {/* <!-- Footer Section Start --> */}
    <section class="footer-container">
      <div class="footer-div">
        <div class="footer-left">
          <h3>Fitness</h3>
          <p>
            Fitness of the body is most valuable of our life. Everybody should
            take care of their body. that's make our life happier.
          </p>
        </div>
        <div class="get-started">
          <h2>Get Started</h2>
          <ul>
            <li>Service</li>
            <li>Contact Us</li>
            <li>Affiliate Program</li>
            <li>About Us</li>
          </ul>
        </div>
        <div class="get-started">
          <h2>Get Started</h2>
          <ul>
            <li>Fitness</li>
            <li>Platform</li>
            <li>Workout Libary</li>
            <li>App Design</li>
          </ul>
        </div>
      </div>
      <hr />
      <p class="right">All right reserved @ Fitness 2024</p>
    </section>
    {/* <!-- Footer Section End --> */}

    </div>
  )
}

export default home