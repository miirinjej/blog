<template>
  <aside class="sidebar">
    <section class="sidebar__section categories">
      <h2 class="sidebar__heading">
        Categories
      </h2>
      <v-divider class="sidebar__divider" />
      <div class="sidebar__content">
        <v-navigation-drawer
          stateless
          value="true"
        >
          <v-list class="categories__list">
            <v-list-group
              v-for="(category, index) in categories"
              :key="index"
              v-model="category.isActive"
              class="categories__item"
              value="true"
              :append-icon="category.isGrouped ? 'expand_more' : ''"
            >
              <template v-slot:activator>
                <v-list-tile>
                  <v-list-tile-title>
                    {{ category.name }}
                  </v-list-tile-title>
                </v-list-tile>
              </template>
            </v-list-group>
          </v-list>
        </v-navigation-drawer>
      </div>
    </section>
    <section class="sidebar__section tags">
      <h2 class="sidebar__heading">
        Tags
      </h2>
      <v-divider class="sidebar__divider" />
      <div class="sidebar__content">
        <v-chip-group class="tags__list">
          <v-chip
            v-for="(tag, index) in tags"
            :key="index"
            class="tags__item"
          >
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </div>
    </section>
    <section class="sidebar__section gallery">
      <h2 class="sidebar__heading">
        Gallery
      </h2>
      <v-divider class="sidebar__divider" />
      <div class="sidebar__content">
        <ul class="gallery__list">
          <li
            v-for="(image, index) in gallery"
            :key="index"
            class="gallery__item"
          >
            <img
              class="gallery__image"
              :src="image"
              :alt="image.replace(/(\/\w+\/\w+\/)(\w+)(\.jpg)/i, '$2')"
            >
          </li>
        </ul>
      </div>
    </section>
  </aside>
</template>

<script>
  export default {
    name: 'Sidebar',
    props: {
      categories: {
        type: Array,
        validator(value) {
          for (let i = 0; i < value.length; i += 1) {
            if (typeof value[i].name !== 'string') {
              return false;
            }
            if (typeof value[i].isGrouped !== 'boolean') {
              return false;
            }
            if (typeof value[i].isActive !== 'boolean') {
              return false;
            }
          }

          return true;
        },
        default() {
          return [];
        },
      },
      tags: {
        type: Array,
        validator(value) {
          for (let i = 0; i < value.length; i += 1) {
            if (typeof value[i] !== 'string') {
              return false;
            }
          }

          return true;
        },
        default() {
          return [];
        },
      },
      gallery: {
        type: Array,
        validator(value) {
          for (let i = 0; i < value.length; i += 1) {
            if (typeof value[i] !== 'string') {
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
  };
</script>

<style lang="scss">
  .sidebar {
    .v-navigation-drawer {
      .v-navigation-drawer__border {
        display: none;
      }

      .v-list__group {
        &::before,
        &::after {
          height: 0;
        }

        &::after {
          height: 1px;
          background: $color-name--alto;
          opacity: 0.5;
        }
      }

      .v-list__group__header--active {
        color: $color-name--royal-blue;
      }

      .v-list__tile {
        padding: 0;
      }

      .v-list__tile__title {
        font-size: calculate-rem(16);
        font-weight: 300;
      }

      .v-icon {
        font-size: calculate-rem(20);
        opacity: 0.7;
      }
    }

    .v-chip--selected {
      color: $color-name--white;
      background: $color-name--royal-blue !important;
      border-color: $color-name--royal-blue !important;
    }
  }
</style>

<style lang="scss" scoped>
  .sidebar {
    width: calculate-rem(300);
    box-shadow: 5px 80px 5px 0 rgba($color-name--mercury, 0.4);
  }

  .sidebar__section:not(:last-of-type) {
    margin-bottom: calculate-rem(69);

    &.tags {
      margin-bottom: calculate-rem(54);
    }
  }

  .sidebar__heading {
    position: relative;
    margin-bottom: calculate-rem(9);
    font-family: $font-family--alegreya;
    font-size: calculate-rem(30);
    font-weight: 700;
    text-transform: uppercase;
  }

  .sidebar__divider {
    margin-bottom: calculate-rem(20);
    border-color: $color-name--royal-blue;

    .categories & {
      margin-bottom: 0;
    }
  }

  .sidebar__content {
    padding-right: calculate-rem(15);
  }

  .categories__list {
    padding-top: 0;
  }

  .tags__list {
    font-family: $font-family--source-sans-pro;
    font-size: calculate-rem(14);
    text-transform: uppercase;
  }

  .tags__item {
    @include get-rem(padding, 0, 30);
    @include get-rem(margin, 0, 13, 15, 0);
    display: inline-block;
    align-items: center;
    height: calculate-rem(36);
    line-height: calculate-rem(36);
    vertical-align: middle;
    border: 1px solid $color-name--mercury;


    &:last-of-type {
      margin-right: 0;
    }
  }

  .gallery__list {
    @extend %list;
    display: flex;
    flex-wrap: wrap;
    line-height: 0;
  }

  .gallery__item {
    width: 33%;

    &:hover {
      filter: url(#royal-blue);
    }
  }
</style>
