/** chunk id: 792831 params = (module,exports,require) **/
l.d(t, {
    A: () => T
});
var a, n = l(627968);
l(64700);
var s = l(503698),
    r = l.n(s),
    i = l(953727),
    c = l(265105),
    o = ((a = {}).LEFT = "LEFT", a.RIGHT = "RIGHT", a.UP = "UP", a.DOWN = "DOWN", a.UP_LEFT = "UP_LEFT", a.DOWN_RIGHT = "DOWN_RIGHT", a);
let u = e => {
    let {
        width: t = 24,
        height: l = 24,
        color: a = "currentColor",
        direction: s,
        foreground: o,
        className: u,
        title: T,
        ...d
    } = e;
    return (0, n.jsxs)("svg", {
        ...(0, i.A)(d),
        width: t,
        height: l,
        className: r()(u, function(e) {
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
        }(s)),
        viewBox: "0 0 24 24",
        children: [null != T ? (0, n.jsx)("title", {
            children: T
        }) : null, (0, n.jsx)("polygon", {
            className: o,
            fill: a,
            fillRule: "nonzero",
            points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
        })]
    })
};
u.Directions = o;
let T = u