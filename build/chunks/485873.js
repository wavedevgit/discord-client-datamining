/** chunk id: 485873 params = (module,exports,require) **/
i.d(t, {
    A: () => d
});
var n = i(627968);
i(64700);
var a = i(311907),
    l = i(397927),
    s = i(827343),
    r = i(430452),
    o = i(824744),
    c = i(985018);

function d(e) {
    let t = (0, a.bG)([r.Ay], () => (0, o.M)(r.Ay.getInputVolume()));
    return (0, n.jsx)(l.aK1, {
        id: "input",
        label: c.intl.string(c.t.OX2Bnr),
        control: (i, a) => (0, n.jsx)(l.i42, {
            ...i,
            ref: a,
            value: t,
            onChange: t => s.A.setInputVolume((0, o.w)(t), {
                analyticsLocations: e
            }),
            "aria-label": c.intl.string(c.t.OX2Bnr)
        })
    })
}