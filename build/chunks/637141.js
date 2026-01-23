/** Chunk was on web.js **/
/** chunk id: 637141, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => C
}), n(65821), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(827734),
    l = n(843282),
    c = n(732955),
    u = n(397927),
    d = n(887555),
    f = n(812745),
    p = n(202613),
    _ = n(975571),
    h = n(652215),
    m = n(818348),
    g = n(985018),
    E = n(101541);
let y = "***@***.***",
    b = "****",
    O = "***",
    v = "new_payment_source_id",
    A = new p.YS({
        id: v,
        brand: f.Ay.Types.UNKNOWN,
        type: h.hes.CARD
    });

function I(e, t) {
    if (e instanceof p.YS) return e.id === v ? {
        brand: null,
        label: g.intl.string(g.t.eQ2bLp)
    } : {
        brand: t ? f.Ay.Types.UNKNOWN : e.brand,
        label: g.intl.formatToPlainString(g.t.QvBAQk, {
            last4: t ? b : e.last4
        })
    };
    if (e instanceof p.SJ) return {
        brand: f.Ay.Types.PAYPAL,
        label: t ? y : e.email
    };
    if (e instanceof p.A0) return {
        brand: f.Ay.Types.SOFORT,
        label: t ? y : e.email
    };
    if (e instanceof p.Qh) return {
        brand: f.Ay.Types.GIROPAY,
        label: g.intl.string(g.t["y+0MQZ"])
    };
    if (e instanceof p.Tu) return {
        brand: f.Ay.Types.PRZELEWY24,
        label: t ? y : e.email
    };
    else if (e instanceof p.Ux) return {
        brand: f.Ay.Types.PAYSAFECARD,
        label: g.intl.string(g.t.e3APTT)
    };
    else if (e instanceof p.F_) return {
        brand: f.Ay.Types.GCASH,
        label: g.intl.string(g.t.PjehcF)
    };
    else if (e instanceof p.Xj) return {
        brand: f.Ay.Types.GRABPAY,
        label: g.intl.string(g.t.T5davE)
    };
    else if (e instanceof p.am) return {
        brand: f.Ay.Types.MOMO_WALLET,
        label: g.intl.string(g.t.J0A1Vk)
    };
    else if (e instanceof p._1) return {
        brand: f.Ay.Types.VENMO,
        label: t ? O : "@" + e.username
    };
    else if (e instanceof p.i6) return {
        brand: f.Ay.Types.KAKAOPAY,
        label: g.intl.string(g.t.CSVexi)
    };
    else if (e instanceof p.cg) return {
        brand: f.Ay.Types.GOPAY_WALLET,
        label: g.intl.string(g.t["43J8JK"])
    };
    else if (e instanceof p.UG) return {
        brand: f.Ay.Types.BANCONTACT,
        label: g.intl.string(g.t["1ITkfq"])
    };
    else if (e instanceof p.rJ) return {
        brand: f.Ay.Types.EPS,
        label: g.intl.format(g.t.hSPoZw, {
            bank: (0, d.jK)(e.bank)
        })
    };
    else if (e instanceof p.EE) return {
        brand: f.Ay.Types.IDEAL,
        label: null == e.bank ? g.intl.string(g.t.nSbwqC) : g.intl.format(g.t["9kUlRU"], {
            bank: (0, d.o0)(e.bank)
        })
    };
    else if (e instanceof p.FQ) return {
        brand: f.Ay.Types.CASH_APP,
        label: t ? O : e.username
    };
    throw Error("Invalid Payment Source")
}

function S(e, t, n) {
    if (t.value === v) return (0, r.jsx)("div", {
        className: E.wC,
        children: t.label
    });
    if (null != e) {
        let {
            brand: t,
            label: i
        } = I(e, n);
        return (0, r.jsxs)("div", {
            className: E.IF,
            children: [null != t ? (0, r.jsx)(f.Ay, {
                type: f.Ay.getType(t)
            }) : null, (0, r.jsx)("div", {
                className: s()(E.wC, {
                    [E.z3]: e.invalid
                }),
                children: i
            })]
        })
    }
    return (0, r.jsx)("div", {
        className: E.wC,
        children: t.label
    })
}

function T(e, t) {
    let n = null;
    return e && null != t && !t.canRedeemTrial() ? n = g.intl.string(g.t.SvheW9) : e && null != t && t.hasFlag(m.rI.NEW) && (n = g.intl.format(g.t.d7ZLKA, {
        helpDeskArticle: _.A.getArticleURL(h.MVz.PAYMENT_AUTHORIZATION_CHARGE)
    })), n
}

function C(e) {
    let {
        label: t,
        selectedPaymentSourceId: n,
        paymentSources: a,
        prependOption: d,
        hidePersonalInformation: f,
        onChange: _,
        onPaymentSourceAdd: h,
        isTrial: m = !1,
        disabled: y = !1,
        className: b,
        optionClassName: O,
        dropdownLoading: C,
        paymentGatewayRestrictions: N
    } = e, w = 0 === a.length, R = e => {
        if (e === v) null != h && h();
        else {
            let t = a.find(t => t.id === e);
            null != _ && _(t)
        }
    }, P = [...null != d ? [d] : [], ...a, A].map((e, t) => {
        if (e instanceof p.Ay) {
            let {
                label: t
            } = I(e, f), n = e === A || null == N || (null == N ? void 0 : N.includes(e.paymentGateway));
            return {
                value: e.id,
                label: t,
                disabled: !n
            }
        }
        return {
            key: t,
            value: e.value,
            label: e.label
        }
    }), D = i.useMemo(() => new Map(a.map(e => [e.id, e])), [a]), x = T(m, i.useMemo(() => a.find(e => e.id === n), [a, n]));
    if (null == n && null != N && N.length > 0) {
        let e = a.filter(e => N.includes(e.paymentGateway));
        n = 0 === e.length ? v : e[0].id
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [w ? (0, r.jsx)(c.$nd, {
            variant: "primary",
            fullWidth: !0,
            onClick: h,
            text: g.intl.string(g.t.eQ2bLp)
        }) : (0, r.jsx)(l.Te, {
            options: P,
            value: n,
            label: t,
            onChange: R,
            isDisabled: y,
            className: s()({
                [E.uQ]: null != x
            }, b),
            optionClassName: O,
            placeholder: g.intl.string(g.t["8lqkf8"]),
            renderOptionValue: e => {
                let [t] = e;
                return C ? (0, r.jsx)(u.y$y, {
                    type: u.tVU.SPINNING_CIRCLE
                }) : S(null == t.value ? void 0 : D.get(t.value), t, f)
            },
            renderOptionLabel: e => S(null == e.value ? void 0 : D.get(e.value), e, f),
            "data-migration-pending": !0
        }), null != x ? (0, r.jsxs)("div", {
            className: E.ot,
            children: [(0, r.jsx)(u.EpV, {
                size: "custom",
                width: 20,
                height: 20,
                className: E.fT,
                color: o.A.unsafe_rawColors.YELLOW_300.css
            }), (0, r.jsx)(u.Text, {
                variant: "text-xs/normal",
                children: x
            })]
        }) : null]
    })
}