/** chunk id: 789290 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var l = n(64700),
    i = n(172218),
    a = n(521741),
    r = n(633075);

function s(e) {
    let {
        widget: t,
        onAction: n
    } = e, [s, o] = (0, l.useState)(!1), c = t instanceof r.R ? t.applicationId : null, {
        fetched: d
    } = (0, a.U)(c), u = (0, l.useCallback)(e => {
        e && (n({
            action: "VIEW_WIDGET",
            ...t.getProfileAnalyticsOptions()
        }), o(!0))
    }, [n, t]);
    return (0, i.K)(u, void 0, !s && (null == c || d))
}