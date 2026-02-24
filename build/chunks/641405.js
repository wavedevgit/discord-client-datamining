/** chunk id: 641405, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => l
});
var a = n(627968);
n(64700);
var r = n(397927),
    i = n(450481),
    s = n(985018);
let l = e => {
    let {
        product: t,
        onSuccess: n
    } = e, {
        handleUseNow: l,
        isApplying: c
    } = (0, i.p)({
        product: t,
        onSuccess: n
    });
    return (0, a.jsx)(r.Button, {
        variant: "primary",
        onClick: l,
        loading: c,
        text: s.intl.string(s.t.MAS7uK),
        fullWidth: !0
    })
}