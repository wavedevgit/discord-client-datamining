/** chunk id: 646092, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => a
});
var r = t(627968),
    o = t(397927),
    n = t(976860);
let a = e => {
    let {
        href: l,
        ctaText: t,
        variant: a = "secondary"
    } = e;
    return (0, r.jsx)(o.Button, {
        variant: a,
        text: t,
        onClick: () => {
            (0, n.pX)(l)
        }
    })
}