<template>
    <v-card
        elevation="4"
        class="mx-4 mx-sm-2 pt-2"
        height="100%"
    >
        <v-img
            :src="pokemon.imageURL"
            class="ma-4"
            max-height="240"
            contain
        >
            <template v-slot:placeholder>
                <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                >
                    <v-progress-circular
                        indeterminate
                        color="grey lighten-2"
                    ></v-progress-circular>
                </v-row>
            </template>
        </v-img>
        <div class="text-capitalize text-center headline">{{ pokemon.name }}</div>
        <v-card-subtitle class="text-center py-1">Weight: {{ pokemon.weight }}</v-card-subtitle>
        <v-card-text class="pl-6">
            <div class="black--text">Abilities:</div>
            <div v-for="(ability, index) in pokemon.abilities" :key="index">
                <div class="">{{ index+1 }}: {{ ability.ability.name }}</div>
            </div>
        </v-card-text>
    </v-card>
</template>
  
<script>

export default {
    props:['pokemon']
};
</script>
  