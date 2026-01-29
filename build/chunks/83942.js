/** Chunk was on 16674 **/
/** chunk id: 83942, original params: e,t,r (module,exports,require) **/
r.d(t, {
    c: () => c,
    w: () => a
});
var n = r(311907),
    l = r(961350),
    u = r(383501),
    i = r(162605);

function s(e, t) {
    return 0 === e.size || 1 === e.size && e.has(t)
}

function a(e) {
    return (0, n.bG)([i.A, l.default], () => {
        if (null == e) return !0;
        let t = i.A.getUserIds(e);
        return null == t || s(t, l.default.getId())
    })
}

function c() {
    return (0, n.bG)([u.A, l.default], () => {
        let e = u.A.getUserIds();
        return null == e || s(e, l.default.getId())
    })
}