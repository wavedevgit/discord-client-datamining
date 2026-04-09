/** chunk id: 394245 params = (module,exports,require) **/
n.d(t, {
    PT: () => r,
    Pb: () => d,
    W3: () => o,
    me: () => c
});
var i, a = n(761915),
    l = n(397927),
    s = n(985018);
let r = {
        [a.X.BETTER_THAN_YOU]: {
            getText: () => s.intl.string(s.t.jbIRBE),
            icon: l.qsD
        },
        [a.X.CASUAL]: {
            getText: () => s.intl.string(s.t.xcFFv6),
            icon: l.qsD
        },
        [a.X.INTERMEDIATE]: {
            getText: () => s.intl.string(s.t["A/mIs/"]),
            icon: l.qsD
        },
        [a.X.EXPERT]: {
            getText: () => s.intl.string(s.t.RIOFc2),
            icon: l.qsD
        },
        [a.X.OBSESSED]: {
            getText: () => s.intl.string(s.t.isPJDu),
            icon: l.Gek
        },
        [a.X.LOVE_IT]: {
            getText: () => s.intl.string(s.t["1rN7BF"]),
            icon: l.Gek
        },
        [a.X.KIND_OF_LOVE_IT]: {
            getText: () => s.intl.string(s.t.bCBpVg),
            icon: l.Gek
        },
        [a.X.KIND_OF_HATE_IT]: {
            getText: () => s.intl.string(s.t["/WcmcP"]),
            icon: l.d2e
        },
        [a.X.RAGE_QUITTING]: {
            getText: () => s.intl.string(s.t["NXZ/MZ"]),
            icon: l.d2e
        },
        [a.X.OPEN_TO_PLAY]: {
            getText: () => s.intl.string(s.t.q30PoH),
            icon: l.$yI
        },
        [a.X.LOOKING_FOR_GROUP]: {
            getText: () => s.intl.string(s.t.DWWAAQ),
            icon: l.$yI
        },
        [a.X.LOOKING_FOR_TIPS]: {
            getText: () => s.intl.string(s.t.KQDVvH),
            icon: l.$yI
        },
        [a.X.OPEN_TO_TEACH]: {
            getText: () => s.intl.string(s.t["5HhQo+"]),
            icon: l.$yI
        },
        [a.X.LOOKING_TO_DISCUSS]: {
            getText: () => s.intl.string(s.t.GipOCq),
            icon: l.$yI
        }
    },
    o = e => {
        let t = r[e];
        return null != t ? t : null
    };
var c = ((i = {}).RADIO = "radio", i.CHECKBOX = "checkbox", i);
let d = {
    skill_level: {
        getLabel: () => s.intl.string(s.t.MKqADM),
        type: "radio",
        tags: [a.X.CASUAL, a.X.INTERMEDIATE, a.X.EXPERT, a.X.BETTER_THAN_YOU]
    },
    rating: {
        getLabel: () => s.intl.string(s.t["7/umul"]),
        type: "checkbox",
        tags: [a.X.OBSESSED, a.X.LOVE_IT, a.X.KIND_OF_LOVE_IT, a.X.KIND_OF_HATE_IT, a.X.RAGE_QUITTING]
    },
    looking_for: {
        getLabel: () => s.intl.string(s.t["5Dez17"]),
        type: "checkbox",
        tags: [a.X.LOOKING_FOR_GROUP, a.X.OPEN_TO_PLAY, a.X.LOOKING_FOR_TIPS, a.X.OPEN_TO_TEACH, a.X.LOOKING_TO_DISCUSS]
    }
}