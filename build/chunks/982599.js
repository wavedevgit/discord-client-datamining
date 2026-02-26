/** chunk id: 982599, original params: e,t,n (module,exports,require) **/
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
    c = n(61881),
    d = n(633098),
    u = n(721865);

function m(e) {
    let t = (0, s.bG)([o.default], () => o.default.getId() === e),
        n = (0, r.VUy)(),
        i = (0, s.bG)([c.A], () => c.A.hasUnsavedChanges());
    return t && (n || i)
}

function g(e) {
    let {
        userId: t,
        className: n
    } = e, l = (0, s.bG)([o.default], () => o.default.getId() === t), c = (0, r.VUy)();
    return l ? (0, i.jsx)("div", {
        className: a()(u.kL, n),
        children: c ? (0, i.jsx)(r.Smm, {
            className: u.Wg
        }) : (0, i.jsx)(d.A, {
            className: u.ZS
        })
    }) : null
}