/** chunk id: 982599 params = (module,exports,require) **/
n.d(t, {
    A: () => g,
    k: () => m
});
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(311907),
    r = n(397927),
    o = n(961350),
    c = n(953963),
    d = n(485745),
    u = n(479705);

function m(e) {
    let t = (0, s.bG)([o.default], () => o.default.getId() === e),
        n = (0, r.VUy)(),
        i = (0, d.A)();
    return t && (n || i)
}

function g(e) {
    let {
        userId: t,
        guildId: n,
        className: l
    } = e, d = (0, s.bG)([o.default], () => o.default.getId() === t), m = (0, r.VUy)();
    return d ? (0, i.jsx)("div", {
        className: a()(u.kL, l),
        children: m ? (0, i.jsx)(r.Smm, {
            className: u.Wg
        }) : (0, i.jsx)(c.A, {
            className: u.ZS,
            guildId: n
        })
    }) : null
}