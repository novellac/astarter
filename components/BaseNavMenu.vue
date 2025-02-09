<template>
  <nav>
    <NuxtLink to="/" class="nav-links--home">{{ siteName }}</NuxtLink>

    <ul class="desktop-nav">
      <li v-for="(link, index) in navItems" :key="index">
        <NuxtLink class="nav-links--link" :to="link.href">
          {{ link.linkText }}
        </NuxtLink>
      </li>
    </ul>

    <div class="mobile-nav">
      <dialog ref="dialogRef">
        <div class="dialog-content-wrapper">
          <button
            class="close-button"
            autofocus
            aria-label="Close navigation menu"
            @click="dialogRef?.close()"
          >
            <img src="/assets/images/closeIcon.svg" alt="" >
          </button>

          <ul class="mobile-nav-links">
            <li>
              <NuxtLink class="nav-links--link" to="/" @click="closeAndGo('/')">
                Home
              </NuxtLink>
            </li>
            <li v-for="(link, index) in navItems" :key="index">
              <NuxtLink
                class="nav-links--link"
                :to="link.href"
                @click="closeAndGo(link.href)"
              >
                {{ link.linkText }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </dialog>

      <button
        class="open-button"
        aria-label="Open navigation menu"
        @click="dialogRef?.showModal()"
      >
        <img src="/assets/images/hamburgerMenuIcon.svg" alt="" >
      </button>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

interface NavItem {
  linkText: string;
  href: string;
}

defineProps({
  navItems: {
    type: Array as PropType<NavItem[]>,
    default: () => [],
  },
  siteName: {
    type: String,
    default: '',
  },
});

const dialogRef: Ref<HTMLDialogElement | null> = ref(null);

const router = useRouter();
const closeAndGo = (dest: string) => {
  dialogRef.value?.close();

  router.push(dest);
};
</script>

<style scoped>
/* Outer nav element */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--fontface-emphasized);
}

@media screen and (min-width: 768px) {
  nav {
    justify-content: start;
    flex-wrap: wrap;
    gap: var(--gap-base);
  }
}

/* Show and hide mobile vs desktop navs */
.desktop-nav {
  display: none;
}

.mobile-nav {
  display: block;
}

@media screen and (min-width: 768px) {
  .desktop-nav {
    display: flex;
    gap: var(--gap-base);
  }

  .mobile-nav {
    display: none;
  }
}

.mobile-nav-links {
  gap: var(--gap-base);
  margin: var(--gap-base) var(--gap-base) auto;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}

/* Dialog element */
dialog {
  width: 100vw;
  height: 100vh;
  background-color: var(--color-accent-dark);
  border: none;
}

::backdrop {
  background-color: var(--color-primary);
  opacity: 0.75;
}

.dialog-content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Open and close buttons for the mobile nav */
.close-button,
.open-button {
  min-height: var(--button-height-base);
  min-width: var(--button-width-base);
}

.close-button {
  border-radius: 100%;
  align-self: flex-end;
}

.close-button img {
  height: var(--text-base);
  width: var(--text-base);
  margin: auto;
}

.close-button:hover {
  border: var(--border-size-base) solid var(--color-primary);
  color: var(--color-accent-dark);
}

.close-button:active,
.open-button:active {
  filter: brightness(150%);
}

.open-button {
  border-radius: var(--text-base);
}

.open-button:hover {
  outline: var(--border-size-base) solid var(--color-primary);
  outline-offset: calc(var(--border-size-base) * 2);
}

/* Style individual links */
.nav-links--link {
  text-decoration: none;
  border-bottom: unset;
  font-size: var(--text-md);
}

.nav-links--link:hover,
.nav-links--link:focus {
  border-bottom: var(--border-size-base) solid var(--color-primary);
}

.nav-links--home {
  font-size: var(--text-xl);
  border-bottom: unset;
  font-weight: bold;
}

.nav-links--home:hover {
  text-decoration: underline;
}

/* TODO: Target active links and take into account the hash on the link  - we don't want the hash link to be highlighted when the URL doesn't actually contain a hash.*/
/* .router-link-exact-active:not(.nav-links--home) {
  color: var(--color-secondary);
  border-bottom: 3px solid var(--color-primary);
} */
</style>
