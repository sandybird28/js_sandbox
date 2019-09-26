let color = new (require('./color'));


class MiniSlider {
    constructor(id) {
      this.root = document.getElementById(id);
      this.currentIndex = 0;
      
      this.createButtons();
      this.hideAll();
      this.show(0);
    }
  
    hideAll() {
      for (let i = 0; i < this.root.children.length; i += 1) {
        if (this.root.children[i].tagName === 'IMG') {
          this.root.children[i].style.display = 'none';
        }
      }
    }
  
    show(n) {
      this.currentIndex = n;
      this.root.children[n + 1].style.display = 'inline-block';
    }
  
    createButtons() {
      const prev = document.createElement('button');
      const next = document.createElement('button');
      
      prev.textContent = 'Prev';
      next.textContent = 'Next';
      this.root.insertBefore(prev, this.root.firstChild);
      this.root.appendChild(next);


  
      next.addEventListener('click', () => {
            this.next();        
            next.style.borderColor = color.toString();
        });
      prev.addEventListener('click', () => {
            this.prev()
            prev.style.borderColor = color.toString();
        });
    }
  
    next() {
      this.hideAll();
      let nextIndex = this.currentIndex + 1;
  
      if (nextIndex > this.root.children.length - 3) {
        nextIndex = 0;
      }
  
      this.show(nextIndex);
      color.random();
    }
  
    prev() {
      this.hideAll();
      let nextIndex = this.currentIndex - 1;
  
      if (nextIndex < 0) {
        nextIndex = this.root.children.length - 3;
      }
  
      this.show(nextIndex);
      color.random();

    }
  
    destroy() {
      for (let i = 0; i < this.root.children.length; i += 1) {
        if (this.root.children[i].tagName === 'IMG') {
          this.root.children[i].style.display = '';
        } else {
          this.root.children[i].remove();
          i -= 1;
        }
      }
    }
  }
  
  const slider = new MiniSlider('slide_1');

 
  console.log(color.toString());
  
  window.slider = slider;
  