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
