import Link from 'next/link'
import classNames from 'classnames'

type Props = {
  onMenuButtonClick(): void
}
const Navbar = (props: Props) => {
  return (
    <nav
      className={classNames({
        'bg-white text-zinc-500': true, // colors
        'flex items-center': true, // layout
        'w-full fixed z-10 px-4 shadow-sm h-16': true //positioning & styling
      })}
    >
      <Link href="/">
        <svg
          width="200"
          height="37"
          viewBox="0 0 200 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.184 1.05707L34.808 30.2411L35.384 36.0491L4.76 6.91307L4.184 1.05707ZM4.424 31.9691V35.3771H0.44V34.8971C0.44 34.8971 0.584 34.8971 0.872 34.8971C1.16 34.8971 1.32 34.8971 1.352 34.8971C2.152 34.8971 2.84 34.6091 3.416 34.0331C3.992 33.4571 4.28 32.7691 4.28 31.9691H4.424ZM11.144 31.9691C11.144 32.7691 11.432 33.4571 12.008 34.0331C12.584 34.6091 13.272 34.8971 14.072 34.8971C14.104 34.8971 14.264 34.8971 14.552 34.8971C14.84 34.8971 14.984 34.8971 14.984 34.8971V35.3771H11V31.9691H11.144ZM4.184 1.05707L11.096 8.40107L11.144 35.3771H4.28V7.05707C4.28 5.26507 4.184 3.82507 3.992 2.73707C3.8 1.61707 3.704 1.05707 3.704 1.05707H4.184ZM35.24 1.77707V29.9051C35.24 31.0891 35.288 32.1611 35.384 33.1211C35.48 34.0491 35.576 34.7691 35.672 35.2811C35.768 35.7931 35.816 36.0491 35.816 36.0491H35.384L28.424 28.2731V1.77707H35.24ZM39.08 1.77707V2.25707C39.08 2.25707 38.936 2.25707 38.648 2.25707C38.36 2.25707 38.216 2.25707 38.216 2.25707C37.416 2.25707 36.728 2.54507 36.152 3.12107C35.576 3.66507 35.272 4.35307 35.24 5.18507H35.096V1.77707H39.08ZM24.536 1.77707H28.52V5.18507H28.424C28.392 4.35307 28.088 3.66507 27.512 3.12107C26.968 2.54507 26.28 2.25707 25.448 2.25707C25.448 2.25707 25.304 2.25707 25.016 2.25707C24.728 2.25707 24.568 2.25707 24.536 2.25707V1.77707ZM52.6933 1.77707V35.3771H45.4933V1.77707H52.6933ZM63.5893 17.8091V19.8251H52.5493V17.8091H63.5893ZM65.9413 1.77707V3.84107H52.5493V1.77707H65.9413ZM63.5893 19.7291V24.3371H63.1093V23.9531C63.1093 22.7691 62.7253 21.7931 61.9573 21.0251C61.1893 20.2571 60.2133 19.8571 59.0293 19.8251V19.7291H63.5893ZM63.5893 13.2971V17.9051H59.0293V17.8091C60.2133 17.7771 61.1893 17.3771 61.9573 16.6091C62.7253 15.8091 63.1093 14.8171 63.1093 13.6331V13.2971H63.5893ZM65.9413 3.69707V9.02507H65.4613V8.54507C65.4613 7.10507 65.0293 5.96907 64.1653 5.13707C63.3333 4.27307 62.1973 3.84107 60.7573 3.84107V3.69707H65.9413ZM65.9413 0.913073V2.30507L60.0853 1.77707C60.7893 1.77707 61.5253 1.72907 62.2933 1.63307C63.0933 1.53707 63.8293 1.42507 64.5013 1.29707C65.1733 1.16907 65.6533 1.04107 65.9413 0.913073ZM45.6373 31.8731V35.3771H41.7973V34.8971C41.7973 34.8971 41.8933 34.8971 42.0853 34.8971C42.3093 34.8971 42.4213 34.8971 42.4213 34.8971C43.2533 34.8971 43.9573 34.6091 44.5333 34.0331C45.1413 33.4251 45.4613 32.7051 45.4933 31.8731H45.6373ZM45.6373 5.28107H45.4933C45.4613 4.44907 45.1413 3.74507 44.5333 3.16908C43.9573 2.56107 43.2533 2.25707 42.4213 2.25707C42.4213 2.25707 42.3093 2.25707 42.0853 2.25707C41.8933 2.25707 41.7973 2.25707 41.7973 2.25707V1.77707H45.6373V5.28107ZM52.5493 31.8731H52.6933C52.7253 32.7051 53.0293 33.4251 53.6053 34.0331C54.2133 34.6091 54.9333 34.8971 55.7653 34.8971C55.7653 34.8971 55.8613 34.8971 56.0533 34.8971C56.2453 34.8971 56.3573 34.8971 56.3893 34.8971V35.3771H52.5493V31.8731ZM88.007 1.92107V35.3771H80.807V1.92107H88.007ZM99.767 1.72907V3.74507H69.047V1.72907H99.767ZM99.767 3.60107V9.26507L99.287 9.21707V8.68907C99.287 7.18507 98.839 6.00107 97.943 5.13707C97.079 4.24107 95.895 3.77707 94.391 3.74507V3.60107H99.767ZM99.767 0.865073V2.25707L93.911 1.72907C94.615 1.72907 95.351 1.68107 96.119 1.58507C96.919 1.48907 97.655 1.37707 98.327 1.24907C98.999 1.12107 99.479 0.993073 99.767 0.865073ZM80.951 31.8731V35.3771H77.111V34.8971C77.111 34.8971 77.207 34.8971 77.399 34.8971C77.623 34.8971 77.735 34.8971 77.735 34.8971C78.567 34.8971 79.271 34.6091 79.847 34.0331C80.455 33.4251 80.775 32.7051 80.807 31.8731H80.951ZM87.863 31.8731H88.007C88.039 32.7051 88.343 33.4251 88.919 34.0331C89.527 34.6091 90.247 34.8971 91.079 34.8971C91.079 34.8971 91.175 34.8971 91.367 34.8971C91.591 34.8971 91.703 34.8971 91.703 34.8971V35.3771H87.863V31.8731ZM74.375 3.60107V3.74507C72.903 3.77707 71.719 4.24107 70.823 5.13707C69.959 6.00107 69.527 7.18507 69.527 8.68907V9.21707L69.047 9.26507V3.60107H74.375ZM69.047 0.865073C69.367 0.993073 69.847 1.12107 70.487 1.24907C71.159 1.37707 71.895 1.48907 72.695 1.58507C73.495 1.68107 74.231 1.72907 74.903 1.72907L69.047 2.25707V0.865073Z"
            fill="white"
          />
          <path
            d="M125.687 1.10507C126.327 1.10507 127.111 1.13707 128.039 1.20107C128.999 1.26507 129.975 1.36107 130.967 1.48907C131.991 1.58507 132.871 1.69707 133.607 1.82507C134.375 1.92107 134.903 2.03307 135.191 2.16107L134.615 8.64107H134.135C134.135 6.97707 133.511 5.64907 132.263 4.65707C131.047 3.63307 129.415 3.12107 127.367 3.12107C125.511 3.12107 124.007 3.56907 122.855 4.46507C121.735 5.36107 121.143 6.44907 121.079 7.72907C121.047 8.68907 121.351 9.52107 121.991 10.2251C122.631 10.9291 123.447 11.5851 124.439 12.1931L133.607 18.1451C135.079 18.9771 136.183 20.0651 136.919 21.4091C137.687 22.7531 138.023 24.3211 137.927 26.1131C137.767 29.2491 136.567 31.6971 134.327 33.4571C132.087 35.1851 129.047 36.0491 125.207 36.0491C123.799 36.0491 122.423 35.9211 121.079 35.6651C119.767 35.4411 118.599 35.1211 117.575 34.7051C116.551 34.2571 115.735 33.7291 115.127 33.1211C114.871 32.4171 114.759 31.5691 114.791 30.5771C114.823 29.5851 114.967 28.5771 115.223 27.5531C115.511 26.5291 115.863 25.6811 116.279 25.0091H116.711C116.583 26.6411 116.871 28.1611 117.575 29.5691C118.311 30.9451 119.367 32.0491 120.743 32.8811C122.151 33.6811 123.815 34.0651 125.735 34.0331C127.847 34.0011 129.479 33.4731 130.631 32.4491C131.783 31.3931 132.359 30.1291 132.359 28.6571C132.359 27.6651 132.055 26.7691 131.447 25.9691C130.871 25.1691 129.911 24.4011 128.567 23.6651L120.167 18.0971C118.471 17.1371 117.239 15.9051 116.471 14.4011C115.703 12.8971 115.399 11.2651 115.559 9.50507C115.719 7.84107 116.215 6.38507 117.047 5.13707C117.879 3.85707 119.015 2.86507 120.455 2.16107C121.927 1.45707 123.671 1.10507 125.687 1.10507ZM135.239 1.58507L135.143 2.59307H129.479V1.58507H135.239ZM151.76 6.57707V35.3771H144.848V6.57707H151.76ZM162.992 33.4571L164.096 35.3771H151.664V33.4571H162.992ZM161.36 20.1611V22.0811H151.664V20.1611H161.36ZM163.52 6.57707V8.49708H151.664V6.57707H163.52ZM166.064 26.5451L164.24 35.3771H155.936L157.424 33.4571C158.8 33.4571 160.016 33.1851 161.072 32.6411C162.16 32.0651 163.088 31.2651 163.856 30.2411C164.624 29.1851 165.216 27.9531 165.632 26.5451H166.064ZM161.36 21.9851V26.2091H160.88V25.8251C160.88 24.7691 160.544 23.8891 159.872 23.1851C159.232 22.4811 158.352 22.1131 157.232 22.0811V21.9851H161.36ZM161.36 16.0331V20.2571H157.232V20.1611C158.352 20.1291 159.232 19.7611 159.872 19.0571C160.544 18.3211 160.88 17.4251 160.88 16.3691V16.0331H161.36ZM163.52 8.40107V13.4891H163.04V13.0571C163.04 11.6491 162.656 10.5451 161.888 9.74507C161.152 8.94507 160.08 8.52907 158.672 8.49708V8.40107H163.52ZM163.52 5.85707V7.00907L158.48 6.57707C159.408 6.57707 160.384 6.49707 161.408 6.33707C162.432 6.14507 163.136 5.98507 163.52 5.85707ZM144.944 32.3531L145.184 35.3771H141.632V34.8971C141.632 34.8971 141.728 34.8971 141.92 34.8971C142.112 34.8971 142.224 34.8971 142.256 34.8971C142.96 34.8971 143.552 34.6571 144.032 34.1771C144.544 33.6651 144.816 33.0571 144.848 32.3531H144.944ZM144.944 9.60108H144.848C144.816 8.86508 144.544 8.25707 144.032 7.77707C143.552 7.29707 142.96 7.05707 142.256 7.05707C142.224 7.05707 142.112 7.05707 141.92 7.05707C141.728 7.05707 141.632 7.05707 141.632 7.05707V6.57707H145.184L144.944 9.60108ZM182.406 5.28107L196.614 35.1371H188.502L179.574 14.0651L182.406 5.28107ZM173.382 32.2091C173.03 33.0731 173.078 33.7451 173.526 34.2251C173.974 34.6731 174.47 34.8971 175.014 34.8971H175.398V35.3771H165.798V34.8971C165.798 34.8971 165.862 34.8971 165.99 34.8971C166.118 34.8971 166.182 34.8971 166.182 34.8971C166.822 34.8971 167.494 34.7051 168.198 34.3211C168.902 33.9051 169.478 33.2011 169.926 32.2091H173.382ZM182.406 5.28107L182.502 11.0411L172.086 35.2331H168.534L179.766 11.0891C179.83 10.8971 179.974 10.5611 180.198 10.0811C180.422 9.56907 180.662 9.00907 180.918 8.40107C181.174 7.76107 181.414 7.16907 181.638 6.62507C181.862 6.04907 181.99 5.60107 182.022 5.28107H182.406ZM186.582 25.9691V27.8411H174.342V25.9691H186.582ZM187.302 32.2091H195.222C195.702 33.2011 196.294 33.9051 196.998 34.3211C197.702 34.7051 198.374 34.8971 199.014 34.8971C199.014 34.8971 199.078 34.8971 199.206 34.8971C199.334 34.8971 199.398 34.8971 199.398 34.8971V35.3771H185.286V34.8971H185.67C186.214 34.8971 186.71 34.6731 187.158 34.2251C187.606 33.7451 187.654 33.0731 187.302 32.2091Z"
            fill="url(#paint0_linear_0_1225)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_1225"
              x1="107.203"
              y1="21.3771"
              x2="220.875"
              y2="21.3771"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#627EEA" />
              <stop offset="1" stop-color="#EC4467" />
            </linearGradient>
          </defs>
        </svg>
      </Link>
      <div className="flex-grow"></div>
      <button onClick={props.onMenuButtonClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </nav>
  )
}

export default Navbar
