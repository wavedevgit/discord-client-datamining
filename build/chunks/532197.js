/** chunk id: 532197 params = (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => o
});
var a = s(627968),
    r = s(64700),
    n = s(503698),
    l = s.n(n),
    i = s(397927),
    u = s(262633);
let c = {
        UP: "up",
        RIGHT: "right",
        DOWN: "down",
        LEFT: "left"
    },
    d = {
        [c.UP]: "",
        [c.RIGHT]: u.pG,
        [c.DOWN]: u.TR,
        [c.LEFT]: u.kb
    };
class A extends r.PureComponent {
    static Directions = c;
    render() {
        let {
            direction: e,
            className: t
        } = this.props;
        return (0, a.jsx)(i.z$m, {
            size: "md",
            color: "currentColor",
            className: l()(t, {
                [d[e]]: !0
            })
        })
    }
}
let o = A