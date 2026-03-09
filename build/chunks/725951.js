/** chunk id: 725951 params = (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => m,
    f: () => o
});
var n, s = r(627968),
    l = r(64700),
    a = r(503698),
    i = r.n(a),
    u = r(615300),
    c = r(73939),
    d = r(962033),
    o = ((n = {})[n.RIGHT = -1] = "RIGHT", n[n.LEFT = 1] = "LEFT", n);
let h = {
    friction: 7,
    tension: 40,
    clamp: !0
};
class p extends l.PureComponent {
    _animated;
    constructor(e) {
        super(e), this._animated = new u.A.Value(-1 * e.direction)
    }
    componentWillEnter(e) {
        this._animated.setValue(-this.props.direction), u.A.spring(this._animated, {
            toValue: 0,
            ...this.props.springSettings
        }).start(e)
    }
    componentDidAppear() {
        this._animated.setValue(0)
    }
    componentWillLeave(e) {
        u.A.spring(this._animated, {
            toValue: this.props.direction,
            ...this.props.springSettings
        }).start(e)
    }
    getStyle() {
        let e = u.A.accelerate({
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
        return (0, s.jsx)(u.A.div, {
            style: this.getStyle(),
            className: d.A,
            children: this.props.children
        })
    }
}
let m = e => {
    let {
        children: t,
        step: r,
        direction: n,
        className: l,
        springSettings: a = h,
        fadeInOut: u = !1
    } = e;
    return (0, s.jsx)(c.F, {
        component: "div",
        className: i()(d.Q, l),
        children: (0, s.jsx)(p, {
            direction: n,
            springSettings: a,
            fadeInOut: u,
            children: t
        }, r)
    })
}