/** chunk id: 173860, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
}), n(264879), n(896048), n(321073);
var r, l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(111956),
    c = n.n(o),
    u = n(615300),
    d = n(52133),
    p = n(397927),
    h = n(473134);

function g(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            g(e, t, n[t])
        })
    }
    return e
}
let m = {
    friction: 10,
    tension: 300
};
class b extends i.Component {
    shouldComponentUpdate(e, t) {
        return !(0, d.A)(this.props, e, ["animate"]) || !(0, d.A)(this.state, t)
    }
    componentDidMount() {
        let {
            hide: e
        } = this.props;
        e ? this.state.translateY.setValue(1) : this.state.translateY.setValue(0)
    }
    componentDidUpdate(e) {
        let {
            hide: t
        } = e, {
            hide: n
        } = this.props;
        n && !t ? this.animateOut() : !n && t && this.animateIn()
    }
    componentWillUnmount() {
        null != this._timeout && clearTimeout(this._timeout)
    }
    animateIn() {
        let {
            translateY: e
        } = this.state;
        (null != this._timeout && clearTimeout(this._timeout), this.props.animate) ? this._timeout = setTimeout(() => {
            u.A.spring(e, f({
                toValue: 0
            }, m)).start()
        }, 100): e.setValue(0)
    }
    animateOut() {
        let {
            translateY: e
        } = this.state;
        (null != this._timeout && clearTimeout(this._timeout), this.props.animate) ? u.A.spring(e, f({
            toValue: 1
        }, m)).start(): e.setValue(1)
    }
    render() {
        let {
            className: e,
            text: t,
            hide: n,
            onClick: r
        } = this.props;
        return (0, l.jsx)(u.A.div, {
            className: a()(h.M0, e, {
                [h.R]: n
            }),
            onClick: r,
            style: this.getAnimatedStyle(),
            "aria-hidden": n,
            children: (0, l.jsx)("span", {
                className: h.Qq,
                children: t
            })
        })
    }
    getAnimatedStyle() {
        let {
            translateY: e
        } = this.state, {
            reverse: t
        } = this.props;
        return {
            transform: [{
                translateY: e.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0%", t ? "180%" : "-180%"]
                })
            }]
        }
    }
    constructor(e) {
        super(e), g(this, "_timeout", void 0), this.state = {
            translateY: new u.A.Value,
            reduceMotion: !1
        }
    }
}
class A extends(r = i.PureComponent) {
    componentDidMount() {
        this.calculateState()
    }
    componentDidUpdate() {
        this.calculateState()
    }
    componentWillUnmount() {
        this.calculateState.cancel()
    }
    render() {
        let {
            unread: e,
            mention: t
        } = this.state, {
            textMention: n,
            textUnread: r,
            reverse: i,
            className: s,
            barClassName: o,
            hide: c,
            animate: u
        } = this.props, {
            reducedMotion: d
        } = this.context;
        return (0, l.jsx)("div", {
            className: null != s ? s : void 0,
            children: (0, l.jsx)(b, {
                hide: !0 === c || null == e && null == t,
                className: a()(o, null != t ? h.lE : h.gy),
                text: null != t ? n : r,
                reverse: i,
                animate: u && !d.enabled,
                onClick: this.handleClick
            })
        })
    }
    constructor(...e) {
        super(...e), g(this, "state", {
            unread: null,
            mention: null
        }), g(this, "calculateState", c()(() => {
            let {
                items: e,
                expandedFolders: t,
                isVisible: n,
                isUnread: r,
                isMentioned: l,
                reverse: i,
                onCalculate: s
            } = this.props, a = null, o = null, c = [];
            e.forEach(e => {
                "string" == typeof e ? c.push(e) : "object" == typeof e && null != e.folderId ? null != t && t.has(e.folderId) ? (c.push("folder:".concat(e.folderId)), e.guildIds.forEach(e => c.push(e))) : c.push(e.guildIds) : c.push(e.guildIds[0])
            });
            let u = e => {
                    null == a && l(e, i, c) && (a = e), null == o && r(e, i, c) && (o = e)
                },
                d = i ? c.length - 1 : 0,
                p = c[d];
            for (; null != p;) {
                if ("string" == typeof p) {
                    if (n(p, i, c)) break;
                    u(p)
                } else {
                    let e = !1;
                    for (let t of p) {
                        if (n(t, i, c)) {
                            e = !0;
                            break
                        }
                        u(t)
                    }
                    if (e) break
                }
                d += i ? -1 : 1, p = c[d]
            }
            null != s && s(a, o, i), this.setState({
                mention: a,
                unread: o
            })
        }, 200)), g(this, "handleClick", e => {
            e.preventDefault(), e.stopPropagation();
            let {
                unread: t,
                mention: n
            } = this.state, {
                onJumpTo: r
            } = this.props, l = null != n ? n : t;
            null != l && r(l, [n, t])
        })
    }
}
g(A, "contextType", p.CZY), g(A, "defaultProps", {
    className: h.kL,
    reverse: !1,
    hide: !1,
    animate: !0
});
let y = A