/** chunk id: 789290 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(64700),
    l = n(172218),
    i = n(521741),
    a = n(633075);

function s(e) {
    let {
        widget: t,
        onAction: n
    } = e, [s, o] = (0, r.useState)(!1), d = t instanceof a.R ? t.applicationId : null, {
        fetched: c
    } = (0, i.U)(d), u = (0, r.useCallback)(e => {
        e && (n({
            action: "VIEW_WIDGET",
            ...t.getProfileAnalyticsOptions()
        }), o(!0))
    }, [n, t]);
    return (0, l.K)(u, void 0, !s && (null == d || c))
}