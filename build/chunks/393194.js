/** chunk id: 393194, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(896048);
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    a = n(713654),
    s = n(435470),
    o = n(969043),
    c = n(576967),
    u = n(314307),
    d = n(985018),
    h = n(867384);

function p(e) {
    var t;
    let {
        channel: n
    } = e, p = (0, s.kt)(n), {
        firstMessage: f
    } = (0, r.cf)([o.A], () => o.A.getMessage(n.id)), m = new Set((0, s.zt)(n, p)), g = null != (t = (0, a.gU)(n)) ? t : i.oyn;
    return (0, l.jsxs)(u.Ay, {
        channelId: n.id,
        className: h.kL,
        children: [(0, l.jsx)("div", {
            className: h.P0,
            children: (0, l.jsx)(g, {
                className: h.Kk,
                strokeWidth: 1.75
            })
        }), (0, l.jsx)(u.cr, {
            className: h.wx,
            children: n.name
        }), null == f && (0, l.jsx)(i.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: d.intl.string(d.t.mE3KJN)
        }), (0, l.jsx)(c.A, {
            appliedTags: m,
            wrap: n.isModeratorReportChannel()
        })]
    })
}