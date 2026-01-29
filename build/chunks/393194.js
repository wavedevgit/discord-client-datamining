/** Chunk was on 1113 **/
/** chunk id: 393194, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(896048);
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    s = n(713654),
    a = n(435470),
    o = n(969043),
    c = n(576967),
    u = n(314307),
    d = n(985018),
    h = n(867384);

function p(e) {
    var t;
    let {
        channel: n
    } = e, p = (0, a.kt)(n), {
        firstMessage: g
    } = (0, l.cf)([o.A], () => o.A.getMessage(n.id)), f = new Set((0, a.zt)(n, p)), m = null != (t = (0, s.gU)(n)) ? t : i.oyn;
    return (0, r.jsxs)(u.Ay, {
        channelId: n.id,
        className: h.kL,
        children: [(0, r.jsx)("div", {
            className: h.P0,
            children: (0, r.jsx)(m, {
                className: h.Kk,
                strokeWidth: 1.75
            })
        }), (0, r.jsx)(u.cr, {
            className: h.wx,
            children: n.name
        }), null == g && (0, r.jsx)(i.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: d.intl.string(d.t.mE3KJN)
        }), (0, r.jsx)(c.A, {
            appliedTags: f,
            wrap: n.isModeratorReportChannel()
        })]
    })
}