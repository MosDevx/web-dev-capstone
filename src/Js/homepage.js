const src = '../../Assets/Data/speaker-data.json';

// Animate hamburger menu open and close
const hamburger = document.getElementById('hamburger-button');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-opened');
});

// let speakerList = [];

async function getSpeakerList() {
  const response = await fetch(src);
  let speakerList = [];
  if (!response.ok) {
    console.error(response.status, response.statusText);
  } else {
    const data = await response.json();
    const { speakers } = data;
    speakerList = speakers;
  }
  return speakerList;
}



const speakersContainer = document.getElementById('speaker-list-display');

const fragment = document.createDocumentFragment();

async function generateSpeakers() {
  const speakerList = await getSpeakerList();
  
  speakerList.forEach((speaker) => {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('grid', 'grid-cols-4', 'place-items-center', 'max-w-lg');

    const picImg = document.createElement('img');
    picImg.src = speaker.imgUrl;
    picImg.alt = speaker.imgAlt;
    mainDiv.appendChild(picImg);

    const innerDiv = document.createElement('div');
    innerDiv.classList.add('col-start-2', 'col-span-3', 'gap-x-1', 'flex', 'flex-col');

    const nameHeading = document.createElement('h3');
    nameHeading.classList.add('text-xl', 'font-bold');
    nameHeading.textContent = speaker.name;
    innerDiv.appendChild(nameHeading);

    const positionDescription = document.createElement('small');
    positionDescription.classList.add('text-base', 'italic', 'text-primary-orange');
    positionDescription.textContent = speaker.position;
    innerDiv.appendChild(positionDescription);

    const divider = document.createElement('div');
    divider.classList.add('bg-primary-grey','w-6','flex','justify-center','self-start','h-[2px]','rounded-lg', 'my-3');
    innerDiv.appendChild(divider);

    const writeupParagraph = document.createElement('p');
    writeupParagraph.textContent = speaker.writeup;
    innerDiv.appendChild(writeupParagraph);

    mainDiv.appendChild(innerDiv);

    fragment.appendChild(mainDiv);
  });

  speakersContainer.appendChild(fragment);
}

generateSpeakers();