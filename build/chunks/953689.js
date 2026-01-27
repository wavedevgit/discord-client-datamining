/** Chunk was on web.js **/
/** chunk id: 953689, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(284009),
    l = n.n(s),
    c = n(311907),
    u = n(397927),
    d = n(293066),
    f = n(975571),
    p = n(927578),
    _ = n(652215),
    h = n(985018),
    m = n(252101);

function g(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            g(e, t, n[t])
        })
    }
    return e
}
class y extends i.Component {
    componentDidMount() {
        this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state))
    }
    componentDidUpdate(e, t) {
        let n = this.hasAcceptedNeccessaryTerms(e, t),
            r = this.hasAcceptedNeccessaryTerms(this.props, this.state);
        r !== n && this.props.onChange(r)
    }
    hasAcceptedNeccessaryTerms(e, t) {
        return (null == e.eulaId || t.hasAcceptedEULA) && (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver)
    }
    render() {
        let {
            eulaId: e,
            applicationName: t,
            hasPreviouslyAcceptedEULA: i,
            forceShow: a,
            disabled: s,
            className: c,
            finePrint: d,
            showPricingLink: g,
            showWithdrawalWaiver: y,
            isTrial: b,
            inReverseTrial: O,
            isDiscount: v,
            subscriptionPlan: A,
            finePrintClassname: I
        } = this.props, {
            hasAcceptedEULA: S,
            hasAcceptedWithdrawalWaiver: T
        } = this.state;
        return (l()(!b || null != A, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"), a || null != e && !i || y) ? (0, r.jsxs)("div", {
            className: c,
            children: [y && (0, r.jsx)(u.Heading, {
                variant: "heading-md/semibold",
                className: m.Hc,
                children: h.intl.string(h.t.Ogvn5o)
            }), null != e && (a || !i) ? (0, r.jsx)(u.Checkbox, {
                checked: S,
                onChange: e => this.setState({
                    hasAcceptedEULA: e
                }),
                disabled: s,
                label: h.intl.format(h.t.IodJKT, {
                    applicationName: t,
                    onClick: t => {
                        (0, u.mMO)(async () => {
                            let {
                                default: t
                            } = await n.e("35641").then(n.bind(n, 698336));
                            return n => (0, r.jsx)(t, E({
                                eulaId: e
                            }, n))
                        }), t.preventDefault()
                    }
                })
            }) : null, null == d ? null : (0, r.jsx)("div", {
                className: o()(m.aO, I),
                children: d
            }), y ? (0, r.jsxs)("div", {
                className: c,
                children: [(0, r.jsx)(u.Checkbox, {
                    checked: T,
                    onChange: e => this.setState({
                        hasAcceptedWithdrawalWaiver: e
                    }),
                    disabled: s,
                    label: h.intl.string(h.t["DFCVN+"])
                }), (0, r.jsx)("div", {
                    className: m.aO,
                    children: h.intl.string(h.t.jhu6zm)
                })]
            }) : null, g && (0, r.jsxs)("div", {
                className: m.aO,
                children: ["*", h.intl.format(h.t["5zmY3F"], {
                    documentationLink: f.A.getArticleURL(_.MVz.LOCALIZED_PRICING)
                })]
            }), b && null != A && (0, r.jsx)(u.Text, {
                variant: "text-xs/medium",
                color: "interactive-text-default",
                children: h.intl.format(h.t["Hvo/Z5"], {
                    buttonText: (0, p.ff)(null, A),
                    interval: p.Ay.formatInterval(null == A ? void 0 : A.interval),
                    cancelSubscriptionArticle: f.A.getArticleURL(_.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                    paidServiceTermsArticle: f.A.getArticleURL(_.MVz.PAID_TERMS)
                })
            }), O && null != A && (0, r.jsx)(u.Text, {
                variant: "text-xs/medium",
                color: "interactive-text-default",
                children: h.intl.format(h.t.Oo2FeS, {
                    buttonText: (0, p.ff)(null, A),
                    interval: p.Ay.formatInterval(null == A ? void 0 : A.interval),
                    cancelSubscriptionArticle: f.A.getArticleURL(_.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                    paidServiceTermsArticle: f.A.getArticleURL(_.MVz.PAID_TERMS)
                })
            }), v && null != A && (0, r.jsx)(u.Text, {
                variant: "text-xs/medium",
                color: "interactive-text-default",
                children: h.intl.format(h.t["Z2c+aV"], {
                    buttonText: (0, p.ff)(null, A),
                    interval: p.Ay.formatInterval(null == A ? void 0 : A.interval),
                    cancelSubscriptionArticle: f.A.getArticleURL(_.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                    paidServiceTermsArticle: f.A.getArticleURL(_.MVz.PAID_TERMS)
                })
            })]
        }) : null
    }
    constructor(...e) {
        super(...e), g(this, "state", {
            hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
            hasAcceptedWithdrawalWaiver: !1
        })
    }
}
let b = c.Ay.connectStores([d.A], e => {
    let {
        eulaId: t
    } = e;
    return {
        hasPreviouslyAcceptedEULA: null != t && d.A.hasAcceptedEULA(t)
    }
})(y)