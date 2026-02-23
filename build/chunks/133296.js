/** chunk id: 133296, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => l
});
var a = n(627968),
    s = n(64700),
    i = n(451988);
class r extends s.Component {
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
        } = this.props, n = this.state.hovered && e;
        t || n || this.startTimer()
    }
    componentWillUnmount() {
        this.stopTimer()
    }
    componentDidUpdate(e, t) {
        let {
            props: n
        } = this, a = (e, t) => !e.disable && !(t.hovered && e.pauseOnHover), s = a(n, this.state), i = a(e, t);
        s && !i || e.interval !== n.interval ? this.startTimer() : !s && i && this.stopTimer()
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
            disable: n
        } = this.props, s = n ? null : {
            onMouseEnter: this.handlePause,
            onFocus: this.handlePause,
            onMouseLeave: this.handleResume,
            onBlur: this.handleResume
        };
        return (0, a.jsx)("div", {
            ...s,
            className: t,
            children: e
        })
    }
}
let l = r