import '../pages.css';

export default function Footer({image, date}) {
    console.log('sad: ', date)

    return(
        <div className="footer">
            <div className="filme">
                <img src={image.posterURL} alt={image.title} id={image.id}/>
            </div>
            <div className='informacao'>
                <p>{image.title}</p>
                    {date != "" ? (
                        <p>{`${date[0].weekday} - ${date[0].horario}`}</p>
                    ) : ("")}
            </div>
            
        </div>
    );
}