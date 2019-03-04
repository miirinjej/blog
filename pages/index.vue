<template>
  <main>
    <header class="main-header">
      <div class="main-header__brand-name">
        Créatif blog
      </div>
      <div class="main-header__toggle-button"></div>
      <v-text-field
        class="main-header__search-bar"
        append-outer-icon="search"
        background-color="transparent"
        label="Search here"
        outline
        type="search"
      />
    </header>
    <section class="main-content">
      <section class="posts">
        <article class="post">
          <header class="post__header">
            <picture>
              <source
                srcset=""
                type="image/webp"
              >
              <source
                srcset=""
                type="image/jpeg"
              >
              <img
                src=""
                alt=""
              >
            </picture>
            <time class="post__date post__date--primary"></time>
            <button class="post__read-button post__read-button--secondary">
              Read
            </button>
          </header>
          <section class="post__content">
            <div>
              <time class="post__date post__date--secondary"></time>
              <span class="post__category"></span>
            </div>
            <div>
              <div>
                <span class="post__author author"></span>
                <span class="author__name"></span>
              </div>
              <div>
                <span class="post__comments comments"></span>
                <span class="comments__count"></span>
              </div>
              <div>
                <span class="post__share share"></span>
                <span class="share__list"></span>
              </div>
            </div>
          </section>
          <section class="post__text">
          </section>
          <button class="post__read-button post__read-button--primary">
            Read
          </button>
          <nav class="post__pagination"></nav>
        </article>
      </section>
      <aside class="sidebar">
        <section class="sidebar__section categories">
          <h2 class="sidebar__heading">
            Categories
          </h2>
          <ul class="categories__list">
            <li class="categories__item">
              Sports
            </li>
          </ul>
        </section>
        <section class="sidebar__section tags">
          <h2 class="sidebar__heading">
            Tags
          </h2>
          <ul class="tags__list">
            <li class="tags__item">
              Food
            </li>
          </ul>
        </section>
        <section class="sidebar__section gallery">
          <ul class="gallery__list">
            <li class="gallery__item">
              <picture>
                <source
                  srcset=""
                  type="image/webp"
                >
                <source
                  srcset=""
                  type="image/jpeg"
                >
                <img
                  src=""
                  alt=""
                >
              </picture>
            </li>
          </ul>
        </section>
      </aside>
    </section>
    <section class="subscribe-section">
      <h2 class="subscribe-section__heading"></h2>
      <p class="subscribe-section__description"></p>
      <label for="subscribe-section__subscribe-bar">
        Email
        <input
          id="subscribe-section__subscribe-bar"
          class="subscribe-section__subscribe-bar"
          type="search"
          name="subscribe-section__subscribe-bar"
        >
      </label>
    </section>
    <footer class="main-footer">
      <div class="follow">
        <ul class="follow__list">
          <li class="follow__item">
            <a
              class="link"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
            >
              <fa
                :icon="['fab', 'facebook-f']"
                fixed-width
              />
            </a>
          </li>
          <li class="follow__item">
            <a
              class="link"
              href="https://twitter.com/"
              target="_blank"
              rel="noopener"
              aria-label="Twitter"
            >
              <fa
                :icon="['fab', 'twitter']"
                fixed-width
              />
            </a>
          </li>
          <li class="follow__item">
            <a
              class="link"
              href="https://plus.google.com/"
              target="_blank"
              rel="noopener"
              aria-label="Google Plus"
            >
              <fa
                :icon="['fab', 'google-plus-g']"
                fixed-width
              />
            </a>
          </li>
        </ul>
      </div>
      <div class="main-footer__copyright">
        © 2016 Vivek B | All rights Reserved.
      </div>
    </footer>
  </main>
</template>

<script>
  export default {
    components: {
    },
  };
</script>

<style lang="scss">
  @media only screen and (min-width: 79em) {
    .main-header {
      height: calculate-rem(481);
      background: $color-name--black url(/main-header/background/lg.jpg) 0 0 no-repeat;
      background-size: cover;
    }

    .main-header__brand-name {
      position: relative;
      font-family: $font-family--source-sans-pro;
      font-size: calculate-rem(36);
      color: $color-name--white;
      text-transform: uppercase;

      &::after {
        position: absolute;
        bottom: calculate-rem(-10);
        left: 0;
        width: calculate-rem(100);
        height: 4px;
        content: "";
        background: $color-name--royal-blue;
      }
    }

    .main-header__toggle-button {
      position: relative;
      width: calculate-rem(51);
      height: 5px;
      margin-top: 40px;
      background: $color-name--white;

      &::after {
        position: absolute;
        right: 0;
        bottom: calculate-rem(-10);
        width: calculate-rem(41);
        height: 5px;
        content: "";
        background: $color-name--white;
      }
    }

    .main-header__search-bar {
      width: calculate-rem(501);
      height: calculate-rem(60);
      opacity: 0.9;

      .v-input__control {
        width: 83.43313373253%;
        height: 100%;
        background: $color-name--white;
      }

      .v-label {
        margin-left: 5px;
        font-family: $font-family--source-sans-pro;
        font-size: calculate-rem(14);
        font-weight: 600;
        color: $color-name--royal-blue;
        text-transform: uppercase;
        transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
      }

      input[type="search"] {
        padding-left: 5px;
      }

      .v-input__append-outer.v-input__append-outer {
        align-items: center;
        width: 16.56686626746%;
        height: 100%;
        margin: 0;
        color: $color-name--white;
        cursor: pointer;
        background: $color-name--royal-blue;

        .v-icon {
          font-size: calculate-rem(32);
        }
      }
    }
  }
</style>
