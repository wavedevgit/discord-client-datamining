/** chunk id: 321078 params = (module,exports,require) **/
t.d(n, {
    A: () => l
});
var i = t(64700),
    a = t(201718),
    r = t(534952);

function l(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
            includeHidden: t = !1
        } = n,
        {
            isLoading: l,
            data: o
        } = (0, a.P)(e);
    return {
        isLoading: l,
        filteredAppIdentities: i.useMemo(() => (o ?? []).filter(e => r.JW.includes(e.application_id) && null != e.profile && null != e.profile.username && (!0 === e.profile.connection_visible || t)), [o, t])
    }
}