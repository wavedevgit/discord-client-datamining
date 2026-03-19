/** chunk id: 792831 params = (module,exports,require) **/
a.d(t, {
    A: () => _
});
var n, l = a(627968);
a(64700);
var r = a(503698),
    i = a.n(r),
    s = a(953727),
    c = a(59937),
    o = ((n = {}).LEFT = "LEFT", n.RIGHT = "RIGHT", n.UP = "UP", n.DOWN = "DOWN", n.UP_LEFT = "UP_LEFT", n.DOWN_RIGHT = "DOWN_RIGHT", n);
let u = e => {
    let {
        width: t = 24,
        height: a = 24,
        color: n = "currentColor",
        direction: r,
        foreground: o,
        className: u,
        title: _,
        ...d
    } = e;
    return (0, l.jsxs)("svg", {
        ...(0, s.A)(d),
        width: t,
        height: a,
        className: i()(u, function(e) {
            switch (e) {
                case "LEFT":
                    return c.kb;
                case "RIGHT":
                    return c.pG;
                case "UP":
                    return null;
                case "DOWN":
                    return c.TR;
                case "UP_LEFT":
                    return c.l0;
                case "DOWN_RIGHT":
                    return c.Nu;
                default:
                    throw Error(`Invalid Direction ${e}`)
            }
        }(r)),
        viewBox: "0 0 24 24",
        children: [null != _ ? (0, l.jsx)("title", {
            children: _
        }) : null, (0, l.jsx)("polygon", {
            className: o,
            fill: n,
            fillRule: "nonzero",
            points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
        })]
    })
};
u.Directions = o;
let _ = u