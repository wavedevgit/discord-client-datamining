/** chunk id: 888848 params = (module,exports,require) **/
n.d(t, {
    A: () => G,
    G: () => P
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
    C = n(71393),
    f = n(97352),
    N = n(67480),
    I = n(328968),
    b = n(580630),
    v = n(163437),
    j = n(3432),
    y = n(572566),
    O = n(861621),
    R = n(652215),
    L = n(985018),
    D = n(486526),
    P = ((i = {})[i.LOADING = 0] = "LOADING", i[i.DONE = 1] = "DONE", i[i.ERROR = 2] = "ERROR", i);

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
        subscriptionForGuild: b,
        sku: j,
        isCancelled: O,
        renewalPlan: P
    } = (0, o.cf)([f.A, N.A, I.A, C.A], () => {
        let e, n = f.A.get(u),
            i = null != n ? N.A.get(n.skuId) : void 0,
            s = i?.applicationId,
            l = null != n ? I.A.getForSKU(n.skuId) : null,
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
    } = (0, h.YY)(A), F = l.useMemo(() => null != G ? (0, g.A)(G, 100) : null, [G]), Y = j?.deleted ?? !1, z = null != j && (0, v.Se)(j), X = t.status === R.Dmq.PAST_DUE, {
        analyticsLocations: W
    } = (0, m.Ay)(), [K, Z] = (0, T.Kq)({
        subscriptionId: t.id,
        renewal: !0,
        analyticsLocations: W,
        analyticsLocation: _.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
    }), q = Z?.code === 100062 && null != r && null == b, J = (0, y.Y)(t.currentPeriodEnd), Q = 0 === i;
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
                        children: G?.name ?? L.intl.string(L.t["7kqy7W"])
                    }), (0, s.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: x?.name ?? L.intl.string(L.t.sqkbMK)
                    })]
                })]
            }), (0, s.jsx)("div", {
                className: D.Pz,
                children: null != G && null != E && null != j && !1 === q && (0, s.jsx)(w, {
                    subscription: t,
                    app: G,
                    guild: b,
                    sku: j,
                    storeListing: E,
                    isCancelled: O,
                    navigateToSwitchPlan: n,
                    renewalSkuId: P?.skuId
                })
            })]
        }) : (0, s.jsx)(c.y$y, {
            type: c.tVU.PULSING_ELLIPSIS
        }),
        children: [O && (0, s.jsx)(V, {
            type: "warning",
            title: z ? L.intl.formatToPlainString(L.t.QOnM1y, {
                subscriptionPeriodEnd: J
            }) : L.intl.formatToPlainString(L.t.HOaZu8, {
                subscriptionPeriodEnd: J
            })
        }), q && (0, s.jsx)(V, {
            type: "warning",
            title: L.intl.formatToPlainString(L.t.HOaZu8, {
                subscriptionPeriodEnd: J
            })
        }), X && (0, s.jsx)(V, {
            type: "danger",
            title: L.intl.string(L.t.fvOqBo)
        }), (0, s.jsxs)("div", {
            className: D.zH,
            children: [(0, s.jsx)(k, {
                title: L.intl.string(L.t["5D/KEH"]),
                content: S ? (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)("span", {
                        className: D.yW,
                        children: [(0, s.jsx)(c.RR9, {
                            size: "xs"
                        }), L.intl.string(L.t.QjL3vn)]
                    }), null != b && (0, s.jsxs)("span", {
                        className: D._t,
                        children: [(0, s.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: L.intl.format(L.t["7ZD8p1"], {
                                guildName: b.name
                            })
                        }), (0, s.jsx)(p.Ay, {
                            guild: b,
                            size: p.Ay.Sizes.MINI
                        })]
                    })]
                }) : (0, s.jsxs)("span", {
                    className: D.yW,
                    children: [(0, s.jsx)(c.nys, {
                        size: "xs"
                    }), L.intl.string(L.t["6anEVv"])]
                })
            }), (0, s.jsx)(M, {
                invoicePreview: K,
                subscriptionPlan: x
            }), (0, s.jsx)(k, {
                title: L.intl.string(L.t.dnUzb6),
                content: (0, y.Y)(t.createdAt ?? t.currentPeriodStart)
            }), (0, s.jsx)(U, {
                isCancelled: O,
                subscriptionPeriodEnd: J,
                renewalPlan: P
            })]
        }), (0, s.jsx)(H, {
            subscription: t,
            currentInvoicePreview: K,
            loadingState: i,
            isDeleted: Y,
            isCancelled: O
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
        title: L.intl.string(L.t.KI7ERx),
        content: ""
    });
    let i = (0, b.CE)((0, b.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = n?.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, s.jsx)(k, {
        title: L.intl.string(L.t.KI7ERx),
        content: i
    });
    let a = (0, b.CE)((0, b.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, s.jsx)(k, {
        title: L.intl.string(L.t.KI7ERx),
        content: (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(c.Text, {
                variant: "text-sm/semibold",
                children: a
            }), a !== i && (0, s.jsx)(d.m_, {
                text: L.intl.format(L.t["6DoE57"], {
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
            title: L.intl.string(L.t.hIhAM3),
            content: (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    children: n
                }), (0, s.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    children: L.intl.format(L.t.MCLbvj, {
                        planName: i.name,
                        price: e
                    })
                })]
            })
        })
    }
    return (0, s.jsx)(k, {
        title: t ? L.intl.string(L.t.enxcAl) : L.intl.string(L.t["Ms+6Zq"]),
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
        renewalSkuId: g,
        navigateToSwitchPlan: x
    } = e, h = (0, v.Se)(a), {
        analyticsLocations: p
    } = (0, m.Ay)(), [T, E] = l.useState(!1), C = (0, A.C)(t.id), f = (0, o.bG)([N.A], () => N.A.getParentSKU(i.skuId), [i.skuId]), I = l.useMemo(() => null == f ? [] : (0, O.l)(i.id, f, C.subscriptions), [i.id, C, f]), b = 0 !== I.length, j = async () => {
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
        className: D.fw,
        children: [h ? null : d ? (0, s.jsx)(c.Button, {
            variant: "secondary",
            size: "sm",
            text: L.intl.string(L.t.QtMnkW),
            onClick: j,
            loading: T
        }) : (0, s.jsx)(c.Button, {
            variant: "secondary",
            size: "sm",
            text: L.intl.string(L.t["E8G/tr"]),
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
        }), b && null != f && !1 === d && (0, s.jsx)(c.Button, {
            variant: "primary",
            size: "sm",
            text: L.intl.string(L.t.R74ZBR),
            onClick: () => {
                x({
                    currentSubscription: r,
                    alternativeListings: I,
                    app: t,
                    subscriptionGroup: f,
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
            className: D.PX,
            children: [(0, s.jsxs)("div", {
                className: D.wV,
                children: [e && (0, s.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    children: L.intl.string(L.t.mORL67)
                }), (0, s.jsx)(x.A.Toggle, {
                    className: D.Bh,
                    text: e ? L.intl.string(L.t.gsbFAw) : L.intl.string(L.t.IwjfxV)
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
        className: D.Ji,
        children: (0, s.jsx)(c.D0$, {
            label: L.intl.string(L.t.azZaZa),
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
            children: [L.intl.format(L.t.IIHUUF, {
                subscriptionId: t.id
            }), (0, s.jsx)("br", {}), L.intl.format(L.t.fh65ES, {
                helpLink: "https://support.discord.com/hc/en-us"
            })]
        })
    }) : (0, s.jsx)("div", {
        className: D.Ji,
        children: (0, s.jsx)(c.D0$, {
            label: L.intl.string(L.t.azZaZa),
            children: (0, s.jsx)(E.A, {
                subscription: t,
                currentInvoicePreview: n,
                disabled: l || a
            })
        })
    })
}