import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onchangeCheckbox = event => {
        onToggleShowContent(event.target.checked)
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.checked)
      }

      return (
        <div className="control-container">
          <h1 className="control-head">Layout</h1>
          <div className="label-element">
            <input
              type="checkbox"
              id="Content"
              onChange={onchangeCheckbox}
              checked={showContent}
            />
            <label htmlFor="Content">Content</label>
          </div>
          <div className="label-element">
            <input
              type="checkbox"
              id="LeftNavbar"
              onChange={onChangeLeftNavbar}
              checked={showLeftNavbar}
            />
            <label htmlFor="LeftNavbar">Left Navbar</label>
          </div>
          <div className="label-element">
            <input
              type="checkbox"
              id="RightNavbar"
              onChange={onChangeRightNavbar}
              checked={showRightNavbar}
            />
            <label htmlFor="RightNavbar">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
