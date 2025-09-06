
import DogImage1Src from "../assets/Rectangle 7.svg";
import DogImage2Src from "../assets/Rectangle 8.svg";

export interface KeyProps {
  percent: string;
  description: string;
}

export interface PhotoGridDataProps {
  title: string;
  description: string;
  image: string; // Changed from React component to string (image src)
  reverse?: boolean;
}

export const KeyPointsCol: KeyProps[] = [
  {
    percent: "97%",
    description:
      "Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor.",
  },
  {
    percent: "84%",
    description:
      "Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.",
  },
  {
    percent: "92%",
    description:
      "Our dog food's high protein and fat digestibility contribute to ideal stool quality.",
  },
];

export const PhotoGridData: PhotoGridDataProps[] = [
  {
    title: "Improve overall gastrointestinal health for better nutrient absorption",
    description: "Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough formula exclusively tailored to combat the health challenges prevalent in dogs. A staggering 91% of our customers have reported significant improvements in their dogs' health after incorporating our product into their diet.",
    image: DogImage2Src, // Now using string path instead of component
    reverse: false
  },
  {
    title: "Prebiotics nourish the beneficial gut bacteria, supporting digestive health",
    description: "Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota, providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health.",
    image: DogImage1Src, // Now using string path instead of component
    reverse: true
  },
]