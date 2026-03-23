/** chunk id: 888848 params = (module,exports,require) **/
n.d(t, {
    A: () => M,
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
    m = n(793574),
    _ = n(688810),
    g = n(943775),
    A = n(123791),
    x = n(147441),
    p = n(627363),
    h = n(263063),
    f = n(543767),
    T = n(420139),
    E = n(272207),
    S = n(71393),
    b = n(97352),
    C = n(67480),
    N = n(328968),
    v = n(580630),
    I = n(163437),
    j = n(3432),
    y = n(572566),
    O = n(861621),
    R = n(652215),
    L = n(985018),
    P = n(486526),
    D = ((i = {})[i.LOADING = 0] = "LOADING", i[i.DONE = 1] = "DONE", i[i.ERROR = 2] = "ERROR", i);

function M(e) {
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
        storeListing: T,
        isGuildSubscription: E,
        subscriptionForGuild: v,
        sku: j,
        isCancelled: O,
        renewalPlan: D
    } = (0, o.cf)([b.A, C.A, N.A, S.A], () => {
        let e, n = b.A.get(u),
            i = null != n ? C.A.get(n.skuId) : void 0,
            s = i?.applicationId,
            l = null != n ? N.A.getForSKU(n.skuId) : null,
            a = null != l && (0, I.PJ)(l.skuFlags),
            o = a && null != r ? S.A.getGuild(r) : void 0,
            c = (0, I.Uo)(t, i);
        if (!1 === c && null != d && d.items.length > 0) {
            let t = d.items[0];
            e = b.A.get(t.planId) ?? void 0
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
        data: M
    } = (0, p.YY)(A), H = l.useMemo(() => null != M ? (0, g.A)(M, 100) : null, [M]), z = j?.deleted ?? !1, Y = null != j && (0, I.Se)(j), X = t.status === R.Dmq.PAST_DUE, {
        analyticsLocations: W
    } = (0, _.Ay)(), [K, Z] = (0, f.Kq)({
        subscriptionId: t.id,
        renewal: !0,
        analyticsLocations: W,
        analyticsLocation: m.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
    }), q = Z?.code === 100062 && null != r && null == v, J = (0, y.Y)(t.currentPeriodEnd), Q = 0 === i;
    return (0, s.jsxs)(a.q, {
        headerClassName: P.dL,
        header: !1 === Q ? (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsxs)("div", {
                className: P.VW,
                children: [null != H && (0, s.jsx)(c._V3, {
                    src: H.href,
                    imageClassName: P.Z2,
                    width: 40,
                    height: 40
                }), (0, s.jsxs)("div", {
                    className: P.aF,
                    children: [(0, s.jsx)(c.Heading, {
                        variant: "heading-md/semibold",
                        lineClamp: 1,
                        children: M?.name ?? L.intl.string(L.t["7kqy7W"])
                    }), (0, s.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: x?.name ?? L.intl.string(L.t.sqkbMK)
                    })]
                })]
            }), (0, s.jsx)("div", {
                className: P.Pz,
                children: null != M && null != T && null != j && !1 === q && (0, s.jsx)(V, {
                    subscription: t,
                    app: M,
                    guild: v,
                    sku: j,
                    storeListing: T,
                    isCancelled: O,
                    navigateToSwitchPlan: n,
                    renewalSkuId: D?.skuId
                })
            })]
        }) : (0, s.jsx)(c.y$y, {
            type: c.tVU.PULSING_ELLIPSIS
        }),
        children: [O && (0, s.jsx)(w, {
            type: "warning",
            title: Y ? L.intl.formatToPlainString(L.t.QOnM1y, {
                subscriptionPeriodEnd: J
            }) : L.intl.formatToPlainString(L.t.HOaZu8, {
                subscriptionPeriodEnd: J
            })
        }), q && (0, s.jsx)(w, {
            type: "warning",
            title: L.intl.formatToPlainString(L.t.HOaZu8, {
                subscriptionPeriodEnd: J
            })
        }), X && (0, s.jsx)(w, {
            type: "danger",
            title: L.intl.string(L.t.fvOqBo)
        }), (0, s.jsxs)("div", {
            className: P.zH,
            children: [(0, s.jsx)(U, {
                title: L.intl.string(L.t["5D/KEH"]),
                content: E ? (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)("span", {
                        className: P.yW,
                        children: [(0, s.jsx)(c.RR9, {
                            size: "xs"
                        }), L.intl.string(L.t.QjL3vn)]
                    }), null != v && (0, s.jsxs)("span", {
                        className: P._t,
                        children: [(0, s.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: L.intl.format(L.t["7ZD8p1"], {
                                guildName: v.name
                            })
                        }), (0, s.jsx)(h.Ay, {
                            guild: v,
                            size: h.Ay.Sizes.MINI
                        })]
                    })]
                }) : (0, s.jsxs)("span", {
                    className: P.yW,
                    children: [(0, s.jsx)(c.nys, {
                        size: "xs"
                    }), L.intl.string(L.t["6anEVv"])]
                })
            }), (0, s.jsx)(G, {
                invoicePreview: K,
                subscriptionPlan: x
            }), (0, s.jsx)(U, {
                title: L.intl.string(L.t.dnUzb6),
                content: (0, y.Y)(t.createdAt ?? t.currentPeriodStart)
            }), (0, s.jsx)(k, {
                isCancelled: O,
                subscriptionPeriodEnd: J,
                renewalPlan: D
            })]
        }), (0, s.jsx)(F, {
            subscription: t,
            currentInvoicePreview: K,
            loadingState: i,
            isDeleted: z,
            isCancelled: O
        }), null != M && T?.benefits != null && T.benefits.length > 0 && (0, s.jsx)(B, {
            appId: M.id,
            listingBenefits: T.benefits
        })]
    })
}

function G(e) {
    let {
        subscriptionPlan: t,
        invoicePreview: n
    } = e;
    if (null == t) return (0, s.jsx)(U, {
        title: L.intl.string(L.t.KI7ERx),
        content: ""
    });
    let i = (0, v.CE)((0, v.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = n?.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, s.jsx)(U, {
        title: L.intl.string(L.t.KI7ERx),
        content: i
    });
    let a = (0, v.CE)((0, v.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, s.jsx)(U, {
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

function k(e) {
    let {
        isCancelled: t,
        subscriptionPeriodEnd: n,
        renewalPlan: i
    } = e;
    if (null != i) {
        let e = (0, v.CE)((0, v.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, s.jsx)(U, {
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
    return (0, s.jsx)(U, {
        title: t ? L.intl.string(L.t.enxcAl) : L.intl.string(L.t["Ms+6Zq"]),
        content: n
    })
}

function U(e) {
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

function w(e) {
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

function V(e) {
    let {
        app: t,
        storeListing: i,
        sku: a,
        subscription: r,
        isCancelled: d,
        guild: m,
        renewalSkuId: g,
        navigateToSwitchPlan: x
    } = e, p = (0, I.Se)(a), {
        analyticsLocations: h
    } = (0, _.Ay)(), [f, T] = l.useState(!1), S = (0, A.C)(t.id), b = (0, o.bG)([C.A], () => C.A.getParentSKU(i.skuId), [i.skuId]), N = l.useMemo(() => null == b ? [] : (0, O.l)(i.id, b, S.subscriptions), [i.id, S, b]), v = 0 !== N.length, j = async () => {
        try {
            T(!0);
            let {
                subscription: e
            } = await (0, u.QP)(r, h);
            if (null == e) return;
            (0, c.mMO)(async () => {
                let {
                    default: t
                } = await n.e("52396").then(n.bind(n, 115623));
                return n => (0, s.jsx)(t, {
                    ...n,
                    storeListing: i,
                    subscription: E.A.createFromServer(e)
                })
            })
        } finally {
            T(!1)
        }
    };
    return (0, s.jsxs)("div", {
        className: P.fw,
        children: [p ? null : d ? (0, s.jsx)(c.Button, {
            variant: "secondary",
            size: "sm",
            text: L.intl.string(L.t.QtMnkW),
            onClick: j,
            loading: f
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
                        guild: m
                    })
                })
            }
        }), v && null != b && !1 === d && (0, s.jsx)(c.Button, {
            variant: "primary",
            size: "sm",
            text: L.intl.string(L.t.R74ZBR),
            onClick: () => {
                x({
                    currentSubscription: r,
                    alternativeListings: N,
                    app: t,
                    subscriptionGroup: b,
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
                    children: L.intl.string(L.t.mORL67)
                }), (0, s.jsx)(x.A.Toggle, {
                    className: P.Bh,
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

function F(e) {
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
            label: L.intl.string(L.t.azZaZa),
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
            children: [L.intl.format(L.t.IIHUUF, {
                subscriptionId: t.id
            }), (0, s.jsx)("br", {}), L.intl.format(L.t.fh65ES, {
                helpLink: "https://support.discord.com/hc/en-us"
            })]
        })
    }) : (0, s.jsx)("div", {
        className: P.Ji,
        children: (0, s.jsx)(c.D0$, {
            label: L.intl.string(L.t.azZaZa),
            children: (0, s.jsx)(T.A, {
                subscription: t,
                currentInvoicePreview: n,
                disabled: l || a
            })
        })
    })
}