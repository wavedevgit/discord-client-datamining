/** Chunk was on 67851 **/
/** chunk id: 532197, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var r, l, a = n(627968),
    i = n(64700),
    o = n(503698),
    s = n.n(o),
    c = n(397927),
    d = n(262633);
let u = {
        UP: "up",
        RIGHT: "right",
        DOWN: "down",
        LEFT: "left"
    },
    _ = {
        [u.UP]: "",
        [u.RIGHT]: d.pG,
        [u.DOWN]: d.TR,
        [u.LEFT]: d.kb
    };
class m extends(l = i.PureComponent) {
    render() {
        let {
            direction: e,
            className: t
        } = this.props;
        return (0, a.jsx)(c.z$m, {
            size: "md",
            color: "currentColor",
            className: s()(t, {
                [_[e]]: !0
            })
        })
    }
}(r = "Directions") in m ? Object.defineProperty(m, r, {
    value: u,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : m[r] = u;
let b = m