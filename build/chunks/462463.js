/** chunk id: 462463 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var s = n(64700),
    r = n(287809),
    a = n(657331);

function l() {
    let {
        analyticsLocations: e
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, s.useCallback)(() => {
        let t = r.default.getCurrentUser();
        null != t && (0, a.openUserProfileModal)({
            userId: t.id,
            sourceAnalyticsLocations: e
        })
    }, [e])
}