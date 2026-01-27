/** Chunk was on 12236 **/
/** chunk id: 80718, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(824552),
    s = n(933958),
    o = n(869003),
    d = n(58149),
    c = n(632738),
    u = n(546183),
    m = n(652215),
    p = n(985018);
let b = e => {
    let {
        application: t,
        reportId: n
    } = e, [b, _] = r.useState(!1), g = (0, i.bG)([u.default], () => u.default.getNewestTokenForApplication(t.id));
    r.useEffect(() => {
        null != g && _(!0)
    }, [g]);
    let x = r.useRef(!1);
    r.useEffect(() => {
        x.current || (a.A.fetch(), x.current = !0)
    }, []);
    let h = (0, i.bG)([s.Ay], () => s.Ay.getSelfEmbeddedActivities()),
        v = r.useCallback(() => {
            if (_(!1), d.Ay.trackWithMetadata(m.HAw.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n
                }), null == g) return;
            a.A.delete(g.id);
            let e = h.get(t.id);
            null != e && o.A.leaveActivity({
                location: e.location,
                applicationId: t.id,
                showFeedback: !1
            })
        }, [t.id, g, h, n]);
    return null == t ? null : (0, l.jsx)(c.PQ, {
        title: p.intl.string(p.t.ygG62M),
        description: p.intl.string(p.t.S51EKg),
        buttonText: b ? p.intl.string(p.t.xXpoGV) : p.intl.string(p.t.JsiUnL),
        buttonDisabled: !b,
        onButtonPress: v,
        buttonVariant: b ? "critical-primary" : "secondary"
    })
}