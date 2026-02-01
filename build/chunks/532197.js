/** chunk id: 532197, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var i, s, r = n(627968),
    l = n(64700),
    o = n(503698),
    a = n.n(o),
    d = n(397927),
    u = n(262633);
let c = {
        UP: "up",
        RIGHT: "right",
        DOWN: "down",
        LEFT: "left"
    },
    h = {
        [c.UP]: "",
        [c.RIGHT]: u.pG,
        [c.DOWN]: u.TR,
        [c.LEFT]: u.kb
    };
class p extends(s = l.PureComponent) {
    render() {
        let {
            direction: e,
            className: t
        } = this.props;
        return (0, r.jsx)(d.z$m, {
            size: "md",
            color: "currentColor",
            className: a()(t, {
                [h[e]]: !0
            })
        })
    }
}(i = "Directions") in p ? Object.defineProperty(p, i, {
    value: c,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : p[i] = c;
let g = p