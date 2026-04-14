/** chunk id: 725951 params = (module,exports,require) **/
a.d(t, {
    A: () => A,
    f: () => _
});
var s, n = a(627968),
    i = a(64700),
    l = a(503698),
    r = a.n(l),
    c = a(615300),
    o = a(73939),
    d = a(220880),
    _ = ((s = {})[s.RIGHT = -1] = "RIGHT", s[s.LEFT = 1] = "LEFT", s);
let h = {
    friction: 7,
    tension: 40,
    clamp: !0
};
class u extends i.PureComponent {
    _animated;
    constructor(e) {
        super(e), this._animated = new c.A.Value(-1 * e.direction)
    }
    componentWillEnter(e) {
        this._animated.setValue(-this.props.direction), c.A.spring(this._animated, {
            toValue: 0,
            ...this.props.springSettings
        }).start(e)
    }
    componentDidAppear() {
        this._animated.setValue(0)
    }
    componentWillLeave(e) {
        c.A.spring(this._animated, {
            toValue: this.props.direction,
            ...this.props.springSettings
        }).start(e)
    }
    getStyle() {
        let e = c.A.accelerate({
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
        return (0, n.jsx)(c.A.div, {
            style: this.getStyle(),
            className: d.A,
            children: this.props.children
        })
    }
}
let A = e => {
    let {
        children: t,
        step: a,
        direction: s,
        className: i,
        springSettings: l = h,
        fadeInOut: c = !1
    } = e;
    return (0, n.jsx)(o.F, {
        component: "div",
        className: r()(d.Q, i),
        children: (0, n.jsx)(u, {
            direction: s,
            springSettings: l,
            fadeInOut: c,
            children: t
        }, a)
    })
}