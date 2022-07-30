import '../pages.css';

export default function Footer({image}) {

    return(
        <div className="footer">
            <div className="filme">
                <img src={image.posterURL} alt={image.title} id={image.id}/>
            </div>
            <p>{image.title}</p>
        </div>
    );
}