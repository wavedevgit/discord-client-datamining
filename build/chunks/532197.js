/** chunk id: 532197 params = (module,exports,require) **/
a.d(t, {
    A: () => h
});
var n = a(627968),
    i = a(64700),
    s = a(503698),
    r = a.n(s),
    l = a(397927),
    d = a(230987);
let _ = {
        UP: "up",
        RIGHT: "right",
        DOWN: "down",
        LEFT: "left"
    },
    o = {
        [_.UP]: "",
        [_.RIGHT]: d.pG,
        [_.DOWN]: d.TR,
        [_.LEFT]: d.kb
    };
class c extends i.PureComponent {
    static Directions = _;
    render() {
        let {
            direction: e,
            className: t
        } = this.props;
        return (0, n.jsx)(l.z$m, {
            size: "md",
            color: "currentColor",
            className: r()(t, {
                [o[e]]: !0
            })
        })
    }
}
let h = c