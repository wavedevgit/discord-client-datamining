/** Chunk was on 84704 **/
/** chunk id: 515258, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => R
});
var l = n(627968),
    s = n(64700),
    a = n(110259),
    i = n(158954),
    o = n(397927),
    r = n(13008),
    u = n(457570),
    E = n(985018),
    c = n(603344);

function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class h extends s.PureComponent {
    render() {
        let e, t, n, s, {
                error: d,
                working: h,
                transitionState: R,
                validPhone: I,
                layerContext: p
            } = this.props,
            {
                phone: _
            } = this.state,
            f = [];
        return I ? e = E.intl.string(E.t["4qMI6A"]) : (e = E.intl.string(E.t.Vp9je2), t = (0, l.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: E.intl.format(E.t["3BTmqX"], {})
        })), I ? (n = (0, l.jsx)(o.D0$, {
            label: E.intl.string(E.t.Xclkxp),
            hideLabel: !0,
            errorMessage: null != d ? d : void 0,
            children: (0, l.jsx)(r.A, {
                onSubmit: this.handleVerifyPhone
            })
        }), f = [{
            variant: "secondary",
            text: E.intl.string(E.t["5b60gi"]),
            onClick: this.handleResendCode,
            loading: h
        }]) : (n = (0, l.jsx)(u.A, {
            label: E.intl.string(E.t["64bX0M"]),
            errorMessage: null != d ? d : void 0,
            className: c.ZZ,
            onChange: this.handlePhoneChange,
            submitting: h,
            layerContext: p
        }), f = [{
            text: E.intl.string(E.t.TXNS7S),
            disabled: "" === _,
            loading: h,
            onClick: this.handleAddPhone
        }]), s = I ? E.intl.string(E.t.Xclkxp) : E.intl.string(E.t.uR76s6), (0, l.jsx)(i.Modal, {
            size: I ? "sm" : "md",
            title: s,
            subtitle: e,
            actions: f,
            onClose: this.props.onClose,
            trackingProps: {
                impression: {
                    impressionName: a.ImpressionNames.USER_VERIFY_PHONE
                }
            },
            transitionState: R,
            children: (0, l.jsxs)(o.BJc, {
                gap: 8,
                children: [n, t]
            })
        })
    }
    constructor(e) {
        super(e), d(this, "handlePhoneChange", e => {
            this.setState({
                phone: e
            })
        }), d(this, "handleAddPhone", () => {
            let {
                phone: e
            } = this.state, {
                onAddPhone: t
            } = this.props;
            null == t || t(e)
        }), d(this, "handleVerifyPhone", e => {
            let {
                onVerifyPhone: t
            } = this.props;
            null == t || t(e)
        }), d(this, "handleResendCode", () => {
            let {
                onAddPhone: e
            } = this.props;
            null == e || e(this.state.phone)
        }), this.state = {
            phone: ""
        }
    }
}
let R = h