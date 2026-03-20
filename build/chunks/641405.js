/** chunk id: 641405 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(627968);
n(64700);
var a = n(397927),
    i = n(450481),
    l = n(985018);
let s = e => {
    let {
        product: t,
        onSuccess: n
    } = e, {
        handleUseNow: s,
        isApplying: c
    } = (0, i.p)({
        product: t,
        onSuccess: n
    });
    return (0, r.jsx)(a.Button, {
        variant: "primary",
        onClick: s,
        loading: c,
        text: l.intl.string(l.t.MAS7uK),
        fullWidth: !0
    })
}