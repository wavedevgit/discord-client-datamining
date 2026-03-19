/** chunk id: 133296 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(627968),
    r = n(64700),
    a = n(451988);
class l extends r.Component {
    timer = new a.IX;
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
        } = this, i = (e, t) => !e.disable && !(t.hovered && e.pauseOnHover), r = i(n, this.state), a = i(e, t);
        r && !a || e.interval !== n.interval ? this.startTimer() : !r && a && this.stopTimer()
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
        } = this.props, r = n ? null : {
            onMouseEnter: this.handlePause,
            onFocus: this.handlePause,
            onMouseLeave: this.handleResume,
            onBlur: this.handleResume
        };
        return (0, i.jsx)("div", {
            ...r,
            className: t,
            children: e
        })
    }
}
let s = l