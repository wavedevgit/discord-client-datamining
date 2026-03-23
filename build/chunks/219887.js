/** chunk id: 219887 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(887555),
    r = n(235986),
    o = n(812745),
    d = n(202613),
    c = n(739508),
    u = n(240248),
    _ = n(985018),
    m = n(789863);
class g extends s.PureComponent {
    static defaultProps = {
        isForSubscription: !1,
        isDefault: !1,
        showSubtext: !1,
        showPaymentSourceIcon: !1,
        showLabels: !1
    };
    get typeString() {
        let {
            paymentSource: e
        } = this.props;
        if (e instanceof d.SJ) return o.Ay.Types.PAYPAL;
        if (e instanceof d.A0) return o.Ay.Types.SOFORT;
        if (e instanceof d.YS) return o.Ay.getType(e.brand);
        if (e instanceof d.Qh) return o.Ay.Types.GIROPAY;
        if (e instanceof d.Tu) return o.Ay.Types.PRZELEWY24;
        else if (e instanceof d.Ux) return o.Ay.Types.PAYSAFECARD;
        else if (e instanceof d.F_) return o.Ay.Types.GCASH;
        else if (e instanceof d.Xj) return o.Ay.Types.GRABPAY;
        else if (e instanceof d.am) return o.Ay.Types.MOMO_WALLET;
        else if (e instanceof d._1) return o.Ay.Types.VENMO;
        else if (e instanceof d.i6) return o.Ay.Types.KAKAOPAY;
        else if (e instanceof d.cg) return o.Ay.Types.GOPAY_WALLET;
        else if (e instanceof d.UG) return o.Ay.Types.BANCONTACT;
        else if (e instanceof d.rJ) return o.Ay.Types.EPS;
        else if (e instanceof d.EE) return o.Ay.Types.IDEAL;
        else if (e instanceof d.FQ) return o.Ay.Types.CASH_APP;
        else if (e instanceof d.Pw) return o.Ay.Types.APPLE;
        return o.Ay.Types.UNKNOWN
    }
    getLabel(e) {
        return e instanceof d.YS ? _.intl.format(_.t["o/dsrL"], {
            brand: (0, u.$G)(e.brand),
            last_4: e.last4
        }) : e instanceof d.SJ ? _.intl.string(_.t["2dgEq+"]) : e instanceof d.A0 ? _.intl.string(_.t["edKX/1"]) : e instanceof d.Qh ? _.intl.string(_.t["y+0MQZ"]) : e instanceof d.Tu ? _.intl.string(_.t.u25uL0) : e instanceof d.Ux ? _.intl.string(_.t.boznHN) : e instanceof d.F_ ? _.intl.string(_.t.PjehcF) : e instanceof d.Xj ? _.intl.string(_.t.T5davE) : e instanceof d.am ? _.intl.string(_.t.J0A1Vk) : e instanceof d._1 ? _.intl.string(_.t.jYOezc) : e instanceof d.i6 ? _.intl.string(_.t.CSVexi) : e instanceof d.cg ? _.intl.string(_.t["43J8JK"]) : e instanceof d.UG ? _.intl.string(_.t["1ITkfq"]) : e instanceof d.EE ? null == e.bank ? _.intl.string(_.t.nSbwqC) : _.intl.format(_.t["9kUlRU"], {
            bank: (0, a.o)(e.bank)
        }) : e instanceof d.rJ ? _.intl.format(_.t.hSPoZw, {
            bank: (0, a.j)(e.bank)
        }) : e instanceof d.FQ ? _.intl.string(_.t["+rbTmL"]) : e instanceof d.Pw ? _.intl.string(_.t.RFi12i) : e instanceof d.LQ ? _.intl.string(_.t["6EEgNt"]) : _.intl.string(_.t.jdPblk)
    }
    renderDescription() {
        let {
            paymentSource: e,
            descriptionClassName: t
        } = this.props;
        return (0, i.jsx)(l.Text, {
            className: t,
            variant: "text-md/semibold",
            children: this.getLabel(e)
        })
    }
    renderSubText() {
        let {
            paymentSource: e,
            locale: t
        } = this.props, n = null;
        return e instanceof d.YS ? n = _.intl.formatToPlainString(_.t["8rTTuf"], {
            month: (0, c.eS)(e.expiresMonth, t),
            year: e.expiresYear
        }) : e instanceof d.SJ || e instanceof d.A0 || e instanceof d.Tu ? n = e.email : e instanceof d._1 ? n = "@" + e.username : e instanceof d.FQ && (n = e.username), n
    }
    renderIcon() {
        let {
            paymentSource: e
        } = this.props;
        return e instanceof d.LQ ? (0, i.jsx)("div", {
            className: m.k7,
            children: (0, i.jsx)(l.pVd, {
                size: "xs",
                color: "currentColor"
            })
        }) : (0, i.jsx)(o.Ay, {
            type: this.typeString
        })
    }
    render() {
        let {
            isDefault: e,
            paymentSource: t,
            showSubtext: n,
            isForSubscription: s,
            showPaymentSourceIcon: a,
            showLabels: o
        } = this.props, d = this.renderSubText();
        return (0, i.jsxs)(r.A, {
            children: [a && this.renderIcon(), (0, i.jsxs)(r.A, {
                direction: r.A.Direction.VERTICAL,
                className: m.Wi,
                children: [(0, i.jsxs)(r.A, {
                    align: r.A.Align.CENTER,
                    children: [this.renderDescription(), o && e ? (0, i.jsx)("div", {
                        className: m.Zn,
                        children: _.intl.string(_.t.bBvAEH)
                    }) : null, s ? (0, i.jsx)("div", {
                        className: m.NV,
                        children: _.intl.string(_.t.YCrcPL)
                    }) : null, o && t.invalid ? (0, i.jsx)("div", {
                        className: m.tG,
                        children: _.intl.string(_.t["851k93"])
                    }) : null]
                }), n && null != d ? (0, i.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    className: m.Sv,
                    children: d
                }) : null]
            })]
        })
    }
}