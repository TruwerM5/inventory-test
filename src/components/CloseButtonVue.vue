<template>
    <button class="close-button">
        <span class="close-button__line close-button__line_1"></span>
        <span class="close-button__line close-button__line_2"></span>
    </button>
</template>

<style lang="sass" scoped>
.close-button
    position: absolute
    top: 14px
    right: 14px
    width: 24px
    height: 24px
    background-color: transparent
    border: none
    &__line
        position: absolute
        left: 0
        width: 100%
        height: 3px
        background-color: #fff
        transform-origin: center center
        &_1
            top: 50%
            transform: translateY(-50%) rotate(45deg)
        &_2
            bottom: 50%
            transform: translateY(50%) rotate(-45deg)

</style>