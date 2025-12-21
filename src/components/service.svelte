<script lang="ts">
    import { List, Li, Span } from 'flowbite-svelte';
    import {CaretRightSolid} from "flowbite-svelte-icons";
    export let title: string="";
    export let content: string="";    
</script>

<div class="service">
    <h3 class="text-2xl py-8 font-bold cm">{title}</h3>
    <List tag="ul" class="mb-8 space-y-4 text-gray-500 dark:text-gray-400" list="none">
        {#each content.split(/\;/g) as c}
            {#if String(c).trim().length > 0}
                <Li icon class="gap-3">
                    <CaretRightSolid class="w-5 h-5 text-green-500 cm" />
                    {String(c).trim()}
                </Li>
            {/if}
        {/each}
    </List>
</div>

