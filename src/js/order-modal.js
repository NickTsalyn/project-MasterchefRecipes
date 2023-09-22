import * as basicLightbox from 'basiclightbox';
import Notiflix from 'notiflix';
import axios from 'axios';
import closeBtnImg from '../img/icons.svg#close-icon'

const order = document.querySelector('.ord-btn');
const orderBtn = document.querySelector('.order-btn')
const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/orders/add';
const namePattern = '/^[a-zA-Zа-яА-Я-і-І-ї-Ї]+$/';
const emailPattern = '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/';
const numberPattern = '/^d{10}$/';

order.addEventListener('click', orderNow);
orderBtn.addEventListener('click', orderNow);

  function orderNow() {
  const content = `
      <div class="modal">
      <h4 class="ord-title">Order now</h4>
        <form class="order-form">
          <label for="ord-name" class="label">Name
            <input required type="text" class="input" id="ord-name" name="ord-name" />
          </label>
          <label for="ord-tel" class="label">Phone number
            <input required type="tel" class="input" id="ord-tel" name="ord-tel" />
          </label>
          <label for="ord-email" class="label">Email
            <input required type="email" class="input" id="ord-email" name="ord-email" />
          </label>
          <label for="ord-comment" class="label">Comment
            <textarea id="ord-comment" class="comment" name="ord-comment"></textarea>
          </label>
          <button type="submit" class="send-button">Send</button>
        </form>
        <button class="ord-close-btn">
        <svg class="ord-close-icon">
          <use href=${closeBtnImg}></use>
        </svg>
      </button>
      </div>`;

  const orderModal = basicLightbox.create(content);
  orderModal.show();

  const formElement = document.querySelector('.order-form');
  formElement.addEventListener('submit', e => {
    e.preventDefault();
    submitFormData();

    if (validateFormData()) {
      return;
    } else {
      Notiflix.Notify.warning('Please fill out all required fields.');
    }

    function validateFormData() {
      const formFields = {
        name: document.querySelector('#ord-name').value.trim(),
        phone: document.querySelector('#ord-tel').value.trim(),
        email: document.querySelector('#ord-email').value.trim(),
      };

      if (!formFields.name || !formFields.phone || !formFields.email) {
        return;
      } else if (!namePattern.test(formFields.name) || !numberPattern.test(formFields.phone) || !emailPattern.test(formFields.email)) {
        return;
      }

      return true;
    }

    function submitFormData() {
      const orderData = {
        name: document.querySelector('#ord-name').value.trim(),
        phone: document.querySelector('#ord-tel').value.trim(),
        email: document.querySelector('#ord-email').value.trim(),
      };

      const commentValue = document.querySelector('.comment').value.trim();

      if (commentValue !== "") {
        orderData.comment = commentValue;
      }

      axios
        .post(BASE_URL, orderData)
        .then(() => {
          Notiflix.Notify.success('Order submitted successfully');
        })
        .catch(() => {
          Notiflix.Notify.failure(
            'An error occurred while submitting the order.'
          );
        })
        .finally(() => {
          orderModal.close();
        });
    }
  });

  const closeBtn = document.querySelector('.ord-close-btn')
  closeBtn.addEventListener('click', () => {
    orderModal.close()
  })
};
