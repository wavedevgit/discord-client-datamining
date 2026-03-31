/** chunk id: 80718 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(824552),
    s = n(933958),
    d = n(869003),
    o = n(58149),
    c = n(632738),
    u = n(546183),
    _ = n(652215),
    m = n(985018);
let x = e => {
    let {
        application: t,
        reportId: n
    } = e, [x, p] = a.useState(!1), g = (0, i.bG)([u.default], () => u.default.getNewestTokenForApplication(t.id));
    a.useEffect(() => {
        null != g && p(!0)
    }, [g]);
    let h = a.useRef(!1);
    a.useEffect(() => {
        h.current || (r.A.fetch(), h.current = !0)
    }, []);
    let A = (0, i.bG)([s.Ay], () => s.Ay.getSelfEmbeddedActivities()),
        b = a.useCallback(() => {
            if (p(!1), o.Ay.trackWithMetadata(_.HAw.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n
                }), null == g) return;
            r.A.delete(g.id);
            let e = A.get(t.id);
            null != e && d.A.leaveActivity({
                location: e.location,
                applicationId: t.id,
                showFeedback: !1
            })
        }, [t.id, g, A, n]);
    return null == t ? null : (0, l.jsx)(c.PQ, {
        title: m.intl.string(m.t.ygG62M),
        description: m.intl.string(m.t.S51EKg),
        buttonText: x ? m.intl.string(m.t.xXpoGV) : m.intl.string(m.t.JsiUnL),
        buttonDisabled: !x,
        onButtonPress: b,
        buttonVariant: x ? "critical-primary" : "secondary"
    })
}