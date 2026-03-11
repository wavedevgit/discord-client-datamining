/** chunk id: 326911 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(869038),
    o = n(459357),
    d = n(99696),
    c = n(499454),
    u = n(351906),
    _ = n(954571),
    g = n(45938),
    A = n(652215),
    m = n(985018);
class h extends s.Component {
    state = {
        codeInput: "",
        submitting: !1,
        hasError: !1,
        isPromoCode: !1
    };
    get analyticsLocation() {
        let {
            analyticsContext: {
                location: e
            }
        } = this.props;
        return {
            ...e,
            object: A.ZSU.BUTTON_CTA
        }
    }
    handleChange = e => {
        this.setState({
            codeInput: e,
            hasError: !1
        })
    };
    handleSubmit = async e => {
        e.preventDefault();
        let {
            codeInput: t
        } = this.state;
        if ("" === t) return;
        let n = t.trim();
        this.setState({
            submitting: !0
        });
        try {
            if (this.props.acceptGiftCardRedemption) try {
                await (0, d.Qp)(n), (0, d.HF)({
                    initialCode: n,
                    withRedemptionSuccessModal: !0
                }), this.setState({
                    codeInput: ""
                });
                return
            } catch {}
            let e = (0, g.Vd)(t);
            if (null == e) return void this.setState({
                hasError: !0
            });
            let i = await r.A.resolveGiftCode(e);
            if (null != i && null != i.giftCode.promotion) throw this.setState({
                isPromoCode: !0
            }), Error("Cannnot redeem promotion code as gift");
            _.default.track(A.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    object: A.ZSU.BUTTON_CTA
                }
            }), (0, c.h)({
                processedCode: e
            }), this.setState({
                codeInput: ""
            })
        } catch (e) {
            this.setState({
                hasError: !0
            })
        } finally {
            this.setState({
                submitting: !1
            })
        }
    };
    render() {
        let {
            obscureInput: e
        } = this.props, {
            codeInput: t,
            submitting: n,
            hasError: s,
            isPromoCode: l
        } = this.state;
        return (0, i.jsx)(a.nVY, {
            label: m.intl.string(m.t["il+VCo"]),
            children: (0, i.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, i.jsxs)(a.M_l, {
                    children: [(0, i.jsx)(a.ksK, {
                        label: m.intl.string(m.t.SeKIoS),
                        type: e ? "password" : "text",
                        value: t,
                        onChange: this.handleChange,
                        placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                        error: !l && s ? m.intl.string(m.t.Y11a2u) : null,
                        helperText: l ? m.intl.format(m.t.gPt3PE, {
                            promoLink: () => {
                                window.open(`https://discord.com/billing/promotions/${t}`)
                            }
                        }) : null,
                        fullWidth: !0
                    }), (0, i.jsx)(a.Button, {
                        variant: "primary",
                        text: m.intl.string(m.t.KIpp7M),
                        type: "submit",
                        loading: n
                    })]
                })
            })
        })
    }
}

function p() {
    let {
        enabled: e
    } = (0, o.c)({
        location: "UserSettingsBilling"
    }), t = s.useContext(_.AnalyticsContext), n = (0, l.bG)([u.A], () => u.A.enabled);
    return (0, i.jsx)(h, {
        analyticsContext: t,
        obscureInput: n,
        acceptGiftCardRedemption: e
    })
}