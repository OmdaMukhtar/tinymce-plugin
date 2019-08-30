<template>
    <div class="container">
        <h2 class="">How can We Add Plugins to Tinymce-Vue</h2>
        <editor id="app-editor" api-key="jh5j9j89wyv5mbctvucc67e0o5ba3q7v4xkldjfoaqv74glt" :init="inital" />
    </div>
</template>

<script>
import editor from '@tinymce/tinymce-vue';
export default {
    components: {
        editor
    },
    computed: {
        inital(){
            return {plugins: 'wordcount'};
        }
    }
}
</script>

<style  scoped>
    #app-editor{
        width: 50%;
    }

    .container{
        width: 720px;
        margin:100px auto;
    }
</style>