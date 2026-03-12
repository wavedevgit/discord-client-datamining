/** chunk id: 888848 params = (module,exports,require) **/
n.d(t, {
    A: () => G,
    G: () => L
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
    A = n(943775),
    m = n(123791),
    h = n(147441),
    p = n(627363),
    x = n(263063),
    E = n(543767),
    T = n(420139),
    S = n(272207),
    C = n(71393),
    I = n(97352),
    f = n(67480),
    N = n(328968),
    b = n(580630),
    v = n(163437),
    O = n(3432),
    j = n(572566),
    R = n(861621),
    y = n(652215),
    P = n(985018),
    D = n(509940),
    L = ((i = {})[i.LOADING = 0] = "LOADING", i[i.DONE = 1] = "DONE", i[i.ERROR = 2] = "ERROR", i);

function G(e) {
    let {
        subscription: t,
        navigateToSwitchPlan: n,
        loadingState: i
    } = e, r = t.metadata?.application_subscription_guild_id, {
        renewalMutations: d,
        planId: u
    } = t, {
        appId: m,
        plan: h,
        storeListing: T,
        isGuildSubscription: S,
        subscriptionForGuild: b,
        sku: O,
        isCancelled: R,
        renewalPlan: L
    } = (0, o.cf)([I.A, f.A, N.A, C.A], () => {
        let e, n = I.A.get(u),
            i = null != n ? f.A.get(n.skuId) : void 0,
            s = i?.applicationId,
            l = null != n ? N.A.getForSKU(n.skuId) : null,
            a = null != l && (0, v.PJ)(l.skuFlags),
            o = a && null != r ? C.A.getGuild(r) : void 0,
            c = (0, v.Uo)(t, i);
        if (!1 === c && null != d && d.items.length > 0) {
            let t = d.items[0];
            e = I.A.get(t.planId) ?? void 0
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
    } = (0, p.YY)(m), F = l.useMemo(() => null != G ? (0, A.A)(G, 100) : null, [G]), Y = O?.deleted ?? !1, z = null != O && (0, v.Se)(O), X = t.status === y.Dmq.PAST_DUE, {
        analyticsLocations: W
    } = (0, g.Ay)(), [K, Z] = (0, E.Kq)({
        subscriptionId: t.id,
        renewal: !0,
        analyticsLocations: W,
        analyticsLocation: _.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
    }), q = Z?.code === 100062 && null != r && null == b, J = (0, j.Y)(t.currentPeriodEnd), Q = 0 === i;
    return (0, s.jsxs)(a.q, {
        headerClassName: D.dL,
        header: !1 === Q ? (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsxs)("div", {
                className: D.VW,
                children: [null != F && (0, s.jsx)(c._V3, {
                    src: F.href,
                    imageClassName: D.Z2,
                    width: 40,
                    height: 40
                }), (0, s.jsxs)("div", {
                    className: D.aF,
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
                className: D.Pz,
                children: null != G && null != T && null != O && !1 === q && (0, s.jsx)(w, {
                    subscription: t,
                    app: G,
                    guild: b,
                    sku: O,
                    storeListing: T,
                    isCancelled: R,
                    navigateToSwitchPlan: n,
                    renewalSkuId: L?.skuId
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
            className: D.zH,
            children: [(0, s.jsx)(k, {
                title: P.intl.string(P.t["5D/KEH"]),
                content: S ? (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)("span", {
                        className: D.yW,
                        children: [(0, s.jsx)(c.RR9, {
                            size: "xs"
                        }), P.intl.string(P.t.QjL3vn)]
                    }), null != b && (0, s.jsxs)("span", {
                        className: D._t,
                        children: [(0, s.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: P.intl.format(P.t["7ZD8p1"], {
                                guildName: b.name
                            })
                        }), (0, s.jsx)(x.Ay, {
                            guild: b,
                            size: x.Ay.Sizes.MINI
                        })]
                    })]
                }) : (0, s.jsxs)("span", {
                    className: D.yW,
                    children: [(0, s.jsx)(c.nys, {
                        size: "xs"
                    }), P.intl.string(P.t["6anEVv"])]
                })
            }), (0, s.jsx)(M, {
                invoicePreview: K,
                subscriptionPlan: h
            }), (0, s.jsx)(k, {
                title: P.intl.string(P.t.dnUzb6),
                content: (0, j.Y)(t.createdAt ?? t.currentPeriodStart)
            }), (0, s.jsx)(U, {
                isCancelled: R,
                subscriptionPeriodEnd: J,
                renewalPlan: L
            })]
        }), (0, s.jsx)(B, {
            subscription: t,
            currentInvoicePreview: K,
            loadingState: i,
            isDeleted: Y,
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
    let i = (0, b.CE)((0, b.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = n?.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, s.jsx)(k, {
        title: P.intl.string(P.t.KI7ERx),
        content: i
    });
    let a = (0, b.CE)((0, b.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
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
        let e = (0, b.CE)((0, b.$g)(i.price, i.currency), i.interval, i.intervalCount);
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
        className: D.nM,
        children: [(0, s.jsx)(c.Text, {
            variant: "text-sm/medium",
            children: t
        }), (0, s.jsx)(c.Text, {
            variant: "text-sm/medium",
            className: D.u4,
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
        className: D.Xm,
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
        renewalSkuId: A,
        navigateToSwitchPlan: h
    } = e, p = (0, v.Se)(a), {
        analyticsLocations: x
    } = (0, g.Ay)(), [E, T] = l.useState(!1), C = (0, m.C)(t.id), I = (0, o.bG)([f.A], () => f.A.getParentSKU(i.skuId), [i.skuId]), N = l.useMemo(() => null == I ? [] : (0, R.l)(i.id, I, C.subscriptions), [i.id, C, I]), b = 0 !== N.length, O = async () => {
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
        className: D.fw,
        children: [p ? null : d ? (0, s.jsx)(c.Button, {
            variant: "secondary",
            size: "sm",
            text: P.intl.string(P.t.QtMnkW),
            onClick: O,
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
        }), b && null != I && !1 === d && (0, s.jsx)(c.Button, {
            variant: "primary",
            size: "sm",
            text: P.intl.string(P.t.R74ZBR),
            onClick: () => {
                h({
                    currentSubscription: r,
                    alternativeListings: N,
                    app: t,
                    subscriptionGroup: I,
                    currentListing: i,
                    renewalSkuId: A
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
            className: D.PX,
            children: [(0, s.jsxs)("div", {
                className: D.wV,
                children: [e && (0, s.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    children: P.intl.string(P.t.mORL67)
                }), (0, s.jsx)(h.A.Toggle, {
                    className: D.Bh,
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
                    icon: (0, O.N)(t, a),
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
        className: D.Ji,
        children: (0, s.jsx)(c.D0$, {
            label: P.intl.string(P.t.azZaZa),
            children: (0, s.jsx)(c.y$y, {
                type: c.tVU.PULSING_ELLIPSIS
            })
        })
    }) : 2 === i ? (0, s.jsx)("div", {
        className: D.Ji,
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
        className: D.Ji,
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