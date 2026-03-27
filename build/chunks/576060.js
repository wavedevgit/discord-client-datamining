/** chunk id: 576060 params = (module,exports,require) **/
r.d(t, {
    A: () => s
});
var a = r(64700),
    n = r(287809),
    i = r(657331);

function s() {
    return (0, a.useCallback)(() => {
        let e = n.default.getCurrentUser();
        null != e && (0, i.openUserProfileModal)({
            userId: e.id
        })
    }, [])
}