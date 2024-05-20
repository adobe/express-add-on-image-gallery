/*
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const { convertFile } = require("convert-svg-to-png");
const fs = require("fs");
const path = require("path");

const icon_image_width = 240;

// Delete .gitkeep
const gitkeep = "./src/images/.gitkeep";

if (fs.existsSync(gitkeep)) {
  fs.unlinkSync(gitkeep);
  console.log(`Deleted ${gitkeep}`);
}

const _imageData = [
  {
    imageUrl: "./images/tabler-icons/outline/arrow-up.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/arrow-down.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/arrow-left.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/arrow-right.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/arrow-back.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/arrows-up.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/arrows-down.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/arrows-left.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/arrows-right.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/arrows-down-up.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/arrows-up-down.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/arrows-left-right.png",
  },
  {
    imageUrl: "./images/tabler-icons/filled/arrow-big-up.png",
  },
  {
    imageUrl: "./images/tabler-icons/filled/arrow-big-down.png",
  },

  {
    imageUrl: "./images/tabler-icons/filled/arrow-big-left.png",
  },
  {
    imageUrl: "./images/tabler-icons/filled/arrow-big-right.png",
  },
  {
    imageUrl: "./images/tabler-icons/filled/arrow-big-up-line.png",
  },
  {
    imageUrl: "./images/tabler-icons/filled/arrow-big-down-line.png",
  },
  {
    imageUrl: "./images/tabler-icons/filled/arrow-big-left-line.png",
  },
  {
    imageUrl: "./images/tabler-icons/filled/arrow-big-right-line.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/circle-arrow-up.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/circle-arrow-down.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/circle-arrow-left.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/circle-arrow-right.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/square-arrow-up.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/square-arrow-down.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/square-arrow-left.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/square-arrow-right.png",
  },

  {
    imageUrl: "./images/tabler-icons/filled/pennant.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/shirt.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/shirt-sport.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/jetpack.png",
  },
  {
    imageUrl: "./images/tabler-icons/filled/balloon.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/ball-american-football.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/ball-football.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/ball-baseball.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/cricket.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/curling.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/disc-golf.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/ice-skating.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/ping-pong.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/roller-skating.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/shoe.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/swimming.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/yoga.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/snowboarding.png",
  },

  {
    imageUrl: "./images/tabler-icons/outline/bat.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/butterfly.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/cat.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/deer.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/dog-bowl.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/dog.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/feather.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/fish.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/fish-bone.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/paw.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/pig.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/spider.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/horse.png",
  },

  {
    imageUrl: "./images/tabler-icons/outline/mood-angry.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-annoyed.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-boy.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-confuzed.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-crazy-happy.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-cry.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-empty.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-happy.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-heart.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-kid.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-look-up.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-look-down.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-look-left.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-look-right.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-nerd.png",
  },

  {
    imageUrl: "./images/tabler-icons/outline/mood-nervous.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-neutral.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-sad-2.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-sad-dizzy.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-sad-squint.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-sad.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-sick.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-silence.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-sing.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-smile-beam.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-smile-dizzy.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-smile.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-suprised.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-tongue-wink-2.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-tongue-wink.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-tongue.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-unamused.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-wink-2.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mood-wink.png",
  },

  {
    imageUrl: "./images/tabler-icons/outline/baby-bottle.png",
  },

  {
    imageUrl: "./images/tabler-icons/outline/blender.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/bread.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/candy.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/carrot.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/cheese.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/chef-hat.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/cherry.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/cup.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/egg-cracked.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/egg-fried.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/egg.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/eggs.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/fridge.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/grill.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/ice-cream-2.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/lemon-2.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/lemon.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/lollipop.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/meat.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/microwave.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/milk.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/milkshake.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/mushroom.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/pepper.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/pizza.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/salad.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/salt.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/sausage.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/soup.png",
  },

  {
    imageUrl: "./images/tabler-icons/outline/ambulance.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/bike.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/bus.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/car-suv.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/car.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/firetruck.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/moped.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/motorbike.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/scooter-electric.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/scooter.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/skateboard.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/steering-wheel.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/tir.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/tractor.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/traffic-cone.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/traffic-lights.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/car-garage.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/gas-station.png",
  },
  {
    imageUrl: "./images/tabler-icons/outline/parking-circle.png",
  },
];

let p = Promise.resolve();

_imageData.forEach((asset) => {
  p = p.then(async () => {
    const { imageUrl } = asset;
    const inputFilePath = imageUrl
      .replace("./images/tabler-icons/", "./node_modules/@tabler/icons/icons/")
      .replace(".png", ".svg");
    const outputFilePath = imageUrl.replace(
      "./images/tabler-icons/",
      "./src/images/tabler-icons/",
    );
    const outputDir = path.dirname(outputFilePath);

    console.log(`preparing  ${imageUrl}`);

    fs.mkdirSync(outputDir, { recursive: true });
    await convertFile(inputFilePath, {
      outputFilePath,
      width: icon_image_width,
    });
    console.log(
      `converted image from ${inputFilePath} to ${outputFilePath}`,
    );
  });
});

p.then(() => {
  console.log("All images converted");
});
