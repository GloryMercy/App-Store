import './index.css'

const TabItem = props => {
  const {tabDetail, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetail

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
