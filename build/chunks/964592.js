/** chunk id: 964592 params = (module,exports,require) **/
i.d(t, {
    A: () => u
});
var n = i(627968);
i(64700);
var a = i(311907),
    l = i(397927),
    s = i(827343),
    r = i(430452),
    o = i(824744),
    c = i(723702),
    d = i(985018);

function u(e) {
    let t = (0, a.bG)([r.Ay], () => (0, o.M)(r.Ay.getOutputVolume()));
    return (0, n.jsx)(l.aK1, {
        id: "output",
        label: d.intl.string(d.t.eATD2B),
        control: (i, a) => (0, n.jsx)(l.i42, {
            ...i,
            ref: a,
            value: t,
            maxValue: c.isPlatformEmbedded ? 200 : 100,
            onChange: t => s.A.setOutputVolume((0, o.w)(t), {
                analyticsLocations: e
            }),
            "aria-label": d.intl.string(d.t.eATD2B)
        })
    })
}