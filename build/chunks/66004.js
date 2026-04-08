/** chunk id: 66004 params = (module,exports,require) **/
n.d(e, {
    A: () => m
});
var i = n(627968),
    l = n(64700),
    r = n(835245),
    s = n(311907),
    a = n(73153),
    o = n(775602),
    u = n(58149),
    d = n(667050),
    c = n(407781),
    h = n(652215),
    A = n(384187);

function m(t) {
    let {
        channelId: e,
        guildId: n,
        userId: m,
        containerDimensions: p
    } = t, g = (0, s.bG)([o.A], () => o.A.useReducedMotion), [f, T] = l.useState([]), E = f.length < 50;
    l.useEffect(() => {
        function t(t) {
            let {
                channelId: i,
                userId: l,
                emoji: s,
                animationType: a,
                animationId: o
            } = t;
            if (null != m && m !== l) return;
            let c = null != s && null != a && null != o;
            if (i === e && !g && E && c) {
                let t = (0, d.Br)(s),
                    i = null != s.id && !s.animated,
                    c = {
                        id: (0, r.A)(),
                        animationType: a,
                        animationId: o,
                        shouldResize: i,
                        url: t,
                        userId: l
                    };
                T(t => [...t, c]), u.Ay.trackWithMetadata(h.HAw.VOICE_CHANNEL_EFFECT_VIEWED, {
                    channel_id: e,
                    guild_id: n
                })
            }
        }
        return a.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", t), () => {
            a.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", t)
        }
    }, [e, n, m, g, E]);
    let C = l.useCallback(t => {
        T(e => {
            let n = [...e],
                i = n.findIndex(e => e.id === t);
            return n.splice(i, 1), n
        })
    }, []);
    return g ? null : (0, i.jsx)("div", {
        className: A.Y,
        style: {
            width: p.width
        },
        children: (0, i.jsx)("div", {
            className: A.z,
            children: f.map(t => (0, i.jsx)(c.A, {
                containerDimensions: p,
                effect: t,
                onComplete: C
            }, t.id))
        })
    })
}