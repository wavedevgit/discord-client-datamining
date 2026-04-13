/** chunk id: 67281 params = (module,exports,require) **/
n.d(t, {
    A: () => I
});
var a = n(627968);
n(64700);
var o = n(503698),
    r = n.n(o),
    i = n(311907),
    l = n(876230),
    c = n(990078),
    s = n(397927),
    _ = n(429913),
    d = n(409626),
    u = n(692969),
    p = n(454908),
    m = n(287809),
    b = n(405269),
    h = n(403362),
    f = n(963135),
    C = n(331446),
    g = n(985018),
    v = n(2398);

function x(e) {
    let {
        applicationId: t,
        separator: n
    } = e, o = (0, _.h)(t), {
        data: r
    } = (0, p.I)(t), i = (0, u.A)({
        applicationId: t,
        location: "ClipEmbed",
        source: d.Ob.ClipEmbed
    }), l = r?.name ?? o?.name;
    return null == l ? null : null != i ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(s.DUT, {
            tag: "span",
            className: v.On,
            onClick: i,
            children: l
        }), n]
    }) : (0, a.jsxs)(a.Fragment, {
        children: [l, n]
    })
}
let I = function(e) {
    let {
        createdAt: t,
        participantIds: n,
        applicationId: o,
        title: _,
        guildId: d,
        playerState: u = l.Q6.PAUSED,
        isControlBarExpanded: p = !0,
        isFullScreen: I = !1
    } = e, y = (0, i.yK)([m.default], () => n.map(e => m.default.getUser(e)).filter(h.Vq) ?? []), S = null != t ? (0, b.Fe)(new Date(t)) : null;
    return (0, a.jsxs)("div", {
        className: r()(v.oK, {
            [v.pd]: u === l.Q6.PLAYING && !p,
            [v.aS]: I
        }),
        children: [(0, a.jsx)("div", {
            className: v.Lu
        }), (0, a.jsxs)("div", {
            className: v.s$,
            children: [(0, a.jsxs)("div", {
                className: v.yR,
                children: [(0, a.jsxs)("div", {
                    className: v.$,
                    children: [(0, a.jsx)(c.m, {
                        asContainer: !0,
                        text: g.intl.string(g.t["/fgfWh"]),
                        children: (0, a.jsx)(s.xgA, {
                            className: v.gr,
                            size: "xs",
                            color: "white"
                        })
                    }), (0, a.jsx)(s.Text, {
                        className: v.DD,
                        variant: "text-md/semibold",
                        color: "always-white",
                        children: null != _ && _.length > 0 ? _ : g.intl.string(g.t.Cyxddp)
                    })]
                }), (null != o || null != S) && (0, a.jsxs)(s.Text, {
                    className: v.yu,
                    variant: "text-sm/normal",
                    color: "always-white",
                    children: [(0, a.jsx)(x, {
                        applicationId: o,
                        separator: null != S ? " \xb7 " : void 0
                    }), S]
                })]
            }), y.length > 0 && (0, a.jsxs)("div", {
                className: v.HD,
                role: "group",
                "aria-label": g.intl.string(g.t.WTozwe),
                children: [y.slice(0, 4).map(e => (0, a.jsx)(f.A, {
                    user: e,
                    guildId: d
                }, e.id)), y.length > 4 && (0, a.jsx)(C.w, {
                    participants: y,
                    maxVisibleParticipants: 4,
                    guildId: d
                })]
            })]
        })]
    })
}