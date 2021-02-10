import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  Español: {
    description: "Dibuja, adivina y gana! 🎮🔮🎉",
    nickname: "Nombre:",
    not_empty: "¡El nombre de usuario no puede estar vacío!",
    play: "Jugar!",
    leave_room: "Salir de la sala",
    enter_guess: "Introduce palabra...",
    play_public: "Sala pública",
    play_private: "Sala privada",
    public_desc: "Juega con cualquiera",
    not_found: "Sala no encontrada, nombre de sala o contraseña erróneos.",
    already_exists: "La sala ya existe, prueba con otro nombre.",
    err_joining_or_creating: "Error uniéndose o creando sala.",
    fill_inputs: "Rellena todos los campos.",
    private_desc: "Juega con tus amigos en una sala privada",
    join_room: "Unirse a sala",
    create_room: "Crear sala",
    join_or_create_room: "Crea o únete a una sala privada",
    chat_evt: {
      guessed_word: " ha acertado la palabra!",
      going_to_draw: " va a dibujar.",
      reported: "El dibujante ha sido reportado.",
      player_left: " ha salido.",
      player_joined: " ha entrado.",
      player_won: " ha ganado!"
    }
  }
};

const i18n = new VueI18n({
  locale: "Español", // set locale
  fallbackLocale: "Español", // set fallback locale
  messages // set locale messages
});

export default i18n;
