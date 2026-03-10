/** chunk id: 532197 params = (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => h
});
var n = r(627968),
    l = r(64700),
    s = r(503698),
    a = r.n(s),
    i = r(397927),
    u = r(262633);
let c = {
        UP: "up",
        RIGHT: "right",
        DOWN: "down",
        LEFT: "left"
    },
    o = {
        [c.UP]: "",
        [c.RIGHT]: u.pG,
        [c.DOWN]: u.TR,
        [c.LEFT]: u.kb
    };
class d extends l.PureComponent {
    static Directions = c;
    render() {
        let {
            direction: e,
            className: t
        } = this.props;
        return (0, n.jsx)(i.z$m, {
            size: "md",
            color: "currentColor",
            className: a()(t, {
                [o[e]]: !0
            })
        })
    }
}
let h = d