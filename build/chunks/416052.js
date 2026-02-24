/** chunk id: 416052, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => d
});
var a = t(627968),
    i = t(64700),
    r = t(451988),
    o = t(421380),
    l = t(397927),
    s = t(957565),
    c = t(985018);
class _ extends i.PureComponent {
    _timeout;
    static defaultProps = {
        delay: 1e3
    };
    constructor(e) {
        super(e), this.state = {
            mode: l.e2O.Modes.DEFAULT
        }, this._timeout = new r.Ep, this.handleCopy = this.handleCopy.bind(this)
    }
    componentWillUnmount() {
        this._timeout.stop()
    }
    render() {
        let {
            text: e
        } = this.props, {
            mode: n
        } = this.state, t = n === l.e2O.Modes.SUCCESS ? c.intl.string(c.t.t5VZ88) : e;
        return (0, a.jsx)(l.e2O, {
            ...this.props,
            onCopy: this.handleCopy,
            mode: n,
            text: t,
            supportsCopy: s.p5
        })
    }
    handleCopy(e) {
        let {
            onCopy: n,
            delay: t = 1e3
        } = this.props;
        (0, s.C)(e, () => this.setState({
            mode: l.e2O.Modes.SUCCESS
        }), () => this.setState({
            mode: l.e2O.Modes.ERROR
        })), this._timeout.start(t, () => this.setState({
            mode: l.e2O.Modes.DEFAULT
        })), n?.(e)
    }
    getVerticalButtonColor(e) {
        switch (e) {
            case l.e2O.Modes.SUCCESS:
                return o.$n.Colors.GREEN;
            case l.e2O.Modes.ERROR:
                return o.$n.Colors.RED;
            default:
                return o.$n.Colors.BRAND
        }
    }
}
let d = _