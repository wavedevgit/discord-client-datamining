/** Chunk was on 67851 **/
/** chunk id: 133296, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(896048);
var r, l = n(627968),
    a = n(64700),
    i = n(451988);

function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class s extends(r = a.Component) {
    static getDerivedStateFromProps(e) {
        return e.disable ? {
            hovered: !1
        } : null
    }
    componentDidMount() {
        let {
            pauseOnHover: e,
            disable: t
        } = this.props, n = this.state.hovered && e;
        t || n || this.startTimer()
    }
    componentWillUnmount() {
        this.stopTimer()
    }
    componentDidUpdate(e, t) {
        let {
            props: n
        } = this, r = (e, t) => !e.disable && !(t.hovered && e.pauseOnHover), l = r(n, this.state), a = r(e, t);
        l && !a || e.interval !== n.interval ? this.startTimer() : !l && a && this.stopTimer()
    }
    startTimer() {
        let {
            interval: e,
            onInterval: t,
            disable: n
        } = this.props;
        n || this.timer.start(e, () => {
            t()
        })
    }
    stopTimer() {
        this.timer.stop()
    }
    render() {
        var e, t;
        let {
            children: n,
            className: r,
            disable: a
        } = this.props, i = a ? null : {
            onMouseEnter: this.handlePause,
            onFocus: this.handlePause,
            onMouseLeave: this.handleResume,
            onBlur: this.handleResume
        };
        return (0, l.jsx)("div", (e = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    o(e, t, n[t])
                })
            }
            return e
        }({}, i), t = t = {
            className: r,
            children: n
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e))
    }
    constructor(...e) {
        super(...e), o(this, "timer", new i.IX), o(this, "state", {
            hovered: !1
        }), o(this, "handlePause", () => {
            this.state.hovered || this.setState({
                hovered: !0
            })
        }), o(this, "handleResume", () => {
            this.setState({
                hovered: !1
            })
        })
    }
}
o(s, "defaultProps", {
    disable: !1,
    pauseOnHover: !1
});
let c = s