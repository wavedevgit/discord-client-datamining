/** chunk id: 485873 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    s = n(827343),
    r = n(430452),
    o = n(824744),
    c = n(985018);

function d(e) {
    let t = (0, l.bG)([r.Ay], () => (0, o.M)(r.Ay.getInputVolume()));
    return (0, i.jsx)(a.aK1, {
        id: "input",
        label: c.intl.string(c.t.OX2Bnr),
        interactive: !1,
        control: (n, l) => (0, i.jsx)(a.i42, {
            ...n,
            ref: l,
            value: t,
            onChange: t => s.A.setInputVolume((0, o.w)(t), {
                analyticsLocations: e
            }),
            "aria-label": c.intl.string(c.t.OX2Bnr)
        })
    })
}