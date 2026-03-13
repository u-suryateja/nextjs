export default function Input({id,placeholder,value,onChange,style,className="w-[350px] h-[40px] border-1 border-back", ...rest}){
    return(
        <div>
            <input  name="" id={id} placeholder={placeholder} value={value} onChange={onChange} className={className} style={style} {...rest}/>
        </div>
    )
}