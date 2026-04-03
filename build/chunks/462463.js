/** chunk id: 462463 params = (module,exports,require) **/
r.d(t, {
    A: () => s
});
var n = r(64700),
    a = r(287809),
    i = r(657331);

function s() {
    let {
        analyticsLocations: e
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, n.useCallback)(() => {
        let t = a.default.getCurrentUser();
        null != t && (0, i.openUserProfileModal)({
            userId: t.id,
            sourceAnalyticsLocations: e
        })
    }, [e])
}