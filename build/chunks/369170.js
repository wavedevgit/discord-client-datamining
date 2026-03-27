/** chunk id: 369170 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var i = n(627968),
    s = n(64700),
    l = n(934551),
    a = n(397927),
    r = n(793574),
    o = n(688810),
    c = n(792656),
    d = n(422258),
    u = n(93055),
    h = n(788868),
    A = n(525736),
    m = n(985018),
    _ = n(821930),
    p = n(988572);

function g(e) {
    let {
        theme: t
    } = e, {
        hasAccess: g
    } = (0, u.TW)("favorites_empty_state"), {
        analyticsLocations: f
    } = (0, o.Ay)(r.A.FAVORITES_GUILD_HOME), x = s.useCallback(() => {
        (0, a.mMO)(async () => {
            let {
                default: e
            } = await n.e("59839").then(n.bind(n, 889186));
            return t => (0, i.jsx)(e, {
                ...t,
                source: "favorites_empty_state"
            })
        })
    }, []);
    return (0, i.jsx)(o.f5, {
        value: f,
        children: (0, i.jsx)(a.ppr, {
            theme: t,
            children: (0, i.jsxs)(a.BJc, {
                direction: "vertical",
                align: "center",
                gap: "md",
                children: [(0, i.jsx)(a._V3, {
                    zoomable: !1,
                    src: p.A,
                    width: 197,
                    height: 107
                }), (0, i.jsx)(a.SGT, {
                    className: _.Y,
                    noteClassName: _.A,
                    note: m.intl.string(A.default["+SuGKb"]),
                    children: m.intl.string(A.default["wh+Rz1"])
                }), g ? (0, i.jsx)(a.Button, {
                    text: m.intl.string(A.default["6kk0gM"]),
                    onClick: x,
                    icon: l.PlusMediumIcon
                }) : (0, i.jsx)(c.A, {
                    subscriptionTier: h.pe.TIER_2,
                    defaultTextOverride: m.intl.string(A.default.yYVbdv),
                    onSubscribeModalClose: e => {
                        e && (0, d.tV)(!0, "favorites_empty_state")
                    }
                })]
            })
        })
    })
}