/** chunk id: 336148 params = (module,exports,require) **/
n.d(t, {
    DL: () => h,
    X6: () => c
});
var i = n(311907),
    l = n(680049),
    r = n(827734),
    s = n(21119),
    a = n(994500),
    o = n(741961),
    u = n(287809),
    d = n(240516);

function c(e) {
    return (0, i.bG)([o.A, u.default], () => {
        if (null == e) return !1;
        let t = u.default.getCurrentUser()?.id ?? null,
            n = o.A.getTypingUsers(e.id);
        for (let e in n)
            if (e !== t) return !0;
        return !1
    }, [e])
}

function h(e) {
    return (0, i.bG)([o.A, u.default, a.A, s.A], () => {
        if (null == e) return null;
        switch (function(e, t) {
                let [n, i, l, r] = t;
                if (null == e) return "NONE";
                let s = function(e, t, n) {
                    let [i] = n, l = i.getTypingUsers(e.id);
                    for (let e in l)
                        if (e !== t) return e;
                    return null
                }(e, i.getCurrentUser()?.id ?? null, [n]);
                return null == s ? "NONE" : function(e, t) {
                    let [n, i] = t;
                    if (n.isFriend(e)) return "FRIEND";
                    let l = i.getUserAffinity(e),
                        r = l?.communicationProbability ?? 0;
                    return r >= d.u.HIGH_AFFINITY_MINIMUM ? "HIGH_AFFINITY" : r > 0 ? "LOW_AFFINITY" : "NONE"
                }(s, [l, r])
            }(e, [o.A, u.default, a.A, s.A])) {
            case "FRIEND":
                return r.A.colors.STATUS_ONLINE.resolve({
                    theme: l.NJ.DARK,
                    saturation: 1
                }).hex();
            case "HIGH_AFFINITY":
                return r.A.colors.STATUS_ONLINE.resolve({
                    theme: l.NJ.DARK,
                    saturation: .7
                }).hex();
            case "LOW_AFFINITY":
                return r.A.colors.STATUS_ONLINE.resolve({
                    theme: l.NJ.DARK,
                    saturation: .4
                }).hex();
            default:
                return null
        }
    }, [e])
}