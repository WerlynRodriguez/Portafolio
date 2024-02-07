import { useCallback, useEffect, useRef, useState } from "react"
import LiquidShapes from "./components/LiquidShapes"
import ShowCaseStrings from "./components/ShowCaseStrings"
import { getData, lngs, tr } from "./i18n"

import Klotski from "./components/Klotski"

import logo from './assets/logo.svg'

import Tag from "./components/Tag"
import Card from "./components/Card"
import Button from "./components/Button"
import { useTranslation } from "react-i18next"
import Dropdown from "./components/Dropdown"

import { ILang } from "./components/Icon"

import urlData from './urlData'

import './App.css'

const countEaster = 5
const getUrl = (file: string, folder = '') => `${urlData}myData${folder}/${file}.json`

export default function App() {
    const  { i18n } = useTranslation()

    const [loading, setLoading] = useState(true)
    const loadDialog = useRef<HTMLDialogElement>(null)

    const [shapeCount, setShapeCount] = useState(1)
    const [easterStatus, setEasterStatus] = useState(Array(countEaster).fill(false))

    const [allSkills, setAllSkills] = useState<string[]>([])
    const [topSkills, setTopSkills] = useState<string[]>([])
    const [projects, setProjects] = useState<{ skill: string[], url: { [key: string]: string | undefined } }[]>([])
    const [dataProjects, setDataProjects] = useState<string[][]>([])
    const [links, setLinks] = useState<{ [key: string]: any }>({})

    const addShape = () => setShapeCount((prev) => prev + 1)

    const Easter = ({pos}:{pos: number}) => easterStatus[pos] ? null : (
        <img className="easter"
            src={logo}
            alt="easter"
            onClick={() =>  {
                setEasterStatus((prev) => {
                    prev[pos] = true
                    return prev
                })
                setShapeCount((prev) => prev + 1)
            }}
        />
    )

    // First render, fecth skills icons and other info withouth language
    useEffect(() => {
        loadDialog.current?.showModal()
        const abortController = new AbortController()

        async function load(){
            // I decided to use fetch instead of import because, i can easily update data file
            await fetch(getUrl('allSkills'), { signal: abortController.signal })
            .then((res) => res.json())
            .then((skills) => setAllSkills(skills))

            await fetch(getUrl('topSkills'), { signal: abortController.signal })
            .then((res) => res.json())
            .then((skills) => setTopSkills(skills))

            await fetch(getUrl('projects'), { signal: abortController.signal })
            .then((res) => res.json())
            .then((projects) => setProjects(projects))

            await fetch(getUrl('links'), { signal: abortController.signal })
            .then((res) => res.json())
            .then((links) => setLinks(links))

            await loadProjectsLang(i18n.resolvedLanguage ?? 'en', abortController)
        }

        load()
        return () => abortController.abort()
    }, [])

    /** Load projects data with language */
    async function loadProjectsLang(lang: string, abortController: AbortController){
        await fetch(getUrl(lang, '/projects'), { signal: abortController.signal })
        .then((res) => res.json())
        .then((data) => {
            setDataProjects(data)
        })

        setLoading(false)
    }

    /** On click a language in dropdown */
    const onClickLang = (lng: string) => {
        setLoading(true)
        loadDialog.current?.showModal()

        loadProjectsLang(lng, new AbortController())
        i18n.changeLanguage(lng)
    }

    /** On load main */
    const onLoadMain = useCallback(() => {
        if (!loading) loadDialog.current?.close()
    }, [loading])

    return (<>

    <dialog ref={loadDialog} className="load-screen">
        <div className="loading"/>
    </dialog>

    <LiquidShapes count={shapeCount}/>

    <main onLoad={onLoadMain}>
        <section id='banner'>
            <h2> {tr('BannerQuest')} </h2>
            <p> {tr('BannerTitle')} </p>
            <ShowCaseStrings
                strings={getData('devStrings')}
                item={(text, index, style) => (
                    <h1 key={`rnd${index}`} style={style}>
                        <em> {text} </em>
                    </h1> 
                )}
            />
        </section>

        <header className="full-vw">
            <Easter pos={0} />
            <nav>
                <a href="#skills"> {tr('Skills')} </a>
                <a href="#projects"> {tr('Projects')} </a>
                <a href="#contact"> {tr('Contact')} </a>
            </nav>

            <Dropdown
                component={(onClick, className) => (
                    <div className={className} onClick={onClick}>
                        <ILang/>
                    </div>
                )}
                selected={i18n.resolvedLanguage}
                onChange={onClickLang}
                options={Object.keys(lngs)}
                displayExtractor={(lng) => lngs[lng]}
            />
        </header>

        <section id='about' className="bgBlur nopad">
            <h2> {tr('About')} </h2>
            <p> {tr('AboutDesc')}. </p>
        </section>

        <section id='skills' className="full-w">
            <h2> {tr('Skills')} </h2>
            <div className="wrapper">
                <Klotski data={topSkills} onCompleted={addShape}/>

                <ul id='skills-list' className="wrapper">
                    {allSkills.map((skill, index) => (
                        <Tag key={`Tag${index}`} name={skill} icon={skill}/>
                    ))}
                    <Easter pos={1} />
                </ul>
            </div>
        </section>

        <section id='gitStats' className="full-vw nopad invert">
            <iframe
                title='GitHub Stats'
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=WerlynRodriguez&theme=dark&hide_border=true&include_all_commits=false&count_private=false&layout=compact"
            />
            <label>
                {tr('byGit')}
            </label>
        </section>

        <section id='projects' className="full-w">
            <h2> {tr('Projects')} </h2>
            <ul className="full-w wrapper">
                {dataProjects.map((project, index) => (
                    <Card
                        key={`card-project${index}`}
                        name={project[0]}
                        desc={project[1]}
                        skill={projects[index]?.skill}
                        url={projects[index]?.url}
                    />
                ))}
            </ul>
        </section>

        <section id="contact" className="full-w">
            <ShowCaseStrings
                strings={getData('ContactBanner')}
                item={(text, index, style) => (
                    <h2 key={`rnd${index}`} style={style}>
                        <em> {text} </em>
                    </h2>
                )}
            />
            <ul>
            {Object.keys(links.contact ?? {}).map((link, index) => (
                <Button
                    key={`btnContact${index}`}
                    icon={link}
                    className="bgBlur"
                    onClick={() => window.open(links.contact[link], '_blank')}
                >
                    {link}
                </Button>
            ))}
            <Easter pos={2} />
            </ul>
        </section>
    </main>

    <footer>
        <p> © 2023 Werlyn Rodríguez </p>
        <p style={{textAlign: 'center'}}>
            {shapeCount >= countEaster + 1 ?
                tr('EasterFin') :
                `${tr('EasterLeft')} ${countEaster - shapeCount + 1}`
            }
            <Easter pos={3} />
        </p>
    </footer>
    </>)
        
}