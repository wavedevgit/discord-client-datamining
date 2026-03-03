/** chunk id: 964592, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => d
});
var n = i(627968);
i(64700);
var s = i(311907),
    l = i(397927),
    a = i(827343),
    o = i(430452),
    r = i(824744),
    c = i(723702),
    u = i(985018);

function d(e) {
    let t = (0, s.bG)([o.Ay], () => (0, r.M)(o.Ay.getOutputVolume()));
    return (0, n.jsx)(l.aK1, {
        id: "output",
        label: u.intl.string(u.t.eATD2B),
        control: (i, s) => (0, n.jsx)(l.i42, {
            ...i,
            ref: s,
            value: t,
            maxValue: c.isPlatformEmbedded ? 200 : 100,
            onChange: t => a.A.setOutputVolume((0, r.w)(t), {
                analyticsLocations: e
            }),
            "aria-label": u.intl.string(u.t.eATD2B)
        })
    })
}