/** chunk id: 485873, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => u
});
var n = i(627968);
i(64700);
var s = i(311907),
    l = i(397927),
    a = i(827343),
    o = i(430452),
    r = i(824744),
    c = i(985018);

function u(e) {
    let t = (0, s.bG)([o.Ay], () => (0, r.M)(o.Ay.getInputVolume()));
    return (0, n.jsx)(l.aK1, {
        id: "input",
        label: c.intl.string(c.t.OX2Bnr),
        control: (i, s) => (0, n.jsx)(l.i42, {
            ...i,
            ref: s,
            value: t,
            onChange: t => a.A.setInputVolume((0, r.w)(t), {
                analyticsLocations: e
            }),
            "aria-label": c.intl.string(c.t.OX2Bnr)
        })
    })
}