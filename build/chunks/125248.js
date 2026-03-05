/** chunk id: 125248, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(735438),
    o = n(835245),
    c = n(311907),
    d = n(73153),
    u = n(565645),
    h = n(775602),
    A = n(480004);
let m = [A.u8, A.n$, A.uN, A.no],
    p = s.memo(function(e) {
        let {
            emoji: t,
            onAnimationEnd: n
        } = e, l = (0, a.sample)(m), o = s.useCallback(() => {
            n(t.key)
        }, [t.key, n]);
        return (0, i.jsx)("div", {
            className: r()(A.Zg, l),
            onAnimationEnd: o,
            children: (0, i.jsx)(u.A, {
                emojiId: t.id,
                emojiName: t.name,
                animated: t.animated ?? !1
            })
        })
    });

function g(e) {
    let {
        channelId: t,
        callHeight: n
    } = e, l = (0, c.bG)([h.A], () => h.A.useReducedMotion), [r, a] = s.useState([]);
    s.useEffect(() => {
        function e(e) {
            let {
                channelId: n,
                emoji: i
            } = e;
            n !== t || l || null == i || a(e => [...e, {
                key: (0, o.A)(),
                ...i
            }])
        }
        return d.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", e), () => {
            d.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e)
        }
    }, [t, l]);
    let u = s.useCallback(e => {
        a(t => t.filter(t => t.key !== e))
    }, []);
    return l ? null : (0, i.jsx)("div", {
        className: A.kL,
        style: {
            top: n - 50,
            left: "52%"
        },
        "aria-hidden": !0,
        children: r.map(e => (0, i.jsx)(p, {
            emoji: e,
            onAnimationEnd: u
        }, e.key))
    })
}