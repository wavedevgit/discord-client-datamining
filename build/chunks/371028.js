/** Chunk was on 88615 **/
/** chunk id: 371028, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(64700),
    l = n(311907),
    i = n(859241),
    o = n(864310),
    s = n(333354),
    a = n(985018);

function u(e, t) {
    let {
        spent: n
    } = (0, o.A)(e), u = (0, l.bG)([i.A], () => i.A.getAppliedGuildBoostsForGuild(e), [e]), d = n - r.useMemo(() => {
        var e, t, n;
        return null != (e = null == u || null == (n = u.filter) || null == (t = n.call(u, e => !e.ended && null == e.endsAt)) ? void 0 : t.length) ? e : 0
    }, [u]);
    return r.useMemo(() => d <= 0 ? {
        shouldShow: !1,
        title: "",
        description: "",
        requiredBoostCount: 0
    } : {
        shouldShow: !0,
        title: a.intl.string(s.default.n5hQhc),
        description: a.intl.formatToPlainString(s.default.iAaAiG, {
            boostCount: d,
            perksString: t.join(", ")
        }),
        requiredBoostCount: d
    }, [d, t])
}