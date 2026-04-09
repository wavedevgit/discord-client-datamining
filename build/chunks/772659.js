/** chunk id: 772659 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var a = n(397927),
    r = n(308528),
    l = n(928658),
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
        loaded: _,
        message: h
    } = (0, s.I)(t);
    if (null == h && (_ || A)) return null;
    let m = () => {
        d?.(), r.A.closePrivateChannel(t.id)
    };
    return (0, i.jsx)(a.Button, {
        variant: "critical-primary",
        size: "sm",
        disabled: null == h,
        onClick: e => {
            e.stopPropagation(), n?.(), null != h && (0, l.b8)(h, m)
        },
        onMouseEnter: c,
        onMouseLeave: u,
        text: o.intl.string(o.t.HHZmDn)
    })
}