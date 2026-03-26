/** chunk id: 66004 params = (module,exports,require) **/
i.d(t, {
    A: () => E
});
var n = i(627968),
    l = i(64700),
    s = i(835245),
    a = i(311907),
    r = i(73153),
    u = i(775602),
    d = i(58149),
    o = i(667050),
    A = i(407781),
    c = i(652215),
    _ = i(384187);

function E(e) {
    let {
        channelId: t,
        guildId: i,
        userId: E,
        containerDimensions: I
    } = e, h = (0, a.bG)([u.A], () => u.A.useReducedMotion), [f, p] = l.useState([]), m = f.length < 50;
    l.useEffect(() => {
        function e(e) {
            let {
                channelId: n,
                userId: l,
                emoji: a,
                animationType: r,
                animationId: u
            } = e;
            if (null != E && E !== l) return;
            let A = null != a && null != r && null != u;
            if (n === t && !h && m && A) {
                let e = (0, o.Br)(a),
                    n = null != a.id && !a.animated,
                    A = {
                        id: (0, s.A)(),
                        animationType: r,
                        animationId: u,
                        shouldResize: n,
                        url: e,
                        userId: l
                    };
                p(e => [...e, A]), d.Ay.trackWithMetadata(c.HAw.VOICE_CHANNEL_EFFECT_VIEWED, {
                    channel_id: t,
                    guild_id: i
                })
            }
        }
        return r.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", e), () => {
            r.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e)
        }
    }, [t, i, E, h, m]);
    let g = l.useCallback(e => {
        p(t => {
            let i = [...t],
                n = i.findIndex(t => t.id === e);
            return i.splice(n, 1), i
        })
    }, []);
    return h ? null : (0, n.jsx)("div", {
        className: _.Y,
        style: {
            width: I.width
        },
        children: (0, n.jsx)("div", {
            className: _.z,
            children: f.map(e => (0, n.jsx)(A.A, {
                containerDimensions: I,
                effect: e,
                onComplete: g
            }, e.id))
        })
    })
}