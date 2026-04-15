/** chunk id: 66004 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    l = n(64700),
    a = n(835245),
    s = n(311907),
    r = n(73153),
    o = n(775602),
    c = n(58149),
    d = n(667050),
    u = n(407781),
    h = n(652215),
    m = n(384187);

function A(e) {
    let {
        channelId: t,
        guildId: n,
        userId: A,
        containerDimensions: g
    } = e, _ = (0, s.bG)([o.A], () => o.A.useReducedMotion), [p, f] = l.useState([]), E = p.length < 50;
    l.useEffect(() => {
        function e(e) {
            let {
                channelId: i,
                userId: l,
                emoji: s,
                animationType: r,
                animationId: o
            } = e;
            if (null != A && A !== l) return;
            let u = null != s && null != r && null != o;
            if (i === t && !_ && E && u) {
                let e = (0, d.Br)(s),
                    i = null != s.id && !s.animated,
                    u = {
                        id: (0, a.A)(),
                        animationType: r,
                        animationId: o,
                        shouldResize: i,
                        url: e,
                        userId: l
                    };
                f(e => [...e, u]), c.Ay.trackWithMetadata(h.HAw.VOICE_CHANNEL_EFFECT_VIEWED, {
                    channel_id: t,
                    guild_id: n
                })
            }
        }
        return r.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", e), () => {
            r.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e)
        }
    }, [t, n, A, _, E]);
    let C = l.useCallback(e => {
        f(t => {
            let n = [...t],
                i = n.findIndex(t => t.id === e);
            return n.splice(i, 1), n
        })
    }, []);
    return _ ? null : (0, i.jsx)("div", {
        className: m.Y,
        style: {
            width: g.width
        },
        children: (0, i.jsx)("div", {
            className: m.z,
            children: p.map(e => (0, i.jsx)(u.A, {
                containerDimensions: g,
                effect: e,
                onComplete: C
            }, e.id))
        })
    })
}