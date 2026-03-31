/** chunk id: 66004 params = (module,exports,require) **/
i.d(t, {
    A: () => p
});
var n = i(627968),
    a = i(64700),
    l = i(835245),
    s = i(311907),
    r = i(73153),
    o = i(775602),
    c = i(58149),
    d = i(667050),
    u = i(407781),
    m = i(652215),
    _ = i(748656);

function p(e) {
    let {
        channelId: t,
        guildId: i,
        userId: p,
        containerDimensions: h
    } = e, A = (0, s.bG)([o.A], () => o.A.useReducedMotion), [g, f] = a.useState([]), v = g.length < 50;
    a.useEffect(() => {
        function e(e) {
            let {
                channelId: n,
                userId: a,
                emoji: s,
                animationType: r,
                animationId: o
            } = e;
            if (null != p && p !== a) return;
            let u = null != s && null != r && null != o;
            if (n === t && !A && v && u) {
                let e = (0, d.Br)(s),
                    n = null != s.id && !s.animated,
                    u = {
                        id: (0, l.A)(),
                        animationType: r,
                        animationId: o,
                        shouldResize: n,
                        url: e,
                        userId: a
                    };
                f(e => [...e, u]), c.Ay.trackWithMetadata(m.HAw.VOICE_CHANNEL_EFFECT_VIEWED, {
                    channel_id: t,
                    guild_id: i
                })
            }
        }
        return r.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", e), () => {
            r.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e)
        }
    }, [t, i, p, A, v]);
    let S = a.useCallback(e => {
        f(t => {
            let i = [...t],
                n = i.findIndex(t => t.id === e);
            return i.splice(n, 1), i
        })
    }, []);
    return A ? null : (0, n.jsx)("div", {
        className: _.Y,
        style: {
            width: h.width
        },
        children: (0, n.jsx)("div", {
            className: _.z,
            children: g.map(e => (0, n.jsx)(u.A, {
                containerDimensions: h,
                effect: e,
                onComplete: S
            }, e.id))
        })
    })
}