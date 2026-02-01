/** chunk id: 383470, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(321073);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(292455),
    s = n(701508),
    o = n(979590),
    c = n(783531),
    u = n(965660),
    d = n(599907),
    p = n(652215),
    h = n(27740);
let g = {
    page: p.liQ.GUILD_DISCOVERY,
    object: p.ZSU.CARD,
    section: p.JJy.DISCOVER_POPULAR
};

function m(e) {
    let {
        tab: t,
        guildIds: n,
        loading: p,
        onScroll: m,
        onGuildCardClick: f,
        onGuildCardSeen: A
    } = e, _ = (0, u.kc)(t), b = (0, u.Ot)(t), E = (0, u.UW)(t), O = (0, u.Ub)(t), y = i.useMemo(() => {
        let e = p ? 30 : n.length,
            t = [];
        for (let a = 0; a < e; a++) {
            var i, l;
            t.push((0, r.jsx)(d.jO, {
                guildId: null != (i = n[a]) ? i : null,
                index: a,
                onClick: e => f(e, a, O, g),
                onView: e => A(e, O)
            }, null != (l = n[a]) ? l : a))
        }
        return t
    }, [O, n, p, f, A]);
    return (0, r.jsxs)(c.A, {
        onScroll: m,
        children: [(0, r.jsx)(s.A, {
            title: _,
            description: b,
            children: (0, r.jsx)(a.A, {})
        }), (0, r.jsxs)(o.A, {
            children: [(0, r.jsx)(l.Heading, {
                className: h.G,
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: E
            }), (0, r.jsx)("div", {
                className: h.Q,
                children: y
            })]
        })]
    })
}