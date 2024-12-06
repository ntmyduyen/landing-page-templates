import JsonData from '../content.json'


export const Footer = (props) => {
  
  return (
    <div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            {JsonData.copyRight}
          </p>
        </div>
      </div>
    </div>
  )
}
