<template>
  <div>
    <article
      v-for="post in posts"
      :key="post.id"
      class="post"
      :class="{ 'is-shortened': post.isShortened }"
    >
      <header class="post__header">
        <picture>
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
        <time class="post__date post__date--primary">
          {{ post.date.match(/^\d+\s\w+\b/i).join() }}
        </time>
        <button class="post__read-button post__read-button--secondary">
          Read more
        </button>
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
        <div>
          <img
            class="author__avatar"
            :src="post.authorAvatar"
            alt="author avatar"
          >
          <div
            v-show="!post.isShortened"
            class="post__author author"
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
      <button class="post__read-button post__read-button--primary">
        Read
      </button>
    </article>
  </div>
</template>

<script>
  export default {
    name: 'Post',
    props: {
      posts: {
        type: Array,
        required: true,
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

<style scoped>
</style>
