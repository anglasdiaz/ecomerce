<template>
  <div class=" relative Input">
    <slot></slot>
    <label :for="tipo" class="label">{{ name }}</label>
  </div>
</template>
<script>
export default {
  name: "Input",
  props: {
    name: String,
    tipo: String,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.Input {
  input[type="text"] ~ .label,
  input[type="email"] ~ .label,
  input[type="number"] ~ .label,
  input[type="password"] ~ .label {
    position: absolute;
    top: 16px;
    left: 15px;
    // transform: translate3d(0, 0, 0);
    transition: all 0.2s ease-in-out;
    font-size: 16px;
    cursor: text;
    width: 100%;
    //color: #8B9099;
  }
  input[type="text"],
  input[type="email"],
  input[type="number"],
  input[type="password"] {
    width: 100%;
    padding-left: 15px;
    padding-top: 1.6em;
    padding-bottom: 0.8em;
    &:valid ~ label,
    &:focus ~ label {
      top: 5px;
      color: #969696;
      font-size: 12px;
      //transform: translate3d(0, -10px, 0);
    }
  }
}
</style>
