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
    m = n(688810),
    g = n(943775),
    A = n(123791),
    x = n(147441),
    h = n(627363),
    p = n(263063),
    T = n(543767),
    E = n(420139),
    S = n(272207),
    f = n(71393),
    C = n(97352),
    b = n(67480),
    N = n(328968),
    I = n(580630),
    v = n(163437),
    j = n(3432),
    y = n(572566),
    R = n(861621),
    O = n(652215),
    D = n(985018),
    P = n(486526),
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
        appId: A,
        plan: x,
        storeListing: E,
        isGuildSubscription: S,
        subscriptionForGuild: I,
        sku: j,
        isCancelled: R,
        renewalPlan: L
    } = (0, o.cf)([C.A, b.A, N.A, f.A], () => {
        let e, n = C.A.get(u),
            i = null != n ? b.A.get(n.skuId) : void 0,
            s = i?.applicationId,
            l = null != n ? N.A.getForSKU(n.skuId) : null,
            a = null != l && (0, v.PJ)(l.skuFlags),
            o = a && null != r ? f.A.getGuild(r) : void 0,
            c = (0, v.Uo)(t, i);
        if (!1 === c && null != d && d.items.length > 0) {
            let t = d.items[0];
            e = C.A.get(t.planId) ?? void 0
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
    } = (0, h.YY)(A), F = l.useMemo(() => null != G ? (0, g.A)(G, 100) : null, [G]), Y = j?.deleted ?? !1, z = null != j && (0, v.Se)(j), X = t.status === O.Dmq.PAST_DUE, {
        analyticsLocations: W
    } = (0, m.Ay)(), [K, Z] = (0, T.Kq)({
        subscriptionId: t.id,
        renewal: !0,
        analyticsLocations: W,
        analyticsLocation: _.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
    }), q = Z?.code === 100062 && null != r && null == I, J = (0, y.Y)(t.currentPeriodEnd), Q = 0 === i;
    return (0, s.jsxs)(a.q, {
        headerClassName: P.dL,
        header: !1 === Q ? (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsxs)("div", {
                className: P.VW,
                children: [null != F && (0, s.jsx)(c._V3, {
                    src: F.href,
                    imageClassName: P.Z2,
                    width: 40,
                    height: 40
                }), (0, s.jsxs)("div", {
                    className: P.aF,
                    children: [(0, s.jsx)(c.Heading, {
                        variant: "heading-md/semibold",
                        lineClamp: 1,
                        children: G?.name ?? D.intl.string(D.t["7kqy7W"])
                    }), (0, s.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: x?.name ?? D.intl.string(D.t.sqkbMK)
                    })]
                })]
            }), (0, s.jsx)("div", {
                className: P.Pz,
                children: null != G && null != E && null != j && !1 === q && (0, s.jsx)(w, {
                    subscription: t,
                    app: G,
                    guild: I,
                    sku: j,
                    storeListing: E,
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
            title: z ? D.intl.formatToPlainString(D.t.QOnM1y, {
                subscriptionPeriodEnd: J
            }) : D.intl.formatToPlainString(D.t.HOaZu8, {
                subscriptionPeriodEnd: J
            })
        }), q && (0, s.jsx)(V, {
            type: "warning",
            title: D.intl.formatToPlainString(D.t.HOaZu8, {
                subscriptionPeriodEnd: J
            })
        }), X && (0, s.jsx)(V, {
            type: "danger",
            title: D.intl.string(D.t.fvOqBo)
        }), (0, s.jsxs)("div", {
            className: P.zH,
            children: [(0, s.jsx)(k, {
                title: D.intl.string(D.t["5D/KEH"]),
                content: S ? (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)("span", {
                        className: P.yW,
                        children: [(0, s.jsx)(c.RR9, {
                            size: "xs"
                        }), D.intl.string(D.t.QjL3vn)]
                    }), null != I && (0, s.jsxs)("span", {
                        className: P._t,
                        children: [(0, s.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: D.intl.format(D.t["7ZD8p1"], {
                                guildName: I.name
                            })
                        }), (0, s.jsx)(p.Ay, {
                            guild: I,
                            size: p.Ay.Sizes.MINI
                        })]
                    })]
                }) : (0, s.jsxs)("span", {
                    className: P.yW,
                    children: [(0, s.jsx)(c.nys, {
                        size: "xs"
                    }), D.intl.string(D.t["6anEVv"])]
                })
            }), (0, s.jsx)(M, {
                invoicePreview: K,
                subscriptionPlan: x
            }), (0, s.jsx)(k, {
                title: D.intl.string(D.t.dnUzb6),
                content: (0, y.Y)(t.createdAt ?? t.currentPeriodStart)
            }), (0, s.jsx)(U, {
                isCancelled: R,
                subscriptionPeriodEnd: J,
                renewalPlan: L
            })]
        }), (0, s.jsx)(H, {
            subscription: t,
            currentInvoicePreview: K,
            loadingState: i,
            isDeleted: Y,
            isCancelled: R
        }), null != G && E?.benefits != null && E.benefits.length > 0 && (0, s.jsx)(B, {
            appId: G.id,
            listingBenefits: E.benefits
        })]
    })
}

function M(e) {
    let {
        subscriptionPlan: t,
        invoicePreview: n
    } = e;
    if (null == t) return (0, s.jsx)(k, {
        title: D.intl.string(D.t.KI7ERx),
        content: ""
    });
    let i = (0, I.CE)((0, I.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = n?.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, s.jsx)(k, {
        title: D.intl.string(D.t.KI7ERx),
        content: i
    });
    let a = (0, I.CE)((0, I.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, s.jsx)(k, {
        title: D.intl.string(D.t.KI7ERx),
        content: (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(c.Text, {
                variant: "text-sm/semibold",
                children: a
            }), a !== i && (0, s.jsx)(d.m_, {
                text: D.intl.format(D.t["6DoE57"], {
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
        let e = (0, I.CE)((0, I.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, s.jsx)(k, {
            title: D.intl.string(D.t.hIhAM3),
            content: (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    children: n
                }), (0, s.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    children: D.intl.format(D.t.MCLbvj, {
                        planName: i.name,
                        price: e
                    })
                })]
            })
        })
    }
    return (0, s.jsx)(k, {
        title: t ? D.intl.string(D.t.enxcAl) : D.intl.string(D.t["Ms+6Zq"]),
        content: n
    })
}

function k(e) {
    let {
        title: t,
        content: n
    } = e;
    return (0, s.jsxs)("div", {
        className: P.nM,
        children: [(0, s.jsx)(c.Text, {
            variant: "text-sm/medium",
            children: t
        }), (0, s.jsx)(c.Text, {
            variant: "text-sm/medium",
            className: P.u4,
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
        className: P.Xm,
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
        renewalSkuId: g,
        navigateToSwitchPlan: x
    } = e, h = (0, v.Se)(a), {
        analyticsLocations: p
    } = (0, m.Ay)(), [T, E] = l.useState(!1), f = (0, A.C)(t.id), C = (0, o.bG)([b.A], () => b.A.getParentSKU(i.skuId), [i.skuId]), N = l.useMemo(() => null == C ? [] : (0, R.l)(i.id, C, f.subscriptions), [i.id, f, C]), I = 0 !== N.length, j = async () => {
        try {
            E(!0);
            let {
                subscription: e
            } = await (0, u.QP)(r, p);
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
            E(!1)
        }
    };
    return (0, s.jsxs)("div", {
        className: P.fw,
        children: [h ? null : d ? (0, s.jsx)(c.Button, {
            variant: "secondary",
            size: "sm",
            text: D.intl.string(D.t.QtMnkW),
            onClick: j,
            loading: T
        }) : (0, s.jsx)(c.Button, {
            variant: "secondary",
            size: "sm",
            text: D.intl.string(D.t["E8G/tr"]),
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
        }), I && null != C && !1 === d && (0, s.jsx)(c.Button, {
            variant: "primary",
            size: "sm",
            text: D.intl.string(D.t.R74ZBR),
            onClick: () => {
                x({
                    currentSubscription: r,
                    alternativeListings: N,
                    app: t,
                    subscriptionGroup: C,
                    currentListing: i,
                    renewalSkuId: g
                })
            }
        })]
    })
}

function B(e) {
    let {
        appId: t,
        listingBenefits: n
    } = e;
    return (0, s.jsx)(x.A, {
        children: e => (0, s.jsxs)("div", {
            className: P.PX,
            children: [(0, s.jsxs)("div", {
                className: P.wV,
                children: [e && (0, s.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    children: D.intl.string(D.t.mORL67)
                }), (0, s.jsx)(x.A.Toggle, {
                    className: P.Bh,
                    text: e ? D.intl.string(D.t.gsbFAw) : D.intl.string(D.t.IwjfxV)
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

function H(e) {
    let {
        subscription: t,
        currentInvoicePreview: n,
        loadingState: i,
        isDeleted: l,
        isCancelled: a
    } = e;
    return null == n ? null : 0 === i ? (0, s.jsx)("div", {
        className: P.Ji,
        children: (0, s.jsx)(c.D0$, {
            label: D.intl.string(D.t.azZaZa),
            children: (0, s.jsx)(c.y$y, {
                type: c.tVU.PULSING_ELLIPSIS
            })
        })
    }) : 2 === i ? (0, s.jsx)("div", {
        className: P.Ji,
        children: (0, s.jsxs)(c.$Td, {
            color: c.Hv$.DANGER,
            style: {
                borderRadius: 0
            },
            children: [D.intl.format(D.t.IIHUUF, {
                subscriptionId: t.id
            }), (0, s.jsx)("br", {}), D.intl.format(D.t.fh65ES, {
                helpLink: "https://support.discord.com/hc/en-us"
            })]
        })
    }) : (0, s.jsx)("div", {
        className: P.Ji,
        children: (0, s.jsx)(c.D0$, {
            label: D.intl.string(D.t.azZaZa),
            children: (0, s.jsx)(E.A, {
                subscription: t,
                currentInvoicePreview: n,
                disabled: l || a
            })
        })
    })
}