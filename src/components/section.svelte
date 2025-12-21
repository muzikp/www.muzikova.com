<script lang="ts">
    export let title: string = "";
    export let anchor: string = "";    
</script>

<style>
    h3 {        
        padding-bottom: 1rem;        
    }
</style>

<div id="{anchor}" class="container w-full mx-auto relative px-8">
    <h3 class="uppercase text-2xl font-bold py-8">{title}</h3>
    <slot></slot>
</div>
