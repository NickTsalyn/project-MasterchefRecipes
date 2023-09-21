import * as basicLightbox from 'basiclightbox';
import footerImg from '../img/anonimus.jpg'

const titleBtn = document.querySelector('.footer-title');

titleBtn.addEventListener('click', () => {
  const content = `
    <div class="footer-modal">
    <div class="dev-list">
          <ul class="develop-list">
            <li class="item-list">
              <img
                src=${footerImg}
                alt=""
                width="100px"
                height="100px"
                class="develop-img jumping-element1"
              />
              <p class="develop-text jumping-element1">Nick Tsalyn</p>
            </li>
            <li class="item-list">
              <img
                src=${footerImg}
                alt=""
                width="100px"
                height="100px"
                class="develop-img jumping-element2"
              />
              <p class="develop-text jumping-element2">Anna Kulchytska</p>
            </li>
            <li class="item-list">
              <img
                src=${footerImg}
                alt=""
                width="100px"
                height="100px"
                class="develop-img jumping-element3"
              />
              <p class="develop-text jumping-element3">Oleh Panadii</p>
            </li>
            <li class="item-list">
              <img
                src=${footerImg}
                alt=""
                width="100px"
                height="100px"
                class="develop-img jumping-element1"
              />
              <p class="develop-text jumping-element1">Oleksandr Tsybulskiy</p>
            </li>
            <li class="item-list">
              <img
                src=${footerImg}
                alt=""
                width="100px"
                height="100px"
                class="develop-img jumping-element2"
              />
              <p class="develop-text jumping-element2">Daria Musienko</p>
            </li>
            <li class="item-list">
              <img
                src=${footerImg}
                alt=""
                width="100px"
                height="100px"
                class="develop-img jumping-element3"
              />
              <p class="develop-text jumping-element3">Eugene Matviychuk</p>
            </li>
            <li class="item-list">
              <img
                src=${footerImg}
                alt=""
                width="100px"
                height="100px"
                class="develop-img jumping-element1"
              />
              <p class="develop-text jumping-element1">Daryna Petrunina</p>
            </li>
            <li class="item-list">
              <img
                src=${footerImg}
                alt=""
                width="100px"
                height="100px"
                class="develop-img jumping-element2"
              />
              <p class="develop-text jumping-element2">Roman Chuykov</p>
            </li>
            <li class="item-list">
              <img
                src=${footerImg}
                alt=""
                width="100px"
                height="100px"
                class="develop-img jumping-element3"
              />
              <p class="develop-text jumping-element3">Kate Shcherbina</p>
            </li>
          </ul>
        </div>
    </div>`;
  const devWindow = basicLightbox.create(content);
  devWindow.show();
});
