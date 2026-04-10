/** chunk id: 964592 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    s = n(827343),
    r = n(430452),
    o = n(824744),
    c = n(723702),
    d = n(985018);

function u(e) {
    let t = (0, l.bG)([r.Ay], () => (0, o.M)(r.Ay.getOutputVolume()));
    return (0, i.jsx)(a.aK1, {
        id: "output",
        label: d.intl.string(d.t.eATD2B),
        control: (n, l) => (0, i.jsx)(a.i42, {
            ...n,
            ref: l,
            value: t,
            maxValue: c.isPlatformEmbedded ? 200 : 100,
            onChange: t => s.A.setOutputVolume((0, o.w)(t), {
                analyticsLocations: e
            }),
            "aria-label": d.intl.string(d.t.eATD2B)
        })
    })
}