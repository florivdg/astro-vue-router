<template>
  <div>
    <nav data-allow-mismatch>
      <router-link to="/tools/one">Tool One</router-link>
      <router-link to="/tools/one/sub1">Tool Sub 1</router-link>
      <router-link to="/tools/one/sub2">Tool Sub 2</router-link>
    </nav>
    <section>
      <router-view />
    </section>
  </div>
</template>

<script setup lang="ts"></script>
