/** chunk id: 900210 params = (module,exports,require) **/
i.d(t, {
    A: () => h,
    W: () => o
});
var n, a = i(311907),
    l = i(73153),
    o = ((n = {}).HOVER = "HOVER", n.EXTERNAL = "EXTERNAL", n.RANDOM = "RANDOM", n);
let r = {},
    s = {},
    c = {},
    d = (e, t) => {
        let i = null != t.id ? t.id : t.name;
        return `${e}:${i}`
    };
class u extends a.Ay.Store {
    static displayName = "BurstReactionEffectsStore";
    getReactionPickerAnimation(e, t, i) {
        return r[`${e}:${t}:${i??""}`]
    }
    getEffectForEmojiId(e, t, i) {
        let n = d(t, i);
        return s[e]?.[n]
    }
}
let h = new u(l.h, {
    BURST_REACTION_EFFECT_CLEAR: e => {
        let {
            channelId: t,
            messageId: i,
            emoji: n
        } = e, a = d(i, n);
        delete s[t]?.[a]
    },
    BURST_REACTION_EFFECT_PLAY: e => {
        let {
            channelId: t,
            messageId: i,
            emoji: n,
            key: a
        } = e, l = d(i, n);
        if (((e, t) => {
                let i;
                switch (e) {
                    case "HOVER":
                        i = "HOVER";
                        break;
                    case "RANDOM":
                        i = "RANDOM";
                        break;
                    default:
                        i = "EXTERNAL"
                }
                let n = Object.fromEntries(Object.entries(s[t] ?? {}).filter(e => {
                    let [, t] = e;
                    return t === i
                }));
                if (Object.keys(n).length >= 5 && "EXTERNAL" === e) {
                    for (let e in n)
                        if (null == c[t] || null == c[t][e]) {
                            delete s[t][e], delete n[e];
                            break
                        }
                }
                return Object.keys(n).length
            })(a, t) >= 5) return;
        let o = s[t] ?? {},
            r = (c[t] ?? {})[l],
            u = o[l];
        ("HOVER" !== a || null == u) && ("HOVER" === u && "EXTERNAL" === a && null != r && ("function" == typeof r.destroy && r.destroy(), delete c[t]?.[l], u = void 0), null == u && (null != s[t] ? s[t][l] = a : s[t] = {
            [l]: a
        }))
    },
    BURST_REACTION_ANIMATION_ADD: e => {
        let {
            channelId: t,
            messageId: i,
            emoji: n,
            animation: a
        } = e, l = d(i, n);
        null == c[t] && (c[t] = {}), c[t][l] = a
    },
    BURST_REACTION_PICKER_ANIMATION_ADD: e => {
        let {
            messageId: t,
            emojiName: i,
            emojiId: n,
            startPosition: a
        } = e;
        r[`${t}:${i}:${n??""}`] = a
    },
    BURST_REACTION_PICKER_ANIMATION_CLEAR: e => {
        let {
            messageId: t,
            emojiName: i,
            emojiId: n
        } = e;
        delete r[`${t}:${i}:${n??""}`]
    }
})