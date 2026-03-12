/** chunk id: 83942 params = (module,exports,require) **/
r.d(t, {
    c: () => c,
    w: () => a
});
var n = r(311907),
    l = r(961350),
    u = r(383501),
    s = r(162605);

function i(e, t) {
    return 0 === e.size || 1 === e.size && e.has(t)
}

function a(e) {
    return (0, n.bG)([s.A, l.default], () => {
        if (null == e) return !0;
        let t = s.A.getUserIds(e);
        return null == t || i(t, l.default.getId())
    })
}

function c() {
    return (0, n.bG)([u.A, l.default], () => {
        let e = u.A.getUserIds();
        return null == e || i(e, l.default.getId())
    })
}