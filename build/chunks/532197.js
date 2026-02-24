/** chunk id: 532197, original params: e,t,r (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => _
});
var n = r(627968),
    a = r(64700),
    s = r(503698),
    l = r.n(s),
    i = r(397927),
    c = r(262633);
let o = {
        UP: "up",
        RIGHT: "right",
        DOWN: "down",
        LEFT: "left"
    },
    u = {
        [o.UP]: "",
        [o.RIGHT]: c.pG,
        [o.DOWN]: c.TR,
        [o.LEFT]: c.kb
    };
class d extends a.PureComponent {
    static Directions = o;
    render() {
        let {
            direction: e,
            className: t
        } = this.props;
        return (0, n.jsx)(i.z$m, {
            size: "md",
            color: "currentColor",
            className: l()(t, {
                [u[e]]: !0
            })
        })
    }
}
let _ = d