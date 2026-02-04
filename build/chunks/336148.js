/** chunk id: 336148, original params: e,t,n (module,exports,require) **/
n.d(t, {
    X: () => s
});
var l = n(311907),
    r = n(741961),
    i = n(287809);

function s(e) {
    return (0, l.bG)([r.A, i.default], () => {
        var t, n;
        if (null == e) return !1;
        let l = null != (t = null == (n = i.default.getCurrentUser()) ? void 0 : n.id) ? t : null,
            s = r.A.getTypingUsers(e.id);
        for (let e in s)
            if (e !== l) return !0;
        return !1
    }, [e])
}