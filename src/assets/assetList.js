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

const _getImageData = () => {
  return [
    // imageUrl: path to the image
    // title: title of the image, used for linking locale strings
    // assetType: assset type of the image, used for filtering images by pull down next to the search box
    // category: category of the image, used for categorizing items in the list view
    // Arrow
    {
      imageUrl: './images/tabler-icons/outline/arrow-up.png',
      title: 'arrow-up',
      assetType: 'outline',
      category: 'arrow',
    },
    {
      imageUrl: './images/tabler-icons/outline/arrow-down.png',
      title: 'arrow-down',
      assetType: 'outline',
      category: 'arrow',
    },
    {
      imageUrl: './images/tabler-icons/outline/arrow-left.png',
      title: 'arrow-left',
      assetType: 'outline',
      category: 'arrow',
    },
    {
      imageUrl: './images/tabler-icons/outline/arrow-right.png',
      title: 'arrow-right',
      assetType: 'outline',
      category: 'arrow',
    },
    {
      imageUrl: './images/tabler-icons/outline/arrow-back.png',
      title: 'arrow-back',
      assetType: 'outline',
      category: 'arrow',
    },

    {
      imageUrl: './images/tabler-icons/outline/arrows-up.png',
      title: 'arrows-up',
      assetType: 'outline',
      category: 'arrow',
    },
    {
      imageUrl: './images/tabler-icons/outline/arrows-down.png',
      title: 'arrows-down',
      assetType: 'outline',
      category: 'arrow',
    },
    {
      imageUrl: './images/tabler-icons/outline/arrows-left.png',
      title: 'arrows-left',
      assetType: 'outline',
      category: 'arrow',
    },
    {
      imageUrl: './images/tabler-icons/outline/arrows-right.png',
      title: 'arrows-right',
      assetType: 'outline',
      category: 'arrow',
    },
    {
      imageUrl: './images/tabler-icons/outline/arrows-down-up.png',
      title: 'arrows-down-up',
      assetType: 'outline',
      category: 'arrow',
    },
    {
      imageUrl: './images/tabler-icons/outline/arrows-up-down.png',
      title: 'arrows-up-down',
      assetType: 'outline',
      category: 'arrow',
    },
    {
      imageUrl: './images/tabler-icons/outline/arrows-left-right.png',
      title: 'arrows-left-right',
      assetType: 'outline',
      category: 'arrow',
    },
    {
      imageUrl: './images/tabler-icons/filled/arrow-big-up.png',
      title: 'arrow-big-up',
      assetType: 'filled',
      category: 'arrow',
    },
    {
      imageUrl: './images/tabler-icons/filled/arrow-big-down.png',
      title: 'arrow-big-down',
      assetType: 'filled',
      category: 'arrow',
    },

    {
      imageUrl: './images/tabler-icons/filled/arrow-big-left.png',
      title: 'arrow-big-left',
      assetType: 'filled',
      category: 'arrow',
    },
    {
      imageUrl: './images/tabler-icons/filled/arrow-big-right.png',
      title: 'arrow-big-right',
      assetType: 'filled',
      category: 'arrow',
    },
    {
      imageUrl: './images/tabler-icons/filled/arrow-big-up-line.png',
      title: 'arrow-big-up-line',
      assetType: 'filled',
      category: 'arrow',
    },
    {
      imageUrl: './images/tabler-icons/filled/arrow-big-down-line.png',
      title: 'arrow-big-down-line',
      assetType: 'filled',
      category: 'arrow',
    },
    {
      imageUrl: './images/tabler-icons/filled/arrow-big-left-line.png',
      title: 'arrow-big-left-line',
      assetType: 'filled',
      category: 'arrow',
    },
    {
      imageUrl: './images/tabler-icons/filled/arrow-big-right-line.png',
      title: 'arrow-big-right-line',
      assetType: 'filled',
      category: 'arrow',
    },
    {
      imageUrl: './images/tabler-icons/outline/circle-arrow-up.png',
      title: 'circle-arrow-up',
      assetType: 'outline',
      category: 'arrow',
    },
    {
      imageUrl: './images/tabler-icons/outline/circle-arrow-down.png',
      title: 'circle-arrow-down',
      assetType: 'outline',
      category: 'arrow',
    },
    {
      imageUrl: './images/tabler-icons/outline/circle-arrow-left.png',
      title: 'circle-arrow-left',
      assetType: 'outline',
      category: 'arrow',
    },
    {
      imageUrl: './images/tabler-icons/outline/circle-arrow-right.png',
      title: 'circle-arrow-right',
      assetType: 'outline',
      category: 'arrow',
    },
    {
      imageUrl: './images/tabler-icons/outline/square-arrow-up.png',
      title: 'square-arrow-up',
      assetType: 'outline',
      category: 'arrow',
    },
    {
      imageUrl: './images/tabler-icons/outline/square-arrow-down.png',
      title: 'square-arrow-down',
      assetType: 'outline',
      category: 'arrow',
    },
    {
      imageUrl: './images/tabler-icons/outline/square-arrow-left.png',
      title: 'square-arrow-left',
      assetType: 'outline',
      category: 'arrow',
    },
    {
      imageUrl: './images/tabler-icons/outline/square-arrow-right.png',
      title: 'square-arrow-right',
      assetType: 'outline',
      category: 'arrow',
    },
    // Sports
    {
      imageUrl: './images/tabler-icons/filled/pennant.png',
      title: 'pennant',
      assetType: 'filled',
      category: 'sport',
    },
    {
      imageUrl: './images/tabler-icons/outline/shirt.png',
      title: 'shirt',
      assetType: 'outline',
      category: 'sport',
    },
    {
      imageUrl: './images/tabler-icons/outline/shirt-sport.png',
      title: 'shirt-sport',
      assetType: 'outline',
      category: 'sport',
    },
    {
      imageUrl: './images/tabler-icons/outline/jetpack.png',
      title: 'jetpack',
      assetType: 'outline',
      category: 'sport',
    },
    {
      imageUrl: './images/tabler-icons/filled/balloon.png',
      title: 'balloon',
      assetType: 'filled',
      category: 'sport',
    },
    {
      imageUrl: './images/tabler-icons/outline/ball-american-football.png',
      title: 'ball-american-football',
      assetType: 'outline',
      category: 'sport',
    },
    {
      imageUrl: './images/tabler-icons/outline/ball-football.png',
      title: 'ball-football',
      assetType: 'outline',
      category: 'sport',
    },
    {
      imageUrl: './images/tabler-icons/outline/ball-baseball.png',
      title: 'ball-baseball',
      assetType: 'outline',
      category: 'sport',
    },
    {
      imageUrl: './images/tabler-icons/outline/cricket.png',
      title: 'cricket',
      assetType: 'outline',
      category: 'sport',
    },
    {
      imageUrl: './images/tabler-icons/outline/curling.png',
      title: 'curling',
      assetType: 'outline',
      category: 'sport',
    },
    {
      imageUrl: './images/tabler-icons/outline/disc-golf.png',
      title: 'disc-golf',
      assetType: 'outline',
      category: 'sport',
    },
    {
      imageUrl: './images/tabler-icons/outline/ice-skating.png',
      title: 'ice-skating',
      assetType: 'outline',
      category: 'sport',
    },
    {
      imageUrl: './images/tabler-icons/outline/ping-pong.png',
      title: 'ping-pong',
      assetType: 'outline',
      category: 'sport',
    },
    {
      imageUrl: './images/tabler-icons/outline/roller-skating.png',
      title: 'roller-skating',
      assetType: 'outline',
      category: 'sport',
    },
    {
      imageUrl: './images/tabler-icons/outline/shoe.png',
      title: 'shoe',
      assetType: 'outline',
      category: 'sport',
    },
    {
      imageUrl: './images/tabler-icons/outline/swimming.png',
      title: 'swimming',
      assetType: 'outline',
      category: 'sport',
    },
    {
      imageUrl: './images/tabler-icons/outline/yoga.png',
      title: 'yoga',
      assetType: 'outline',
      category: 'sport',
    },
    {
      imageUrl: './images/tabler-icons/outline/snowboarding.png',
      title: 'snowboarding',
      assetType: 'outline',
      category: 'sport',
    },
    // Animal
    {
      imageUrl: './images/tabler-icons/outline/bat.png',
      title: 'bat',
      assetType: 'outline',
      category: 'animal',
    },
    {
      imageUrl: './images/tabler-icons/outline/butterfly.png',
      title: 'butterfly',
      assetType: 'outline',
      category: 'animal',
    },
    {
      imageUrl: './images/tabler-icons/outline/cat.png',
      title: 'cat',
      assetType: 'outline',
      category: 'animal',
    },
    {
      imageUrl: './images/tabler-icons/outline/deer.png',
      title: 'deer',
      assetType: 'outline',
      category: 'animal',
    },
    {
      imageUrl: './images/tabler-icons/outline/dog-bowl.png',
      title: 'dog-bowl',
      assetType: 'outline',
      category: 'animal',
    },
    {
      imageUrl: './images/tabler-icons/outline/dog.png',
      title: 'dog',
      assetType: 'outline',
      category: 'animal',
    },
    {
      imageUrl: './images/tabler-icons/outline/feather.png',
      title: 'feather',
      assetType: 'outline',
      category: 'animal',
    },
    {
      imageUrl: './images/tabler-icons/outline/fish.png',
      title: 'fish',
      assetType: 'outline',
      category: 'animal',
    },
    {
      imageUrl: './images/tabler-icons/outline/fish-bone.png',
      title: 'fish-bone',
      assetType: 'outline',
      category: 'animal',
    },
    {
      imageUrl: './images/tabler-icons/outline/paw.png',
      title: 'paw',
      assetType: 'outline',
      category: 'animal',
    },
    {
      imageUrl: './images/tabler-icons/outline/pig.png',
      title: 'pig',
      assetType: 'outline',
      category: 'animal',
    },
    {
      imageUrl: './images/tabler-icons/outline/spider.png',
      title: 'spider',
      assetType: 'outline',
      category: 'animal',
    },
    {
      imageUrl: './images/tabler-icons/outline/horse.png',
      title: 'horse',
      assetType: 'outline',
      category: 'animal',
    },

    // Mood

    {
      imageUrl: './images/tabler-icons/outline/mood-angry.png',
      title: 'mood-angry',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-annoyed.png',
      title: 'mood-annoyed',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-boy.png',
      title: 'mood-boy',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-confuzed.png',
      title: 'mood-confuzed',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-crazy-happy.png',
      title: 'mood-crazy-happy',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-cry.png',
      title: 'mood-cry',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-empty.png',
      title: 'mood-empty',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-happy.png',
      title: 'mood-happy',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-heart.png',
      title: 'mood-heart',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-kid.png',
      title: 'mood-kid',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-look-up.png',
      title: 'mood-look-up',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-look-down.png',
      title: 'mood-look-down',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-look-left.png',
      title: 'mood-look-left',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-look-right.png',
      title: 'mood-look-right',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-nerd.png',
      title: 'mood-nerd',
      assetType: 'outline',
      category: 'mood',
    },

    {
      imageUrl: './images/tabler-icons/outline/mood-nervous.png',
      title: 'mood-nervous',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-neutral.png',
      title: 'mood-neutral',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-sad-2.png',
      title: 'mood-sad-2',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-sad-dizzy.png',
      title: 'mood-sad-dizzy',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-sad-squint.png',
      title: 'mood-sad-squint',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-sad.png',
      title: 'mood-sad',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-sick.png',
      title: 'mood-sick',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-silence.png',
      title: 'mood-silence',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-sing.png',
      title: 'mood-sing',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-smile-beam.png',
      title: 'mood-smile-beam',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-smile-dizzy.png',
      title: 'mood-smile-dizzy',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-smile.png',
      title: 'mood-smile',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-surprised.png',
      title: 'mood-surprised',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-tongue-wink-2.png',
      title: 'mood-tongue-wink-2',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-tongue-wink.png',
      title: 'mood-tongue-wink',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-tongue.png',
      title: 'mood-tongue',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-unamused.png',
      title: 'mood-unamused',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-wink-2.png',
      title: 'mood-wink-2',
      assetType: 'outline',
      category: 'mood',
    },
    {
      imageUrl: './images/tabler-icons/outline/mood-wink.png',
      title: 'mood-wink',
      assetType: 'outline',
      category: 'mood',
    },

    // Food
    {
      imageUrl: './images/tabler-icons/outline/baby-bottle.png',
      title: 'baby-bottle',
      assetType: 'outline',
      category: 'food',
    },

    {
      imageUrl: './images/tabler-icons/outline/blender.png',
      title: 'blender',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/bread.png',
      title: 'bread',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/candy.png',
      title: 'candy',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/carrot.png',
      title: 'carrot',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/cheese.png',
      title: 'cheese',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/chef-hat.png',
      title: 'chef-hat',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/cherry.png',
      title: 'cherry',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/cup.png',
      title: 'cup',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/egg-cracked.png',
      title: 'egg-cracked',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/egg-fried.png',
      title: 'egg-fried',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/egg.png',
      title: 'egg',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/eggs.png',
      title: 'eggs',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/fridge.png',
      title: 'fridge',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/grill.png',
      title: 'grill',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/ice-cream-2.png',
      title: 'ice-cream-2',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/lemon-2.png',
      title: 'lemon-2',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/lemon.png',
      title: 'lemon',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/lollipop.png',
      title: 'lollipop',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/meat.png',
      title: 'meat',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/microwave.png',
      title: 'microwave',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/milk.png',
      title: 'milk',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/milkshake.png',
      title: 'milkshake',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/mushroom.png',
      title: 'mushroom',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/pepper.png',
      title: 'pepper',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/pizza.png',
      title: 'pizza',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/salad.png',
      title: 'salad',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/salt.png',
      title: 'salt',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/sausage.png',
      title: 'sausage',
      assetType: 'outline',
      category: 'food',
    },
    {
      imageUrl: './images/tabler-icons/outline/soup.png',
      title: 'soup',
      assetType: 'outline',
      category: 'food',
    },

    // Vehicle

    {
      imageUrl: './images/tabler-icons/outline/ambulance.png',
      title: 'ambulance',
      assetType: 'outline',
      category: 'vehicle',
    },
    {
      imageUrl: './images/tabler-icons/outline/bike.png',
      title: 'bike',
      assetType: 'outline',
      category: 'vehicle',
    },
    {
      imageUrl: './images/tabler-icons/outline/bus.png',
      title: 'bus',
      assetType: 'outline',
      category: 'vehicle',
    },
    {
      imageUrl: './images/tabler-icons/outline/car-suv.png',
      title: 'car-suv',
      assetType: 'outline',
      category: 'vehicle',
    },
    {
      imageUrl: './images/tabler-icons/outline/car.png',
      title: 'car',
      assetType: 'outline',
      category: 'vehicle',
    },
    {
      imageUrl: './images/tabler-icons/outline/firetruck.png',
      title: 'firetruck',
      assetType: 'outline',
      category: 'vehicle',
    },
    {
      imageUrl: './images/tabler-icons/outline/moped.png',
      title: 'moped',
      assetType: 'outline',
      category: 'vehicle',
    },
    {
      imageUrl: './images/tabler-icons/outline/motorbike.png',
      title: 'motorbike',
      assetType: 'outline',
      category: 'vehicle',
    },
    {
      imageUrl: './images/tabler-icons/outline/scooter-electric.png',
      title: 'scooter-electric',
      assetType: 'outline',
      category: 'vehicle',
    },
    {
      imageUrl: './images/tabler-icons/outline/scooter.png',
      title: 'scooter',
      assetType: 'outline',
      category: 'vehicle',
    },
    {
      imageUrl: './images/tabler-icons/outline/skateboard.png',
      title: 'skateboard',
      assetType: 'outline',
      category: 'vehicle',
    },
    {
      imageUrl: './images/tabler-icons/outline/steering-wheel.png',
      title: 'steering-wheel',
      assetType: 'outline',
      category: 'vehicle',
    },
    {
      imageUrl: './images/tabler-icons/outline/tir.png',
      title: 'tir',
      assetType: 'outline',
      category: 'vehicle',
    },
    {
      imageUrl: './images/tabler-icons/outline/tractor.png',
      title: 'tractor',
      assetType: 'outline',
      category: 'vehicle',
    },
    {
      imageUrl: './images/tabler-icons/outline/traffic-cone.png',
      title: 'traffic-cone',
      assetType: 'outline',
      category: 'vehicle',
    },
    {
      imageUrl: './images/tabler-icons/outline/traffic-lights.png',
      title: 'traffic-lights',
      assetType: 'outline',
      category: 'vehicle',
    },
    {
      imageUrl: './images/tabler-icons/outline/car-garage.png',
      title: 'car-garage',
      assetType: 'outline',
      category: 'vehicle',
    },
    {
      imageUrl: './images/tabler-icons/outline/gas-station.png',
      title: 'gas-station',
      assetType: 'outline',
      category: 'vehicle',
    },
    {
      imageUrl: './images/tabler-icons/outline/parking-circle.png',
      title: 'parking-circle',
      assetType: 'outline',
      category: 'vehicle',
    },
    //END
  ];

  // Add more image data as needed
};

const getImageData = (localeStrings) => {
  return _getImageData().map((image) => ({
    ...image,
    title: localeStrings.assets.title[image.title],
  }));
};

export default getImageData;
