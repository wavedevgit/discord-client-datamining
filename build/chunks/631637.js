/** chunk id: 631637, original params: n,t,e (module,exports,require) **/
e.d(t, {
    A: () => A
});
var i = e(627968);
e(64700);
var r = e(311907),
    l = e(397927),
    a = e(717187),
    d = e(884569),
    s = e(846577),
    u = e(695192),
    o = e(87746),
    c = e(287809);

function A(n) {
    let {
        channel: t
    } = n, e = (0, r.bG)([c.default], () => c.default.getCurrentUser()), A = (0, s.P)(t), f = (0, a.y)(t), h = (0, o.Q)(t), g = (0, u.m)(t), _ = (0, d.B)(t);
    return e?.isStaff() !== !0 ? null : (0, i.jsxs)(l.Drp, {
        id: "dev tools",
        label: "Dev Tools",
        children: [(0, i.jsx)(l.rXV, {
            children: A
        }), (0, i.jsx)(l.rXV, {
            children: g
        }), (0, i.jsx)(l.rXV, {
            children: h
        }), (0, i.jsx)(l.rXV, {
            children: f
        }), (0, i.jsx)(l.rXV, {
            children: _
        })]
    })
}