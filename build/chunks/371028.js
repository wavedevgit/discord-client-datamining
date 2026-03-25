/** chunk id: 371028 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(64700),
    i = n(311907),
    s = n(859241),
    l = n(864310),
    o = n(333354),
    a = n(985018);

function d(e, t) {
    let {
        spent: n
    } = (0, l.A)(e), d = (0, i.bG)([s.A], () => s.A.getAppliedGuildBoostsForGuild(e), [e]), u = n - r.useMemo(() => d?.filter?.(e => !e.ended && null == e.endsAt)?.length ?? 0, [d]);
    return r.useMemo(() => u <= 0 ? {
        shouldShow: !1,
        title: "",
        description: "",
        requiredBoostCount: 0
    } : {
        shouldShow: !0,
        title: a.intl.string(o.default.n5hQhc),
        description: a.intl.formatToPlainString(o.default.iAaAiG, {
            boostCount: u,
            perksString: t.join(", ")
        }),
        requiredBoostCount: u
    }, [u, t])
}