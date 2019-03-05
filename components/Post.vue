<template>
  <div>
    <article
      v-for="post in posts"
      :key="post.id"
      class="post"
      :class="{ 'is-shortened': post.isShortened }"
    >
      <header class="post__header">
        <picture class="post__picture">
          <source
            :srcset="`${post.imageUrl}.webp`"
            type="image/webp"
          >
          <source
            :srcset="`${post.imageUrl}.jpg`"
            type="image/jpeg"
          >
          <img
            :src="`${post.imageUrl}.jpg`"
            :alt="`${post.imageUrl.match(/\w+$/i)}`"
          >
        </picture>
        <time class="post__date post__date--primary text-xs-center">
          <span class="d-block">{{ post.date.match(/^\d+/).join() }}</span>
          <span class="d-block">{{ post.date.match(/\s\w+\b/i).join() }}</span>
        </time>
        <v-btn class="post__read-button post__read-button--secondary">
          Read more
        </v-btn>
      </header>
      <section class="post__content">
        <div>
          <time class="post__date post__date--secondary">
            {{ post.date }}
            |
          </time>
          <span class="post__category">
            {{ post.category }}
          </span>
        </div>
        <div class="post__author author">
          <img
            class="author__avatar"
            :src="post.authorAvatar"
            alt="author avatar"
          >
          <div
            v-show="!post.isShortened"
            class="author__title"
          >
            Author
            |
            <span class="author__name">
              {{ post.author }}
            </span>
          </div>
          <div
            v-show="!post.isShortened"
            class="post__comments comments"
          >
            Comments
            |
            <span class="comments__count">
              {{ post.commentsCount }}
            </span>
          </div>
          <div class="post__share share">
            <span v-show="!post.isShortened">
              Share
              |
            </span>
            <ul class="share__list">
              <li class="share__item">
                <a
                  class="link"
                  aria-label="Facebook"
                >
                  <fa
                    :icon="['fab', 'facebook-f']"
                    fixed-width
                  />
                </a>
              </li>
              <li class="share__item">
                <a
                  class="link"
                  aria-label="Twitter"
                >
                  <fa
                    :icon="['fab', 'twitter']"
                    fixed-width
                  />
                </a>
              </li>
              <li class="share__item">
                <a
                  class="link"
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
        </div>
      </section>
      <section class="post__text">
        {{ shortenText(post.text) }}
      </section>
      <v-btn class="post__read-button post__read-button--primary">
        Read
      </v-btn>
    </article>
    <svg>
      <filter
        id="royal-blue"
        x="-10%"
        y="-10%"
        width="120%"
        height="120%"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feColorMatrix
          type="matrix"
          values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
          in="SourceGraphic"
          result="colormatrix"
        />
        <feComponentTransfer
          in="colormatrix"
          result="componentTransfer"
        >
          <feFuncR
            type="table"
            tableValues="0.22 0.22"
          />
          <feFuncG
            type="table"
            tableValues="0.33 0.33"
          />
          <feFuncB
            type="table"
            tableValues="0.85 0.85"
          />
          <feFuncA
            type="table"
            tableValues="0 0.5"
          />
        </feComponentTransfer>
        <feBlend
          mode="normal"
          in="componentTransfer"
          in2="SourceGraphic"
          result="blend"
        />
      </filter>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'Post',
    props: {
      posts: {
        type: Array,
        validator(value) {
          for (let i = 0; i < value.length; i += 1) {
            if (typeof value[i].id !== 'number') {
              return false;
            }
            if (typeof value[i].isShortened !== 'boolean') {
              return false;
            }
            if (typeof value[i].imageUrl !== 'string') {
              return false;
            }
            if (typeof value[i].date !== 'string') {
              return false;
            }
            if (typeof value[i].category !== 'string') {
              return false;
            }
            if (typeof value[i].authorAvatar !== 'string') {
              return false;
            }
            if (typeof value[i].author !== 'string') {
              return false;
            }
            if (typeof value[i].commentsCount !== 'number') {
              return false;
            }
            if (typeof value[i].text !== 'string') {
              return false;
            }
          }

          return true;
        },
        default() {
          return [];
        },
      },
    },
    methods: {
      shortenText(text) {
        if (text.length > 128) {
          return `${text.substr(0, 128)} ...`;
        }
        return text;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .post {
    margin-bottom: calculate-rem(50);
    font-family: $font-family--roboto;
    font-size: calculate-rem(14);
    font-weight: 700;
    color: $color-name--royal-blue;
    text-transform: uppercase;
  }

  .post__header {
    position: relative;
    margin-bottom: calculate-rem(13);

    &:hover {
      .v-btn.post__read-button--secondary {
        opacity: 1;
      }
    }
  }

  .post__picture {
    transition: filter 0.5s;

    .post__header:hover & {
      filter: url(#royal-blue);
    }
  }

  .v-btn.v-btn.post__read-button {
    width: calculate-rem(109);
    height: calculate-rem(40);
    color: $color-name--white;
    background: $color-name--royal-blue;
    border-radius: 0;
    box-shadow: 0 0 calculate-rem(7) 1px rgba($color-name--black, 0.29);

    &--secondary {
      position: absolute;
      top: 50%;
      left: 50%;
      width: calculate-rem(122);
      height: calculate-rem(43);
      color: $color-name--royal-blue;
      background: rgba($color-name--white, 0.8);
      box-shadow: 0 0 calculate-rem(21) rgba($color-name--black, 0.45);
      opacity: 0;
      transition: opacity 0.2s;
      transform: translate(-50%, -50%);
    }
  }

  .post__content {
    margin-bottom: calculate-rem(23);
  }

  .post__date {
    &--primary {
      position: absolute;
      top: calculate-rem(20);
      left: calculate-rem(20);
      width: calculate-rem(63);
      height: calculate-rem(63);
      font-family: $font-family--alegreya;
      font-size: calculate-rem(24);
      font-weight: 700;
      color: $color-name--white;
      text-transform: none;
      background: rgba($color-name--royal-blue, 0.8);
      transition: all 0.2s;

      .post__header:hover & {
        display: none;
      }
    }
  }

  .author__name,
  .comments__count {
    font-weight: 400;
  }

  .post__text {
    margin-bottom: calculate-rem(12);
    font-family: $font-family--alegreya;
    font-size: calculate-rem(26);
    color: $color-name--ebony;
    text-transform: none;
  }

  .share__list {
    @extend %list;
  }
</style>
