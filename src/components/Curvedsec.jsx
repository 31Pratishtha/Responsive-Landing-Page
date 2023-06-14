export const desktopTopImg = (id) => {
  if(id % 3 === 1){
      return "./src/assets/images/bg-section-top-desktop-1.svg";
  }
  else if(id % 3 === 0){
      return "./src/assets/images/bg-section-top-desktop-2.svg";
  }
}


export const desktopBottomImg = (id) => {
  if(id % 3 === 1){
      return "./src/assets/images/bg-section-Bottom-desktop-1.svg";
  }
  else if(id % 3 === 0){
      return "./src/assets/images/bg-section-Bottom-desktop-2.svg";
  }
}


export const mobileTopImg = (id) => {
  if(id % 3 === 1){
      return "./src/assets/images/bg-section-top-mobile-1.svg"
  }
  else if(id % 3 === 0){
      return "./src/assets/images/bg-section-top-mobile-2.svg"
  }
}


export const mobileBottomImg = (id) => {
  if(id % 3 === 1){
      return "./src/assets/images/bg-section-bottom-mobile-1.svg"
  }
  else if(id % 3 === 0){
      return "./src/assets/images/bg-section-bottom-mobile-2.svg"
  }
}


export const desktopFooter = () => {
      return "./src/assets/images/bg-footer-top-desktop.svg"
}


export const mobileFooter = () => {
      return "./src/assets/images/bg-footer-top-mobile.svg"
}