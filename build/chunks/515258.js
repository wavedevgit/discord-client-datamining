/** chunk id: 515258 params = (module,exports,require) **/
n.d(t, {
    default: () => R
});
var s = n(627968),
    a = n(64700),
    l = n(110259),
    i = n(158954),
    o = n(397927),
    r = n(13008),
    E = n(457570),
    d = n(985018),
    u = n(762995);
class c extends a.PureComponent {
    constructor(e) {
        super(e), this.state = {
            phone: ""
        }
    }
    handlePhoneChange = e => {
        this.setState({
            phone: e
        })
    };
    render() {
        let e, t, n, a, {
                error: c,
                working: R,
                transitionState: h,
                validPhone: I,
                layerContext: p
            } = this.props,
            {
                phone: _
            } = this.state,
            f = [];
        return I ? e = d.intl.string(d.t["4qMI6A"]) : (e = d.intl.string(d.t.Vp9je2), t = (0, s.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: d.intl.format(d.t["3BTmqX"], {})
        })), I ? (n = (0, s.jsx)(o.D0$, {
            label: d.intl.string(d.t.Xclkxp),
            hideLabel: !0,
            errorMessage: c ?? void 0,
            children: (0, s.jsx)(r.A, {
                onSubmit: this.handleVerifyPhone
            })
        }), f = [{
            variant: "secondary",
            text: d.intl.string(d.t["5b60gi"]),
            onClick: this.handleResendCode,
            loading: R
        }]) : (n = (0, s.jsx)(E.A, {
            label: d.intl.string(d.t["64bX0M"]),
            errorMessage: c ?? void 0,
            className: u.ZZ,
            onChange: this.handlePhoneChange,
            submitting: R,
            layerContext: p
        }), f = [{
            text: d.intl.string(d.t.TXNS7S),
            disabled: "" === _,
            loading: R,
            onClick: this.handleAddPhone
        }]), a = I ? d.intl.string(d.t.xDBSN9) : d.intl.string(d.t.hY8QTR), (0, s.jsx)(i.Modal, {
            size: I ? "sm" : "md",
            title: a,
            subtitle: e,
            actions: f,
            onClose: this.props.onClose,
            trackingProps: {
                impression: {
                    impressionName: l.ImpressionNames.USER_VERIFY_PHONE
                }
            },
            transitionState: h,
            children: (0, s.jsxs)(o.BJc, {
                gap: 8,
                children: [n, t]
            })
        })
    }
    handleAddPhone = () => {
        let {
            phone: e
        } = this.state, {
            onAddPhone: t
        } = this.props;
        t?.(e)
    };
    handleVerifyPhone = e => {
        let {
            onVerifyPhone: t
        } = this.props;
        t?.(e)
    };
    handleResendCode = () => {
        let {
            onAddPhone: e
        } = this.props;
        e?.(this.state.phone)
    }
}
let R = c