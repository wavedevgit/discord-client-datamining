/** Chunk was on 5606 **/
/** chunk id: 971105, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => G
}), n(896048);
var r, i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    c = n.n(o),
    d = n(837381),
    u = n(311907),
    p = n(397927),
    _ = n(73153),
    m = n(384904),
    g = n(661439),
    f = n(73825),
    b = n(928039),
    h = n(235986),
    A = n(39190),
    E = n(933392),
    x = n(97352),
    O = n(166403),
    C = n(927578),
    y = n(61509),
    j = n(652215),
    T = n(788868),
    v = n(818348),
    S = n(985018),
    I = n(166789),
    N = n(124953);

function P(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            P(e, t, n[t])
        })
    }
    return e
}

function D(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function w(e) {
    let {
        payments: t,
        locale: n,
        compactMode: r,
        numPages: s
    } = e, o = l.useRef(null), [c, u] = l.useState(0), [_, g] = l.useState(null), f = t.slice(10 * c, (c + 1) * 10);
    l.useEffect(() => {
        var e;
        null == (e = o.current) || e.scrollTo({
            to: 0
        })
    }, [c]);
    let h = l.useCallback(e => {
            u(e);
            let n = t[t.length - 1].id;
            e >= s - 2 && _ !== n && ((0, m.CK)(10, n), g(n))
        }, [t, s, _]),
        E = (0, b.A)("billing-history", o);
    return (0, i.jsx)(d.hD, {
        navigator: E,
        children: (0, i.jsx)(d.PR, {
            children: e => {
                let {
                    ref: t
                } = e, l = function(e, t) {
                    if (null == e) return {};
                    var n, r, i, l = {};
                    if ("u" > typeof Reflect && Reflect.ownKeys) {
                        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                        return l
                    }
                    if (l = function(e, t) {
                            if (null == e) return {};
                            var n, r, i = {},
                                l = Object.getOwnPropertyNames(e);
                            for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                            return i
                        }(e, t), Object.getOwnPropertySymbols)
                        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l
                }(e, ["ref"]);
                return (0, i.jsx)(A.A, D(R({
                    className: I.GD,
                    currentPageIndex: c,
                    onChangePage: h,
                    numPages: s,
                    showPageCount: !1,
                    ref: t
                }, l), {
                    children: (0, i.jsx)(p.T7Y, {
                        className: I.Bd,
                        ref: o,
                        overflow: "auto",
                        children: f.map((e, t) => (0, i.jsx)(y.A, {
                            className: a()(I.Nj, I.Bd),
                            payment: e,
                            locale: n,
                            compactMode: r
                        }, t))
                    })
                }))
            }
        })
    })
}
class L extends(r = l.PureComponent) {
    get numPages() {
        return Math.max(Math.ceil(this.props.payments.length / 10), 1)
    }
    componentDidMount() {
        _.h.wait(() => {
            (0, g.X)(), (0, m.CK)(30)
        })
    }
    renderPremiumExternalSubscription(e) {
        return c()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"), (0, i.jsxs)(p.ZpM, {
            className: I.K1,
            children: [(0, i.jsx)("div", {
                className: I.BF,
                children: S.intl.format(S.t["6mIX6s"], {
                    paymentGatewayName: v.qm[e.paymentGateway]
                })
            }), (0, i.jsx)("div", {
                className: I.Q2,
                children: S.intl.format(S.t.eG0uZB, {
                    paymentGatewayName: v.qm[e.paymentGateway],
                    billingHistoryLink: (0, C.tW)(e.paymentGateway, "BILLING_HISTORY")
                })
            })]
        })
    }
    render() {
        let {
            compactMode: e,
            payments: t,
            subscription: n,
            locale: r
        } = this.props, l = null != n && n.isPurchasedExternally;
        return 0 !== t.length || l ? (0, i.jsxs)("div", {
            className: I.GD,
            children: [null != n && l ? this.renderPremiumExternalSubscription(n) : null, t.length > 0 ? (0, i.jsxs)("div", {
                className: a()(I.PQ, I.GD),
                children: [e ? null : (0, i.jsx)("div", {
                    className: a()(I.Nj, I.Bd),
                    children: (0, i.jsxs)(h.A, {
                        className: I.Yi,
                        children: [(0, i.jsx)("div", {
                            className: N.p6,
                            children: S.intl.string(S.t["5t11BV"])
                        }), (0, i.jsx)("div", {
                            className: I.Ir,
                            children: S.intl.string(S.t.yAAPb2)
                        }), (0, i.jsx)("div", {
                            className: N.vj,
                            children: S.intl.string(S.t["6MqHXV"])
                        })]
                    })
                }), (0, i.jsx)(w, {
                    compactMode: e,
                    locale: r,
                    payments: t,
                    numPages: this.numPages
                })]
            }) : null]
        }) : null
    }
    constructor(...e) {
        super(...e), P(this, "scrollerRef", l.createRef())
    }
}

function M(e) {
    var t;
    let n = e.skuId,
        r = null == (t = e.subscription) ? void 0 : t.items[0].planId;
    return !(null == n || null == r || Object.values(T.pe).includes(n) || (0, C.ys)(r))
}

function G(e) {
    let t = (0, u.bG)([E.A], () => E.A.getPayments()),
        n = (0, u.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        r = l.useMemo(() => new Set(t.filter(M).map(e => {
            let {
                subscription: t
            } = e;
            return null == t ? void 0 : t.items[0].planId
        })), [t]),
        s = l.useMemo(() => new Set(t.filter(M).map(e => {
            let {
                skuId: t
            } = e;
            return t
        })), [t]),
        a = (0, u.yK)([x.A], () => x.A.getPlanIdsForSkus(Array.from(s))),
        o = l.useCallback(() => a.length === r.size, [a, r]),
        c = l.useMemo(() => t.filter(e => e.currency !== j.Yri.DISCORD_ORB), [t]);
    return l.useEffect(() => {
        o() || _.h.wait(() => {
            s.forEach(e => (0, f.ur)(e, void 0, void 0, !0, void 0))
        })
    }, [o, s]), (0, i.jsx)(L, D(R({}, e), {
        payments: c,
        subscription: n
    }))
}
P(L, "defaultProps", {
    compactMode: !1
})