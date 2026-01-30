/** chunk id: 290294, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var l = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    i = n(417597),
    s = n(397927),
    o = n(696451),
    u = n(287809),
    c = n(881548),
    E = n(666813),
    d = n(686378),
    _ = n(908627),
    g = n(769786),
    A = n(95173),
    T = n(316076),
    h = n(985018),
    I = n(438536);

function O() {
    return (0, l.jsxs)("div", {
        className: I.wx,
        children: [(0, l.jsxs)("div", {
            className: I.qd,
            children: [(0, l.jsx)(c.A, {
                width: 16,
                height: 16
            }), (0, l.jsx)(s.Heading, {
                variant: "heading-md/semibold",
                children: h.intl.string(h.t.cf5lgh)
            })]
        }), (0, l.jsx)("div", {
            children: (0, l.jsx)(s.e7I, {
                shortcut: "esc",
                keyClassName: I.Wb,
                className: I.ti
            })
        })]
    })
}

function m(e) {
    let {
        userId: t,
        guildId: n,
        location: r,
        className: c,
        onNavigate: h
    } = e, m = (0, i.bG)([u.default], () => u.default.getUser(t), [t]), N = (0, i.bG)([o.Ay], () => o.Ay.getMember(n, t), [n, t]);
    return null == m || null == N ? null : (0, l.jsxs)("div", {
        className: a()(I.kL, c),
        children: [(0, l.jsx)(O, {}), (0, l.jsxs)(s.HOs, {
            className: I.WH,
            children: [(0, l.jsx)(A.A, {
                member: N
            }), (0, l.jsx)(T.A, {
                userId: t,
                guildId: n
            }), (0, l.jsx)(g.A, {
                member: N,
                onNavigate: h
            }), (0, l.jsx)(d.A, {
                member: N
            }), (0, l.jsx)(E.A, {
                member: N
            }), (0, l.jsx)(_.A, {
                member: N
            })]
        })]
    })
}