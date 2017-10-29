import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class TextBalancerService {

  constructor(@Inject(DOCUMENT) private document: any) { }

  public balanceText(element) {
    if (this.textElementIsMultipleLines(element)) {
      element.style.maxWidth = '';
      this.squeezeContainer(element, element.clientHeight, 0, element.clientWidth);
    }
  }

  private squeezeContainer(element, originalHeight, bottomRange, topRange) {
    let mid;
    if (bottomRange >= topRange) {
        element.style.maxWidth = topRange + 'px';
        return;
    }
    mid = (bottomRange + topRange) / 2;
    element.style.maxWidth = mid + 'px';

    if (element.clientHeight > originalHeight) {
        // we've squoze too far and element has spilled onto an additional line; recurse on wider range
        this.squeezeContainer(element, originalHeight, mid + 1, topRange);
    } else {
        // element has not wrapped to another line; keep squeezing!
        this.squeezeContainer(element, originalHeight, bottomRange + 1, mid);
    }
  }

  private textElementIsMultipleLines(element) {
    let firstWordHeight;
    let elementHeight;
    let HEIGHT_OFFSET;
    let elementWords;
    let firstWord;
    let ORIGINAL_ELEMENT_TEXT;

    ORIGINAL_ELEMENT_TEXT = element.innerHTML;

    // usually there is around a 5px discrepency between
    // the first word and the height of the whole headline
    // so subtract the height of the headline by 10 px and
    // we should be good
    HEIGHT_OFFSET = 10;

    // get all the words in the headline as
    // an array -- will include punctuation
    //
    // this is used to put the headline back together
    elementWords = element.innerHTML.split(' ');

    // make span for first word and give it an id
    // so we can access it in le dom
    firstWord = this.document.createElement('span');
    firstWord.id = 'element-first-word';
    firstWord.innerHTML = elementWords[0];

    // this is the entire headline
    // as an array except for first word
    //
    // we will append it to the headline after the span
    elementWords = elementWords.slice(1);

    // empty the headline and append the span to it
    element.innerHTML = '';
    element.appendChild(firstWord);

    // add the rest of the element back to it
    element.innerHTML += ' ' + elementWords.join(' ');

    // update the first word variable in the dom
    firstWord = this.document.getElementById('element-first-word');

    firstWordHeight = firstWord.offsetHeight;
    elementHeight = element.offsetHeight;
    // restore the original element text
    element.innerHTML = ORIGINAL_ELEMENT_TEXT;

    // compare the height of the element and the height of the first word
    return elementHeight - HEIGHT_OFFSET > firstWordHeight;
  }

}
