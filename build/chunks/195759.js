/** chunk id: 195759, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => p
}), r(896048);
var n = r(627968),
    i = r(64700),
    a = r(397927),
    l = r(885377),
    c = r(985018);

function o(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}
class s extends i.Component {
    render() {
        let {
            transitionState: e
        } = this.props;
        return (0, n.jsx)(l.A, {
            transitionState: e,
            onClose: async () => await this.cancel(),
            "aria-label": c.intl.string(c.t.Nn0Px8),
            title: c.intl.string(c.t.Nn0Px8),
            premiumModalType: l.A.Types.UNCLAIMED,
            primary: {
                onClick: this.claimAccount,
                label: c.intl.string(c.t.fiNVin)
            },
            secondary: {
                onClick: this.cancel,
                label: c.intl.string(c.t.oEAioF)
            },
            children: c.intl.string(c.t["7btfmI"])
        })
    }
    constructor(...e) {
        super(...e), o(this, "cancel", () => {
            let {
                onClose: e
            } = this.props;
            null == e || e()
        }), o(this, "claimAccount", () => {
            let {
                onClose: e
            } = this.props;
            null == e || e(), (0, a.mMO)(async () => {
                let {
                    default: e
                } = await r.e("27672").then(r.bind(r, 888363));
                return t => (0, n.jsx)(e, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))), n.forEach(function(t) {
                            o(e, t, r[t])
                        })
                    }
                    return e
                }({}, t))
            })
        })
    }
}
let p = s