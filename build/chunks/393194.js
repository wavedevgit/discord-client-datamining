/** chunk id: 393194 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(713654),
    r = n(435470),
    o = n(969043),
    c = n(576967),
    d = n(314307),
    u = n(985018),
    h = n(297682);

function m(e) {
    let {
        channel: t
    } = e, n = (0, r.kt)(t), {
        firstMessage: m
    } = (0, l.cf)([o.A], () => o.A.getMessage(t.id)), A = new Set((0, r.zt)(t, n)), g = (0, a.gU)(t) ?? s.oyn;
    return (0, i.jsxs)(d.Ay, {
        channelId: t.id,
        className: h.kL,
        children: [(0, i.jsx)("div", {
            className: h.P0,
            children: (0, i.jsx)(g, {
                className: h.Kk,
                strokeWidth: 1.75
            })
        }), (0, i.jsx)(d.cr, {
            className: h.wx,
            children: t.name
        }), null == m && (0, i.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: u.intl.string(u.t.mE3KJN)
        }), (0, i.jsx)(c.A, {
            appliedTags: A,
            wrap: t.isModeratorReportChannel()
        })]
    })
}