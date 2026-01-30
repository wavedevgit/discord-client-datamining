/** chunk id: 120006, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(976860),
    s = n(345942),
    o = n(71393),
    c = n(954571),
    u = n(486020),
    d = n(396415),
    p = n(652215),
    h = n(985018),
    g = n(605540);

function f(e, t, n) {
    return (0, r.jsxs)("button", {
        className: g.kL,
        onClick: n,
        children: ["function" == typeof e ? (0, r.jsx)("div", {
            className: g.Kk,
            children: (0, r.jsx)(e, {
                className: g.__invalid_iconInner,
                color: l.LU0.colors.WHITE.css
            })
        }) : (0, r.jsx)("img", {
            className: g.Kk,
            alt: "",
            src: e
        }), (0, r.jsx)(l.Text, {
            className: g.Qq,
            variant: "text-md/medium",
            children: t
        }), (0, r.jsx)(d.A, {
            className: g.UE
        })]
    }, t)
}

function m() {
    let e = o.A.getGuildsArray().filter(e => e.features.has(p.GuildFeatures.HUB));
    return (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsxs)("header", {
            className: g.wx,
            children: [(0, r.jsx)(l.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: h.intl.string(h.t.IuMx1Y)
            }), (0, r.jsx)(l.Text, {
                tag: "div",
                variant: "heading-md/normal",
                children: h.intl.string(h.t.DwevPs)
            })]
        }), (0, r.jsxs)("div", {
            className: g.Vg,
            children: [e.map(e => f(u.Ay.getGuildIconURL({
                id: e.id,
                icon: e.icon,
                size: 240
            }), e.name, () => {
                var t;
                t = e.id, c.default.track(p.HAw.ADD_FRIEND_OTHER_PLACES_HUB_CLICKED, {
                    guild_id: t
                }), (0, s.u)(t)
            })), f(l.QGJ, h.intl.string(h.t.AhKnz4), () => {
                c.default.track(p.HAw.ADD_FRIEND_OTHER_PLACES_DISCOVERY_CLICKED), (0, a.pX)(p.BVt.GUILD_DISCOVERY)
            })]
        })]
    })
}