var currentTheme = '';

const themes = {
  'travel0': {
    images: {
      headerURL: 'sun.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: '#111',
    }
  },
  'travel1': {
    images: {
      headerURL: 'travel1.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: 'white',
    }
  },
  'travel2': {
    images: {
      headerURL: 'travel2.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: 'black',
    }
  },
  'travel3': {
    images: {
      headerURL: 'travel3.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: 'black',
    }
  },
  'travel4': {
    images: {
      headerURL: 'travel4.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: 'black',
    }
  },
  'travel5': {
    images: {
      headerURL: 'travel5.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: 'black',
    }
  },
  'travel6': {
    images: {
      headerURL: 'travel6.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: 'white',
    }
  },
  'travel7': {
    images: {
      headerURL: 'travel7.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: 'black',
    }
  },
  'travel8': {
    images: {
      headerURL: 'travel8.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: 'white',
    }
  },
  'travel9': {
    images: {
      headerURL: 'travel9.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: 'black',
    }
  },
  'travel10': {
    images: {
      headerURL: 'travel10.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: 'black',
    }
  },
  'travel11': {
    images: {
      headerURL: 'travel11.jpeg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: 'black',
    }
  },
  'travel12': {
    images: {
      headerURL: 'travel12.jpeg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: 'black',
    }
  },
  'travel13': {
    images: {
      headerURL: 'travel13.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: 'white',
    }
  },
  'travel14': {
    images: {
      headerURL: 'travel14.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: 'black',
    }
  },
  'travel15': {
    images: {
      headerURL: 'travel15.png',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: 'black',
    }
  },
  'travel16': {
    images: {
      headerURL: 'travel16.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: 'white',
    }
  },
  'travel17': {
    images: {
      headerURL: 'travel17.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: 'black',
    }
  },
  'travel18': {
    images: {
      headerURL: 'travel15.jpeg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: 'black',
    }
  },
  'travel19': {
    images: {
      headerURL: 'travel19.jpeg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: 'white',
    }
  },
  'travel20': {
    images: {
      headerURL: 'travel20.png',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: 'white',
    }
  },
  'travel21': {
    images: {
      headerURL: 'travel21.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: 'white',
    }
  },
  'travel22': {
    images: {
      headerURL: 'travel22.png',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: 'white',
    }
  },

  'travel23': {
    images: {
      headerURL: 'moon.jpg',
    },
    colors: {
      accentcolor: '#000',
      textcolor: '#fff',
    }
  }
};

function setTheme(theme) {
  if (currentTheme === theme) {
    // No point in changing the theme if it has already been set.
    return;
  }
  currentTheme = theme;
  browser.theme.update(themes[theme]);
}

function checkTime() {
  let date = new Date();
  let hours = date.getHours();
  // Will set the sun theme between 8am and 8pm.
  switch(hours) {
    case 0: 
          setTheme('travel0');
          break;
    case 1: 
          setTheme('travel1');
          break;
    case 2: 
          setTheme('travel2');
          break;
    case 3: 
          setTheme('travel3');
          break;
    case 4: 
          setTheme('travel4');
          break;
    case 5: 
          setTheme('travel5');
          break;
    case 6: 
          setTheme('travel6');
          break;
    case 7: 
          setTheme('travel7');
          break;
    case 8: 
          setTheme('travel8');
          break;
    case 9: 
          setTheme('travel9');
          break;
    case 10: 
          setTheme('travel10');
          break;
    case 11: 
          setTheme('travel11');
          break;
    case 12: 
          setTheme('travel12');
          break;
    case 13: 
          setTheme('travel13');
          break;
    case 14: 
          setTheme('travel14');
          break;
    case 15: 
          setTheme('travel15');
          break;
    case 16: 
          setTheme('travel16');
          break;
    case 17: 
          setTheme('travel17');
          break;
    case 18: 
          setTheme('travel18');
          break;
    case 19: 
          setTheme('travel19');
          break;
    case 20: 
          setTheme('travel20');
          break;
    case 21: 
          setTheme('travel21');
          break;
    case 22: 
          setTheme('travel22');
          break;
    default:
          setTheme('travel10');
  }

}

// On start up, check the time to see what theme to show.
checkTime();

// Set up an alarm to check this regularly.
browser.alarms.onAlarm.addListener(checkTime);
browser.alarms.create('checkTime', {periodInMinutes: 5});
