/** chunk id: 532197 params = (module,exports,require) **/
a.d(t, {
    A: () => u
});
var s = a(627968),
    l = a(64700),
    n = a(503698),
    r = a.n(n),
    i = a(397927),
    d = a(230987);
let A = {
        UP: "up",
        RIGHT: "right",
        DOWN: "down",
        LEFT: "left"
    },
    o = {
        [A.UP]: "",
        [A.RIGHT]: d.pG,
        [A.DOWN]: d.TR,
        [A.LEFT]: d.kb
    };
class c extends l.PureComponent {
    static Directions = A;
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