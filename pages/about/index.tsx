import React from 'react';
import Styles from './about.module.css';

const avoFacts = [
  {
    title: 'Most avocados come from Mexico',
    content:
      'While avocados are grown in California and Florida, the majority sold in grocery stores come from south central Mexico. The main reason for the abundance of “south of the border” avocados is that Mexico is blessed with a year-round growing climate. The avocado is believed to have originated in the state of Puebla, Mexico, as far back as 10,000 B.C.',
  },
  {
    title: 'The conquistadors were huge fans.',
    content:
      'Spanish explorers arriving in Mexico during the 16th century survived on avocados and were the first Europeans to consume them. As a result of the Spanish Conquest, avocados spread to South America and Central America. ',
  },
  {
    title: '“Avocado” wasn’t its original name.',
    content:
      'Irishman Sir Hans Sloane called it an avocado in 1696 in a Jamaican-plants catalog. He also dubbed the avocado tree the “alligator pear tree.”',
  },
  {
    title: 'It’s actually a fruit.',
    content:
      'Did you know that an avocado is a fruit? While definitely not sweet, it falls firmly in the fruit-not the vegetable-family. That’s because the avocado tree is part of the flowering-plant family Lauraceae.',
  },
  {
    title: 'Some famous celebrities are avocado farmers.',
    content:
      'Joining the ranks of California’s avocado farmers are actors like Tom Selleck (whose ranch was once owned by actor Dean Martin) and Oscar winner Jamie Foxx. Also on Foxx’s 40-acre ranch? A recording studio!',
  },
  {
    title: 'There are different varieties.',
    content:
      'Avocados’ taste and texture depend on the region they’re from. Florida-grown avocados are lower in fat and firmer, while Hass avocados, from Mexico, are perfect for mashing and whipping.',
  },
  {
    title: 'They’ve one-upped the banana.',
    content:
      'Hard to believe, but it’s true: Avocados have higher levels of potassium than bananas. In fact, the levels are almost double-a single avocado contains 975 milligrams of potassium, compared to 487 milligrams in a banana. So throw avocado spears into your smoothie, why don’t you? Start with this recipe for Green Breakfast Smoothie.',
  },
  
  {
    title: 'Avocados may help lower your cholesterol.',
    content:
      'Trying to improve your health? Fold more avocados into your diet. A 2015 study by the American Heart Association found that eating an avocado daily can improve LDL cholesterol levels (that’s the bad cholesterol) in people who struggle with obesity or are overweight.',
  },
  {
    title: 'You can substitute it for butter.',
    content:
      'In lieu of butter, many vegan bakers use avocado to add moistness to cupcakes, cakes and other baked goods. Want to give it a go? Keep in mind that avocados can give a green hue to the finished dish.',
  },
  
]

const About = () => {
  return (
    <div className={Styles.container}>
        <h1>9 Surprising Facts About Avocados</h1>
        
          
        
        <figure>
          <img src="https://images.pexels.com/photos/6102655/pexels-photo-6102655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Avocados on a table" />
          <figcaption>
            Originally from{' '}
            <a
              target="_blank"
              href="https://www.tasteofhome.com/article/13-surprising-facts-about-avocados/"
            >
              Taste of Home
            </a>
          </figcaption>
        </figure>
        <ol className={Styles.article}>
          {avoFacts.map(({ title, content }) => (
            <li key={title}>
              <h3 className={''}>{title}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ol>
      
    </div>
  );
}

export default About;