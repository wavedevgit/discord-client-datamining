/** chunk id: 532197 params = (module,exports,require) **/
a.d(t, {
    A: () => u
});
var s = a(627968),
    l = a(64700),
    n = a(503698),
    r = a.n(n),
    i = a(397927),
    A = a(262633);
let d = {
        UP: "up",
        RIGHT: "right",
        DOWN: "down",
        LEFT: "left"
    },
    o = {
        [d.UP]: "",
        [d.RIGHT]: A.pG,
        [d.DOWN]: A.TR,
        [d.LEFT]: A.kb
    };
class c extends l.PureComponent {
    static Directions = d;
    render() {
        let {
            direction: e,
            className: t
        } = this.props;
        return (0, s.jsx)(i.z$m, {
            size: "md",
            color: "currentColor",
            className: r()(t, {
                [o[e]]: !0
            })
        })
    }
}
let u = c