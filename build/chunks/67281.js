/** chunk id: 67281 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    a = n(311907),
    s = n(876230),
    o = n(990078),
    d = n(397927),
    u = n(429913),
    c = n(409626),
    h = n(692969),
    m = n(454908),
    p = n(287809),
    g = n(405269),
    x = n(403362),
    f = n(963135),
    A = n(331446),
    y = n(985018),
    w = n(2398);

function j(e) {
    let {
        applicationId: t,
        separator: n
    } = e, l = (0, u.h)(t), {
        data: r
    } = (0, m.I)(t), a = (0, h.A)({
        applicationId: t,
        location: "ClipEmbed",
        source: c.Ob.ClipEmbed
    }), s = r?.name ?? l?.name;
    return null == s ? null : null != a ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d.DUT, {
            tag: "span",
            className: w.On,
            onClick: a,
            children: s
        }), n]
    }) : (0, i.jsxs)(i.Fragment, {
        children: [s, n]
    })
}
let v = function(e) {
    let {
        createdAt: t,
        participantIds: n,
        applicationId: l,
        title: u,
        guildId: c,
        playerState: h = s.Q6.PAUSED,
        isControlBarExpanded: m = !0,
        isFullScreen: v = !1
    } = e, C = (0, a.yK)([p.default], () => n.map(e => p.default.getUser(e)).filter(x.Vq) ?? []), E = null != t ? (0, g.Fe)(new Date(t)) : null;
    return (0, i.jsxs)("div", {
        className: r()(w.oK, {
            [w.pd]: h === s.Q6.PLAYING && !m,
            [w.aS]: v
        }),
        children: [(0, i.jsx)("div", {
            className: w.Lu
        }), (0, i.jsxs)("div", {
            className: w.s$,
            children: [(0, i.jsxs)("div", {
                className: w.yR,
                children: [(0, i.jsxs)("div", {
                    className: w.$,
                    children: [(0, i.jsx)(o.m, {
                        asContainer: !0,
                        text: y.intl.string(y.t["/fgfWh"]),
                        children: (0, i.jsx)(d.xgA, {
                            className: w.gr,
                            size: "xs",
                            color: "white"
                        })
                    }), (0, i.jsx)(d.Text, {
                        className: w.DD,
                        variant: "text-md/semibold",
                        color: "always-white",
                        children: null != u && u.length > 0 ? u : y.intl.string(y.t.Cyxddp)
                    })]
                }), (null != l || null != E) && (0, i.jsxs)(d.Text, {
                    className: w.yu,
                    variant: "text-sm/normal",
                    color: "always-white",
                    children: [(0, i.jsx)(j, {
                        applicationId: l,
                        separator: null != E ? " \xb7 " : void 0
                    }), E]
                })]
            }), C.length > 0 && (0, i.jsxs)("div", {
                className: w.HD,
                role: "group",
                "aria-label": y.intl.string(y.t.WTozwe),
                children: [C.slice(0, 4).map(e => (0, i.jsx)(f.A, {
                    user: e,
                    guildId: c
                }, e.id)), C.length > 4 && (0, i.jsx)(A.w, {
                    participants: C,
                    maxVisibleParticipants: 4,
                    guildId: c
                })]
            })]
        })]
    })
}