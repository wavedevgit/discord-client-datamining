/** chunk id: 964592 params = (module,exports,require) **/
i.d(t, {
    A: () => c
});
var n = i(627968);
i(64700);
var l = i(311907),
    r = i(397927),
    s = i(827343),
    a = i(430452),
    o = i(824744),
    d = i(723702),
    u = i(985018);

function c(e) {
    let t = (0, l.bG)([a.Ay], () => (0, o.M)(a.Ay.getOutputVolume()));
    return (0, n.jsx)(r.aK1, {
        id: "output",
        label: u.intl.string(u.t.eATD2B),
        control: (i, l) => (0, n.jsx)(r.i42, {
            ...i,
            ref: l,
            value: t,
            maxValue: d.isPlatformEmbedded ? 200 : 100,
            onChange: t => s.A.setOutputVolume((0, o.w)(t), {
                analyticsLocations: e
            }),
            "aria-label": u.intl.string(u.t.eATD2B)
        })
    })
}