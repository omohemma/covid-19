<template>
  <div id="app">
    <header class="hidden">
      <!-- Navigation Bar -->
      <nav class=" justify-evenly  md:justify-around items-center py-6 flex">
        <a href="#">
          <img
            class="h-12 lg:h-16 object-cover"
            src="./assets/images/Logo.svg"
            alt="logo"
          />
        </a>
        <div class="block md:hidden">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpened === true"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              fill-rule="evenodd"
              v-else
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </div>

        <div class="hidden md:block">
          <a
            href="#overview"
            class="mr-6 text-md lg:text-lg text-red-400 font-medium inline-flex flex-col items-center"
          >
            Overview
            <!-- <span class="h-2 w-2 bg-red-400 rounded-full"></span> -->
          </a>
          <a
            href="#contagion"
            class="mr-6 text-md lg:text-lg text-gray-700 font-medium hover:text-red-400"
            >Contagion</a
          >
          <a
            href="#symptoms"
            class="mr-6  text-md lg:text-lg text-gray-700 font-medium hover:text-red-400"
            >Symptoms</a
          >
          <a
            href="#prevention"
            class="mr-6 text-md lg:text-lg  text-gray-700 font-medium hover:text-red-400"
            >Prevention</a
          >
          <a
            href="#contact"
            class="mr-6 text-md lg:text-lg text-gray-700 font-medium border-2 border-red-400 px-6 py-3 rounded-full hover:text-white hover:bg-red-500"
            >Contact</a
          >
        </div>
      </nav>

      <div class="flex  mt-8">
        <div class="w-1/2 mt-40 ml-16">
          <div class="max-w-lg mx-auto">
            <span class="text-md text-red-400 font-semibold"
              >COVID-19 Alert</span
            >
            <h1 class="mt-1 text-4xl text-gray-800 leading-9">
              Stay at Home quarantine To stop Corona virus
            </h1>
            <p class="leading-loose text-gray-700 mt-3">
              There is no specific medicine to prevent or treat coronavirus
              disease (COVID-19). People may need supportive care to .
            </p>
            <a
              href="#contact"
              class="mt-2 inline-block px-6 py-3 bg-red-500 font-bold rounded-full text-white"
              >Let us help</a
            >
          </div>
        </div>
        <div class="w-1/2">
          <img src="./assets/images/Illustration 01.svg" alt />
        </div>
      </div>
    </header>

    <!-- Section One - Responsive -->
    <section id="overview" class="mt-10">
      <div class="sm:flex px-8">
        <div class="sm:w-1/2 ">
          <img src="./assets/images/illustration 02.svg" alt />
        </div>
        <div class="sm:w-1/2">
          <div class="max-w-lg lg:mt-24 xl:mt-56 ml-4">
            <span class=" text-sm sm:text-md text-red-400 font-semibold"
              >What is COVID-19</span
            >
            <h1 class="mt-1  text-2xl sm:text-4xl text-gray-800 leading-9">
              Coronavirus
            </h1>
            <p class="leading-loose text-gray-700 mt-3 text-sm">
              Corona viruses are a type of virus. There are many different
              kinds, and some cause disease. A newly identified type has caused
              a recent outbreak of respiratory illness now called
              COVID-19.Lauren Sauer, M.S., the director of operations with the
              Johns Hopkins Office of Critical Event Preparedness and Response
            </p>
            <a
              href="#contagion"
              class="mt-2 inline-block px-4 py-2 sm:px-6 sm:py-3 bg-red-200 font-bold rounded-full text-red-500"
              >Learn more</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Section Two - Responsive -->
    <div id="contagion" class="mt-10">
      <div class="mx-auto max-w-md text-center">
        <span class="text-md text-red-400 font-semibold">COVID-19</span>
        <h1 class="mt-1 text-xl text-gray-800 leading-6">Contagion</h1>
        <p class="text-gray-700 mt-3 text-sm">
          Corona viruses are a type of virus. There are many different kinds,
          and some cause disease. A newly identified type
        </p>
      </div>

      <div class="flex justify-evenly flex-wrap my-8 px-12">
        <div
          class="bg-white rounded-lg shadow-lg max-w-xs p-10 border-b-4 border-red-400 mt-6   card"
        >
          <div>
            <img
              class="h-48 mx-auto object-cover"
              src="./assets/images/card-1.svg"
              alt
            />
          </div>
          <div class="text-center mt-2">
            <h4 class="text-xl font-meduim">Air Transmission</h4>
            <p class="mt-2 text-gray-700 font-light text-sm">
              Objectively evolve tactical expertise before extensible
              initiatives. Efficiently simplify
            </p>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg max-w-xs p-10 mt-6   card ">
          <div>
            <img
              class="h-48 mx-auto object-cover"
              src="./assets/images/card-2.svg"
              alt
            />
          </div>
          <div class="text-center mt-2">
            <h4 class="text-xl font-meduim">Human Contacts</h4>
            <p class="mt-2 text-gray-700 font-light text-sm">
              Washing your hands is one of thesimplest ways you can protect
            </p>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg max-w-xs p-10  mt-6   card">
          <div>
            <img
              class="h-48 mx-auto object-cover"
              src="./assets/images/card-3.svg"
              alt
            />
          </div>
          <div class="text-center mt-2">
            <h4 class="text-xl font-meduim">Containted Objects</h4>
            <p class="mt-2 text-gray-700 font-light text-sm">
              Use the tissue while sneezing,In this way, you can protect your
              droplets.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Symptoms -Responsive -->
    <section id="symptoms" class=" mt-24">
      <div class="mx-auto max-w-xl text-center">
        <span class="text-md text-red-400 font-semibold">COVID-19</span>
        <h1 class="mt-1 text-xl text-gray-800 leading-6">Symptoms</h1>
        <p class="text-gray-700 mt-3 text-sm">
          Corona viruses are a type of virus. There are many different kinds,
          and some cause disease. A newly identified type has caused a recent
          outbreak of respiratory
        </p>
      </div>

      <div class=" sm:max-w-2xl px-6 mx-auto">
        <img src="./assets/images/illustration 03.svg" alt="" srcset="" />
      </div>
    </section>

    <!-- What we should do -Responsive -->
    <section id="prevention" class=" mt-24 px-6">
      <!-- Heading -->
      <div class="mx-auto max-w-xl text-center">
        <span class="text-md text-red-400 font-semibold">COVID-19</span>
        <h1 class="mt-1 text-xl text-gray-800 leading-6">What we should do</h1>
        <p class="text-gray-700 mt-3 text-sm">
          Corona viruses are a type of virus. There are many different kinds,
          and some cause disease. A newly identified type has caused
        </p>
      </div>

      <!-- One -->
      <div class="flex flex-col flex-col-reverse sm:flex-row mt-10 ">
        <div class="sm:w-1/2 ">
          <div class="sm:max-w-sm mx-auto sm:mt-24">
            <h3
              class="mt-1 text-xl sm:text-2xl text-gray-800 leading-9 text-blue-900 "
            >
              <span class=" text-red-500 bg-red-200 font-bold rounded-full p-2"
                >01</span
              >
              Wear mask
            </h3>
            <p class="leading-loose text-gray-700 mt-3 text-sm">
              Continually seize impactful vortals rather than future-proof
              supply chains. Uniquely exploit emerging niches via fully tested
              meta-services. Competently pursue standards compliant leadership
              skills vis-a-vis pandemic "outside the box" thinking. Objectively
            </p>
          </div>
        </div>
        <div class="sm:w-1/2">
          <img
            class=" h-96  mx-auto"
            src="./assets/images/Mask girl.svg"
            alt=""
          />
        </div>
      </div>

      <!-- Two -->
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/2">
          <img
            class=" h-96 mx-auto"
            src="./assets/images/Mask girl 02.svg"
            alt=""
          />
        </div>
        <div class="sm:w-1/2 ">
          <div class="max-w-sm mx-auto sm:mt-24">
            <h3
              class="mt-1 text-xl sm:text-2xl text-gray-800 leading-9 text-blue-900 "
            >
              <span class=" text-red-500 bg-red-200 font-bold rounded-full p-2"
                >02</span
              >
              Wash Your Hands
            </h3>
            <p class="leading-loose text-gray-700 mt-3 text-sm">
              Continually seize impactful vortals rather than future-proof
              supply chains. Uniquely exploit emerging niches via fully tested
              meta-services. Competently pursue standards compliant leadership
              skills vis-a-vis pandemic "outside the box" thinking. Objectively
              Continually seize impactful vortals
            </p>
          </div>
        </div>
      </div>

      <!-- Three -->
      <div class="flex  flex-col-reverse sm:flex-row mt-10">
        <div class="sm:w-1/2 ">
          <div class="max-w-sm mx-auto sm:mt-24">
            <h3
              class="mt-1 text-xl sm:text-2xl text-gray-800 leading-9 text-blue-900 "
            >
              <span class=" text-red-500 bg-red-200 font-bold rounded-full p-2"
                >03</span
              >
              Use Nose - Rag
            </h3>
            <p class="leading-loose text-gray-700 mt-3 text-sm">
              Continually seize impactful vortals rather than future-proof
              supply chains. Uniquely exploit emerging niches via fully tested
              meta-services. Competently pursue standards compliant leadership
              skills vis-a-vis pandemic "outside the box" thinking. Objectively
            </p>
          </div>
        </div>
        <div class="sm:w-1/2">
          <img class=" h-96 mx-auto" src="./assets/images/Mask 03.svg" alt="" />
        </div>
      </div>

      <!-- Four -->
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/2">
          <img class=" h-96 mx-auto" src="./assets/images/mask 04.svg" alt="" />
        </div>
        <div class="sm:w-1/2 ">
          <div class="max-w-sm mx-auto sm:mt-24">
            <h3
              class="mt-1 text-xl sm:text-2xl text-gray-800 leading-9 text-blue-900  "
            >
              <span class=" text-red-500 bg-red-200 font-bold rounded-full p-2"
                >04</span
              >
              Avoid Contacts
            </h3>
            <p class="leading-loose text-gray-700 mt-3 text-sm">
              Continually seize impactful vortals rather than future-proof
              supply chains. Uniquely exploit emerging niches via fully tested
              meta-services. Competently pursue standards compliant leadership
              skills vis-a-vis pandemic "outside the box" thinking. Objectively
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact - Responsive -->
    <section id="contact" class="mt-10">
      <div class=" px-1 sm:max-w-md mx-auto">
        <h3
          class="text-2xl sm:text-3xl text-blue-900 text-center tracking-tight"
        >
          Have Question in mind ? <br />
          Let us help you
        </h3>

        <form action="" class="mt-6">
          <div
            class="flex h-16 border-gray-100 border-2 rounded-full justify-around items-center shadow-lg"
          >
            <input
              type="text"
              class="transparent focus:outline-none"
              placeholder="Email Address"
            />

            <button
              class="h-12 px-6 sm:px-12 bg-red-500 text-white rounded-full focus:outline-none hover:bg-red-400 "
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>

    <!-- Footer - Responsive -->
    <footer id="footer" class="mt-10">
      <div class="flex flex-col sm:flex-row justify-around items-center">
        <img class="h-12" src="./assets/images/Logo.svg" alt="" />
        <div class=" inline-flex flex-wrap justify-center mt-4">
          <a href="#overview" class="mx-2 sm:mr-6 hover:text-red-600"
            >Overview</a
          >
          <a href="#symptoms" class="mx-2 sm:mr-6 hover:text-red-600"
            >Symptopms</a
          >
          <a href="#prevention" class=" mx-2 sm:mr-6 hover:text-red-600"
            >Prevention</a
          >
          <a href="#" class="mx-2 sm:mr-6 hover:text-red-600">Treatment</a>
        </div>

        <div class="flex items-center mt-4">
          <a class="mr-4" href="#">
            <svg
              width="11"
              height="21"
              viewBox="0 0 11 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7736 0.290178V3.53125H8.8461C8.14224 3.53125 7.66753 3.67857 7.422 3.97321C7.17646 4.26786 7.05369 4.70982 7.05369 5.29911V7.61942H10.6508L10.172 11.2533H7.05369V20.5714H3.297V11.2533H0.166417V7.61942H3.297V4.94308C3.297 3.42076 3.72259 2.24219 4.57378 1.40737C5.42497 0.564359 6.55853 0.142856 7.97445 0.142856C9.17758 0.142856 10.1106 0.191963 10.7736 0.290178Z"
                fill="#035755"
              />
            </svg>
          </a>

          <a class="mr-4" href="#"
            ><svg
              width="23"
              height="16"
              viewBox="0 0 23 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.58121 10.9911L15.5232 7.92187L9.58121 4.81585V10.9911ZM11.8524 0.408482C13.2274 0.408482 14.5533 0.428943 15.8301 0.469865C17.1151 0.502603 18.0563 0.539434 18.6538 0.580357L19.55 0.629464C19.5581 0.629464 19.6277 0.637648 19.7587 0.654017C19.8896 0.662202 19.9837 0.674479 20.041 0.690847C20.0983 0.699032 20.1924 0.715401 20.3234 0.739954C20.4625 0.764508 20.5812 0.797246 20.6794 0.838169C20.7776 0.879092 20.8922 0.932291 21.0232 0.997767C21.1541 1.06324 21.281 1.14509 21.4038 1.2433C21.5265 1.33333 21.6452 1.43973 21.7598 1.5625C21.8089 1.61161 21.8703 1.68936 21.9439 1.79576C22.0258 1.89397 22.1445 2.13132 22.3 2.50781C22.4637 2.8843 22.5741 3.29762 22.6314 3.74777C22.6969 4.27158 22.746 4.83222 22.7788 5.42969C22.8197 6.01897 22.8442 6.4814 22.8524 6.81696V7.30804V8.97768C22.8606 10.1644 22.7869 11.3512 22.6314 12.5379C22.5741 12.9881 22.4718 13.3973 22.3245 13.7656C22.1772 14.1257 22.0462 14.3754 21.9317 14.5145L21.7598 14.7232C21.6452 14.846 21.5265 14.9565 21.4038 15.0547C21.281 15.1447 21.1541 15.2225 21.0232 15.2879C20.8922 15.3452 20.7776 15.3943 20.6794 15.4353C20.5812 15.4762 20.4625 15.5089 20.3234 15.5335C20.1924 15.558 20.0942 15.5785 20.0288 15.5949C19.9715 15.6031 19.8773 15.6153 19.7464 15.6317C19.6236 15.6399 19.5581 15.644 19.55 15.644C17.4956 15.7995 14.9298 15.8772 11.8524 15.8772C10.1582 15.8609 8.68501 15.8363 7.43277 15.8036C6.18873 15.7626 5.37027 15.7299 4.97742 15.7054L4.37585 15.6562L3.93389 15.6071C3.63925 15.5662 3.41417 15.5253 3.25867 15.4844C3.11135 15.4435 2.90264 15.3575 2.63255 15.2266C2.37065 15.0956 2.14148 14.9278 1.94505 14.7232C1.89594 14.6741 1.83047 14.6004 1.74862 14.5022C1.67496 14.3958 1.55629 14.1544 1.3926 13.7779C1.23709 13.4014 1.13069 12.9881 1.0734 12.5379C1.00792 12.0141 0.954724 11.4576 0.913801 10.8683C0.881063 10.2708 0.860602 9.80432 0.852417 9.46875V8.97768V7.30804C0.844232 6.12128 0.917893 4.93452 1.0734 3.74777C1.13069 3.29762 1.233 2.89248 1.38032 2.53237C1.52764 2.16406 1.65859 1.91034 1.77318 1.7712L1.94505 1.5625C2.05963 1.43973 2.17831 1.33333 2.30108 1.2433C2.42385 1.14509 2.55071 1.06324 2.68166 0.997767C2.81261 0.932291 2.92719 0.879092 3.02541 0.838169C3.12362 0.797246 3.23821 0.764508 3.36916 0.739954C3.5083 0.715401 3.60651 0.699032 3.6638 0.690847C3.72109 0.674479 3.81521 0.662202 3.94617 0.654017C4.07712 0.637648 4.14669 0.629464 4.15487 0.629464C6.20919 0.482143 8.77504 0.408482 11.8524 0.408482Z"
                fill="#F44A45"
              />
            </svg>
          </a>

          <a class="mr-4" href="#">
            <svg
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.1131 4.50223C20.0313 6.43378 18.6726 9.09784 16.0372 12.4944C13.3118 16.0219 11.0119 17.7857 9.13766 17.7857C7.97546 17.7857 6.99332 16.7094 6.19123 14.5569C5.83111 13.2474 5.29093 11.2749 4.5707 8.63951C3.98141 6.49516 3.33893 5.42299 2.64324 5.42299C2.49592 5.42299 1.9762 5.734 1.08409 6.35603L0.138777 5.1529C0.335205 4.98103 0.777169 4.58817 1.46467 3.97433C2.15217 3.35231 2.68416 2.8776 3.06065 2.55022C4.33744 1.42076 5.32367 0.823288 6.01936 0.757811C6.79689 0.684151 7.423 0.913318 7.89771 1.44531C8.37241 1.96912 8.70388 2.79985 8.89213 3.9375C9.25224 6.28646 9.52233 7.81287 9.70239 8.51674C10.1525 10.5547 10.6436 11.5737 11.1756 11.5737C11.593 11.5737 12.2232 10.9148 13.0662 9.5971C13.8929 8.27939 14.3389 7.27269 14.4044 6.57701C14.5108 5.43936 14.0647 4.87053 13.0662 4.87053C12.5997 4.87053 12.1046 4.97693 11.5807 5.18973C12.5629 1.97321 14.4412 0.409969 17.2158 0.499999C19.2701 0.565476 20.2359 1.89955 20.1131 4.50223Z"
                fill="#035755"
              />
            </svg>
          </a>

          <a class="mr-4" href="#">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.8922 2.15178C19.3438 2.95387 18.6809 3.63728 17.9033 4.20201C17.9115 4.31659 17.9156 4.48847 17.9156 4.71763C17.9156 5.78162 17.7601 6.84561 17.4491 7.9096C17.1381 8.9654 16.6634 9.98028 16.025 10.9542C15.3948 11.9282 14.6418 12.7917 13.7661 13.5446C12.8903 14.2894 11.8345 14.8869 10.5987 15.3371C9.36279 15.779 8.04099 16 6.63325 16C4.41524 16 2.38548 15.4066 0.543963 14.2199C0.830421 14.2526 1.14962 14.269 1.50155 14.269C3.34307 14.269 4.98407 13.7042 6.42454 12.5748C5.56517 12.5584 4.79582 12.2965 4.11651 11.7891C3.43719 11.2734 2.97067 10.6187 2.71695 9.82478C2.98704 9.8657 3.23667 9.88616 3.46584 9.88616C3.81777 9.88616 4.16561 9.84115 4.50936 9.75112C3.5927 9.56287 2.83154 9.10863 2.22588 8.38839C1.62841 7.65997 1.32968 6.81696 1.32968 5.85937V5.81027C1.88622 6.12128 2.4837 6.28906 3.12209 6.31362C2.58191 5.9535 2.15222 5.48289 1.83303 4.90178C1.51383 4.32068 1.35423 3.69048 1.35423 3.01116C1.35423 2.29092 1.53429 1.62388 1.89441 1.01004C2.88474 2.22954 4.08786 3.20759 5.50378 3.9442C6.92789 4.67262 8.45021 5.07775 10.0707 5.1596C10.0053 4.84859 9.97253 4.54576 9.97253 4.25112C9.97253 3.15439 10.3572 2.22135 11.1266 1.45201C11.9041 0.674479 12.8412 0.285714 13.9379 0.285714C15.0838 0.285714 16.0495 0.703125 16.8353 1.53795C17.7274 1.36607 18.5663 1.04687 19.352 0.580357C19.0492 1.52158 18.4681 2.25 17.6087 2.76562C18.3699 2.68378 19.131 2.47917 19.8922 2.15178Z"
                fill="#035755"
              />
            </svg>
          </a>
        </div>
      </div>

      <div class="text-center my-4 mx-auto">
        <small class=" text-center text-gray-800 text-md"
          >2020 @ All rights reserved by pixelspark.co</small
        >
        <small class="block text-center text-gray-800 text-md mt-2 "
          >Designed By
          <a
            class=" hover:text-red-600"
            target="_blank"
            href="https://www.linkedin.com/in/emmanuel-omololu-696702151/"
          >
            Omololu Emmanuel</a
          ></small
        >
      </div>
    </footer>
  </div>
</template>
