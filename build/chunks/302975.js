/** chunk id: 302975, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var l = n(627968);
n(64700);
var r = n(397927),
    i = n(308528),
    a = n(928658),
    s = n(623075),
    o = n(977347),
    c = n(985018);

function u(e) {
    let {
        otherUserId: t,
        channel: n,
        buttonText: u,
        buttonSize: d = "sm",
        navigateAwayOnReportSuccess: h = !0,
        onReportClick: p,
        onReportSubmit: f,
        onMouseEnter: m,
        onMouseLeave: g
    } = e, A = (0, s.V)(t), b = (0, o.D)(n.id, t);
    if (!A || null == b) return null;
    let _ = () => {
        null == f || f(), i.A.closePrivateChannel(n.id, h)
    };
    return (0, l.jsx)(r.Button, {
        size: d,
        variant: "critical-primary",
        disabled: null == b,
        onClick: () => {
            null == p || p(), (0, a.b8)(b, _)
        },
        onMouseEnter: m,
        onMouseLeave: g,
        text: null != u ? u : c.intl.string(c.t.HHZmDn)
    })
}