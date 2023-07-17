import siteMetadata from '/data/siteMetadata'
import ContactLink from '/components/ContactLink'
import { PageSEO } from '/components/SEO'

const Contact = () => {
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description="All my contacts" />
      <div className="mx-auto max-w-3xl overflow-hidden">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
         Reach me through these contact:
        </h1>
        <div className="pt-10 pb-8">
          <ul className="font-semi-bold flex flex-col space-y-4">
            <ContactLink href="mailto:muriukikelvin27@gmail.com" title="E-mail" icon="Kelvin" />
            <ContactLink href="https://github.com/Muriuk" title="github" icon="Muriuk" />
            <ContactLink
              href="https://twitter.com/kevswirl"
              title="twitter"
              icon="kevswirl"
            />
            <ContactLink
              href="https://www.linkedin.com/in/kelvin-muriuki-8866891ba/"
              title="linkedin"
              icon="Kelvin"
            />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact
