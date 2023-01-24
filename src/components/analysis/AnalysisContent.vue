<template>
    <div class='w-full h-full rounded-xl border-4 p-5 mx-auto my-auto relative border-gray-100 shadow-sm transiton-all duration-700 ease-in-out'>
            <slot name="card-content">

            </slot>
    </div>
</template>

<script>
export default {
    props: ['article'],
};
</script>