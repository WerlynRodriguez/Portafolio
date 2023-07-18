import Icon from "../Icon";
import './styles.css'

/** This component is used to display a card with a title, a description, links and an image */
export default function Card({ name, desc, skill, url }: {
    name: string
    desc: string
    skill: string[] | undefined
    url: { [key: string]: string | undefined }
}) {
    return (
        <article className="card">
            <h3> {name} </h3> <br/>
            <p> {desc}. </p> <br/>
            
            <div className="card_skills">
                {skill?.map
                ((skill, index) =>  <Icon key={`skillCard${index}`} name={skill} size={1} title={skill}/> )}                    
            </div>

            <div className="card_url">
                {Object.keys(url || {}).map((key, index) => (
                    <a 
                        key={`urlCard${index}`}
                        className="button" 
                        href={url[key]} 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <Icon name={key} size={1}/> {key}
                    </a>
                ))}
            </div>
        </article>
    )
}