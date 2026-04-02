/** chunk id: 725951 params = (module,exports,require) **/
a.d(t, {
    A: () => m,
    f: () => c
});
var n, i = a(627968),
    s = a(64700),
    r = a(503698),
    l = a.n(r),
    d = a(615300),
    _ = a(73939),
    o = a(762145),
    c = ((n = {})[n.RIGHT = -1] = "RIGHT", n[n.LEFT = 1] = "LEFT", n);
let h = {
    friction: 7,
    tension: 40,
    clamp: !0
};
class u extends s.PureComponent {
    _animated;
    constructor(e) {
        super(e), this._animated = new d.A.Value(-1 * e.direction)
    }
    componentWillEnter(e) {
        this._animated.setValue(-this.props.direction), d.A.spring(this._animated, {
            toValue: 0,
            ...this.props.springSettings
        }).start(e)
    }
    componentDidAppear() {
        this._animated.setValue(0)
    }
    componentWillLeave(e) {
        d.A.spring(this._animated, {
            toValue: this.props.direction,
            ...this.props.springSettings
        }).start(e)
    }
    getStyle() {
        let e = d.A.accelerate({
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
        return (0, i.jsx)(d.A.div, {
            style: this.getStyle(),
            className: o.A,
            children: this.props.children
        })
    }
}
let m = e => {
    let {
        children: t,
        step: a,
        direction: n,
        className: s,
        springSettings: r = h,
        fadeInOut: d = !1
    } = e;
    return (0, i.jsx)(_.F, {
        component: "div",
        className: l()(o.Q, s),
        children: (0, i.jsx)(u, {
            direction: n,
            springSettings: r,
            fadeInOut: d,
            children: t
        }, a)
    })
}