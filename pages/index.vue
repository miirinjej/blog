<template>
  <main>
    <header class="main-header">
      <div class="main-header__brand-name">
        Créatif blog
      </div>
      <div class="main-header__toggle-button"></div>
      <label for="main-header__search-bar">
        Search here
        <input
          id="main-header__search-bar"
          class="main-header__search-bar"
          type="search"
          name="main-header__search-bar"
        >
      </label>
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

<style>
</style>
