<template>
    <p>{{ greeting }} this is the Vue app!</p>
</template>

<script>
module.exports = {
    data: function() {
        return {
            greeting: "Hello"
        };
    }
};
</script>

<style lang="scss" scoped>

@import "./styles.scss";

p {
    font-size: 2em;
    text-align: center;
}

</style>
