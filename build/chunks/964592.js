/** chunk id: 964592, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    s = n(827343),
    a = n(430452),
    o = n(824744),
    c = n(723702),
    d = n(985018);

function A(e) {
    let t = (0, r.bG)([a.Ay], () => (0, o.M)(a.Ay.getOutputVolume()));
    return (0, i.jsx)(l.aK1, {
        id: "output",
        label: d.intl.string(d.t.eATD2B),
        control: (n, r) => (0, i.jsx)(l.i42, {
            ...n,
            ref: r,
            value: t,
            maxValue: c.isPlatformEmbedded ? 200 : 100,
            onChange: t => s.A.setOutputVolume((0, o.w)(t), {
                analyticsLocations: e
            }),
            "aria-label": d.intl.string(d.t.eATD2B)
        })
    })
}