/** Chunk was on 5606 **/
/** chunk id: 888848, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => G,
    G: () => M
}), n(896048), n(228524);
var r, i = n(627968),
    l = n(64700),
    s = n(273166),
    a = n(885996),
    o = n(311907),
    c = n(435371),
    d = n(397927),
    u = n(384904),
    p = n(793574),
    _ = n(688810),
    m = n(943775),
    g = n(123791),
    f = n(147441),
    b = n(627363),
    h = n(263063),
    A = n(543767),
    E = n(420139),
    x = n(272207),
    O = n(71393),
    C = n(97352),
    y = n(67480),
    j = n(328968),
    T = n(580630),
    v = n(163437),
    S = n(3432),
    I = n(572566),
    N = n(861621),
    P = n(652215),
    R = n(985018),
    D = n(486526);

function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function L(e, t) {
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
var M = ((r = {})[r.LOADING = 0] = "LOADING", r[r.DONE = 1] = "DONE", r[r.ERROR = 2] = "ERROR", r);

function G(e) {
    var t, n, r, a, c;
    let {
        subscription: u,
        navigateToSwitchPlan: g,
        loadingState: f
    } = e, E = null == (c = u.metadata) ? void 0 : c.application_subscription_guild_id, {
        renewalMutations: x,
        planId: T
    } = u, {
        appId: S,
        plan: N,
        storeListing: w,
        isGuildSubscription: L,
        subscriptionForGuild: M,
        sku: G,
        isCancelled: W,
        renewalPlan: K
    } = (0, o.cf)([C.A, y.A, j.A, O.A], () => {
        let e, t = C.A.get(T),
            n = null != t ? y.A.get(t.skuId) : void 0,
            r = null == n ? void 0 : n.applicationId,
            i = null != t ? j.A.getForSKU(t.skuId) : null,
            l = null != i && (0, v.PJ)(i.skuFlags),
            s = l && null != E ? O.A.getGuild(E) : void 0,
            a = (0, v.Uo)(u, n);
        if (!1 === a && null != x && x.items.length > 0) {
            var o;
            let t = x.items[0];
            e = null != (o = C.A.get(t.planId)) ? o : void 0
        }
        return {
            appId: r,
            isGuildSubscription: l,
            plan: t,
            sku: n,
            storeListing: i,
            subscriptionForGuild: s,
            isCancelled: a,
            renewalPlan: e
        }
    }, [E, T, x, u]), {
        data: z
    } = (0, b.YY)(S), Z = l.useMemo(() => null != z ? (0, m.A)(z, 100) : null, [z]), q = null != (t = null == G ? void 0 : G.deleted) && t, X = null != G && (0, v.Se)(G), J = u.status === P.Dmq.PAST_DUE, {
        analyticsLocations: Q
    } = (0, _.Ay)(), [$, ee] = (0, A.Kq)({
        subscriptionId: u.id,
        renewal: !0,
        analyticsLocations: Q,
        analyticsLocation: p.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
    }), et = (null == ee ? void 0 : ee.code) === 100062 && null != E && null == M, en = (0, I.Y)(u.currentPeriodEnd), er = 0 === f;
    return (0, i.jsxs)(s.q, {
        headerClassName: D.dL,
        header: !1 === er ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
                className: D.VW,
                children: [null != Z && (0, i.jsx)(d._V3, {
                    src: Z.href,
                    imageClassName: D.Z2,
                    width: 40,
                    height: 40
                }), (0, i.jsxs)("div", {
                    className: D.aF,
                    children: [(0, i.jsx)(d.Heading, {
                        variant: "heading-md/semibold",
                        lineClamp: 1,
                        children: null != (n = null == z ? void 0 : z.name) ? n : R.intl.string(R.t["7kqy7W"])
                    }), (0, i.jsx)(d.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: null != (r = null == N ? void 0 : N.name) ? r : R.intl.string(R.t.sqkbMK)
                    })]
                })]
            }), (0, i.jsx)("div", {
                className: D.Pz,
                children: null != z && null != w && null != G && !1 === et && (0, i.jsx)(V, {
                    subscription: u,
                    app: z,
                    guild: M,
                    sku: G,
                    storeListing: w,
                    isCancelled: W,
                    navigateToSwitchPlan: g,
                    renewalSkuId: null == K ? void 0 : K.skuId
                })
            })]
        }) : (0, i.jsx)(d.y$y, {
            type: d.tVU.PULSING_ELLIPSIS
        }),
        children: [W && (0, i.jsx)(B, {
            type: "warning",
            title: X ? R.intl.formatToPlainString(R.t.QOnM1y, {
                subscriptionPeriodEnd: en
            }) : R.intl.formatToPlainString(R.t.HOaZu8, {
                subscriptionPeriodEnd: en
            })
        }), et && (0, i.jsx)(B, {
            type: "warning",
            title: R.intl.formatToPlainString(R.t.HOaZu8, {
                subscriptionPeriodEnd: en
            })
        }), J && (0, i.jsx)(B, {
            type: "danger",
            title: R.intl.string(R.t.fvOqBo)
        }), (0, i.jsxs)("div", {
            className: D.zH,
            children: [(0, i.jsx)(H, {
                title: R.intl.string(R.t["5D/KEH"]),
                content: L ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("span", {
                        className: D.yW,
                        children: [(0, i.jsx)(d.RR9, {
                            size: "xs"
                        }), R.intl.string(R.t.QjL3vn)]
                    }), null != M && (0, i.jsxs)("span", {
                        className: D._t,
                        children: [(0, i.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: R.intl.format(R.t["7ZD8p1"], {
                                guildName: M.name
                            })
                        }), (0, i.jsx)(h.A, {
                            guild: M,
                            size: h.A.Sizes.MINI
                        })]
                    })]
                }) : (0, i.jsxs)("span", {
                    className: D.yW,
                    children: [(0, i.jsx)(d.nys, {
                        size: "xs"
                    }), R.intl.string(R.t["6anEVv"])]
                })
            }), (0, i.jsx)(U, {
                invoicePreview: $,
                subscriptionPlan: N
            }), (0, i.jsx)(H, {
                title: R.intl.string(R.t.dnUzb6),
                content: (0, I.Y)(null != (a = u.createdAt) ? a : u.currentPeriodStart)
            }), (0, i.jsx)(k, {
                isCancelled: W,
                subscriptionPeriodEnd: en,
                renewalPlan: K
            })]
        }), (0, i.jsx)(Y, {
            subscription: u,
            currentInvoicePreview: $,
            loadingState: f,
            isDeleted: q,
            isCancelled: W
        }), null != z && (null == w ? void 0 : w.benefits) != null && w.benefits.length > 0 && (0, i.jsx)(F, {
            appId: z.id,
            listingBenefits: w.benefits
        })]
    })
}

function U(e) {
    let {
        subscriptionPlan: t,
        invoicePreview: n
    } = e;
    if (null == t) return (0, i.jsx)(H, {
        title: R.intl.string(R.t.KI7ERx),
        content: ""
    });
    let r = (0, T.CE)((0, T.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = null == n ? void 0 : n.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, i.jsx)(H, {
        title: R.intl.string(R.t.KI7ERx),
        content: r
    });
    let s = (0, T.CE)((0, T.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, i.jsx)(H, {
        title: R.intl.string(R.t.KI7ERx),
        content: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(d.Text, {
                variant: "text-sm/semibold",
                children: s
            }), s !== r && (0, i.jsx)(c.m_, {
                text: R.intl.format(R.t["6DoE57"], {
                    listPrice: r
                }),
                position: "bottom",
                children: (0, i.jsx)(d.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: (0, i.jsx)("s", {
                        children: r
                    })
                })
            })]
        })
    })
}

function k(e) {
    let {
        isCancelled: t,
        subscriptionPeriodEnd: n,
        renewalPlan: r
    } = e;
    if (null != r) {
        let e = (0, T.CE)((0, T.$g)(r.price, r.currency), r.interval, r.intervalCount);
        return (0, i.jsx)(H, {
            title: R.intl.string(R.t.hIhAM3),
            content: (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    children: n
                }), (0, i.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: R.intl.format(R.t.MCLbvj, {
                        planName: r.name,
                        price: e
                    })
                })]
            })
        })
    }
    return (0, i.jsx)(H, {
        title: t ? R.intl.string(R.t.enxcAl) : R.intl.string(R.t["Ms+6Zq"]),
        content: n
    })
}

function H(e) {
    let {
        title: t,
        content: n
    } = e;
    return (0, i.jsxs)("div", {
        className: D.nM,
        children: [(0, i.jsx)(d.Text, {
            variant: "text-sm/medium",
            children: t
        }), (0, i.jsx)(d.Text, {
            variant: "text-sm/medium",
            className: D.u4,
            children: n
        })]
    })
}

function B(e) {
    let {
        type: t,
        title: n
    } = e;
    return (0, i.jsx)(d.po8, {
        messageType: "warning" === t ? d.YCn.WARNING : d.YCn.ERROR,
        className: D.Xm,
        children: (0, i.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: n
        })
    })
}

function V(e) {
    let {
        app: t,
        storeListing: r,
        sku: s,
        subscription: a,
        isCancelled: c,
        guild: p,
        renewalSkuId: m,
        navigateToSwitchPlan: f
    } = e, b = (0, v.Se)(s), {
        analyticsLocations: h
    } = (0, _.Ay)(), [A, E] = l.useState(!1), O = (0, g.C)(t.id), C = (0, o.bG)([y.A], () => y.A.getParentSKU(r.skuId), [r.skuId]), j = l.useMemo(() => null == C ? [] : (0, N.l)(r.id, C, O.subscriptions), [r.id, O, C]), T = 0 !== j.length, S = async () => {
        try {
            E(!0);
            let {
                subscription: e
            } = await (0, u.QP)(a, h);
            if (null == e) return;
            (0, d.mMO)(async () => {
                let {
                    default: t
                } = await n.e("52396").then(n.bind(n, 115623));
                return n => (0, i.jsx)(t, L(w({}, n), {
                    storeListing: r,
                    subscription: x.A.createFromServer(e)
                }))
            })
        } finally {
            E(!1)
        }
    };
    return (0, i.jsxs)("div", {
        className: D.fw,
        children: [b ? null : c ? (0, i.jsx)(d.Button, {
            variant: "secondary",
            size: "sm",
            text: R.intl.string(R.t.QtMnkW),
            onClick: S,
            loading: A
        }) : (0, i.jsx)(d.Button, {
            variant: "secondary",
            size: "sm",
            text: R.intl.string(R.t["E8G/tr"]),
            onClick: () => {
                (0, d.mMO)(async () => {
                    let {
                        default: e
                    } = await n.e("33102").then(n.bind(n, 386077));
                    return n => (0, i.jsx)(e, L(w({}, n), {
                        application: t,
                        storeListing: r,
                        subscription: a,
                        guild: p
                    }))
                })
            }
        }), T && null != C && !1 === c && (0, i.jsx)(d.Button, {
            variant: "primary",
            size: "sm",
            text: R.intl.string(R.t.R74ZBR),
            onClick: () => {
                f({
                    currentSubscription: a,
                    alternativeListings: j,
                    app: t,
                    subscriptionGroup: C,
                    currentListing: r,
                    renewalSkuId: m
                })
            }
        })]
    })
}

function F(e) {
    let {
        appId: t,
        listingBenefits: n
    } = e;
    return (0, i.jsx)(f.A, {
        children: e => (0, i.jsxs)("div", {
            className: D.PX,
            children: [(0, i.jsxs)("div", {
                className: D.wV,
                children: [e && (0, i.jsx)(d.Text, {
                    variant: "text-sm/semibold",
                    children: R.intl.string(R.t.mORL67)
                }), (0, i.jsx)(f.A.Toggle, {
                    className: D.Bh,
                    text: e ? R.intl.string(R.t.gsbFAw) : R.intl.string(R.t.IwjfxV)
                })]
            }), e ? n.map(e => {
                let {
                    id: n,
                    name: r,
                    description: l,
                    icon: s
                } = e;
                return (0, i.jsx)(a.FY, {
                    header: r,
                    icon: (0, S.N)(t, s),
                    description: l
                }, n)
            }) : null]
        })
    })
}

function Y(e) {
    let {
        subscription: t,
        currentInvoicePreview: n,
        loadingState: r,
        isDeleted: l,
        isCancelled: s
    } = e;
    return null == n ? null : 0 === r ? (0, i.jsx)("div", {
        className: D.Ji,
        children: (0, i.jsx)(d.D0$, {
            label: R.intl.string(R.t.azZaZa),
            children: (0, i.jsx)(d.y$y, {
                type: d.tVU.PULSING_ELLIPSIS
            })
        })
    }) : 2 === r ? (0, i.jsx)("div", {
        className: D.Ji,
        children: (0, i.jsxs)(d.$Td, {
            color: d.Hv$.DANGER,
            style: {
                borderRadius: 0
            },
            children: [R.intl.format(R.t.IIHUUF, {
                subscriptionId: t.id
            }), (0, i.jsx)("br", {}), R.intl.format(R.t.fh65ES, {
                helpLink: "https://support.discord.com/hc/en-us"
            })]
        })
    }) : (0, i.jsx)("div", {
        className: D.Ji,
        children: (0, i.jsx)(d.D0$, {
            label: R.intl.string(R.t.azZaZa),
            children: (0, i.jsx)(E.A, {
                subscription: t,
                currentInvoicePreview: n,
                disabled: l || s
            })
        })
    })
}