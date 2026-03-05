/** chunk id: 641405, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => l
});
var n = a(627968);
a(64700);
var r = a(397927),
    i = a(450481),
    s = a(985018);
let l = e => {
    let {
        product: t,
        onSuccess: a
    } = e, {
        handleUseNow: l,
        isApplying: c
    } = (0, i.p)({
        product: t,
        onSuccess: a
    });
    return (0, n.jsx)(r.Button, {
        variant: "primary",
        onClick: l,
        loading: c,
        text: s.intl.string(s.t.MAS7uK),
        fullWidth: !0
    })
}