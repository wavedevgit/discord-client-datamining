/** chunk id: 485873 params = (module,exports,require) **/
i.d(e, {
    A: () => u
});
var n = i(627968);
i(64700);
var l = i(311907),
    r = i(397927),
    s = i(827343),
    a = i(430452),
    o = i(824744),
    d = i(985018);

function u(t) {
    let e = (0, l.bG)([a.Ay], () => (0, o.M)(a.Ay.getInputVolume()));
    return (0, n.jsx)(r.aK1, {
        id: "input",
        label: d.intl.string(d.t.OX2Bnr),
        control: (i, l) => (0, n.jsx)(r.i42, {
            ...i,
            ref: l,
            value: e,
            onChange: e => s.A.setInputVolume((0, o.w)(e), {
                analyticsLocations: t
            }),
            "aria-label": d.intl.string(d.t.OX2Bnr)
        })
    })
}