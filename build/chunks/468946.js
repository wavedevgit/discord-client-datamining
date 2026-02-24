/** chunk id: 468946, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
});
var a = n(627968),
    i = n(281445),
    s = n(158954),
    l = n(736653),
    r = n(27023),
    d = n(818348),
    c = n(738072),
    o = n(985018),
    u = n(321098),
    m = n(391637),
    g = n(588979);

function f() {
    let e = (0, l.Ay)();
    return (0, a.jsx)(s.EYj, {
        variant: "text-sm/medium",
        className: u.Q,
        children: o.intl.format(c.default.fcJiY8, {
            provider: (0, a.jsx)("img", {
                className: u.S,
                src: e !== d.NJ.LIGHT ? g : m,
                alt: "Shockbyte"
            })
        })
    })
}

function v() {
    let {
        gameProvider: e
    } = (0, r.bv)();
    return e === i.X.SHOCKBYTE ? (0, a.jsx)(f, {}) : null
}