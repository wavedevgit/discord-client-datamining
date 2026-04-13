/** chunk id: 321078 params = (module,exports,require) **/
t.d(n, {
    A: () => r
});
var i = t(64700),
    a = t(201718),
    l = t(534952);

function r(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
            includeHidden: t = !1
        } = n,
        {
            isLoading: r,
            data: o
        } = (0, a.P)(e);
    return {
        isLoading: r,
        filteredAppIdentities: i.useMemo(() => (o ?? []).filter(e => l.JW.includes(e.application_id) && null != e.profile && null != e.profile.username && (!0 === e.profile.connection_visible || t)), [o, t])
    }
}