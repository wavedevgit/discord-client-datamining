/** chunk id: 964592 params = (module,exports,require) **/
n.d(e, {
    A: () => c
});
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(397927),
    s = n(827343),
    a = n(430452),
    o = n(824744),
    u = n(723702),
    d = n(985018);

function c(t) {
    let e = (0, l.bG)([a.Ay], () => (0, o.M)(a.Ay.getOutputVolume()));
    return (0, i.jsx)(r.aK1, {
        id: "output",
        label: d.intl.string(d.t.eATD2B),
        control: (n, l) => (0, i.jsx)(r.i42, {
            ...n,
            ref: l,
            value: e,
            maxValue: u.isPlatformEmbedded ? 200 : 100,
            onChange: e => s.A.setOutputVolume((0, o.w)(e), {
                analyticsLocations: t
            }),
            "aria-label": d.intl.string(d.t.eATD2B)
        })
    })
}