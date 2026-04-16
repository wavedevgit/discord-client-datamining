/** chunk id: 641405 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var a = n(627968),
    r = n(397927),
    i = n(450481),
    s = n(758836),
    l = n(985018);
let o = e => {
    let {
        product: t,
        onSuccess: n,
        onTrackClick: o
    } = e, {
        handleUseNow: c,
        isApplying: d
    } = (0, i.p)({
        product: t,
        onSuccess: n
    });
    return (0, a.jsx)(r.Button, {
        variant: "primary",
        onClick: () => {
            o?.(s.sH.USE_NOW), c()
        },
        loading: d,
        text: l.intl.string(l.t.MAS7uK),
        fullWidth: !0
    })
}