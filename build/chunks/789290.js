/** chunk id: 789290 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(64700),
    l = n(172218),
    a = n(521741),
    s = n(633075);

function r(e) {
    let {
        widget: t,
        onAction: n
    } = e, [r, o] = (0, i.useState)(!1), c = t instanceof s.R ? t.applicationId : null, {
        fetched: d
    } = (0, a.U)(c), u = (0, i.useCallback)(e => {
        e && (n({
            action: "VIEW_WIDGET",
            ...t.getProfileAnalyticsOptions()
        }), o(!0))
    }, [n, t]);
    return (0, l.K)(u, void 0, !r && (null == c || d))
}