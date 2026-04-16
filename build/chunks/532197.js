/** chunk id: 532197 params = (module,exports,require) **/
a.d(t, {
    A: () => h
});
var s = a(627968),
    n = a(64700),
    i = a(503698),
    l = a.n(i),
    r = a(397927),
    c = a(590900);
let o = {
        UP: "up",
        RIGHT: "right",
        DOWN: "down",
        LEFT: "left"
    },
    d = {
        [o.UP]: "",
        [o.RIGHT]: c.pG,
        [o.DOWN]: c.TR,
        [o.LEFT]: c.kb
    };
class _ extends n.PureComponent {
    static Directions = o;
    render() {
        let {
            direction: e,
            className: t
        } = this.props;
        return (0, s.jsx)(r.z$m, {
            size: "md",
            color: "currentColor",
            className: l()(t, {
                [d[e]]: !0
            })
        })
    }
}
let h = _