import Link from "next/link";

export default function Footer() {
  return (

    <div>

      <footer className=" body-font bg-gray-800">
        <div className="container px-5 py-4 mt-60 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span className="ml-3 text-4xl">𝛀𝛍𝒛𝛈𝛂.</span>
          </a>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 𝟮𝟬𝟮𝟰
            <a
              href="https://twitter.com/knyttneve"
              className="text-white ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @𝞨𝞵𝙯𝞰𝞪 𝞓𝙢𝙞𝞬 𝞕𝞵𝞫𝞪𝙞𝞬𝙞
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link href="https://www.linkedin.com/in/muzna-amir-z-280135264/" target="blank" className="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </Link>
          </span>
        </div>
      </footer>


    </div>

  );
}