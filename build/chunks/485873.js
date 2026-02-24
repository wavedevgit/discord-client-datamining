/** chunk id: 485873, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(627968);
n(64700);
var a = n(311907),
    i = n(397927),
    l = n(827343),
    u = n(430452),
    s = n(824744),
    o = n(985018);

function c(e) {
    let t = (0, a.bG)([u.Ay], () => (0, s.M)(u.Ay.getInputVolume()));
    return (0, r.jsx)(i.aK1, {
        id: "input",
        label: o.intl.string(o.t.OX2Bnr),
        control: (n, a) => (0, r.jsx)(i.i42, {
            ...n,
            ref: a,
            value: t,
            onChange: t => l.A.setInputVolume((0, s.w)(t), {
                analyticsLocations: e
            }),
            "aria-label": o.intl.string(o.t.OX2Bnr)
        })
    })
}