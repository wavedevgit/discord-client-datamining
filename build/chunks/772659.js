/** Chunk was on 1113 **/
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
        error: h,
        loaded: p,
        message: g
    } = (0, a.I)(t);
    if (null == g && (p || h)) return null;
    let f = () => {
        null == c || c(), i.A.closePrivateChannel(t.id)
    };
    return (0, r.jsx)(l.Button, {
        variant: "critical-primary",
        size: "sm",
        disabled: null == g,
        onClick: e => {
            e.stopPropagation(), null == n || n(), null != g && (0, s.b8)(g, f)
        },
        onMouseEnter: u,
        onMouseLeave: d,
        text: o.intl.string(o.t.HHZmDn)
    })
}