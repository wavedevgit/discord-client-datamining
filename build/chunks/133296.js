/** chunk id: 133296 params = (module,exports,require) **/
a.d(t, {
    A: () => l
});
var n = a(627968),
    i = a(64700),
    s = a(451988);
class r extends i.Component {
    timer = new s.IX;
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
        } = this, n = (e, t) => !e.disable && !(t.hovered && e.pauseOnHover), i = n(a, this.state), s = n(e, t);
        i && !s || e.interval !== a.interval ? this.startTimer() : !i && s && this.stopTimer()
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
        } = this.props, i = a ? null : {
            onMouseEnter: this.handlePause,
            onFocus: this.handlePause,
            onMouseLeave: this.handleResume,
            onBlur: this.handleResume
        };
        return (0, n.jsx)("div", {
            ...i,
            className: t,
            children: e
        })
    }
}
let l = r