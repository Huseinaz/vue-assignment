export default {
    template: `
        <div :class="{
            'p-4 border rounded-lg' : true,
            'bg-white border-gray-300 text-black' : theme == 'light',
            'bg-gray-700 border-gray-600 text-white' : theme == 'dark',
        }">
            <h2 v-if="$slots.heading" class="font-bold">
                <slot name="heading" />
            </h2>
                <slot />
            <footer v-if="$slots.footer" class="border-gray-600 border-t nt-4 pt-4 text-sm">
                <slot name="footer" />
            </footer>
        </div>
    `,
    //or <h2 class="font-bold">{{heading}}</h2>
    props: {
        theme: {type: String, default: 'dark'}
    }
}