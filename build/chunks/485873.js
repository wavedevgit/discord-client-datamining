/** chunk id: 485873, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    s = n(827343),
    a = n(430452),
    o = n(824744),
    c = n(985018);

function d(e) {
    let t = (0, r.bG)([a.Ay], () => (0, o.M)(a.Ay.getInputVolume()));
    return (0, i.jsx)(l.aK1, {
        id: "input",
        label: c.intl.string(c.t.OX2Bnr),
        control: (n, r) => (0, i.jsx)(l.i42, {
            ...n,
            ref: r,
            value: t,
            onChange: t => s.A.setInputVolume((0, o.w)(t), {
                analyticsLocations: e
            }),
            "aria-label": c.intl.string(c.t.OX2Bnr)
        })
    })
}