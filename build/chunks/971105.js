/** Chunk was on 2827 **/
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
    _ = n(397927),
    p = n(73153),
    m = n(384904),
    g = n(661439),
    A = n(73825),
    f = n(928039),
    b = n(235986),
    h = n(39190),
    E = n(933392),
    O = n(97352),
    C = n(166403),
    x = n(927578),
    S = n(61509),
    T = n(652215),
    I = n(788868),
    y = n(818348),
    N = n(985018),
    j = n(166789),
    v = n(124953);

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

function L(e) {
    let {
        payments: t,
        locale: n,
        compactMode: r,
        numPages: s
    } = e, o = l.useRef(null), [c, u] = l.useState(0), [p, g] = l.useState(null), A = t.slice(10 * c, (c + 1) * 10);
    l.useEffect(() => {
        var e;
        null == (e = o.current) || e.scrollTo({
            to: 0
        })
    }, [c]);
    let b = l.useCallback(e => {
            u(e);
            let n = t[t.length - 1].id;
            e >= s - 2 && p !== n && ((0, m.CK)(10, n), g(n))
        }, [t, s, p]),
        E = (0, f.A)("billing-history", o);
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
                return (0, i.jsx)(h.A, D(R({
                    className: j.GD,
                    currentPageIndex: c,
                    onChangePage: b,
                    numPages: s,
                    showPageCount: !1,
                    ref: t
                }, l), {
                    children: (0, i.jsx)(_.T7Y, {
                        className: j.Bd,
                        ref: o,
                        overflow: "auto",
                        children: A.map((e, t) => (0, i.jsx)(S.A, {
                            className: a()(j.Nj, j.Bd),
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
class w extends(r = l.PureComponent) {
    get numPages() {
        return Math.max(Math.ceil(this.props.payments.length / 10), 1)
    }
    componentDidMount() {
        p.h.wait(() => {
            (0, g.X)(), (0, m.CK)(30)
        })
    }
    renderPremiumExternalSubscription(e) {
        return c()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"), (0, i.jsxs)(_.ZpM, {
            className: j.K1,
            children: [(0, i.jsx)("div", {
                className: j.BF,
                children: N.intl.format(N.t["6mIX6s"], {
                    paymentGatewayName: y.qm[e.paymentGateway]
                })
            }), (0, i.jsx)("div", {
                className: j.Q2,
                children: N.intl.format(N.t.eG0uZB, {
                    paymentGatewayName: y.qm[e.paymentGateway],
                    billingHistoryLink: (0, x.tW)(e.paymentGateway, "BILLING_HISTORY")
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
            className: j.GD,
            children: [null != n && l ? this.renderPremiumExternalSubscription(n) : null, t.length > 0 ? (0, i.jsxs)("div", {
                className: a()(j.PQ, j.GD),
                children: [e ? null : (0, i.jsx)("div", {
                    className: a()(j.Nj, j.Bd),
                    children: (0, i.jsxs)(b.A, {
                        className: j.Yi,
                        children: [(0, i.jsx)("div", {
                            className: v.p6,
                            children: N.intl.string(N.t["5t11BV"])
                        }), (0, i.jsx)("div", {
                            className: j.Ir,
                            children: N.intl.string(N.t.yAAPb2)
                        }), (0, i.jsx)("div", {
                            className: v.vj,
                            children: N.intl.string(N.t["6MqHXV"])
                        })]
                    })
                }), (0, i.jsx)(L, {
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
    return !(null == n || null == r || Object.values(I.pe).includes(n) || (0, x.ys)(r))
}

function G(e) {
    let t = (0, u.bG)([E.A], () => E.A.getPayments()),
        n = (0, u.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
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
        a = (0, u.yK)([O.A], () => O.A.getPlanIdsForSkus(Array.from(s))),
        o = l.useCallback(() => a.length === r.size, [a, r]),
        c = l.useMemo(() => t.filter(e => e.currency !== T.Yri.DISCORD_ORB), [t]);
    return l.useEffect(() => {
        o() || p.h.wait(() => {
            s.forEach(e => (0, A.ur)(e, void 0, void 0, !0, void 0))
        })
    }, [o, s]), (0, i.jsx)(w, D(R({}, e), {
        payments: c,
        subscription: n
    }))
}
P(w, "defaultProps", {
    compactMode: !1
})