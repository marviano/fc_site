import React, { useState } from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

// custom code
import biayaKemitraanImage from "./images/jackschicken/biaya-kemitraan.png";
import syaratKemitraanImage from "./images/jackschicken/syarat-kemitraan.png";
import sistemKerjasamaImage from "./images/jackschicken/sistem-kerjasama.png";
import prosedurKemitraanImage from "./images/jackschicken/prosedurkemitraan.png";
import proyeksiBEPImage from "./images/jackschicken/proyeksibep2.png";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";


//custom code
const FranchiseDetails = ({ HighlightedText }) => {
  const [activeButton, setActiveButton] = useState(0);
  const buttons = ["Biaya Kemitraan", "Syarat Kemitraan", "Sistem Kerjasama", "Prosedur Kemitraan", "Proyeksi BEP"];

  const buttonColors = ["#6DB23F", "#09A95A", "#009D76", "#008F8D", "#007F9D", "#006EA2"];

  const content = [
    biayaKemitraanImage,
    syaratKemitraanImage,
    sistemKerjasamaImage,
    prosedurKemitraanImage,
    proyeksiBEPImage
  ];

  return (
    <div css={tw`mt-12 mb-12 text-center`}>
      <div css={tw`text-4xl font-bold mb-8`}>
        <HighlightedText>Franchise Details</HighlightedText>
      </div>
      <div css={[
        tw`flex flex-wrap justify-center gap-4`,
        css`
          @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
          }
        `
      ]}>
        {buttons.map((button, index) => (
          <button
            key={index}
            css={[
              tw`px-4 py-2 rounded-lg focus:outline-none text-sm transition-all duration-300`,
              css`
                background-color: ${activeButton === index ? buttonColors[index] : "transparent"};
                color: ${activeButton === index ? "white" : buttonColors[index]};
                border: 2px solid ${buttonColors[index]};
                
                @media (max-width: 768px) {
                  width: 80%;
                  max-width: 300px;
                }

                &:hover {
                  background-color: ${buttonColors[index]};
                  color: white;
                }
              `
            ]}
            onClick={() => setActiveButton(index)}
          >
            {button}
          </button>
        ))}
      </div>
      <div css={tw`mt-8 flex justify-center`}>
        <img css={tw`max-w-full h-auto`} src={content[activeButton]} alt={buttons[activeButton]} />
      </div>
    </div>
  );
};
//end of custom code

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-100 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Jack's Chicken
          <HighlightedText>
            <span tw="text-4xl">Jack of All Fried Chicken.</span>
          </HighlightedText>
        </>}
        description="."
        imageSrc="https://media.istockphoto.com/id/1040846840/id/foto/sayap-ayam-goreng-dengan-kentang-goreng.jpg?s=1024x1024&w=is&k=20&c=3DimrubY6AEMV30L-O34lKSiJ5HUHvnKjq0zimjIGMc="
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Order Now"
        watchVideoButtonText="Meet The Chefs"
      />
      <MainFeature
        subheading={<Subheading>Jack's Fleet</Subheading>}
        heading={
          <>
            Merekrut Mitra
            <wbr /> <HighlightedText> Seluruh Indonesia</HighlightedText>
          </>
        }
        description={
          <Description>
            Dimanapun anda berada<br />Jadilah bagian dari armada Jack's Fried Chicken
            <br />
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Rincian Kemitraan"
        imageSrc={
          "https://www.shutterstock.com/shutterstock/photos/2234906561/display_1500/stock-photo-woman-hand-taking-the-fried-chicken-wings-by-hands-over-dark-background-with-copy-space-2234906561.jpg"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      {/* <TabGrid
        heading={
          <>
            Checkout our <HighlightedText>menu.</HighlightedText>
          </>
        }
      /> */}

      {/* <Features
        heading={
          <>
            Amazing <HighlightedText>Services.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "230+ Locations",
            description: "Preaching the happiness of jack's signature fried chicken",
            url: "https://google.com"
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Constant Crisp",
            description: "Quality comes first to deliver the crispiness and savoriness of Jack's",
            url: "https://timerse.com"
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Birthday Catering",
            description: "Celebrate your +1 happiness with Jack's",
            url: "https://reddit.com"
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      /> */}

      <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={<>Why <HighlightedText>Choose Us ?</HighlightedText></>}
        statistics={[
          {
            key: "Orders",
            value: "94000+",
          },
          {
            key: "Customers",
            value: "11000+"
          },
          {
            key: "Chefs",
            value: "1500+"
          }
        ]}
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />

      {/* Custom code */}
      <FranchiseDetails HighlightedText={HighlightedText} />

      {/* <Testimonial
        subheading=""
        heading={<>Customers <HighlightedText>Love Us.</HighlightedText></>}
      /> */}

      <DownloadApp
        text={<>People around you are ordering delicious meals using the <HighlightedTextInverse>Jack's Chicken</HighlightedTextInverse></>}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
