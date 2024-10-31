export default function Contact() {
  return (

    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-40 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-4xl font-bold font-serif title-font mb-4 text-gray-600">
              𝕷𝖊𝖙'𝖘 𝕮𝖔𝖓𝖓𝖊𝖈𝖙 𝖂𝖎𝖙𝖍 𝕸𝖊
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-center font-serif">
              Connect with me to explore innovative ideas, collaborate on cutting-edge projects, or discuss opportunities in web development and digital design. Let's turn concepts into impactful solutions together.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-gray-600 border-0 py-2 px-8 focus:outline-none  rounded-xl font-bold font-serif">
                  𝕮𝖔𝖓𝖓𝖊𝖈𝖙 𝖂𝖎𝖙𝖍 𝕸𝖊
                </button>
              </div>
              <a className="text-gray-600 mx-auto mt-4 font-serif">𝖒𝖚𝖟𝖓𝖆𝖟𝖚𝖇𝖊𝖗𝖎𝟏𝟐𝟑@𝖌𝖒𝖆𝖎𝖑.𝖈𝖔𝖒</a>
            </div>
          </div>
        </div>
      </section>

    </div>

  )
}