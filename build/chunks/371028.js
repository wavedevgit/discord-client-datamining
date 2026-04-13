/** chunk id: 371028 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(64700),
    i = n(311907),
    l = n(859241),
    s = n(864310),
    o = n(967919),
    a = n(985018);

function u(e, t) {
    let {
        spent: n
    } = (0, s.A)(e), u = (0, i.bG)([l.A], () => l.A.getAppliedGuildBoostsForGuild(e), [e]), d = n - r.useMemo(() => u?.filter?.(e => !e.ended && null == e.endsAt)?.length ?? 0, [u]);
    return r.useMemo(() => d <= 0 ? {
        shouldShow: !1,
        title: "",
        description: "",
        requiredBoostCount: 0
    } : {
        shouldShow: !0,
        title: a.intl.string(o.default.n5hQhc),
        description: a.intl.formatToPlainString(o.default.iAaAiG, {
            boostCount: d,
            perksString: t.join(", ")
        }),
        requiredBoostCount: d
    }, [d, t])
}