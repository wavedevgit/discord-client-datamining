/** Chunk was on 77870 **/
/** chunk id: 83942, original params: e,t,n (module,exports,require) **/
n.d(t, {
    c: () => c,
    w: () => o
});
var r = n(311907),
    l = n(961350),
    i = n(383501),
    s = n(162605);

function a(e, t) {
    return 0 === e.size || 1 === e.size && e.has(t)
}

function o(e) {
    return (0, r.bG)([s.A, l.default], () => {
        if (null == e) return !0;
        let t = s.A.getUserIds(e);
        return null == t || a(t, l.default.getId())
    })
}

function c() {
    return (0, r.bG)([i.A, l.default], () => {
        let e = i.A.getUserIds();
        return null == e || a(e, l.default.getId())
    })
}