/** chunk id: 772659 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(308528),
    a = n(928658),
    s = n(978914),
    o = n(985018);

function d(e) {
    let {
        channel: t,
        onReportClick: n,
        onReportSubmit: d,
        onMouseEnter: c,
        onMouseLeave: u
    } = e, {
        error: A,
        loaded: h,
        message: _
    } = (0, s.I)(t);
    if (null == _ && (h || A)) return null;
    let m = () => {
        d?.(), r.A.closePrivateChannel(t.id)
    };
    return (0, i.jsx)(l.Button, {
        variant: "critical-primary",
        size: "sm",
        disabled: null == _,
        onClick: e => {
            e.stopPropagation(), n?.(), null != _ && (0, a.b8)(_, m)
        },
        onMouseEnter: c,
        onMouseLeave: u,
        text: o.intl.string(o.t.HHZmDn)
    })
}