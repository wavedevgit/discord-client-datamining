/** chunk id: 860051, original params: e,t,n (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => u
});
var a = n(627968),
    i = n(311907),
    o = n(627363),
    r = n(91242),
    l = n(127938),
    c = n(923917),
    _ = n(620148),
    s = n(33445),
    d = n(985018);

function u(e) {
    let {
        windowKey: t
    } = e, n = (0, _.A)(), u = (0, i.bG)([r.A], () => r.A.getConnectedFrame()), {
        data: p
    } = (0, o.YY)(u?.applicationId), m = n?.name ?? p?.name ?? d.intl.string(d.t.IC5Ann);
    return (0, a.jsx)(c.A, {
        withTitleBar: !0,
        windowKey: t,
        title: m,
        children: null != n ? (0, a.jsx)(s.A, {}) : (0, a.jsx)(l.A, {})
    })
}