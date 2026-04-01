/** chunk id: 394245 params = (module,exports,require) **/
n.d(t, {
    PT: () => r,
    Pb: () => c,
    W3: () => o,
    me: () => d
});
var i, l = n(761915),
    a = n(397927),
    s = n(985018);
let r = {
        [l.X.BETTER_THAN_YOU]: {
            getText: () => s.intl.string(s.t.jbIRBE),
            icon: a.qsD
        },
        [l.X.CASUAL]: {
            getText: () => s.intl.string(s.t.xcFFv6),
            icon: a.qsD
        },
        [l.X.INTERMEDIATE]: {
            getText: () => s.intl.string(s.t["A/mIs/"]),
            icon: a.qsD
        },
        [l.X.EXPERT]: {
            getText: () => s.intl.string(s.t.RIOFc2),
            icon: a.qsD
        },
        [l.X.OBSESSED]: {
            getText: () => s.intl.string(s.t.isPJDu),
            icon: a.Gek
        },
        [l.X.LOVE_IT]: {
            getText: () => s.intl.string(s.t["1rN7BF"]),
            icon: a.Gek
        },
        [l.X.KIND_OF_LOVE_IT]: {
            getText: () => s.intl.string(s.t.bCBpVg),
            icon: a.Gek
        },
        [l.X.KIND_OF_HATE_IT]: {
            getText: () => s.intl.string(s.t["/WcmcP"]),
            icon: a.d2e
        },
        [l.X.RAGE_QUITTING]: {
            getText: () => s.intl.string(s.t["NXZ/MZ"]),
            icon: a.d2e
        },
        [l.X.OPEN_TO_PLAY]: {
            getText: () => s.intl.string(s.t.q30PoH),
            icon: a.$yI
        },
        [l.X.LOOKING_FOR_GROUP]: {
            getText: () => s.intl.string(s.t.DWWAAQ),
            icon: a.$yI
        },
        [l.X.LOOKING_FOR_TIPS]: {
            getText: () => s.intl.string(s.t.KQDVvH),
            icon: a.$yI
        },
        [l.X.OPEN_TO_TEACH]: {
            getText: () => s.intl.string(s.t["5HhQo+"]),
            icon: a.$yI
        },
        [l.X.LOOKING_TO_DISCUSS]: {
            getText: () => s.intl.string(s.t.GipOCq),
            icon: a.$yI
        }
    },
    o = e => {
        let t = r[e];
        return null != t ? t : null
    };
var d = ((i = {}).RADIO = "radio", i.CHECKBOX = "checkbox", i);
let c = {
    skill_level: {
        getLabel: () => s.intl.string(s.t.MKqADM),
        type: "radio",
        tags: [l.X.CASUAL, l.X.INTERMEDIATE, l.X.EXPERT, l.X.BETTER_THAN_YOU]
    },
    rating: {
        getLabel: () => s.intl.string(s.t["7/umul"]),
        type: "checkbox",
        tags: [l.X.OBSESSED, l.X.LOVE_IT, l.X.KIND_OF_LOVE_IT, l.X.KIND_OF_HATE_IT, l.X.RAGE_QUITTING]
    },
    looking_for: {
        getLabel: () => s.intl.string(s.t["5Dez17"]),
        type: "checkbox",
        tags: [l.X.LOOKING_FOR_GROUP, l.X.OPEN_TO_PLAY, l.X.LOOKING_FOR_TIPS, l.X.OPEN_TO_TEACH, l.X.LOOKING_TO_DISCUSS]
    }
}