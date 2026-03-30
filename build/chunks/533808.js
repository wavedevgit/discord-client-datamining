/** chunk id: 533808 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(607399),
    o = n(311907),
    d = n(435371),
    c = n(732955),
    u = n(397927),
    m = n(73153),
    _ = n(384904),
    g = n(256006),
    A = n(202613),
    x = n(615405),
    h = n(403362),
    p = n(450233),
    T = n(849918),
    f = n(219887),
    S = n(985018),
    E = n(265885);
let b = "isDefault";
class C extends s.PureComponent {
    static defaultProps = {
        onDelete: () => {},
        onSubmit: () => {},
        onCancel: () => {}
    };
    constructor(e) {
        super(e);
        const {
            paymentSource: t,
            isDefault: n
        } = e, i = t.billingAddress;
        this.state = {
            billingAddress: {
                name: i.name ?? "",
                line1: i.line1 ?? "",
                line2: i.line2 ?? "",
                country: i.country ?? "",
                state: i.state ?? "",
                city: i.city ?? "",
                postalCode: i.postalCode ?? ""
            },
            expiresMonth: t instanceof A.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof A.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {}
        }
    }
    componentWillUnmount() {
        m.h.wait(() => {
            (0, _.ey)(), (0, _.tc)()
        })
    }
    handleSubmit = e => {
        if (e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(h.Vq).length) this.props.onCancel();
        else {
            let {
                billingAddress: e,
                isDefault: t,
                expiresMonth: n,
                expiresYear: i
            } = this.state;
            this.props.onSubmit(this.props.paymentSource.id, {
                billingAddress: e,
                expiresMonth: n,
                expiresYear: i,
                isDefault: t
            })
        }
    };
    handleCancel = () => {
        this.props.onCancel()
    };
    handleDelete = () => {
        let {
            onDelete: e,
            paymentSource: t
        } = this.props;
        e(t.id)
    };
    handleAddressUpdate = (e, t, n) => {
        this.setState({
            billingAddress: e,
            billingAddressValid: t,
            dirtyFields: {
                ...this.state.dirtyFields,
                billingAddress: n
            }
        })
    };
    handleExpirationDateUpdate = (e, t) => {
        let {
            expirationDate: n
        } = e;
        if (this.setState({
                expirationValid: t
            }), null == n || "" === n) return;
        let [i, s] = n.split("/");
        this.handleFieldChange(Number(i), "expiresMonth"), this.handleFieldChange(Number(`${new Date().getFullYear().toString().slice(0,2)}${s}`), "expiresYear")
    };
    handleFieldChange = (e, t) => {
        null != t && this.setState({
            [t]: e,
            dirtyFields: {
                ...this.state.dirtyFields,
                [t]: !0
            }
        })
    };
    renderError() {
        let {
            updateError: e,
            removeError: t
        } = this.props;
        return null == e || e.hasCardError() || e.hasAddressError() ? null != t ? (0, i.jsx)("div", {
            className: E.zc,
            children: (0, i.jsx)(u.wx6, {
                type: "critical",
                children: t.message
            })
        }) : null : (0, i.jsx)("div", {
            className: E.zc,
            children: (0, i.jsx)(u.wx6, {
                type: "critical",
                children: e.message
            })
        })
    }
    renderBillingAddressSection() {
        let {
            billingAddress: e
        } = this.state, {
            updateError: t,
            paymentSource: n
        } = this.props, s = (0, g.g)(n);
        return (0, i.jsxs)("div", {
            className: E.yV,
            children: [(0, i.jsx)(u.Text, {
                className: E.bV,
                variant: "text-sm/normal",
                children: S.intl.string(S.t["50Auo2"])
            }), (0, i.jsx)(p.Ay, {
                ...e,
                mode: p.Ay.Modes.EDIT,
                layout: s,
                onBillingAddressChange: this.handleAddressUpdate,
                error: t
            })]
        })
    }
    renderCardExpirationSection() {
        let {
            expiresMonth: e,
            expiresYear: t
        } = this.state;
        if (null == e || null == t) return null;
        let n = `${e.toString().padStart(2,"0")}/${t.toString().padStart(2,"0").slice(-2)}`;
        return (0, i.jsxs)("div", {
            className: E.yV,
            children: [(0, i.jsx)(u.Text, {
                className: E.bV,
                variant: "text-sm/normal",
                children: S.intl.string(S.t.Fo2YP7)
            }), (0, i.jsx)(T.A, {
                expirationDate: n,
                onCardInfoChange: this.handleExpirationDateUpdate,
                error: this.props.updateError
            })]
        })
    }
    renderActions() {
        let {
            submitting: e,
            removing: t,
            isForSubscription: n
        } = this.props, {
            billingAddressValid: s,
            expirationValid: l
        } = this.state;
        return (0, i.jsx)("div", {
            className: E.AU,
            children: (0, i.jsxs)(u.BJc, {
                direction: "horizontal",
                justify: "space-between",
                children: [(0, i.jsx)(c.e2v, {
                    children: (0, i.jsxs)("div", {
                        className: E.lH,
                        children: [n ? (0, i.jsx)(d.m_, {
                            text: S.intl.string(S.t["v6/z28"]),
                            children: (0, i.jsx)("div", {
                                "aria-hidden": !0,
                                className: E.dm
                            })
                        }) : null, (0, i.jsx)(c.$nd, {
                            type: "button",
                            disabled: n || e,
                            loading: t,
                            onClick: this.handleDelete,
                            variant: "critical-secondary",
                            size: r.Fr ? "sm" : "md",
                            text: r.Fr ? S.intl.string(S.t.oyYWHE) : S.intl.string(S.t.yk5qfb)
                        })]
                    })
                }), (0, i.jsxs)(c.e2v, {
                    children: [(0, i.jsx)(c.$nd, {
                        type: "button",
                        disabled: e || t,
                        onClick: this.handleCancel,
                        variant: "secondary",
                        size: r.Fr ? "sm" : "md",
                        text: S.intl.string(S.t["ETE/oC"])
                    }), (0, i.jsx)(c.$nd, {
                        loading: e,
                        disabled: !s || t || !l,
                        type: "submit",
                        variant: "active",
                        size: r.Fr ? "sm" : "md",
                        text: S.intl.string(S.t["R3BPH+"])
                    })]
                })]
            })
        })
    }
    render() {
        let {
            paymentSource: e,
            isDefault: t,
            locale: n,
            className: s,
            isForSubscription: l
        } = this.props, {
            isDefault: r
        } = this.state, o = e instanceof A.SJ;
        return (0, i.jsx)(u.ZpM, {
            editable: !0,
            className: a()(E.Nr, s),
            children: (0, i.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [this.renderError(), (0, i.jsxs)("div", {
                    className: E.__invalid_paymentSection,
                    children: [(0, i.jsx)(f.A, {
                        paymentSource: e,
                        isDefault: t,
                        isForSubscription: l,
                        locale: n,
                        showLabels: !0,
                        showPaymentSourceIcon: !0
                    }), e.invalid ? (0, i.jsx)("div", {
                        className: E.Um,
                        children: S.intl.string(S.t["3R0U0b"])
                    }) : null, (0, i.jsx)("div", {
                        className: E.Sv,
                        children: o ? S.intl.format(S.t.w9WkBl, {
                            paypalURL: "https://www.paypal.com"
                        }) : S.intl.string(S.t.VXndyr)
                    })]
                }), this.renderCardExpirationSection(), this.renderBillingAddressSection(), (0, i.jsx)("div", {
                    className: E.D5,
                    children: (0, i.jsx)(u.Checkbox, {
                        value: b,
                        checked: r,
                        onChange: e => this.handleFieldChange(e, b),
                        label: S.intl.string(S.t.nag9Og),
                        labelType: "secondary"
                    })
                }), (0, i.jsx)(u.cGx, {}), this.renderActions()]
            })
        })
    }
}
let v = o.Ay.connectStores([x.A], () => ({
    updateError: x.A.editSourceError,
    removeError: x.A.removeSourceError
}))(C)