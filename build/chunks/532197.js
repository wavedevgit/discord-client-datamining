/** chunk id: 532197 params = (module,exports,require) **/
a.d(t, {
    A: () => h
});
var r = a(627968),
    n = a(64700),
    l = a(503698),
    s = a.n(l),
    i = a(397927),
    o = a(721988);
let d = {
        UP: "up",
        RIGHT: "right",
        DOWN: "down",
        LEFT: "left"
    },
    c = {
        [d.UP]: "",
        [d.RIGHT]: o.pG,
        [d.DOWN]: o.TR,
        [d.LEFT]: o.kb
    };
class u extends n.PureComponent {
    static Directions = d;
    render() {
        let {
            direction: e,
            className: t
        } = this.props;
        return (0, r.jsx)(i.z$m, {
            size: "md",
            color: "currentColor",
            className: s()(t, {
                [c[e]]: !0
            })
        })
    }
}
let h = u