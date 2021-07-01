<template>
  <v-text-field
  :value="$store.state.search"
  @input="$store.commit('setSearch',$event)"
  class='expanding-search mt-1 closed'
  placeholder='Search'
  filled
  dense
  clearable
  prepend-inner-icon="mdi-magnify"
  >
  </v-text-field>
</template>

<script>
export default {

}
</script>

<style lang="css">
.expanding-search

{
    border-color: transparent !important

}
.closed{
    max-width:45px
}
</style>