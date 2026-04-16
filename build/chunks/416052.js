/** chunk id: 416052 params = (module,exports,require) **/
i.d(e, {
    A: () => u
});
var n = i(627968),
    s = i(64700),
    o = i(451988),
    a = i(421380),
    d = i(397927),
    l = i(957565),
    r = i(985018);
class _ extends s.PureComponent {
    _timeout;
    static defaultProps = {
        delay: 1e3
    };
    constructor(t) {
        super(t), this.state = {
            mode: d.e2O.Modes.DEFAULT
        }, this._timeout = new o.Ep, this.handleCopy = this.handleCopy.bind(this)
    }
    componentWillUnmount() {
        this._timeout.stop()
    }
    render() {
        let {
            text: t
        } = this.props, {
            mode: e
        } = this.state, i = e === d.e2O.Modes.SUCCESS ? r.intl.string(r.t.t5VZ88) : t;
        return (0, n.jsx)(d.e2O, {
            ...this.props,
            onCopy: this.handleCopy,
            mode: e,
            text: i,
            supportsCopy: l.p5
        })
    }
    handleCopy(t) {
        let {
            onCopy: e,
            delay: i = 1e3
        } = this.props;
        (0, l.C)(t, () => this.setState({
            mode: d.e2O.Modes.SUCCESS
        }), () => this.setState({
            mode: d.e2O.Modes.ERROR
        })), this._timeout.start(i, () => this.setState({
            mode: d.e2O.Modes.DEFAULT
        })), e?.(t)
    }
    getVerticalButtonColor(t) {
        switch (t) {
            case d.e2O.Modes.SUCCESS:
                return a.$n.Colors.GREEN;
            case d.e2O.Modes.ERROR:
                return a.$n.Colors.RED;
            default:
                return a.$n.Colors.BRAND
        }
    }
}
let u = _