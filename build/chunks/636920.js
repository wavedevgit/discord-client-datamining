/** chunk id: 636920 params = (module,exports,require) **/
n.d(t, {
    Z: () => N
});
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(3026),
    r = n(435371),
    o = n(397927),
    d = n(956793),
    c = n(576705),
    u = n(309010),
    h = n(954571),
    A = n(69555),
    _ = n(886019),
    m = n(846218),
    p = n(806246),
    g = n(358957),
    f = n(559405),
    x = n(708455),
    E = n(652215),
    I = n(985018),
    C = n(392951);

function N(e) {
    let {
        hangStatusActivity: t,
        channel: n,
        userId: N,
        isSelf: T = !1,
        analyticsSource: S,
        onAction: b
    } = e, v = (0, s.bG)([u.A], () => u.A.getVoiceChannelId() === n.id, [n]), y = (0, s.bG)([c.A], () => c.A.can(E.xBc.CONNECT, n), [n]), j = null == t.emoji || (0, m.n)(t.emoji, n);
    l.useEffect(() => {
        h.default.track(E.HAw.VIEW_HANG_STATUS, {
            source: S,
            other_user_id: N,
            ...(0, p.A)(n.id)
        })
    }, [S, n.id, N]);
    let R = l.useCallback(() => {
            !v && y && (d.default.selectVoiceChannel(n.id), b?.(), h.default.track(E.HAw.HANG_STATUS_CTA_CLICKED, {
                source: S,
                ...(0, p.A)(n.id),
                other_user_id: N,
                cta_type: "join"
            }))
        }, [v, y, n.id, N, S, b]),
        O = l.useCallback(() => {
            if (!v || !j || null == t.state) return;
            let [e] = (0, g.e)(N, t.state);
            if (null != e) {
                if (e === x.Kk.CUSTOM) {
                    if (null == t.details || null == t.emoji) return;
                    (0, A.hS)(t.details, t.emoji, !0)
                } else(0, A.Iq)(e, !0);
                b?.(), h.default.track(E.HAw.HANG_STATUS_CTA_CLICKED, {
                    source: S,
                    ...(0, p.A)(n.id),
                    other_user_id: N,
                    cta_type: "swipe"
                })
            }
        }, [v, j, t, n.id, N, S, b]),
        L = (0, _.Au)(N, t);
    return (0, i.jsxs)("div", {
        className: C.kL,
        children: [(0, i.jsx)(f.A, {
            userId: N,
            size: 32,
            className: C.Kk,
            hangStatusActivity: t
        }), (0, i.jsx)(o.Text, {
            variant: "text-md/medium",
            className: C.qS,
            children: (0, i.jsx)(a.A, {
                delay: 0,
                children: L
            })
        }), v && !T ? (0, i.jsx)(r.m_, {
            text: j ? void 0 : I.intl.string(I.t["0LMpW+"]),
            children: (0, i.jsx)("div", {
                children: (0, i.jsx)(o.Button, {
                    size: "sm",
                    variant: "secondary",
                    text: I.intl.string(I.t["0eHzpm"]),
                    onClick: O,
                    disabled: !j
                })
            })
        }) : !T && y && (0, i.jsx)(o.Button, {
            size: "sm",
            variant: "secondary",
            text: I.intl.string(I.t["B/dHXL"]),
            onClick: R
        })]
    })
}