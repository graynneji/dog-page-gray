import Icon1 from "./assets/g6396.svg?react"
import Icon2 from "./assets/Group.svg?react"
import Icon3 from "./assets/Group(1).svg?react"
import Icon4 from "./assets/001---Vet.svg?react"
import Food from "./assets/Frame 1171276495.svg?react"
import Shield from "./assets/shield-check.svg?react"
import Payments from "./assets/Payments.svg?react"
import Dog from "./assets/Rectangle 15.svg?react"
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
            <Descriptions title="Real Food" description="Wholesome recipes for dogs with real meat and veggies." avatar={<Icon1 />} color="#DCF9CA" />

            <Descriptions title="Premium Ingredient" description="Elevating pet care with unmatched safety and quality." avatar={<Icon2 />} color="#F8F0D6" />

          </div>
          <Food />
          <div className="flex flex-col gap-20">
            <Descriptions title="Made Fresh" description="We prioritize maintaining the integrity of whole foods and nutrition." avatar={<Icon3 />} color="#C8F2E7" />

            <Descriptions title="Vet Developed" description="We raise the bar for dog nutrition, surpassing industry expectations." avatar={<Icon4 />} color="#F7CABD" />
          </div>

        </div>



        {/* button */}
        <div className="flex flex-col gap-[16px]">
          <Buttons>Get your dog's healthy meal today!</Buttons>

          <div className="flex gap-6 justify-center items-center">
            <div className="flex gap-2 justify-center items-center">
              <Shield />
              <span className="text-[13px] leading-[150%] tracking-[0.5px] text-secondary">30-day money back guarantee</span>
            </div>
            <Payments />
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
        <Dog />
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
