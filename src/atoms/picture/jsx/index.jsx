
const Picture = ( props ) => {

    // GET PROPS
    const { source, alternative_text } = props

    return(

        <img alt={alternative_text} className="size-8" src={source} />

    )

}

export default Picture
