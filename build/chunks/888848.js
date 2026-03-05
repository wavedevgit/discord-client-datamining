/** chunk id: 888848, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => G,
    G: () => D
});
var i, s = n(627968),
    l = n(64700),
    a = n(273166),
    r = n(885996),
    o = n(311907),
    d = n(435371),
    c = n(397927),
    u = n(384904),
    _ = n(793574),
    g = n(688810),
    m = n(943775),
    A = n(123791),
    h = n(147441),
    p = n(627363),
    x = n(263063),
    E = n(543767),
    T = n(420139),
    S = n(272207),
    C = n(71393),
    f = n(97352),
    I = n(67480),
    b = n(328968),
    N = n(580630),
    v = n(163437),
    j = n(3432),
    O = n(572566),
    R = n(861621),
    y = n(652215),
    P = n(985018),
    L = n(509940),
    D = ((i = {})[i.LOADING = 0] = "LOADING", i[i.DONE = 1] = "DONE", i[i.ERROR = 2] = "ERROR", i);

function G(e) {
    let {
        subscription: t,
        navigateToSwitchPlan: n,
        loadingState: i
    } = e, r = t.metadata?.application_subscription_guild_id, {
        renewalMutations: d,
        planId: u
    } = t, {
        appId: A,
        plan: h,
        storeListing: T,
        isGuildSubscription: S,
        subscriptionForGuild: N,
        sku: j,
        isCancelled: R,
        renewalPlan: D
    } = (0, o.cf)([f.A, I.A, b.A, C.A], () => {
        let e, n = f.A.get(u),
            i = null != n ? I.A.get(n.skuId) : void 0,
            s = i?.applicationId,
            l = null != n ? b.A.getForSKU(n.skuId) : null,
            a = null != l && (0, v.PJ)(l.skuFlags),
            o = a && null != r ? C.A.getGuild(r) : void 0,
            c = (0, v.Uo)(t, i);
        if (!1 === c && null != d && d.items.length > 0) {
            let t = d.items[0];
            e = f.A.get(t.planId) ?? void 0
        }
        return {
            appId: s,
            isGuildSubscription: a,
            plan: n,
            sku: i,
            storeListing: l,
            subscriptionForGuild: o,
            isCancelled: c,
            renewalPlan: e
        }
    }, [r, u, d, t]), {
        data: G
    } = (0, p.YY)(A), Y = l.useMemo(() => null != G ? (0, m.A)(G, 100) : null, [G]), F = j?.deleted ?? !1, z = null != j && (0, v.Se)(j), X = t.status === y.Dmq.PAST_DUE, {
        analyticsLocations: W
    } = (0, g.Ay)(), [K, Z] = (0, E.Kq)({
        subscriptionId: t.id,
        renewal: !0,
        analyticsLocations: W,
        analyticsLocation: _.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
    }), q = Z?.code === 100062 && null != r && null == N, J = (0, O.Y)(t.currentPeriodEnd), Q = 0 === i;
    return (0, s.jsxs)(a.q, {
        headerClassName: L.dL,
        header: !1 === Q ? (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsxs)("div", {
                className: L.VW,
                children: [null != Y && (0, s.jsx)(c._V3, {
                    src: Y.href,
                    imageClassName: L.Z2,
                    width: 40,
                    height: 40
                }), (0, s.jsxs)("div", {
                    className: L.aF,
                    children: [(0, s.jsx)(c.Heading, {
                        variant: "heading-md/semibold",
                        lineClamp: 1,
                        children: G?.name ?? P.intl.string(P.t["7kqy7W"])
                    }), (0, s.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: h?.name ?? P.intl.string(P.t.sqkbMK)
                    })]
                })]
            }), (0, s.jsx)("div", {
                className: L.Pz,
                children: null != G && null != T && null != j && !1 === q && (0, s.jsx)(w, {
                    subscription: t,
                    app: G,
                    guild: N,
                    sku: j,
                    storeListing: T,
                    isCancelled: R,
                    navigateToSwitchPlan: n,
                    renewalSkuId: D?.skuId
                })
            })]
        }) : (0, s.jsx)(c.y$y, {
            type: c.tVU.PULSING_ELLIPSIS
        }),
        children: [R && (0, s.jsx)(V, {
            type: "warning",
            title: z ? P.intl.formatToPlainString(P.t.QOnM1y, {
                subscriptionPeriodEnd: J
            }) : P.intl.formatToPlainString(P.t.HOaZu8, {
                subscriptionPeriodEnd: J
            })
        }), q && (0, s.jsx)(V, {
            type: "warning",
            title: P.intl.formatToPlainString(P.t.HOaZu8, {
                subscriptionPeriodEnd: J
            })
        }), X && (0, s.jsx)(V, {
            type: "danger",
            title: P.intl.string(P.t.fvOqBo)
        }), (0, s.jsxs)("div", {
            className: L.zH,
            children: [(0, s.jsx)(k, {
                title: P.intl.string(P.t["5D/KEH"]),
                content: S ? (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)("span", {
                        className: L.yW,
                        children: [(0, s.jsx)(c.RR9, {
                            size: "xs"
                        }), P.intl.string(P.t.QjL3vn)]
                    }), null != N && (0, s.jsxs)("span", {
                        className: L._t,
                        children: [(0, s.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: P.intl.format(P.t["7ZD8p1"], {
                                guildName: N.name
                            })
                        }), (0, s.jsx)(x.Ay, {
                            guild: N,
                            size: x.Ay.Sizes.MINI
                        })]
                    })]
                }) : (0, s.jsxs)("span", {
                    className: L.yW,
                    children: [(0, s.jsx)(c.nys, {
                        size: "xs"
                    }), P.intl.string(P.t["6anEVv"])]
                })
            }), (0, s.jsx)(M, {
                invoicePreview: K,
                subscriptionPlan: h
            }), (0, s.jsx)(k, {
                title: P.intl.string(P.t.dnUzb6),
                content: (0, O.Y)(t.createdAt ?? t.currentPeriodStart)
            }), (0, s.jsx)(U, {
                isCancelled: R,
                subscriptionPeriodEnd: J,
                renewalPlan: D
            })]
        }), (0, s.jsx)(B, {
            subscription: t,
            currentInvoicePreview: K,
            loadingState: i,
            isDeleted: F,
            isCancelled: R
        }), null != G && T?.benefits != null && T.benefits.length > 0 && (0, s.jsx)(H, {
            appId: G.id,
            listingBenefits: T.benefits
        })]
    })
}

function M(e) {
    let {
        subscriptionPlan: t,
        invoicePreview: n
    } = e;
    if (null == t) return (0, s.jsx)(k, {
        title: P.intl.string(P.t.KI7ERx),
        content: ""
    });
    let i = (0, N.CE)((0, N.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = n?.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, s.jsx)(k, {
        title: P.intl.string(P.t.KI7ERx),
        content: i
    });
    let a = (0, N.CE)((0, N.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, s.jsx)(k, {
        title: P.intl.string(P.t.KI7ERx),
        content: (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(c.Text, {
                variant: "text-sm/semibold",
                children: a
            }), a !== i && (0, s.jsx)(d.m_, {
                text: P.intl.format(P.t["6DoE57"], {
                    listPrice: i
                }),
                position: "bottom",
                children: (0, s.jsx)(c.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: (0, s.jsx)("s", {
                        children: i
                    })
                })
            })]
        })
    })
}

function U(e) {
    let {
        isCancelled: t,
        subscriptionPeriodEnd: n,
        renewalPlan: i
    } = e;
    if (null != i) {
        let e = (0, N.CE)((0, N.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, s.jsx)(k, {
            title: P.intl.string(P.t.hIhAM3),
            content: (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    children: n
                }), (0, s.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    children: P.intl.format(P.t.MCLbvj, {
                        planName: i.name,
                        price: e
                    })
                })]
            })
        })
    }
    return (0, s.jsx)(k, {
        title: t ? P.intl.string(P.t.enxcAl) : P.intl.string(P.t["Ms+6Zq"]),
        content: n
    })
}

function k(e) {
    let {
        title: t,
        content: n
    } = e;
    return (0, s.jsxs)("div", {
        className: L.nM,
        children: [(0, s.jsx)(c.Text, {
            variant: "text-sm/medium",
            children: t
        }), (0, s.jsx)(c.Text, {
            variant: "text-sm/medium",
            className: L.u4,
            children: n
        })]
    })
}

function V(e) {
    let {
        type: t,
        title: n
    } = e;
    return (0, s.jsx)(c.po8, {
        messageType: "warning" === t ? c.YCn.WARNING : c.YCn.ERROR,
        className: L.Xm,
        children: (0, s.jsx)(c.Text, {
            variant: "text-sm/normal",
            children: n
        })
    })
}

function w(e) {
    let {
        app: t,
        storeListing: i,
        sku: a,
        subscription: r,
        isCancelled: d,
        guild: _,
        renewalSkuId: m,
        navigateToSwitchPlan: h
    } = e, p = (0, v.Se)(a), {
        analyticsLocations: x
    } = (0, g.Ay)(), [E, T] = l.useState(!1), C = (0, A.C)(t.id), f = (0, o.bG)([I.A], () => I.A.getParentSKU(i.skuId), [i.skuId]), b = l.useMemo(() => null == f ? [] : (0, R.l)(i.id, f, C.subscriptions), [i.id, C, f]), N = 0 !== b.length, j = async () => {
        try {
            T(!0);
            let {
                subscription: e
            } = await (0, u.QP)(r, x);
            if (null == e) return;
            (0, c.mMO)(async () => {
                let {
                    default: t
                } = await n.e("52396").then(n.bind(n, 115623));
                return n => (0, s.jsx)(t, {
                    ...n,
                    storeListing: i,
                    subscription: S.A.createFromServer(e)
                })
            })
        } finally {
            T(!1)
        }
    };
    return (0, s.jsxs)("div", {
        className: L.fw,
        children: [p ? null : d ? (0, s.jsx)(c.Button, {
            variant: "secondary",
            size: "sm",
            text: P.intl.string(P.t.QtMnkW),
            onClick: j,
            loading: E
        }) : (0, s.jsx)(c.Button, {
            variant: "secondary",
            size: "sm",
            text: P.intl.string(P.t["E8G/tr"]),
            onClick: () => {
                (0, c.mMO)(async () => {
                    let {
                        default: e
                    } = await n.e("33102").then(n.bind(n, 386077));
                    return n => (0, s.jsx)(e, {
                        ...n,
                        application: t,
                        storeListing: i,
                        subscription: r,
                        guild: _
                    })
                })
            }
        }), N && null != f && !1 === d && (0, s.jsx)(c.Button, {
            variant: "primary",
            size: "sm",
            text: P.intl.string(P.t.R74ZBR),
            onClick: () => {
                h({
                    currentSubscription: r,
                    alternativeListings: b,
                    app: t,
                    subscriptionGroup: f,
                    currentListing: i,
                    renewalSkuId: m
                })
            }
        })]
    })
}

function H(e) {
    let {
        appId: t,
        listingBenefits: n
    } = e;
    return (0, s.jsx)(h.A, {
        children: e => (0, s.jsxs)("div", {
            className: L.PX,
            children: [(0, s.jsxs)("div", {
                className: L.wV,
                children: [e && (0, s.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    children: P.intl.string(P.t.mORL67)
                }), (0, s.jsx)(h.A.Toggle, {
                    className: L.Bh,
                    text: e ? P.intl.string(P.t.gsbFAw) : P.intl.string(P.t.IwjfxV)
                })]
            }), e ? n.map(e => {
                let {
                    id: n,
                    name: i,
                    description: l,
                    icon: a
                } = e;
                return (0, s.jsx)(r.FY, {
                    header: i,
                    icon: (0, j.N)(t, a),
                    description: l
                }, n)
            }) : null]
        })
    })
}

function B(e) {
    let {
        subscription: t,
        currentInvoicePreview: n,
        loadingState: i,
        isDeleted: l,
        isCancelled: a
    } = e;
    return null == n ? null : 0 === i ? (0, s.jsx)("div", {
        className: L.Ji,
        children: (0, s.jsx)(c.D0$, {
            label: P.intl.string(P.t.azZaZa),
            children: (0, s.jsx)(c.y$y, {
                type: c.tVU.PULSING_ELLIPSIS
            })
        })
    }) : 2 === i ? (0, s.jsx)("div", {
        className: L.Ji,
        children: (0, s.jsxs)(c.$Td, {
            color: c.Hv$.DANGER,
            style: {
                borderRadius: 0
            },
            children: [P.intl.format(P.t.IIHUUF, {
                subscriptionId: t.id
            }), (0, s.jsx)("br", {}), P.intl.format(P.t.fh65ES, {
                helpLink: "https://support.discord.com/hc/en-us"
            })]
        })
    }) : (0, s.jsx)("div", {
        className: L.Ji,
        children: (0, s.jsx)(c.D0$, {
            label: P.intl.string(P.t.azZaZa),
            children: (0, s.jsx)(T.A, {
                subscription: t,
                currentInvoicePreview: n,
                disabled: l || a
            })
        })
    })
}