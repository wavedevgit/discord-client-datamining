/** Chunk was on 60667 **/
/** chunk id: 152302, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    s = n(827343),
    a = n(688810),
    o = n(430452),
    c = n(824744),
    d = n(985018),
    u = n(867737);

function _() {
    let {
        analyticsLocations: e
    } = (0, a.Ay)(), {
        inputVolume: t,
        outputVolume: n
    } = (0, i.cf)([o.A], () => ({
        inputVolume: o.A.getInputVolume(),
        outputVolume: o.A.getOutputVolume()
    }));
    return (0, r.jsxs)("div", {
        className: u.o,
        children: [(0, r.jsx)("div", {
            className: u.f,
            children: (0, r.jsx)(l.Apm, {
                label: d.intl.string(d.t.OX2Bnr),
                initialValue: (0, c.M)(t),
                asValueChanges: t => s.A.setInputVolume((0, c.w)(t), {
                    analyticsLocations: e
                })
            })
        }), (0, r.jsx)("div", {
            className: u.f,
            children: (0, r.jsx)(l.Apm, {
                label: d.intl.string(d.t.eATD2B),
                initialValue: (0, c.M)(n),
                maxValue: 200,
                onValueRender: e => "".concat(e.toFixed(0), "%"),
                asValueChanges: t => s.A.setOutputVolume((0, c.w)(t), {
                    analyticsLocations: e
                })
            })
        })]
    })
}