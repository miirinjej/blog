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
        <post :posts="posts" />
        <nav class="posts__pagination"></nav>
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
  import Post from '~/components/Post';

  export default {
    components: {
      Post,
    },
    data() {
      return {
        posts: [
          {
            id: 0,
            isShortened: false,
            imageUrl: '/posts/0/woman',
            date: '08 Feb 2016',
            category: 'Lifestyle',
            authorAvatar:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAG8klEQVRIS4WWW2xT9x3HP+f4HF+O7dhOnBBoWMIlsIRLwuhGWSvRVmJbRQUxoF20TYR1mniZtqdpL5PQXvZI97JqmqZykdoVbYOqYoGEEi4CyjWmTUjJ1bnZsR3bx3Hi+HIu0zEEgVq282Kfv63f53y//+/v/zsC/+c6dvR3HSNDsX2RZK4pOjffns0V/AuLRbWxoS586J0DkTXrGs7u2f2Dj/9XGeFFP773pz923u8bPxZPqn4Eg8T8AtPJNDabjWLZwOt0sHXzBn7c2YHT6VDLZeO3+99++8TX1fsK5NjR3zc9HE6ecSvO9nIJpmbiqLkc6YUc2VweWZaRZJGgz4OhibTv2EbHwd0UCiVMkzCiGAq99VbkWdhzkIHb3e1DAyO9585/5p+IpnE5FRKpFOrCIrquI4sikiji97hwul1EU4tousk7R37Ipi3NFAtlTNNUBUF4I7RnT3gZ9BRy82ZvU0DO9314qst/6eZDkpkFJFFmYXGRkq6hOB3UOu2sDwYIKE7Gc2VG1QUW8kvsfKWNzl8deAIB0zBVQStvC4VCFUXPQC6GS3OxtjP/vMytByPEUyq6ZuKUJTB0aqvcrK92szrox+3xMDiT4fPkPHlNZ1V9kCO/+SmK4kTTTEsNhq6HD+7bt+0ppLu3u1PQS++TTTLWP8q9vjEmZ1OoqTR+h4wiitR4XdQGvCiKC5tkZzqd485UmiXBRJZkfvbLA7S0rKFgWYalxgDTPHxg797jFSVnL/SoCKavRoH1ARexiSTjQ9M8uvcF8WgUsVzGEGwgyXjcLgJ+D/HsEleGYhRlAbsgsT/0Jtt2vUxhyQqAiWkIlf05sHdPQDj10UcdLofjjCkKVCkyO5pXkp9TSUeTzEQmGX0UwVvlJp9dZCqWsZ6R6oAbWXZwrX+KwfQ8rbV+tq6oZsPPQ+imgGFYEBPDNMEUQsIn//n4uGDoh6wFuySyfUMDizOzZOdUUukcouLGozgYuH6P/uEYSXWRb9RX0bqxgUQszek7EVqrFepE2Ho4BIoLvaxXABWGYZwQeq5cuKyVtV3WgmEYbG6sQSkW0DWB+GSCWDxBfGKaKzcf8cVMBq9d4jtrali3vh6/V6E7PMkKtws9qvLar/ejuVxopUqUK2p0w7wi9FztUXVd91l7Y5jgs4ORmCMyNMXccISZ8SmWdJPx1BLT6TxbmhtoXlGF4rSz8ZsvMZtbQk1m8YsiQtsmGjc1U1wqomm65axlnWpBTF3TKomoxM1mw5XJcPLPp7k7kmDL2iA/2rOD8903mIymaKwPsKKmmpV1NaxcHWBSXSQ5k2a1z87xO8PUbGzh0E++jyQKFEtaxbanSix51qUbJvV+L3WY3L50G7vHTcOqIL3/7mJ8Oo5RMmhpbkRR7BRNncHZXOUUWOe3c/LOl9weneX1XTs58ot9+P1eypqWtSCXdU3fZT7RYsEkyU7bqhry0VmU6hrKBZ0LJ08zNDxBYjbNazs34/S5K+lK5wrUBn3UiAZ/ux4mVSxV9qLhpZVs37aZza1rrwgXr3Yf1zTj0DJkWU3QaWetDHMTs5RtTm519VbsGp1Os66xmoamOrr6pihoBivrAsgLWT7oG6SEiWC5ItrQdQOvp+qEcPHqxQ5N184s21XxrBJvgdagh/Hu6xQlFz2f3uHS52OVY8bvlHl5Yz1Dc3lyZavjRcyFec6NRB4DAMkuWx2P7JRDlY4/f+m8amL6nu7+Yw4uh4RzIkIuO8/5nocMD8+g5wusqvXgDzhI6QJjmSLVosl4IkE4lUJ6kiDLGY/XP5GN3W+qQLo+7eoUBN6viFiOmXUjCni0IvFbfaRmS/T3T6BmM7Q0BbA7ZAZTOR7GcgQxuRGLki4VEK0+sFIqCKxoWHt45suex2fXYzVdYUzalu9FUcBA5MN/XePVpire2NLE309dYmw0RqMiozll+qZSeDGZzuQIZxKIgmA1RqWEKEkPytmh9ueO+q7eribBwBo0lca02yVu9M3wl/c+QMLg3T8cph6dv57oIZ2eJ5rNUWcXsWkGNxNxMpYKoTJLME0jW1VX365GPnt+nliFu3vPtRuGeFmyib5UrszxD68xEL5PPr9EwFdFW2OQyXiOKq+LVpfO9GiCkflFBudVTEN/nBnDyDrdyuuLyYGvTsZlmyxFoimcPX2ur+3u3UHy8xmyagpRkCnpZTwehZpgEF8hSzlvElnMMhuPV849QZIeGGWtg0LkxTN+GWR9fnt3Z+dCNveuaRi+uWQMySZRKhex211899XtRCYS1mMzG50mmYhPvLLjW0ev9fzj+LM1lr+/8JVo+Q+rW77XUVia7xARmkrlcrtNdvgOht7M9g9MhMdGxyOaztlE5NrZryu+vPZfv+2V90GBziUAAAAASUVORK5CYII=',
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
            imageUrl: '/posts/1/football',
            date: '11 Feb 2016',
            category: 'Sports',
            authorAvatar:
              'data:image/png;base64,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',
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
            imageUrl: '/posts/2/city',
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
            isshortened: false,
            imageUrl: '/posts/3/food',
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
            imageUrl: '/posts/4/model',
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
      };
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
