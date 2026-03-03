/** chunk id: 80718, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(824552),
    s = n(933958),
    o = n(869003),
    d = n(58149),
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
    let A = a.useRef(!1);
    a.useEffect(() => {
        A.current || (r.A.fetch(), A.current = !0)
    }, []);
    let h = (0, i.bG)([s.Ay], () => s.Ay.getSelfEmbeddedActivities()),
        b = a.useCallback(() => {
            if (p(!1), d.Ay.trackWithMetadata(_.HAw.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n
                }), null == g) return;
            r.A.delete(g.id);
            let e = h.get(t.id);
            null != e && o.A.leaveActivity({
                location: e.location,
                applicationId: t.id,
                showFeedback: !1
            })
        }, [t.id, g, h, n]);
    return null == t ? null : (0, l.jsx)(c.PQ, {
        title: m.intl.string(m.t.ygG62M),
        description: m.intl.string(m.t.S51EKg),
        buttonText: x ? m.intl.string(m.t.xXpoGV) : m.intl.string(m.t.JsiUnL),
        buttonDisabled: !x,
        onButtonPress: b,
        buttonVariant: x ? "critical-primary" : "secondary"
    })
}