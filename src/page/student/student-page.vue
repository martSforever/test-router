<template>
    <div class="student-page">
        学生主页,name==>>{{name}}
    </div>
</template>

<script>
    export default {
        name: "student-page",
        data() {
            return {
                name: null
            }
        },
        mounted() {
            this.name = this.$route.query.name
        },
        destroyed() {
            console.log('student destroyed')
        },
    }
</script>

<style>
    .student-page {
        background-color: blueviolet;
    }
</style>