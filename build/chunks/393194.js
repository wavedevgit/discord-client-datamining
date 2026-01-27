/** Chunk was on 77870 **/
/** chunk id: 393194, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
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
    p = n(867384);

function h(e) {
    var t;
    let {
        channel: n
    } = e, h = (0, a.kt)(n), {
        firstMessage: f
    } = (0, l.cf)([o.A], () => o.A.getMessage(n.id)), g = new Set((0, a.zt)(n, h)), m = null != (t = (0, s.gU)(n)) ? t : i.oyn;
    return (0, r.jsxs)(u.Ay, {
        channelId: n.id,
        className: p.kL,
        children: [(0, r.jsx)("div", {
            className: p.P0,
            children: (0, r.jsx)(m, {
                className: p.Kk,
                strokeWidth: 1.75
            })
        }), (0, r.jsx)(u.cr, {
            className: p.wx,
            children: n.name
        }), null == f && (0, r.jsx)(i.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: d.intl.string(d.t.mE3KJN)
        }), (0, r.jsx)(c.A, {
            appliedTags: g,
            wrap: n.isModeratorReportChannel()
        })]
    })
}