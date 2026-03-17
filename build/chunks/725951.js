/** chunk id: 725951 params = (module,exports,require) **/
a.d(t, {
    A: () => h,
    f: () => c
});
var s, l = a(627968),
    n = a(64700),
    r = a(503698),
    i = a.n(r),
    A = a(615300),
    d = a(73939),
    o = a(752327),
    c = ((s = {})[s.RIGHT = -1] = "RIGHT", s[s.LEFT = 1] = "LEFT", s);
let u = {
    friction: 7,
    tension: 40,
    clamp: !0
};
class _ extends n.PureComponent {
    _animated;
    constructor(e) {
        super(e), this._animated = new A.A.Value(-1 * e.direction)
    }
    componentWillEnter(e) {
        this._animated.setValue(-this.props.direction), A.A.spring(this._animated, {
            toValue: 0,
            ...this.props.springSettings
        }).start(e)
    }
    componentDidAppear() {
        this._animated.setValue(0)
    }
    componentWillLeave(e) {
        A.A.spring(this._animated, {
            toValue: this.props.direction,
            ...this.props.springSettings
        }).start(e)
    }
    getStyle() {
        let e = A.A.accelerate({
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
        return (0, l.jsx)(A.A.div, {
            style: this.getStyle(),
            className: o.A,
            children: this.props.children
        })
    }
}
let h = e => {
    let {
        children: t,
        step: a,
        direction: s,
        className: n,
        springSettings: r = u,
        fadeInOut: A = !1
    } = e;
    return (0, l.jsx)(d.F, {
        component: "div",
        className: i()(o.Q, n),
        children: (0, l.jsx)(_, {
            direction: s,
            springSettings: r,
            fadeInOut: A,
            children: t
        }, a)
    })
}