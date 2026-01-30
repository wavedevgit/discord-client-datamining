/** chunk id: 710016, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
}), n(896048), n(321073);
var r, l = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(985623),
    c = n.n(o),
    d = n(615300),
    u = n(73939),
    p = n(707685),
    h = n(775121),
    m = n(776231),
    g = n(848752),
    _ = n(203982),
    b = n(652215),
    f = n(904482);

function x(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            x(e, t, n[t])
        })
    }
    return e
}
let j = {
    friction: 10,
    tension: 100
};
class A extends i.Component {
    componentWillEnter(e) {
        let {
            directionHistory: t
        } = this.props, {
            translate: n,
            opacity: r
        } = this.state;
        n.setValue(t[t.length - 1]), r.setValue(0), e(), d.A.parallel([d.A.timing(r, {
            toValue: 1,
            easing: d.A.Easing.out(d.A.Easing.linear),
            duration: 200
        }), d.A.spring(n, v({
            toValue: 0
        }, j))]).start()
    }
    componentWillLeave(e) {
        let {
            directionHistory: t
        } = this.props, {
            opacity: n,
            translate: r
        } = this.state;
        d.A.parallel([d.A.timing(n, {
            toValue: 0,
            easing: d.A.Easing.in(d.A.Easing.linear),
            duration: 200
        }), d.A.spring(r, v({
            toValue: -1 * t[t.length - 1]
        }, j))]).start(e)
    }
    getStyle() {
        let {
            translate: e,
            opacity: t
        } = this.state;
        return d.A.accelerate({
            opacity: t,
            transform: [{
                translateX: e.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0px", "300px"]
                })
            }]
        })
    }
    render() {
        let {
            item: e
        } = this.props, {
            className: t
        } = this.props;
        return (0, l.jsx)(d.A.img, {
            src: e.src,
            alt: "",
            className: s()(f.M6, t),
            style: this.getStyle()
        })
    }
    constructor(...e) {
        super(...e), x(this, "state", {
            translate: new d.A.Value(0),
            opacity: new d.A.Value(1)
        })
    }
}
class y extends(r = i.Component) {
    componentDidMount() {
        this.preloadNextImages(), h.A.disable(), h.A.enableTemp(p.w), _._.subscribe(b.jej.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), _._.subscribe(b.jej.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled)
    }
    componentWillUnmount() {
        h.A.disableTemp(), _._.unsubscribe(b.jej.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), _._.unsubscribe(b.jej.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled)
    }
    preloadNextImages() {
        var e, t;
        let {
            currentIndex: n
        } = this.state, {
            items: r
        } = this.props, l = ((n + 1) % (e = r.length) + e) % e, i = ((n - 1) % (t = r.length) + t) % t;
        this.preloadImage(r[l]), this.preloadImage(r[i])
    }
    preloadImage(e) {
        (0, m.yt)(e.src)
    }
    componentDidUpdate(e, t) {
        let {
            currentIndex: n
        } = this.state;
        n !== t.currentIndex && this.preloadNextImages()
    }
    navigateTo(e) {
        var t, n, r;
        let {
            directionHistory: l,
            currentIndex: i
        } = this.state;
        l.push(e - i), e = (e % (r = this.props.items.length) + r) % r, this.setState({
            currentIndex: e,
            directionHistory: l
        }), null == (t = (n = this.props).onIndexChange) || t.call(n, e)
    }
    render() {
        var e;
        let {
            className: t
        } = this.props, {
            currentIndex: n,
            directionHistory: r
        } = this.state, {
            modalCarouselItemClassName: i
        } = this.props, a = this.props.items[n], o = this.props.items;
        return (0, l.jsxs)(u.F, {
            component: "div",
            className: s()(f.iE, t),
            children: [o.length > 1 ? (0, l.jsx)(g.Q8, {
                className: f.vi,
                onClick: this.gotoPrev
            }) : null, null != (e = a.component) ? e : (0, l.jsx)(A, {
                item: a,
                directionHistory: r,
                className: i
            }, a.src), o.length > 1 ? (0, l.jsx)(g.Oj, {
                className: f.f8,
                onClick: this.gotoNext
            }) : null]
        })
    }
    constructor(e) {
        super(e), x(this, "gotoNext", () => {
            let {
                currentIndex: e
            } = this.state;
            this.navigateTo(e + 1)
        }), x(this, "gotoPrev", () => {
            let {
                currentIndex: e
            } = this.state;
            this.navigateTo(e - 1)
        }), x(this, "gotoNextThrottled", c()(this.gotoNext, 300)), x(this, "gotoPrevThrottled", c()(this.gotoPrev, 300)), this.state = {
            currentIndex: e.startWith,
            directionHistory: []
        }
    }
}
x(y, "defaultProps", {
    startWith: 0
})