/** chunk id: 133296 params = (module,exports,require) **/
a.d(t, {
    A: () => r
});
var s = a(627968),
    n = a(64700),
    i = a(451988);
class l extends n.Component {
    timer = new i.IX;
    state = {
        hovered: !1
    };
    static defaultProps = {
        disable: !1,
        pauseOnHover: !1
    };
    static getDerivedStateFromProps(e) {
        return e.disable ? {
            hovered: !1
        } : null
    }
    componentDidMount() {
        let {
            pauseOnHover: e,
            disable: t
        } = this.props, a = this.state.hovered && e;
        t || a || this.startTimer()
    }
    componentWillUnmount() {
        this.stopTimer()
    }
    componentDidUpdate(e, t) {
        let {
            props: a
        } = this, s = (e, t) => !e.disable && !(t.hovered && e.pauseOnHover), n = s(a, this.state), i = s(e, t);
        n && !i || e.interval !== a.interval ? this.startTimer() : !n && i && this.stopTimer()
    }
    startTimer() {
        let {
            interval: e,
            onInterval: t,
            disable: a
        } = this.props;
        a || this.timer.start(e, () => {
            t()
        })
    }
    stopTimer() {
        this.timer.stop()
    }
    handlePause = () => {
        this.state.hovered || this.setState({
            hovered: !0
        })
    };
    handleResume = () => {
        this.setState({
            hovered: !1
        })
    };
    render() {
        let {
            children: e,
            className: t,
            disable: a
        } = this.props, n = a ? null : {
            onMouseEnter: this.handlePause,
            onFocus: this.handlePause,
            onMouseLeave: this.handleResume,
            onBlur: this.handleResume
        };
        return (0, s.jsx)("div", {
            ...n,
            className: t,
            children: e
        })
    }
}
let r = l