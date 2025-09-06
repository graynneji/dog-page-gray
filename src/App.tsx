
import Icon1Src from "./assets/g6396.svg";
import Icon2Src from "./assets/Group.svg";
import Icon3Src from "./assets/Group(1).svg";
import Icon4Src from "./assets/001---Vet.svg";
import FoodSrc from "./assets/Frame 1171276495.svg";
import ShieldSrc from "./assets/shield-check.svg";
import PaymentsSrc from "./assets/Payments.svg";
import DogSrc from "./assets/Rectangle 15.svg";

import { KeyPointsCol, PhotoGridData, type KeyProps } from "./constants/index"
import './App.css'
import Buttons from "./components/Buttons"
import Descriptions from "./components/Descriptions"
import KeyPoints from "./components/KeyPoints"
import PhotoGrid from "./components/PhotoGrid"


const App: React.FC = () => {

  return (
    <div className="w-full min-h-screen flex flex-col font-inter-tight text-white">
      <div className='px-20 py-20 mx-auto flex gap-12 flex-col items-center bg-white'>

        <h1 className=' font-semibold text-[40px] text-primary leading-[120%] tracking-[0.25px] text-center'>What makes us different <br /> makes them stronger</h1>

        <div className='flex gap-[30px] items-center justify-center'>
          <div className='flex flex-col gap-20'>
            <Descriptions title="Real Food" description="Wholesome recipes for dogs with real meat and veggies." avatar={<img src={Icon1Src} alt="Real Food Icon" />} color="#DCF9CA" />

            <Descriptions title="Premium Ingredient" description="Elevating pet care with unmatched safety and quality." avatar={<img src={Icon2Src} alt="Premium Ingredient Icon" />} color="#F8F0D6" />

          </div>
          <img src={FoodSrc} alt="Dog Food" />
          <div className="flex flex-col gap-20">
            <Descriptions title="Made Fresh" description="We prioritize maintaining the integrity of whole foods and nutrition." avatar={<img src={Icon3Src} alt="Made Fresh Icon" />} color="#C8F2E7" />

            <Descriptions title="Vet Developed" description="We raise the bar for dog nutrition, surpassing industry expectations." avatar={<img src={Icon4Src} alt="Vet Developed Icon" />} color="#F7CABD" />
          </div>

        </div>



        {/* button */}
        <div className="flex flex-col gap-[16px]">
          <Buttons>Get your dog's healthy meal today!</Buttons>

          <div className="flex gap-6 justify-center items-center">
            <div className="flex gap-2 justify-center items-center">
              <img src={ShieldSrc} alt="Shield" />
              <span className="text-[13px] leading-[150%] tracking-[0.5px] text-secondary">30-day money back guarantee</span>
            </div>
            <img src={PaymentsSrc} alt="Payment Methods" />
          </div>
        </div>
      </div>

      {/* Nutrition */}
      <div className="py-20 w-full max-w-[1920px] justify-center items-center flex gap-[30px] bg-[#F8F8F8]">
        <div className="w-[570px] flex flex-col text-start gap-12 pr-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-[40px] font-semibold leading-[120%] tracking-[0.25px] text-primary">
              Nutrition is the foundation for longer, healthier lives in dogs.
            </h2>
            <p className="text-[16px] leading-[150%] tracking-[0.5px] text-secondary font-normal">
              Invest in your dog's future with our scientifically formulated superfood-powered supplements. Give them the nutrition they deserve and watch them thrive with vitality, energy, and the joy of a longer, healthier life.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[19px] font-semibold leading-[150%] tracking-[0.5px] text-primary">
              Key Points:
            </h4>
            <div className="flex flex-col gap-3">
              {KeyPointsCol.map(({ percent, description }: KeyProps, index: number) => (
                <KeyPoints key={`${index}-${percent}`} percent={percent} description={description} />
              ))
              }
            </div>
          </div>
        </div>
        <img src={DogSrc} alt="Dog" />
      </div>

      {/* Photo Grid */}
      <div className="flex flex-col gap-20 pt-20 pb-20">
        {
          PhotoGridData.map(({ title, description, image, reverse }, index) => (
            <PhotoGrid key={`${index}-${title}`} dogImage={image} title={title} description={description} reverse={reverse} />
          ))
        }

      </div>
    </div>
  )
}

export default App
