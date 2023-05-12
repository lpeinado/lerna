<template>
    <div class="shared-widget">
        {{ msg  }}
    </div>
</template>

<script>
    export default {
        name: 'SharedWidget',
        props: {
            msg: String
        }
    }
</script>

<style scoped>
.shared-widget {
    color:red;
    border: 1px dashed rgb(32, 108, 175);
    padding: 15px;
}
</style>