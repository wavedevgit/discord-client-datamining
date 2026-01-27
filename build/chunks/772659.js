/** Chunk was on 77870 **/
/** chunk id: 772659, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(308528),
    s = n(928658),
    a = n(978914),
    o = n(985018);

function c(e) {
    let {
        channel: t,
        onReportClick: n,
        onReportSubmit: c,
        onMouseEnter: u,
        onMouseLeave: d
    } = e, {
        error: p,
        loaded: h,
        message: f
    } = (0, a.I)(t);
    if (null == f && (h || p)) return null;
    let g = () => {
        null == c || c(), i.A.closePrivateChannel(t.id)
    };
    return (0, r.jsx)(l.Button, {
        variant: "critical-primary",
        size: "sm",
        disabled: null == f,
        onClick: e => {
            e.stopPropagation(), null == n || n(), null != f && (0, s.b8)(f, g)
        },
        onMouseEnter: u,
        onMouseLeave: d,
        text: o.intl.string(o.t.HHZmDn)
    })
}