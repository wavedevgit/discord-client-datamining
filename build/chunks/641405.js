/** chunk id: 641405 params = (module,exports,require) **/
a.d(t, {
    A: () => o
});
var n = a(627968),
    r = a(397927),
    i = a(450481),
    s = a(758836),
    l = a(985018);
let o = e => {
    let {
        product: t,
        onSuccess: a,
        onTrackClick: o
    } = e, {
        handleUseNow: c,
        isApplying: d
    } = (0, i.p)({
        product: t,
        onSuccess: a
    });
    return (0, n.jsx)(r.Button, {
        variant: "primary",
        onClick: () => {
            o?.(s.sH.USE_NOW), c()
        },
        loading: d,
        text: l.intl.string(l.t.MAS7uK),
        fullWidth: !0
    })
}