/** chunk id: 636920 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Z: () => N
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(3026),
    r = n(435371),
    o = n(397927),
    c = n(956793),
    d = n(576705),
    u = n(309010),
    h = n(954571),
    A = n(69555),
    m = n(886019),
    _ = n(846218),
    p = n(806246),
    g = n(358957),
    f = n(559405),
    x = n(708455),
    E = n(652215),
    C = n(985018),
    I = n(392951);

function N(e) {
    let {
        hangStatusActivity: t,
        channel: n,
        userId: N,
        isSelf: b = !1,
        analyticsSource: S,
        onAction: T
    } = e, v = (0, l.bG)([u.A], () => u.A.getVoiceChannelId() === n.id, [n]), y = (0, l.bG)([d.A], () => d.A.can(E.xBc.CONNECT, n), [n]), j = null == t.emoji || (0, _.n)(t.emoji, n);
    s.useEffect(() => {
        h.default.track(E.HAw.VIEW_HANG_STATUS, {
            source: S,
            other_user_id: N,
            ...(0, p.A)(n.id)
        })
    }, [S, n.id, N]);
    let R = s.useCallback(() => {
            !v && y && (c.default.selectVoiceChannel(n.id), T?.(), h.default.track(E.HAw.HANG_STATUS_CTA_CLICKED, {
                source: S,
                ...(0, p.A)(n.id),
                other_user_id: N,
                cta_type: "join"
            }))
        }, [v, y, n.id, N, S, T]),
        O = s.useCallback(() => {
            if (!v || !j || null == t.state) return;
            let [e] = (0, g.e)(N, t.state);
            if (null != e) {
                if (e === x.Kk.CUSTOM) {
                    if (null == t.details || null == t.emoji) return;
                    (0, A.hS)(t.details, t.emoji, !0)
                } else(0, A.Iq)(e, !0);
                T?.(), h.default.track(E.HAw.HANG_STATUS_CTA_CLICKED, {
                    source: S,
                    ...(0, p.A)(n.id),
                    other_user_id: N,
                    cta_type: "swipe"
                })
            }
        }, [v, j, t, n.id, N, S, T]),
        L = (0, m.Au)(N, t);
    return (0, i.jsxs)("div", {
        className: I.kL,
        children: [(0, i.jsx)(f.A, {
            userId: N,
            size: 32,
            className: I.Kk,
            hangStatusActivity: t
        }), (0, i.jsx)(o.Text, {
            variant: "text-md/medium",
            className: I.qS,
            children: (0, i.jsx)(a.A, {
                delay: 0,
                children: L
            })
        }), v && !b ? (0, i.jsx)(r.m_, {
            text: j ? void 0 : C.intl.string(C.t["0LMpW+"]),
            children: (0, i.jsx)("div", {
                children: (0, i.jsx)(o.Button, {
                    size: "sm",
                    variant: "secondary",
                    text: C.intl.string(C.t["0eHzpm"]),
                    onClick: O,
                    disabled: !j
                })
            })
        }) : !b && y && (0, i.jsx)(o.Button, {
            size: "sm",
            variant: "secondary",
            text: C.intl.string(C.t["B/dHXL"]),
            onClick: R
        })]
    })
}