/** chunk id: 290294, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => N
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
    _ = n(686378),
    d = n(908627),
    g = n(769786),
    A = n(95173),
    T = n(316076),
    I = n(985018),
    O = n(438536);

function h() {
    return (0, l.jsxs)("div", {
        className: O.wx,
        children: [(0, l.jsxs)("div", {
            className: O.qd,
            children: [(0, l.jsx)(c.A, {
                width: 16,
                height: 16
            }), (0, l.jsx)(s.Heading, {
                variant: "heading-md/semibold",
                children: I.intl.string(I.t.cf5lgh)
            })]
        }), (0, l.jsx)("div", {
            children: (0, l.jsx)(s.e7I, {
                shortcut: "esc",
                keyClassName: O.Wb,
                className: O.ti
            })
        })]
    })
}

function N(e) {
    let {
        userId: t,
        guildId: n,
        location: r,
        className: c,
        onNavigate: I
    } = e, N = (0, i.bG)([u.default], () => u.default.getUser(t), [t]), m = (0, i.bG)([o.Ay], () => o.Ay.getMember(n, t), [n, t]);
    return null == N || null == m ? null : (0, l.jsxs)("div", {
        className: a()(O.kL, c),
        children: [(0, l.jsx)(h, {}), (0, l.jsxs)(s.HOs, {
            className: O.WH,
            children: [(0, l.jsx)(A.A, {
                member: m
            }), (0, l.jsx)(T.A, {
                userId: t,
                guildId: n
            }), (0, l.jsx)(g.A, {
                member: m,
                onNavigate: I
            }), (0, l.jsx)(_.A, {
                member: m
            }), (0, l.jsx)(E.A, {
                member: m
            }), (0, l.jsx)(d.A, {
                member: m
            })]
        })]
    })
}