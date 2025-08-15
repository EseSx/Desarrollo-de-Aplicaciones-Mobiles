from fastapi import HTTPException

# ---- Esquema de simulacion de una base de datos ----
# No hice una base de datos porque si la dejaba online tenia que dejarla en un servidor entonces preferi simularla total no se va a usar

cartas = [
    {
        "nombre": "The Fool",
        "numero": 0,
        "imagen": "https://tinyurl.com/TheFool0",
        "descripcion": {
            "español": "El amanecer de un nuevo cuento\nEl Arcano del Loco no significa que pueda tomarse a la ligera. El Loco es el número cero. Es el vacío del que todo lo demás surge.",
            "ingles": "The Dawn of a New Tale\nThe Fool Arcana does not mean that it can be taken lightly. The Fool is number zero. It is the void from which all other things begin.",
        },
        "valor_riesgo": 6,
        "efecto": {
            "voltear": "Reemplaza todas las cartas del tablero",
            "tomar": "Ignora el efecto de una carta al azar",
        },
        "afiliacion": "Mano del Destino",
        "justificacion": "Su esencia caótica puede salvarte o hundirte sin previo aviso.",
    },
    {
        "nombre": "The Magician",
        "numero": 1,
        "imagen": "https://tinyurl.com/TheMagician1Arcana",
        "descripcion": {
            "español": "Hacer es Ser\nLa siguiente carta, El Mago, representa la acción y la iniciativa...\npero también la inmadurez.",
            "ingles": "To Do is To Be\nThe next card, The Magician, represents action and initiative...\nbut also immaturity.",
        },
        "valor_riesgo": 6,
        "efecto": {
            "voltear": "Duplica efecto de otra carta aleatoria",
            "tomar": "Copia el efecto de otra carta visible",
        },
        "afiliacion": "Mano del Destino",
        "justificacion": "Manipula las fuerzas presentes sin un control real.",
    },
    {
        "nombre": "The Priestess",
        "numero": 2,
        "imagen": "https://tinyurl.com/ThePriestess2",
        "descripcion": {
            "español": "Perforar el velo\nLos Arcanos son el medio por el cual todo se revela...\nLa voz silenciosa dentro del corazón susurra la sabiduría más profunda.",
            "ingles": "Pierce The Veil\nThe Arcana is the means by which all is revealed...\nThe silent voice within one's heart whispers the most profound wisdom.",
        },
        "valor_riesgo": 3,
        "efecto": {
            "voltear": "Cancela una carta al azar",
            "tomar": "Te permite ver la próxima tirada",
        },
        "afiliacion": "Luz del Camino",
        "justificacion": "Oculta secretos pero permite vislumbrar el futuro si se honra su silencio.",
    },
    {
        "nombre": "The Empress",
        "numero": 3,
        "imagen": "https://tinyurl.com/TheEmpress3",
        "descripcion": {
            "español": "El futuro comienza hoy\nLos Arcanos son el medio por el cual todo se revela...\nCelebra la grandeza de la vida... su brillantez... su magnificencia...",
            "ingles": "The Future Starts Today\nThe Arcana is the means by which all is revealed...\nCelebrate life's grandeur...its brilliance...its magnificence...",
        },
        "valor_riesgo": 2,
        "efecto": {
            "voltear": "Aumenta el riesgo de todas las cartas +1",
            "tomar": "Cura un efecto negativo",
        },
        "afiliacion": "Mano del Destino",
        "justificacion": "Su naturaleza fértil puede abrumar o restaurar según el contexto.",
    },
    {
        "nombre": "The Emperor",
        "numero": 4,
        "imagen": "https://tinyurl.com/TheEmperor4",
        "descripcion": {
            "español": "El futuro comienza hoy\nLos Arcanos son el medio por el cual todo se revela...\nCelebra la grandeza de la vida... su brillantez... su magnificencia...",
            "ingles": "The Die is Cast\nThe Arcana is the means by which all is revealed...\nOnly courage in the face of doubt can lead one to the answer...",
        },
        "valor_riesgo": 4,
        "efecto": {
            "voltear": "Anula toda carta de riesgo 2 o menor",
            "tomar": "Bloquea el próximo efecto negativo",
        },
        "afiliacion": "Luz del Camino",
        "justificacion": "El orden impuesto puede protegerte o anular opciones útiles.",
    },
    {
        "nombre": "The Hierophant",
        "numero": 5,
        "imagen": "https://tinyurl.com/TheHierophant5",
        "descripcion": {
            "español": "Hacer sobre los demás\nLos Arcanos son el medio por el cual todo se revela...\nEs realmente un regalo precioso comprender las fuerzas que nos guían a nosotros mismos...",
            "ingles": "To Do Onto Others\nThe Arcana is the means by which all is revealed...\nIt is indeed a precious gift to understand the forces that guides oneself...",
        },
        "valor_riesgo": 3,
        "efecto": {
            "voltear": "Reduce el riesgo de todas las cartas -1",
            "tomar": "Elige ignorar una carta futura",
        },
        "afiliacion": "Luz del Camino",
        "justificacion": "Su guía espiritual busca evitar el caos sin alterar demasiado el flujo.",
    },
    {
        "nombre": "The Lovers",
        "numero": 6,
        "imagen": "https://tinyurl.com/TheLovers6",
        "descripcion": {
            "español": "Abraza tu libertad\nLos Arcanos son el medio por el cual todo se revela... Hay alegría y asombro en llegar a comprender a otro...",
            "ingles": "Embrace Your Freedom\nThe Arcana is the means by which all is revealed... There is both joy and wonder in coming to understand another...",
        },
        "valor_riesgo": 5,
        "efecto": {
            "voltear": "Permuta tu carta tomada por otra visible",
            "tomar": "Duplicás tu carta tomada si es positiva",
        },
        "afiliacion": "Mano del Destino",
        "justificacion": "Una decisión impulsiva puede traer recompensa o condena.",
    },
    {
        "nombre": "The Chariot",
        "numero": 7,
        "imagen": "https://tinyurl.com/TheChariot7",
        "descripcion": {
            "español": "Déjalos muertos\nLos Arcanos son el medio por el cual todo se revela...\nUna de las mayores bendiciones de la vida es la libertad de perseguir las propias metas.",
            "ingles": "Knock 'em Dead\nThe Arcana is the means by which all is revealed...\nOne of life's greatest blessings is the freedom to pursue one's goals.",
        },
        "valor_riesgo": 4,
        "efecto": {
            "voltear": "Obliga a tomar una carta aleatoria",
            "tomar": "Puedes mover una carta al final del mazo",
        },
        "afiliacion": "Mano del Destino",
        "justificacion": "El impulso puede sacarte del peligro o llevarte directo a él.",
    },
    {
        "nombre": "The Justice",
        "numero": 8,
        "imagen": "https://tinyurl.com/TheJustice8",
        "descripcion": {
            "español": "Vencer el mal\nLos Arcanos son el medio por el cual todo se revela.\nPara encontrar el único camino verdadero, uno debe buscar orientación en medio de la incertidumbre...",
            "ingles": "Vanquish Evil\nThe Arcana is the means by which all is revealed.\nTo find the one true path, one must seek guidance amidst uncertainty...",
        },
        "valor_riesgo": 3,
        "efecto": {
            "voltear": "Todas las cartas con mismo riesgo se activan",
            "tomar": "Permite cancelar una carta si ya usaste otra igual",
        },
        "afiliacion": "Mano del Destino",
        "justificacion": "Castiga la repetición o recompensa el equilibrio.",
    },
    {
        "nombre": "The Hermit",
        "numero": 9,
        "imagen": "https://tinyurl.com/TheHermit9",
        "descripcion": {
            "español": "¿Quién soy?\nLos Arcanos son el medio por el cual todo se revela...\nSe requiere un gran coraje para mirarse a uno mismo honestamente y forjar el propio camino...",
            "ingles": "Who Am I?\nThe Arcana is the means by which all is revealed...\nIt requires great courage to look at oneself honestly, and forge one's own path...",
        },
        "valor_riesgo": 2,
        "efecto": {
            "voltear": "Oculta el efecto de todas las cartas",
            "tomar": "Salteás esta ronda sin penalización",
        },
        "afiliacion": "Mano del Destino",
        "justificacion": "El aislamiento puede ser protección o desinformación fatal.",
    },
    {
        "nombre": "The Fortune",
        "numero": 10,
        "imagen": "https://tinyurl.com/TheFortune10",
        "descripcion": {
            "español": "Carpe Diem\nLa fortuna representa el destino y las oportunidades que trae consigo.",
            "ingles": "Carpe Diem\nFortune represents fate, and the opportunities that come with it.",
        },
        "valor_riesgo": 7,
        "efecto": {
            "voltear": "Mezcla todas las cartas visibles",
            "tomar": "Cambia el efecto de tu carta tomada",
        },
        "afiliacion": "Mano del Destino",
        "justificacion": "El giro del destino es incontrolable: azar puro.",
    },
    {
        "nombre": "The Strength",
        "numero": 11,
        "imagen": "https://tinyurl.com/TheStrength11",
        "descripcion": {
            "español": "El perdón es divino\nLos Arcanos son el medio por el cual todo se revela...\nSólo con fuerza se puede soportar el sufrimiento y el tormento.",
            "ingles": "Forgiveness Is Divine\nThe Arcana is the means by which all is revealed...\nOnly with strength can one endure suffering and torment.",
        },
        "valor_riesgo": 3,
        "efecto": {
            "voltear": "Cancelás una carta negativa",
            "tomar": "Tomás 2 cartas pero solo una se activa",
        },
        "afiliacion": "Luz del Camino",
        "justificacion": "Canalizar la fuerza interna conlleva riesgo, pero también victoria.",
    },
    {
        "nombre": "The Hanged Man",
        "numero": 12,
        "imagen": "https://tinyurl.com/TheHangedMan12",
        "descripcion": {
            "español": "Ahora o nunca\nLos Arcanos son el medio por el cual todo se revela...\nFrente al desastre se encuentra la oportunidad de renovación.",
            "ingles": "Now or Never\nThe Arcana is the means by which all is revealed...\nIn the face of disaster lies the opportunity for renewal.",
        },
        "valor_riesgo": 4,
        "efecto": {
            "voltear": "Inactiva tu carta tomada por 2 rondas",
            "tomar": "Duplicás el riesgo de todas tus cartas",
        },
        "afiliacion": "Voz del Vacío",
        "justificacion": "El sacrificio puede retrasar el peligro o aumentar la carga.",
    },
    {
        "nombre": "The Death",
        "numero": 13,
        "imagen": "https://tinyurl.com/TheDeath13",
        "descripcion": {
            "español": "Fin del Mundo\nEn el momento en que el hombre devoró el fruto del conocimiento, selló su destino... Confiando su futuro a las cartas, el hombre se aferra a una tenue esperanza. Sí, el Arcano es el medio por el cual todo se revela... Más allá del camino trillado se encuentra el fin absoluto. No importa quién seas... La muerte te espera.",
            "ingles": "End Of The World\nThe moment man devoured the fruit of knowledge, he sealed his fate... Entrusting his future to the cards, man clings to a dim hope. Yes, the Arcana is the means by which all is revealed... Beyond the beaten path lies the absolute end. It matters not who you are... Death awaits you.",
        },
        "valor_riesgo": 8,
        "efecto": {
            "voltear": "Pierdes la partida",
            "tomar": None,
        },
        "afiliacion": "Voz del Vacío",
        "justificacion": "Es el fin inevitable, aunque a veces... marca un nuevo comienzo.",
    },
    {
        "nombre": "The Temperance",
        "numero": 14,
        "imagen": "https://tinyurl.com/TheTemperance14",
        "descripcion": {
            "español": "Que Sera, Sera",
            "ingles": None,
        },
        "valor_riesgo": 1,
        "efecto": {
            "voltear": "Mitiga todos los efectos este turno",
            "tomar": "Devuelve una carta al mazo",
        },
        "afiliacion": "Luz del Camino",
        "justificacion": "El balance restaura sin grandes consecuencias.",
    },
    {
        "nombre": "The Devil",
        "numero": 15,
        "imagen": "https://tinyurl.com/TheDevil15",
        "descripcion": {
            "español": "Conoce al Diablo Interior... Mi pequeño aprendiz ingenuo... ¿Aún no te das cuenta de que te están engañando? ¡Todo lo que he dicho ha sido claramente sospechoso! *suspiro* La ignorancia debería ser un delito. Claro, tienes algunas cualidades positivas, pero si sigues siendo tan ingenuo, todos se aprovecharán de ti. ...Quédate conmigo y te mostraré cómo ser un ganador.",
            "ingles": "Know The Devil Inside\n...... My foolish little apprentice... Have you not yet realized that you are being deceived? Everything I've said has clearly been suspicious! *sigh* Ignorance should be a crime. Sure, you have some positive qualities, but if you remain so naive, everyone will take advantage of you. ...Stick with me, and I'll show you how to be a winner.",
        },
        "valor_riesgo": 6,
        "efecto": {
            "voltear": "Duplica el riesgo de dos cartas al azar",
            "tomar": "Te obliga a usar tu carta tomada sí o sí",
        },
        "afiliacion": "Voz del Vacío",
        "justificacion": "La tentación es poderosa y destructiva si no se domina.",
    },
    {
        "nombre": "The Tower",
        "numero": 16,
        "imagen": "https://tinyurl.com/TheTower16",
        "descripcion": {
            "español": "¿Penitencia o pretensión?\n... Todo lo visible está destinado a cambiar y desaparecer... No todo en este mundo es singular. Son pequeñas partes de un panorama mayor. Y, sin embargo, son diferentes entre sí. Todo en este mundo es único.",
            "ingles": "Penance or Pretense?\n...All things visible are bound to change and disappear... All things in this world are not singular. They're all smaller parts of a bigger picture. And yet, they're all different from each other. All things in this world are unique.",
        },
        "valor_riesgo": 7,
        "efecto": {
            "voltear": "Se activan los efectos de todas las cartas visibles",
            "tomar": "Tu carta tomada se pierde automáticamente",
        },
        "afiliacion": "Voz del Vacío",
        "justificacion": "La caída repentina de estructuras arrasa con todo.",
    },
    {
        "nombre": "The Star",
        "numero": 17,
        "imagen": "https://tinyurl.com/TheStar17",
        "descripcion": {
            "español": "Confía en ti mismo. Es una carta poderosa que da esperanza a quienes están en la tierra. Brilla en tiempos de necesidad. Pero, con el tiempo, está destinada a caer a tierra y desaparecer... Incluso yo puedo sentir la tristeza de este destino ineludible...",
            "ingles": "Trust in Yourself\nIt's a strong card, one that gives hope to those on the ground below. It shines in times of need. But, eventually, it is destined to fall to the earth and disappear... Even I can feel the sadness of this inescapable destiny...",
        },
        "valor_riesgo": 2,
        "efecto": {
            "voltear": "Reduce en 1 el riesgo de una carta visible",
            "tomar": "Permite elegir la próxima carta",
        },
        "afiliacion": "Luz del Camino",
        "justificacion": "La esperanza guía suavemente en medio del caos.",
    },
    {
        "nombre": "The Moon",
        "numero": 18,
        "imagen": "https://tinyurl.com/TheMoon18",
        "descripcion": {
            "español": "Una Larga Sombra Proyectada\nLa dicha lo hace vulnerable a las ilusiones de la Luna. Surgen los miedos, y sigue el sombrío camino de su corazón con inquietud...",
            "ingles": "A Long Shadow Cast\nThe bliss makes him vulnerable to the illusions of The Moon. Fears arise, and he follows the dim path in his heart with trepidation...",
        },
        "valor_riesgo": 6,
        "efecto": {
            "voltear": "Efectos de cartas visibles se invierten",
            "tomar": "Tu carta tomada cambia de efecto cada turno",
        },
        "afiliacion": "Mano del Destino",
        "justificacion": "La ilusión distorsiona lo evidente y lo vuelve incierto.",
    },
    {
        "nombre": "The Sun",
        "numero": 19,
        "imagen": "https://tinyurl.com/TheSun19S",
        "descripcion": {
            "español": "Tu vida es tuya. A menos que estés en mi situación, no puedes entender cómo es. Pero lo prefiero así. No se lo deseo a nadie.",
            "ingles": "Your Life is Your Own\nUnless you're in my situation, you can't understand what it's like. ...But I prefer it that way. I wouldn't wish this on anyone.",
        },
        "valor_riesgo": 1,
        "efecto": {
            "voltear": "Activa el efecto positivo de una carta sin tomarla",
            "tomar": "Cura todo efecto negativo en juego",
        },
        "afiliacion": "Luz del Camino",
        "justificacion": "Una bendición clara que disipa oscuridad.",
    },
    {
        "nombre": "The Judgement",
        "numero": 20,
        "imagen": "https://tinyurl.com/TheJudgement20",
        "descripcion": {
            "español": "La comedia ha terminado",
            "ingles": "The Comedy Is Over",
        },
        "valor_riesgo": 5,
        "efecto": {
            "voltear": "Revive una carta descartada (bajo efecto aleatorio)",
            "tomar": "Repites el efecto de tu última carta usada",
        },
        "afiliacion": "Mano del Destino",
        "justificacion": "El retorno puede traer redención... o repetición de errores.",
    },
    {
        "nombre": "The World",
        "numero": 21,
        "imagen": "https://tinyurl.com/TheWorld21S",
        "descripcion": {
            "español": "La última carta es El Mundo, que representa la plena conciencia del individuo y su lugar en el mundo.",
            "ingles": "The final card is The World, which represents the individual's full awareness and place in the world.",
        },
        "valor_riesgo": 4,
        "efecto": {
            "voltear": "Si tenés una carta guardada, ganás",
            "tomar": "Si no tenés ninguna, perdés",
        },
        "afiliacion": "Voz del Vacío",
        "justificacion": "La culminación total exige preparación o castiga la pasividad.",
    },
    {
        "nombre": "Reverso",
        "numero": 22,
        "imagen": "https://tinyurl.com/Back22S",
        "descripcion": {
            "español": None,
            "ingles": None,
        },
        "valor_riesgo": None,
        "efecto": {
            "voltear": None,
            "tomar": None,
        },
        "afiliacion": None,
        "justificacion": None,
    },
]


# ---- Funciones que manejan como se consiguen los datos ----
async def get_all():
    """
    Devuelve todos los datos de todas las cartas
    """

    return cartas


async def get_by_number(number):
    """
    Devuelve los datos de la carta que coincida con el numero de la carta
    """

    result = []

    carta_principal = next(
        (carta for carta in cartas if carta["numero"] == number), None
    )
    if not carta_principal:
        raise HTTPException(status_code=404, detail="Carta no encontrada")

    result.append(carta_principal)

    carta_reverso = next((carta for carta in cartas if carta["numero"] == 22), None)
    if carta_reverso:
        result.append(carta_reverso)

    return result


async def get_by_valor_riesgo(number):
    """
    Devuelve los datos de la carta que coincida con el valor de riego de la carta
    """

    resultado = [carta for carta in cartas if carta["valor_riesgo"] == number]

    if not resultado:
        raise HTTPException(
            status_code=404, detail="No se encontraron cartas con ese valor de riesgo"
        )

    return resultado
