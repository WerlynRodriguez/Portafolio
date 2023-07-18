import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

export const lngs: { [key: string]: string } = { // Languages
    es: 'Español',
    en: 'English',
    ja: '日本語',
    pt: 'Português'
}

i18next
.use(initReactI18next)
.use(LanguageDetector)
.init({
    fallbackLng: 'en',
    resources: {
        es: {
            translation: {
                BannerQuest: '¿Buscas un desarrollador innovador y eficiente?',
                BannerTitle: 'Me presento, soy Werlyn y soy un desarrollador',

                About: 'Sobre mí',
                AboutDesc: 'Me apasiona la creación de interfaces y experiencias de usuario dinámicas y atractivas. A lo largo de mis 5 años de carrera en Ingeniería en Computación, he desarrollado habilidades en diversas áreas del desarrollo de software',

                Skills: 'Habilidades',
                Projects: 'Proyectos',

                byGit: 'Estadísticas de GitHub',

                Socials: 'Redes sociales',

                Contact: 'Contacto',
                ContactBanner: ['Contáctame', 'Conversemos', 'Contrátame', 'Trabajemos juntos'],

                EasterFin: '¡Has encontrado todos los easter eggs! Contáctame para descubrir el último :)',
                EasterLeft: 'Has visto esos pequeños logos? Te faltan'
            }
        },
        en: {
            translation: {
                BannerQuest: 'Looking for an innovative and efficient developer?',
                BannerTitle: 'Let me introduce myself, I\'m Werlyn and I\'m a developer',
                devStrings: ['Frontend', 'Backend', 'Web', 'Mobile', 'Software'],

                About: 'About me',
                AboutDesc: 'I\'m passionate about creating dynamic and engaging user interfaces and user experiences. Throughout my 5-year career in Computer Engineering, I have developed skills in several areas of software development.',

                Skills: 'Skills',
                Projects: 'Projects',

                byGit: 'GitHub statistics',

                Contact: 'Contact',
                ContactBanner: ['Contact me', 'Let\'s talk', 'Hire me', 'Let\'s work together'],

                EasterFin: 'You have found all the easter eggs! Contact me to find out the last one :)',
                EasterLeft: 'Have you seen those little logos? You are missing'
            }
        },
        ja: {
            translation: {
                BannerQuest: '革新的で効率的な開発者をお探しですか？',
                BannerTitle: '自己紹介します、私はWerlynで、開発者です',
                devStrings: ['フロントエンド', 'バックエンド', 'ウェブ', 'モバイル', 'ソフトウェア'],   
                
                About: '私について',
                AboutDesc: 'ダイナミックで魅力的なユーザー・インターフェースとユーザー・エクスペリエンスの創造に情熱を注いでいます。コンピューターエンジニアリングでの5年間のキャリアを通じて、ソフトウェア開発の様々な分野でスキルを磨いてきました。',

                Skills: 'スキル',
                Projects: 'プロジェクト',

                byGit: 'GitHubの統計',

                Contact: '連絡先',
                ContactBanner: ['連絡してください', '話しましょう', '雇ってください', '一緒に働きましょう'],

                EasterFin: 'すべてのイースターエッグを見つけました！最後のイースターエッグを見つけるには、私に連絡してください :)',
                EasterLeft: 'あの小さなロゴを見ましたか？あと'
            }
        },
        pt: {
            translation: {
                BannerQuest: 'Procurando um desenvolvedor inovador e eficiente?',
                BannerTitle: 'Deixe-me apresentar, eu sou Werlyn e sou um desenvolvedor',

                About: 'Sobre mim',
                AboutDesc: 'Sou apaixonado pela criação de interfaces e experiências de utilizador dinâmicas e envolventes. Ao longo da minha carreira de 5 anos em Engenharia Informática, desenvolvi competências em várias áreas do desenvolvimento de software.',

                Skills: 'Habilidades',
                Projects: 'Projetos',
                
                byGit: 'Estatísticas do GitHub',

                Contact: 'Contato',
                ContactBanner: ['Entre em contato comigo', 'Vamos conversar', 'Contrate-me', 'Vamos trabalhar juntos'],

                EasterFin: 'Você encontrou todos os easter eggs! Entre em contato comigo para descobrir o último :)',
                EasterLeft: 'Você viu aqueles pequenos logotipos? Você está faltando'
            }
        }
    }
})

/** Translate a text from key 
 * @param key The key to translate
*/
export const tr = (key: string) => i18next.t(key)

/** Get data projects object */
export const getData = (key: string) => i18next.t(key, { returnObjects: true }) as any