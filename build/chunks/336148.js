/** chunk id: 336148 params = (module,exports,require) **/
n.d(t, {
    DL: () => h,
    X6: () => c
});
var i = n(311907),
    r = n(680049),
    l = n(827734),
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
                let [n, i, r, l] = t;
                if (null == e) return "NONE";
                let s = function(e, t, n) {
                    let [i] = n, r = i.getTypingUsers(e.id);
                    for (let e in r)
                        if (e !== t) return e;
                    return null
                }(e, i.getCurrentUser()?.id ?? null, [n]);
                return null == s ? "NONE" : function(e, t) {
                    let [n, i] = t;
                    if (n.isFriend(e)) return "FRIEND";
                    let r = i.getUserAffinity(e),
                        l = r?.communicationProbability ?? 0;
                    return l >= d.u.HIGH_AFFINITY_MINIMUM ? "HIGH_AFFINITY" : l > 0 ? "LOW_AFFINITY" : "NONE"
                }(s, [r, l])
            }(e, [o.A, u.default, a.A, s.A])) {
            case "FRIEND":
                return l.A.colors.STATUS_ONLINE.resolve({
                    theme: r.NJ.DARK,
                    saturation: 1
                }).hex();
            case "HIGH_AFFINITY":
                return l.A.colors.STATUS_ONLINE.resolve({
                    theme: r.NJ.DARK,
                    saturation: .7
                }).hex();
            case "LOW_AFFINITY":
                return l.A.colors.STATUS_ONLINE.resolve({
                    theme: r.NJ.DARK,
                    saturation: .4
                }).hex();
            default:
                return null
        }
    }, [e])
}