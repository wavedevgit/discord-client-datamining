/** chunk id: 641405 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var a = n(627968),
    r = n(397927),
    i = n(450481),
    s = n(758836),
    l = n(985018);
let c = e => {
    let {
        product: t,
        onSuccess: n,
        onTrackClick: c
    } = e, {
        handleUseNow: o,
        isApplying: d
    } = (0, i.p)({
        product: t,
        onSuccess: n
    });
    return (0, a.jsx)(r.Button, {
        variant: "primary",
        onClick: () => {
            c?.(s.sH.USE_NOW), o()
        },
        loading: d,
        text: l.intl.string(l.t.MAS7uK),
        fullWidth: !0
    })
}