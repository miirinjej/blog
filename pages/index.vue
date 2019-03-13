<template>
  <v-container
    tag="main"
    fluid
  >
    <header class="main-header js-webp">
      <v-layout
        fill-height="true"
        wrap
        justify-space-between="true"
      >
        <v-flex
          xs12
          lg2
          offset-lg1
          offset-xl2
        >
          <div class="main-header__brand-name">
            Créatif blog
          </div>
        </v-flex>
        <v-flex
          xs12
          lg2
          order-lg3
        >
          <div class="main-header__toggle-button"></div>
        </v-flex>
        <v-flex
          xs12
          align-self-end="true"
        >
          <v-text-field
            class="main-header__search-bar"
            append-outer-icon="search"
            background-color="transparent"
            label="Search here"
            outline
            type="search"
          />
        </v-flex>
        <v-flex
          xs0
          lg1
          xl2
          order-lg4
          class="spacer"
        >
          <v-spacer />
        </v-flex>
      </v-layout>
    </header>
    <section class="main-content">
      <v-layout
        wrap
      >
        <v-flex
          xs12
          md6
          xl6
          offset-md1
          offset-xl0
          order-md2
        >
          <section
            class="posts"
            :style="{ marginTop: categoriesHeadingHeight + 'px' }"
          >
            <post :posts="posts" />
            <v-flex
              xs12
            >
              <v-pagination
                v-model="page"
                class="posts__pagination"
                :length="50"
                prev-icon=""
                next-icon=""
                :total-visible="$mq | mq({ xs: 7, sm: 8 })"
              />
            </v-flex>
          </section>
        </v-flex>
        <v-flex
          xs12
          md3
          lg3
          xl2
          offset-lg1
          offset-xl2
          order-md1
          align-self-start="true"
        >
          <sidebar
            :categories="categories"
            :tags="tags"
            :gallery="gallery"
          />
        </v-flex>
        <v-flex
          xs0
          lg1
          xl2
          order-md3
          class="spacer"
        >
          <v-spacer />
        </v-flex>
      </v-layout>
    </section>
    <section class="subscribe-section js-webp">
      <v-layout
        column
        align-center="true"
      >
        <v-flex>
          <h2 class="subscribe-section__heading">
            Subscribe to our newsletter
          </h2>
        </v-flex>
        <v-flex>
          <p class="subscribe-section__description">
            Enter here your email to subscribe to my mailing list
          </p>
        </v-flex>
        <v-flex>
          <v-text-field
            class="subscribe-section__email-bar"
            append-outer-icon="mail_outline"
            background-color="transparent"
            label="Email"
            outline
            type="email"
          />
        </v-flex>
      </v-layout>
    </section>
    <footer class="main-footer">
      <v-layout
        column
        align-center="true"
      >
        <v-flex>
          <div class="follow">
            <ul class="follow__list">
              <li class="follow__item follow__item--facebook">
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
              <li class="follow__item follow__item--twitter">
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
              <li class="follow__item follow__item--google-plus">
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
        </v-flex>
        <v-flex>
          <div class="main-footer__copyright">
            © 2016 Vivek B | All rights Reserved.
          </div>
        </v-flex>
      </v-layout>
    </footer>
  </v-container>
</template>

<script>
  import Post from '~/components/Post';
  import Sidebar from '~/components/Sidebar';

  export default {
    components: {
      Post,
      Sidebar,
    },
    data() {
      return {
        posts: [
          {
            id: 0,
            isShortened: false,
            imageUrl: '/posts/woman/',
            date: '08 Feb 2016',
            category: 'Lifestyle',
            authorAvatar:
              'data:image/png;base64,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',
            author: 'J. K. Paul',
            commentsCount: 215,
            text: 'Lifestyle is the interests, opinions, behaviours, and'
              + ' behavioural orientations of an individual, group, or '
              + 'culture. The term was introduced by Austrian psychologist '
              + 'Alfred Adler with the meaning of "a person\'s basic character'
              + ' as established early in childhood"',
          },
          {
            id: 1,
            isShortened: true,
            imageUrl: '/posts/football/',
            date: '11 Feb 2016',
            category: 'Sports',
            authorAvatar:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAG8klEQVRIS4WWW2xT9x3HP+f4HF+O7dhOnBBoWMIlsIRLwuhGWSvRVmJbRQUxoF20TYR1mniZtqdpL5PQXvZI97JqmqZykdoVbYOqYoGEEi4CyjWmTUjJ1bnZsR3bx3Hi+HIu0zEEgVq282Kfv63f53y//+/v/zsC/+c6dvR3HSNDsX2RZK4pOjffns0V/AuLRbWxoS586J0DkTXrGs7u2f2Dj/9XGeFFP773pz923u8bPxZPqn4Eg8T8AtPJNDabjWLZwOt0sHXzBn7c2YHT6VDLZeO3+99++8TX1fsK5NjR3zc9HE6ecSvO9nIJpmbiqLkc6YUc2VweWZaRZJGgz4OhibTv2EbHwd0UCiVMkzCiGAq99VbkWdhzkIHb3e1DAyO9585/5p+IpnE5FRKpFOrCIrquI4sikiji97hwul1EU4tousk7R37Ipi3NFAtlTNNUBUF4I7RnT3gZ9BRy82ZvU0DO9314qst/6eZDkpkFJFFmYXGRkq6hOB3UOu2sDwYIKE7Gc2VG1QUW8kvsfKWNzl8deAIB0zBVQStvC4VCFUXPQC6GS3OxtjP/vMytByPEUyq6ZuKUJTB0aqvcrK92szrox+3xMDiT4fPkPHlNZ1V9kCO/+SmK4kTTTEsNhq6HD+7bt+0ppLu3u1PQS++TTTLWP8q9vjEmZ1OoqTR+h4wiitR4XdQGvCiKC5tkZzqd485UmiXBRJZkfvbLA7S0rKFgWYalxgDTPHxg797jFSVnL/SoCKavRoH1ARexiSTjQ9M8uvcF8WgUsVzGEGwgyXjcLgJ+D/HsEleGYhRlAbsgsT/0Jtt2vUxhyQqAiWkIlf05sHdPQDj10UcdLofjjCkKVCkyO5pXkp9TSUeTzEQmGX0UwVvlJp9dZCqWsZ6R6oAbWXZwrX+KwfQ8rbV+tq6oZsPPQ+imgGFYEBPDNMEUQsIn//n4uGDoh6wFuySyfUMDizOzZOdUUukcouLGozgYuH6P/uEYSXWRb9RX0bqxgUQszek7EVqrFepE2Ho4BIoLvaxXABWGYZwQeq5cuKyVtV3WgmEYbG6sQSkW0DWB+GSCWDxBfGKaKzcf8cVMBq9d4jtrali3vh6/V6E7PMkKtws9qvLar/ejuVxopUqUK2p0w7wi9FztUXVd91l7Y5jgs4ORmCMyNMXccISZ8SmWdJPx1BLT6TxbmhtoXlGF4rSz8ZsvMZtbQk1m8YsiQtsmGjc1U1wqomm65axlnWpBTF3TKomoxM1mw5XJcPLPp7k7kmDL2iA/2rOD8903mIymaKwPsKKmmpV1NaxcHWBSXSQ5k2a1z87xO8PUbGzh0E++jyQKFEtaxbanSix51qUbJvV+L3WY3L50G7vHTcOqIL3/7mJ8Oo5RMmhpbkRR7BRNncHZXOUUWOe3c/LOl9weneX1XTs58ot9+P1eypqWtSCXdU3fZT7RYsEkyU7bqhry0VmU6hrKBZ0LJ08zNDxBYjbNazs34/S5K+lK5wrUBn3UiAZ/ux4mVSxV9qLhpZVs37aZza1rrwgXr3Yf1zTj0DJkWU3QaWetDHMTs5RtTm519VbsGp1Os66xmoamOrr6pihoBivrAsgLWT7oG6SEiWC5ItrQdQOvp+qEcPHqxQ5N184s21XxrBJvgdagh/Hu6xQlFz2f3uHS52OVY8bvlHl5Yz1Dc3lyZavjRcyFec6NRB4DAMkuWx2P7JRDlY4/f+m8amL6nu7+Yw4uh4RzIkIuO8/5nocMD8+g5wusqvXgDzhI6QJjmSLVosl4IkE4lUJ6kiDLGY/XP5GN3W+qQLo+7eoUBN6viFiOmXUjCni0IvFbfaRmS/T3T6BmM7Q0BbA7ZAZTOR7GcgQxuRGLki4VEK0+sFIqCKxoWHt45suex2fXYzVdYUzalu9FUcBA5MN/XePVpire2NLE309dYmw0RqMiozll+qZSeDGZzuQIZxKIgmA1RqWEKEkPytmh9ueO+q7eribBwBo0lca02yVu9M3wl/c+QMLg3T8cph6dv57oIZ2eJ5rNUWcXsWkGNxNxMpYKoTJLME0jW1VX365GPnt+nliFu3vPtRuGeFmyib5UrszxD68xEL5PPr9EwFdFW2OQyXiOKq+LVpfO9GiCkflFBudVTEN/nBnDyDrdyuuLyYGvTsZlmyxFoimcPX2ur+3u3UHy8xmyagpRkCnpZTwehZpgEF8hSzlvElnMMhuPV849QZIeGGWtg0LkxTN+GWR9fnt3Z+dCNveuaRi+uWQMySZRKhex211899XtRCYS1mMzG50mmYhPvLLjW0ev9fzj+LM1lr+/8JVo+Q+rW77XUVia7xARmkrlcrtNdvgOht7M9g9MhMdGxyOaztlE5NrZryu+vPZfv+2V90GBziUAAAAASUVORK5CYII=',
            author: 'J. K. Paul',
            commentsCount: 57,
            text: 'The India national football team represents India in '
              + 'international football and is controlled by the All India '
              + 'Football Federation. Under the global jurisdiction of FIFA and'
              + ' governed in Asia by the AFC, the team is also part of the '
              + 'South Asian Football Federation.',
          },
          {
            id: 2,
            isShortened: true,
            imageUrl: '/posts/city/',
            date: '20 Mar 2016',
            category: 'Lifestyle',
            authorAvatar:
              'data:image/png;base64,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',
            author: 'J. K. Paul',
            commentsCount: 75,
            text: 'The City of New York, usually called either New York '
              + 'City (NYC) or simply New York (NY), is the most populous '
              + 'city in the United States and thus also in the state of '
              + 'New York.',
          },
          {
            id: 3,
            isShortened: false,
            imageUrl: '/posts/food/',
            date: '30 Mar 2016',
            category: 'Lifestyle',
            authorAvatar:
              'data:image/png;base64,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',
            author: 'J. K. Paul',
            commentsCount: 150,
            text: 'Food is any substance consumed to provide nutritional '
              + 'support for an organism. It is usually of plant or animal '
              + 'origin, and contains essential nutrients, such as '
              + 'carbohydrates, fats, proteins, vitamins, or minerals.',
          },
          {
            id: 4,
            isShortened: false,
            imageUrl: '/posts/model/',
            date: '01 Apr 2016',
            category: 'Lifestyle',
            authorAvatar:
              'data:image/png;base64,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',
            author: 'J. K. Paul',
            commentsCount: 88,
            text: 'Fashion is a popular style, especially in clothing, '
              + 'footwear, lifestyle, accessories, makeup, hairstyle and body.'
              + ' Fashion is a distinctive and often constant trend in the '
              + 'style in which people present themselves. A fashion can '
              + 'become the prevailing style in behaviour or manifest the '
              + 'newest creations of designers, technologists, engineers, '
              + 'and design managers.',
          },
        ],
        page: 4,
        categories: [
          {
            name: 'Sports',
            isGrouped: false,
            isActive: false,
          },
          {
            name: 'Lifestyle',
            isGrouped: true,
            isActive: false,
          },
          {
            name: 'Love',
            isGrouped: true,
            isActive: false,
          },
          {
            name: 'Travel',
            isGrouped: true,
            isActive: false,
          },
          {
            name: 'Technology',
            isGrouped: false,
            isActive: false,
          },
          {
            name: 'Art',
            isGrouped: false,
            isActive: false,
          },
          {
            name: 'Photography',
            isGrouped: false,
            isActive: false,
          },
          {
            name: 'Business',
            isGrouped: true,
            isActive: false,
          },
          {
            name: 'Design',
            isGrouped: false,
            isActive: false,
          },
          {
            name: 'Dramas',
            isGrouped: true,
            isActive: false,
          },
          {
            name: 'Home',
            isGrouped: true,
            isActive: false,
          },
          {
            name: 'Health',
            isGrouped: false,
            isActive: false,
          },
        ],
        tags: [
          'Food',
          'Photography',
          'Web design',
          'Art',
          'Love',
          'Business',
        ],
        gallery: [
          '/sidebar/gallery/0',
          '/sidebar/gallery/1',
          '/sidebar/gallery/2',
          '/sidebar/gallery/3',
          '/sidebar/gallery/4',
          '/sidebar/gallery/5',
          '/sidebar/gallery/6',
          '/sidebar/gallery/7',
          '/sidebar/gallery/8',
        ],
        categoriesHeadingHeight: 43.5,
      };
    },
    mounted() {
      const categoriesHeading = document.querySelector('.sidebar__heading');
      const categoriesHeadingMarginBottom = parseInt(window.getComputedStyle(categoriesHeading, null).getPropertyValue('margin-bottom'));
      this.categoriesHeadingHeight = categoriesHeading.offsetHeight + categoriesHeadingMarginBottom;


      const webpElements = document.querySelectorAll('.js-webp');

      async function supportsWebp() {
        if (!self.createImageBitmap) return false;

        const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
        const blob = await fetch(webpData).then(r => r.blob());
        return createImageBitmap(blob).then(() => true, () => false);
      }

      (async () => {
        if (await supportsWebp()) {
          webpElements.forEach(e => e.classList.add('webp'));
        } else {
          webpElements.forEach(e => e.classList.add('no-webp'));
        }
      })();
    },
  };
</script>

<style lang="scss">
  .container {
    padding: 0;

    @include mq($from: xxl) {
      padding: 0 25%;
    }
  }

  .main-header {
    @include get-rem(padding, 25, 10);
    height: calculate-rem(281);

    @include mq($from: lg) {
      height: calculate-rem(481);
      padding: calculate-rem(50) 4.85714285714% calculate-rem(140);
    }

    &.no-webp {
      background: $color-name--black url(/main-header/background/xs.jpg) 0 0 no-repeat;
      background-size: cover;

      @include mq($from: sm) {
        background: $color-name--black url(/main-header/background/sm.jpg) 0 0 no-repeat;
        background-size: cover;
      }

      @include mq($from: md) {
        background: $color-name--black url(/main-header/background/md.jpg) 0 0 no-repeat;
        background-size: cover;
      }
    }

    &.webp {
      background: $color-name--black url(/main-header/background/xs.webp) 0 0 no-repeat;
      background-size: cover;

      @include mq($from: sm) {
        background: $color-name--black url(/main-header/background/sm.webp) 0 0 no-repeat;
        background-size: cover;
      }

      @include mq($from: md) {
        background: $color-name--black url(/main-header/background/md.webp) 0 0 no-repeat;
        background-size: cover;
      }
    }

    .flex {
      display: flex;
      align-items: baseline;
      justify-content: center;

      @include mq($from: lg) {
        justify-content: flex-start;

        &:nth-of-type(2) {
          justify-content: flex-end;
        }
      }

      @include mq($from: sm) {
        &:nth-of-type(3) {
          flex-basis: 0;
          margin: 0 auto;
        }
      }
    }

    .spacer {
      display: none;

      @include mq($from: lg) {
        display: flex;
      }
    }
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

  .main-header__search-bar,
  .subscribe-section__email-bar {
    height: calculate-rem(60);
    opacity: 0.9;

    @include mq($from: sm) {
      width: calculate-rem(501);
    }

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

  .main-content {
    @include get-rem(padding, 25, 10);

    @include mq($from: sm) {
      padding: calculate-rem(69) 4.85714285714% calculate-rem(129);
    }

    > .layout {
      @include mq($from: md, $until: lg) {
        justify-content: space-around;
      }

      @include mq($from: lg) {
        justify-content: space-between;
      }
    }

    .flex {
      display: flex;
      justify-content: center;

      @include mq($from: md) {
        justify-content: flex-start;

        &:nth-of-type(1) {
          justify-content: flex-end;
        }
      }
    }

    .spacer {
      display: none;

      @include mq($from: lg) {
        display: flex;
      }
    }
  }

  .posts {
    margin-bottom: calculate-rem(75);

    @include mq($from: md) {
      margin-bottom: 0;
    }

    @include mq($from: xl) {
      width: calculate-rem(800);
    }
  }

  .posts__pagination {
    margin-top: calculate-rem(25);

    @include mq($from: md) {
      margin-top: calculate-rem(85);
    }

    li:first-child,
    li:last-child {
      display: none;
    }

    .v-pagination__item.v-pagination__item {
      width: calculate-rem(48);
      height: calculate-rem(48);
      padding: 0;
      margin: 0;
      font-weight: 700;
      border-radius: 0;
      box-shadow: none;
    }

    .v-pagination__item--active.v-pagination__item--active {
      color: $color-name--white;
      background: $color-name--royal-blue;
    }
  }

  .subscribe-section {
    @include get-rem(padding, 91, 10, 0);
    position: relative;
    z-index: 20;
    height: calculate-rem(332);
    color: $color-name--white;

    &.no-webp {
      background: $color-name--black url(/subscribe/background/xs.jpg) 0 0 no-repeat;
      background-size: cover;

      @include mq($from: sm) {
        background: $color-name--black url(/subscribe/background/sm.jpg) 0 0 no-repeat;
        background-size: cover;
      }

      @include mq($from: md) {
        background: $color-name--black url(/subscribe/background/md.jpg) 0 0 no-repeat;
        background-size: cover;
      }
    }

    &.webp {
      background: $color-name--black url(/subscribe/background/xs.webp) 0 0 no-repeat;
      background-size: cover;

      @include mq($from: sm) {
        background: $color-name--black url(/subscribe/background/sm.webp) 0 0 no-repeat;
        background-size: cover;
      }

      @include mq($from: md) {
        background: $color-name--black url(/subscribe/background/md.webp) 0 0 no-repeat;
        background-size: cover;
      }
    }

    .flex {
      &:nth-of-type(3) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }
    }
  }

  .subscribe-section__heading {
    margin-bottom: calculate-rem(6);
    font-family: $font-family--alegreya;
    font-size: calculate-rem(20);
    font-weight: 400;
    text-transform: uppercase;
  }

  .subscribe-section__description {
    margin-bottom: calculate-rem(35);
    font-family: $font-family--source-sans-pro;
    font-size: calculate-rem(14);
  }

  .subscribe-section__email-bar {
    width: 100%;
    opacity: 0.8;

    @include mq($from: sm) {
      width: calculate-rem(400);
    }

    .v-icon {
      font-size: calculate-rem(24);
    }
  }

  .main-footer {
    height: calculate-rem(245);
    padding-top: calculate-rem(145);
  }

  .follow__list {
    @extend %list;
    display: flex;
    margin-bottom: calculate-rem(24);
  }

  .follow__item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calculate-rem(24);
    height: calculate-rem(24);
    margin-right: calculate-rem(6);
    font-size: calculate-rem(14);

    &:last-of-type {
      margin-right: 0;
    }

    &--facebook {
      background: $color-name--chambray;
    }

    &--twitter {
      background: $color-name--malibu;
    }

    &--google-plus {
      background: $color-name--punch;
    }

    &:hover {
      background: $color-name--mine-shaft;
    }
  }

  .link {
    color: $color-name--white;
  }

  .main-footer__copyright {
    font-size: calculate-rem(13);
    font-weight: 500;
  }
</style>
