import Panel from '../components/Panel'
import ExperienceLogoCloud from '../modules/ExperienceLogoCloud'

export default function Home() {
  return [
    <Panel center={true}>
      <div className="font-display text-2xl lg:text-3xl leading-relaxed lg:leading-loose">
        <p>
          Hey! I am a self-motivated Software Engineer with a passion for understanding and always learning.
        </p>
        <p className="mt-4 lg:mt-0">
          <a href="https://cdn.dak.dev/Dak_Washbrook_Resume.pdf" target="_blank" className="active:border active:border-gray-300 padding-2 font-bold text-red-800 hover:underline">
            Download Resume
          </a>
        </p>
      </div>
    </Panel>,
    <Panel fit={true}>
      <ExperienceLogoCloud />
    </Panel>
  ]
}
