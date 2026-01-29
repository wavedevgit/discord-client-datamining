/** Chunk was on 6500 **/
/** chunk id: 66004, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(835245),
    a = n(311907),
    s = n(73153),
    o = n(775602),
    c = n(58149),
    u = n(667050),
    d = n(407781),
    p = n(652215),
    f = n(6694);

function m(e) {
    let {
        channelId: t,
        guildId: n,
        userId: m,
        containerDimensions: g
    } = e, _ = (0, a.bG)([o.A], () => o.A.useReducedMotion), [y, A] = i.useState([]), b = y.length < 50;
    i.useEffect(() => {
        function e(e) {
            let {
                channelId: r,
                userId: i,
                emoji: a,
                animationType: s,
                animationId: o
            } = e;
            if (null != m && m !== i) return;
            let d = null != a && null != s && null != o;
            if (r === t && !_ && b && d) {
                let e = (0, u.Br)(a),
                    r = null != a.id && !a.animated,
                    d = {
                        id: (0, l.A)(),
                        animationType: s,
                        animationId: o,
                        shouldResize: r,
                        url: e,
                        userId: i
                    };
                A(e => [...e, d]), c.Ay.trackWithMetadata(p.HAw.VOICE_CHANNEL_EFFECT_VIEWED, {
                    channel_id: t,
                    guild_id: n
                })
            }
        }
        return s.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", e), () => {
            s.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e)
        }
    }, [t, n, m, _, b]);
    let h = i.useCallback(e => {
        A(t => {
            let n = [...t],
                r = n.findIndex(t => t.id === e);
            return n.splice(r, 1), n
        })
    }, []);
    return _ ? null : (0, r.jsx)("div", {
        className: f.Y,
        style: {
            width: g.width
        },
        children: (0, r.jsx)("div", {
            className: f.z,
            children: y.map(e => (0, r.jsx)(d.A, {
                containerDimensions: g,
                effect: e,
                onComplete: h
            }, e.id))
        })
    })
}