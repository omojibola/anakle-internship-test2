import React from 'react';
import styles from './OtherReview.module.scss';
import stargroup1 from '../../assets/stargroup1.svg';
import stargroup2 from '../../assets/stargroup2.svg';
import stargroup3 from '../../assets/stargroup3.svg';
import DropDownIcon from '../../assets/Vector.svg';
import stars from '../../assets/stars.svg';

const OtherReviews = () => {
  return (
    <div style={{ display: 'flex', background: '#fafafa' }}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.heading}>
            <div className={styles.textHeading}>
              <p className={styles.title}>Others Review</p>
              <p className={styles.subTitle}>
                Here is customer review about your restaurant{' '}
              </p>
            </div>

            <div className={styles.dropDown}>
              <div>
                <select id="period">
                  <option value="latest">Latest</option>
                  <option value="last week">Last week</option>
                </select>
              </div>
            </div>
          </div>
          {/* 1 */}
          <div className={styles.reviewComponent}>
            <div className={styles.topPart}>
              <div className={styles.profileImage}></div>
              <div className={styles.profileDetails}>
                <p className={styles.profileName}>James Kowalski</p>
                <p className={styles.occupation}>Head Marketing 24 June 2020</p>
              </div>
              <div className={styles.tags}>
                <p>Excellent</p>
              </div>
            </div>
            <div className={styles.bottomPart}>
              <div className={styles.bottomPart_text}>
                <p>
                  We recently had dinner with friends at David CC and we all
                  walked away with a great experience. Good food, pleasant
                  environment, personal attention through all the evening.
                  Thanks to the team and we will be back!
                </p>
              </div>
              <div className={styles.ratingBox}>
                <p>3.5</p>
                <img src={stargroup1} />
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className={styles.reviewComponent}>
            <div className={styles.topPart}>
              <div className={styles.profileImage}></div>
              <div className={styles.profileDetails}>
                <p className={styles.profileName}>Samuel Hawkings</p>
                <p className={styles.occupation}>Head Marketing 24 June 2020</p>
              </div>
              <div style={{ display: 'flex', marginLeft: 'auto' }}>
                <div className={styles.tags} style={{ marginRight: '15px' }}>
                  <p>Excellent</p>
                </div>
                <div className={styles.tags}>
                  <p>Great</p>
                </div>
              </div>
            </div>
            <div className={styles.bottomPart}>
              <div className={styles.bottomPart_text}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim
                </p>
              </div>
              <div className={styles.ratingBox}>
                <p>4.8</p>
                <img src={stargroup1} />
              </div>
            </div>
          </div>

          {/* 3 */}

          <div className={styles.reviewComponent}>
            <div className={styles.topPart}>
              <div className={styles.profileImage}></div>
              <div className={styles.profileDetails}>
                <p className={styles.profileName}>Dicky Sitompul</p>
                <p className={styles.occupation}>Head Marketing 24 June 2020</p>
              </div>
              <div style={{ display: 'flex', marginLeft: 'auto' }}>
                <div className={styles.tags} style={{ marginRight: '15px' }}>
                  <p>Good Services</p>
                </div>
                <div className={styles.tags}>
                  <p>Excellent</p>
                </div>
              </div>
            </div>
            <div className={styles.bottomPart}>
              <div className={styles.bottomPart_text}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim
                </p>
              </div>
              <div className={styles.ratingBox}>
                <p>4.8</p>
                <img src={stargroup1} />
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className={styles.reviewComponent}>
            <div className={styles.topPart}>
              <div className={styles.profileImage}></div>
              <div className={styles.profileDetails}>
                <p className={styles.profileName}>Dracule Mihawk</p>
                <p className={styles.occupation}>Head Marketing 24 June 2020</p>
              </div>
            </div>
            <div className={styles.bottomPart}>
              <div className={styles.bottomPart_text}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim
                </p>
              </div>
              <div className={styles.ratingBox}>
                <p>2.7</p>
                <img src={stargroup2} />
              </div>
            </div>
          </div>

          {/* 5 */}

          <div className={styles.reviewComponent}>
            <div className={styles.topPart}>
              <div className={styles.profileImage}></div>
              <div className={styles.profileDetails}>
                <p className={styles.profileName}>Alecia Kree</p>
                <p className={styles.occupation}>Head Marketing 24 June 2020</p>
              </div>
              <div style={{ display: 'flex', marginLeft: 'auto' }}>
                <div className={styles.tags} style={{ marginRight: '15px' }}>
                  <p>Delicious</p>
                </div>
                <div className={styles.tags} style={{ marginRight: '15px' }}>
                  <p>Excellent</p>
                </div>
                <div className={styles.tags}>
                  <p>Good services</p>
                </div>
              </div>
            </div>
            <div className={styles.bottomPart}>
              <div className={styles.bottomPart_text}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim
                </p>
              </div>
              <div className={styles.ratingBox}>
                <p>5.0</p>
                <img src={stargroup3} />
              </div>
            </div>
          </div>
          {/* 6 */}

          <div className={styles.reviewComponent}>
            <div className={styles.topPart}>
              <div className={styles.profileImage}></div>
              <div className={styles.profileDetails}>
                <p className={styles.profileName}>Sanji Lee</p>
                <p className={styles.occupation}>Head Marketing 24 June 2020</p>
              </div>

              <div className={styles.tags}>
                <p>Excellent</p>
              </div>
            </div>
            <div className={styles.bottomPart}>
              <div className={styles.bottomPart_text}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim
                </p>
              </div>
              <div className={styles.ratingBox}>
                <p>4.5</p>
                <img src={stargroup1} />
              </div>
            </div>
          </div>
          <div style={{ marginTop: '47px' }}>
            <button className={styles.button}>
              Load More
              <img src={DropDownIcon} />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.containerTwo}>
        <div style={{ paddingLeft: 20 }}>
          <div className={styles.toptext}>
            <p>🔥 Newest</p>
          </div>
          <div className={styles.profile}>
            <div className={styles.profileAvatar}></div>
            <div className={styles.profileTexts}>
              <p>
                <b> James Kowalski</b>
              </p>
              <p className={styles.secondText}>Head Marketing</p>
            </div>
          </div>
          <div className={styles.reviewTexts}>
            <p>
              This was not just great cooking but exceptional cooking using only
              the best ingredients.
            </p>
            <p>
              Fast, professional and friendly service, we ordered the six course
              tasting menu and every dish was spectacular
            </p>
          </div>

          <div className={styles.secondTags}>
            <div className={styles.tagTexts}>Excellent</div>
            <div className={styles.tagTexts}>Good Services</div>
          </div>
          <div className={styles.secondTags}>
            <div className={styles.tagTexts}>Recommended</div>
            <div className={styles.tagTexts}>Satisfying</div>
          </div>
        </div>

        <div className={styles.orangeBox}>
          <p>3.5</p>
          <img src={stars} />
        </div>
      </div>
    </div>
  );
};

export default OtherReviews;
