/** chunk id: 725951 params = (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => _,
    f: () => A
});
var a, r = s(627968),
    n = s(64700),
    l = s(503698),
    i = s.n(l),
    u = s(615300),
    c = s(73939),
    d = s(752327),
    A = ((a = {})[a.RIGHT = -1] = "RIGHT", a[a.LEFT = 1] = "LEFT", a);
let o = {
    friction: 7,
    tension: 40,
    clamp: !0
};
class h extends n.PureComponent {
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
        return (0, r.jsx)(u.A.div, {
            style: this.getStyle(),
            className: d.A,
            children: this.props.children
        })
    }
}
let _ = e => {
    let {
        children: t,
        step: s,
        direction: a,
        className: n,
        springSettings: l = o,
        fadeInOut: u = !1
    } = e;
    return (0, r.jsx)(c.F, {
        component: "div",
        className: i()(d.Q, n),
        children: (0, r.jsx)(h, {
            direction: a,
            springSettings: l,
            fadeInOut: u,
            children: t
        }, s)
    })
}