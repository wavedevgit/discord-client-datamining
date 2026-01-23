/** Chunk was on 77313 **/
/** chunk id: 641405, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(450481),
    a = n(985018);
let s = e => {
    let {
        product: t,
        onSuccess: n
    } = e, {
        handleUseNow: s,
        isApplying: o
    } = (0, i.p)({
        product: t,
        onSuccess: n
    });
    return (0, r.jsx)(l.Button, {
        variant: "primary",
        onClick: s,
        loading: o,
        text: a.intl.string(a.t.MAS7uK),
        fullWidth: !0
    })
}