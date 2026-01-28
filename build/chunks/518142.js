/** Chunk was on 5606 **/
/** chunk id: 518142, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(189213),
    s = n(397927),
    a = n(98207),
    o = n(985018),
    c = n(876692);

function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class u extends i.PureComponent {
    render() {
        let {
            transitionState: e
        } = this.props, {
            code: t,
            errorMessage: n,
            retrySuccess: i
        } = this.state, a = i ? (0, r.jsx)(s.ZpM, {
            type: s.ZpM.Types.SUCCESS,
            className: c.Nr,
            children: (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                children: o.intl.string(o.t.j4qu8n)
            })
        }) : null;
        return (0, r.jsx)(l.Modal, {
            title: o.intl.string(o.t["mGppp/"]),
            actions: [{
                text: o.intl.string(o.t["ETE/oC"]),
                onClick: this.props.onClose,
                variant: "secondary",
                disabled: this.state.isLoading
            }, {
                text: o.intl.string(o.t.piW6YS),
                type: "submit",
                disabled: this.state.isLoading || 0 === t.length,
                onClick: this.handleSubmit
            }],
            onClose: this.props.onClose,
            transitionState: e,
            children: (0, r.jsxs)(s.BJc, {
                direction: "vertical",
                gap: 8,
                children: [(0, r.jsx)(s.Text, {
                    color: "text-default",
                    variant: "text-md/normal",
                    className: c.YK,
                    children: o.intl.string(o.t["37S9yU"])
                }), a, (0, r.jsx)(s.ksK, {
                    inputRef: this.setRef,
                    label: o.intl.string(o.t.TjGb4Q),
                    onChange: this.handleCodeChange,
                    maxLength: 8,
                    value: t,
                    autoComplete: "one-time-code",
                    autoFocus: !0,
                    error: n
                }), (0, r.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    children: (0, r.jsx)(s.DUT, {
                        onClick: this.handleRetry,
                        children: (0, r.jsx)(s.MzZ, {
                            children: o.intl.string(o.t.PZgmxv)
                        })
                    })
                })]
            })
        })
    }
    constructor(...e) {
        super(...e), d(this, "_input", void 0), d(this, "state", {
            code: "",
            errorMessage: "",
            retrySuccess: !1,
            isLoading: !1
        }), d(this, "setRef", e => {
            this._input = e
        }), d(this, "handleRetry", async () => {
            await a.A.sendMFABackupCodesVerificationKeyEmail(this.props.password), this.setState({
                retrySuccess: !0
            })
        }), d(this, "handleSubmit", async e => {
            e.preventDefault(), this.setState({
                isLoading: !0
            });
            try {
                await a.A.confirmViewBackupCodes(this.state.code, !1), this.props.onClose()
            } catch (e) {
                if (null == e.body) return;
                e.body.message && this.setState({
                    errorMessage: e.body.message
                })
            } finally {
                this.setState({
                    isLoading: !1
                })
            }
        }), d(this, "handleCodeChange", e => {
            this.setState({
                code: e
            })
        })
    }
}