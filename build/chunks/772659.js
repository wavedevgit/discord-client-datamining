/** chunk id: 772659, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(308528),
    a = n(928658),
    r = n(978914),
    o = n(985018);

function c(e) {
    let {
        channel: t,
        onReportClick: n,
        onReportSubmit: c,
        onMouseEnter: d,
        onMouseLeave: u
    } = e, {
        error: h,
        loaded: m,
        message: A
    } = (0, r.I)(t);
    if (null == A && (m || h)) return null;
    let g = () => {
        c?.(), s.A.closePrivateChannel(t.id)
    };
    return (0, i.jsx)(l.Button, {
        variant: "critical-primary",
        size: "sm",
        disabled: null == A,
        onClick: e => {
            e.stopPropagation(), n?.(), null != A && (0, a.b8)(A, g)
        },
        onMouseEnter: d,
        onMouseLeave: u,
        text: o.intl.string(o.t.HHZmDn)
    })
}