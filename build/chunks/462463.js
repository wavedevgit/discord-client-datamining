/** chunk id: 462463 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var s = n(64700),
    a = n(287809),
    l = n(657331);

function r() {
    let {
        analyticsLocations: e
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, s.useCallback)(() => {
        let t = a.default.getCurrentUser();
        null != t && (0, l.openUserProfileModal)({
            userId: t.id,
            sourceAnalyticsLocations: e
        })
    }, [e])
}