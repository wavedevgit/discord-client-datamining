/** chunk id: 772659, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var l = n(627968);
n(64700);
var r = n(397927),
    i = n(308528),
    a = n(928658),
    s = n(978914),
    o = n(985018);

function c(e) {
    let {
        channel: t,
        onReportClick: n,
        onReportSubmit: c,
        onMouseEnter: u,
        onMouseLeave: d
    } = e, {
        error: h,
        loaded: p,
        message: f
    } = (0, s.I)(t);
    if (null == f && (p || h)) return null;
    let m = () => {
        null == c || c(), i.A.closePrivateChannel(t.id)
    };
    return (0, l.jsx)(r.Button, {
        variant: "critical-primary",
        size: "sm",
        disabled: null == f,
        onClick: e => {
            e.stopPropagation(), null == n || n(), null != f && (0, a.b8)(f, m)
        },
        onMouseEnter: u,
        onMouseLeave: d,
        text: o.intl.string(o.t.HHZmDn)
    })
}