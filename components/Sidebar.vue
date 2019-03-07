<template>
  <aside class="sidebar">
    <h2 class="sidebar__heading">
      Categories
    </h2>
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
    <section class="sidebar__section tags">
      <h2 class="sidebar__heading">
        Tags
      </h2>
      <v-chip-group class="tags__list">
        <v-chip
          v-for="(tag, index) in tags"
          :key="index"
          class="tags__item"
          label
        >
          {{ tag }}
        </v-chip>
      </v-chip-group>
    </section>
    <section class="sidebar__section gallery">
      <ul class="gallery__list">
        <li
          v-for="(image, index) in gallery"
          :key="index"
          class="gallery__item"
        >
          <img
            :src="image"
            :alt="image.replace(/(\/\w+\/\w+\/)(\w+)(\.jpg)/i, '$2')"
          >
        </li>
      </ul>
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

<style scoped>
</style>
