/** Chunk was on 60449 **/
/** chunk id: 152302, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(827343),
    a = n(688810),
    o = n(430452),
    c = n(824744),
    d = n(985018),
    u = n(867737);

function g() {
    let {
        analyticsLocations: e
    } = (0, a.Ay)(), {
        inputVolume: t,
        outputVolume: n
    } = (0, s.cf)([o.A], () => ({
        inputVolume: o.A.getInputVolume(),
        outputVolume: o.A.getOutputVolume()
    }));
    return (0, i.jsxs)("div", {
        className: u.o,
        children: [(0, i.jsx)("div", {
            className: u.f,
            children: (0, i.jsx)(l.Apm, {
                label: d.intl.string(d.t.OX2Bnr),
                initialValue: (0, c.M)(t),
                asValueChanges: t => r.A.setInputVolume((0, c.w)(t), {
                    analyticsLocations: e
                })
            })
        }), (0, i.jsx)("div", {
            className: u.f,
            children: (0, i.jsx)(l.Apm, {
                label: d.intl.string(d.t.eATD2B),
                initialValue: (0, c.M)(n),
                maxValue: 200,
                onValueRender: e => "".concat(e.toFixed(0), "%"),
                asValueChanges: t => r.A.setOutputVolume((0, c.w)(t), {
                    analyticsLocations: e
                })
            })
        })]
    })
}