/** chunk id: 646092 params = (module,exports,require) **/
t.d(l, {
    A: () => a
});
var r = t(627968),
    n = t(397927),
    o = t(976860),
    i = t(53566);
let a = e => {
    let {
        href: l,
        ctaText: t,
        variant: a = "secondary"
    } = e, s = (0, i.S)(t);
    return (0, r.jsx)(n.Button, {
        variant: a,
        text: s,
        onClick: () => {
            (0, o.pX)(l)
        }
    })
}