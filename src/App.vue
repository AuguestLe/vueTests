<template>
    <div id="app">
        <component :is="currentView"></component>
        <button @click="handleChangeView('A')">切换到A</button>
        <button @click="handleChangeView('B')">切换到B</button>
        <button @click="handleChangeView('C')">切换到C</button>
    </div>
</template>

<script>

export default {
    name: 'app',
    data(){
        return {
            currentView:'comA'
        }
    },
    components: {
        'comA': {
            template: '<div>组件A</div>'
        },
        'comB': {
            template: '<div>组件B</div>'
        },
        'comC': {
            template: '<div>组件C</div>'
        },
    },
    methods: {
        handleChangeView: function(comp){
            this.currentView = 'com'+ comp;
        }
    }
}
</script>
