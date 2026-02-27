/** chunk id: 725951, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A,
    f: () => u
});
var i, s = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    o = n(615300),
    c = n(73939),
    d = n(752327),
    u = ((i = {})[i.RIGHT = -1] = "RIGHT", i[i.LEFT = 1] = "LEFT", i);
let _ = {
    friction: 7,
    tension: 40,
    clamp: !0
};
class m extends a.PureComponent {
    _animated;
    constructor(e) {
        super(e), this._animated = new o.A.Value(-1 * e.direction)
    }
    componentWillEnter(e) {
        this._animated.setValue(-this.props.direction), o.A.spring(this._animated, {
            toValue: 0,
            ...this.props.springSettings
        }).start(e)
    }
    componentDidAppear() {
        this._animated.setValue(0)
    }
    componentWillLeave(e) {
        o.A.spring(this._animated, {
            toValue: this.props.direction,
            ...this.props.springSettings
        }).start(e)
    }
    getStyle() {
        let e = o.A.accelerate({
            transform: [{
                translateX: this._animated.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0%", "-100%"]
                })
            }]
        });
        return this.props.fadeInOut && (e.opacity = this._animated.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [0, 1, 0]
        })), e
    }
    render() {
        return (0, s.jsx)(o.A.div, {
            style: this.getStyle(),
            className: d.A,
            children: this.props.children
        })
    }
}
let A = e => {
    let {
        children: t,
        step: n,
        direction: i,
        className: a,
        springSettings: l = _,
        fadeInOut: o = !1
    } = e;
    return (0, s.jsx)(c.F, {
        component: "div",
        className: r()(d.Q, a),
        children: (0, s.jsx)(m, {
            direction: i,
            springSettings: l,
            fadeInOut: o,
            children: t
        }, n)
    })
}