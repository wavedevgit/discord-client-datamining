/** chunk id: 416052 params = (module,exports,require) **/
o.d(e, {
    A: () => l
});
var s = o(627968),
    i = o(64700),
    n = o(451988),
    a = o(421380),
    _ = o(397927),
    d = o(957565),
    r = o(985018);
class p extends i.PureComponent {
    _timeout;
    static defaultProps = {
        delay: 1e3
    };
    constructor(t) {
        super(t), this.state = {
            mode: _.e2O.Modes.DEFAULT
        }, this._timeout = new n.Ep, this.handleCopy = this.handleCopy.bind(this)
    }
    componentWillUnmount() {
        this._timeout.stop()
    }
    render() {
        let {
            text: t
        } = this.props, {
            mode: e
        } = this.state, o = e === _.e2O.Modes.SUCCESS ? r.intl.string(r.t.t5VZ88) : t;
        return (0, s.jsx)(_.e2O, {
            ...this.props,
            onCopy: this.handleCopy,
            mode: e,
            text: o,
            supportsCopy: d.p5
        })
    }
    handleCopy(t) {
        let {
            onCopy: e,
            delay: o = 1e3
        } = this.props;
        (0, d.C)(t, () => this.setState({
            mode: _.e2O.Modes.SUCCESS
        }), () => this.setState({
            mode: _.e2O.Modes.ERROR
        })), this._timeout.start(o, () => this.setState({
            mode: _.e2O.Modes.DEFAULT
        })), e?.(t)
    }
    getVerticalButtonColor(t) {
        switch (t) {
            case _.e2O.Modes.SUCCESS:
                return a.$n.Colors.GREEN;
            case _.e2O.Modes.ERROR:
                return a.$n.Colors.RED;
            default:
                return a.$n.Colors.BRAND
        }
    }
}
let l = p