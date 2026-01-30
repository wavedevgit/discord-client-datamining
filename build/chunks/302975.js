/** chunk id: 302975, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(308528),
    s = n(928658),
    a = n(623075),
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
        onReportSubmit: g,
        onMouseEnter: f,
        onMouseLeave: m
    } = e, b = (0, a.V)(t), A = (0, o.D)(n.id, t);
    if (!b || null == A) return null;
    let y = () => {
        null == g || g(), i.A.closePrivateChannel(n.id, h)
    };
    return (0, r.jsx)(l.Button, {
        size: d,
        variant: "critical-primary",
        disabled: null == A,
        onClick: () => {
            null == p || p(), (0, s.b8)(A, y)
        },
        onMouseEnter: f,
        onMouseLeave: m,
        text: null != u ? u : c.intl.string(c.t.HHZmDn)
    })
}