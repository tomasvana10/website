"use client";
import { ParallaxBanner } from "react-scroll-parallax";
import { EasingPreset } from "react-scroll-parallax";

const genericTextCSS =
  "font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 shadow-gray-900";

export default function Banner() {
  return (
    <div className="w-[100%]">
      <ParallaxBanner
        layers={[
          {
            image: "/mountain-bg.png",
            translateY: [0, 5],
            opacity: [1, 0.6],
            scale: [1.05, 1],
            shouldAlwaysCompleteAnimation: true,
            easing: EasingPreset.easeOutCubic,
          },
          {
            speed: -10,
            translateY: [-10, -15],
            scale: [1, 1.05],
            shouldAlwaysCompleteAnimation: true,
            easing: EasingPreset.easeOutCubic,
            children: (
              <div className="absolute inset-1 flex items-center justify-center flex-col">
                <h1 className={`text-5xl sm:text-7xl md:text-8xl ${genericTextCSS}`}>Tomas Vana</h1>
                <h1 className={`text-2xl sm:text-3xl ${genericTextCSS} font-medium`}>Developer</h1>
              </div>
            ),
          },
          {
            image: "/mountain-fg.png",
            translateY: [0, 15],
            scale: [1, 1.2],
            shouldAlwaysCompleteAnimation: true,
            easing: EasingPreset.easeOutCubic,
          },
          {
            opacity: [0, 1.0],
            shouldAlwaysCompleteAnimation: true,
            children: <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-base-100" />,
          },
        ]}
        className="aspect-[6/11] min-[750px]:aspect-[8/11] min-[1000px]:aspect-[2/1] bg-gray-900"
      />
    </div>
  );
}
2 / 1;
6 / 11;
