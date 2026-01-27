/** Chunk was on 94682 **/
/** chunk id: 982599, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p,
    k: () => f
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(311907),
    o = n(397927),
    s = n(961350),
    c = n(61881),
    u = n(633098),
    d = n(855255);

function f(e) {
    let t = (0, a.bG)([s.default], () => s.default.getId() === e),
        n = (0, o.VUy)(),
        r = (0, a.bG)([c.A], () => c.A.hasUnsavedChanges());
    return t && (n || r)
}

function p(e) {
    let {
        userId: t,
        className: n
    } = e, l = (0, a.bG)([s.default], () => s.default.getId() === t), c = (0, o.VUy)();
    return l ? (0, r.jsx)("div", {
        className: i()(d.kL, n),
        children: c ? (0, r.jsx)(o.Smm, {
            className: d.Wg
        }) : (0, r.jsx)(u.A, {
            className: d.ZS
        })
    }) : null
}