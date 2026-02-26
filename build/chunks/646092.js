/** chunk id: 646092, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => c
});
var r = l(627968),
    a = l(397927),
    d = l(976860);
let c = e => {
    let {
        href: t,
        ctaText: l,
        variant: c = "secondary"
    } = e;
    return (0, r.jsx)(a.Button, {
        variant: c,
        text: l,
        onClick: () => {
            (0, d.pX)(t)
        }
    })
}