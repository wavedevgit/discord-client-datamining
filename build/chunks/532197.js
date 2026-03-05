/** chunk id: 532197, original params: e,t,r (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => h
});
var n = r(627968),
    s = r(64700),
    l = r(503698),
    a = r.n(l),
    i = r(397927),
    u = r(262633);
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
class o extends s.PureComponent {
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
                [d[e]]: !0
            })
        })
    }
}
let h = o