<script lang="ts">
    export let content: string="";
    import {List, Li} from 'flowbite-svelte';
    import {CaretRightSolid} from "flowbite-svelte-icons";
</script>

<List tag="ul" class="mb-8 space-y-4" list="none">
    {#each content.split(/\;\;/g) as c}
        {#if String(c).trim().length > 0}
            <Li icon class="gap-3">
                <CaretRightSolid class="w-5 h-5 text-green-500 cm" />
                {String(c).trim()}
            </Li>
        {/if}
    {/each}
</List>
