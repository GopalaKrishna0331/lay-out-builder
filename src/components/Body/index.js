import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-container">
              <h1 className="left-head">Left Navbar Menu</h1>
              <ul className="items">
                <li className="items-element">Item 1</li>
                <li className="items-element">Item 2</li>
                <li className="items-element">Item 3</li>
                <li className="items-element">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-container">
              <h1 className="content-head">Content</h1>
              <p className="content-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-container">
              <h1 className="right-head">Right Navbar</h1>
              <div className="box-container">
                <div className="box">
                  <p className="box-name">AD 1</p>
                </div>
                <div className="box">
                  <p className="box-name">AD 2</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
