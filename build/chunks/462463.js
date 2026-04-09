/** chunk id: 462463 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var r = n(64700),
    l = n(287809),
    s = n(657331);

function a() {
    let {
        analyticsLocations: e
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, r.useCallback)(() => {
        let t = l.default.getCurrentUser();
        null != t && (0, s.openUserProfileModal)({
            userId: t.id,
            sourceAnalyticsLocations: e
        })
    }, [e])
}