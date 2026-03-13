export default function Button({name="enter button",onClick,...rest},className="",style){

    return(
        <div>
            <button className={className} style={style} onClick={onClick} {...rest}>{name}</button>
        </div>
    )
}