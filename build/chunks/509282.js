/** Chunk was on web.js **/
/** chunk id: 509282, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $: () => L,
    G: () => x
}), n(896048), n(938796), n(228524), n(733351);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(996759),
    u = n(800342),
    d = n(627363),
    f = n(587895),
    p = n(163437),
    _ = n(185438),
    h = n(734057),
    m = n(97352),
    g = n(31455),
    E = n(67480),
    y = n(328968),
    b = n(954571),
    O = n(957565),
    v = n(943775),
    A = n(997997),
    I = n(658575),
    S = n(376374),
    T = n(652215),
    C = n(435220),
    N = n(985018),
    w = n(159740);
let R = (0, o.UT)([E.A, y.A, m.A], {
        getQueryId: T.fic.SKU,
        get: e => {
            if (null == e) return;
            let t = E.A.get(e),
                n = y.A.getForSKU(e);
            if (null == t || null == n) return;
            let r = m.A.getForSKU(e);
            return {
                sku: t,
                storeListing: n,
                subscriptionPlan: null != r ? r[0] : void 0
            }
        },
        load: async e => {
            s()(null != e, "skuId is null"), await (0, u.QB)(e)
        }
    }),
    P = (0, o.UT)([E.A], {
        getQueryId: T.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
        get: e => {
            var t;
            return null == e ? null : null != (t = E.A.getParentSKU(e)) ? t : null
        },
        load: async (e, t) => {
            s()(null != e && null != t, "appId is null"), await (0, u.JI)(t)
        }
    });

function D(e, t) {
    var n, r;
    let {
        data: i
    } = R(e), a = null == i ? void 0 : i.sku, s = null == i ? void 0 : i.subscriptionPlan, o = null == i ? void 0 : i.storeListing, {
        data: l
    } = P(e, null != (n = null == a || null == (r = a.application) ? void 0 : r.id) ? n : null == a ? void 0 : a.applicationId);
    return {
        parentSku: l,
        sku: (null == a ? void 0 : a.applicationId) === t ? a : null,
        storeListing: o,
        subscriptionPlan: s
    }
}

function x(e) {
    let {
        appId: t,
        message: a
    } = e, s = (0, I.G)(t), {
        data: u
    } = (0, d.YY)(t), [p, _, m, E] = (0, o.yK)([f.A, g.A, h.A], () => {
        var e;
        let n = f.A.getApplication(t),
            r = null != n ? (0, v.A)(n, 45) : void 0,
            i = null == (e = h.A.getBasicChannel(a.channel_id)) ? void 0 : e.guild_id;
        return [g.A.getStoreLayout(t), g.A.getFetchStatus(t), i, r]
    }, [t, a.channel_id]);
    i.useEffect(() => {
        _ === g.N.NONE && (0, c.V)(t)
    }, [t, _]);
    let y = p.subscriptions.length,
        O = p.otps.length,
        S = i.useMemo(() => y > 0 && O > 0 ? N.intl.formatToPlainString(N.t["jA648+"], {
            subCount: y,
            itemCount: O
        }) : y > 0 ? N.intl.formatToPlainString(N.t.GSfibA, {
            count: y
        }) : O > 0 ? N.intl.formatToPlainString(N.t.j7Go5A, {
            count: O
        }) : N.intl.string(N.t.rMA98g), [O, y]);
    if (!s || null == u) return null;
    let R = () => {
            (0, l.mMO)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("33563"), n.e("80212")]).then(n.bind(n, 719847));
                return n => (0, r.jsx)(e, {
                    transitionState: n.transitionState,
                    onClose: n.onClose,
                    appId: t,
                    guildId: m
                })
            })
        },
        P = () => {
            R(), b.default.track(T.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                application_id: t,
                area: "app_icon"
            })
        },
        D = () => {
            R(), b.default.track(T.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                application_id: t,
                area: "open_store_button"
            })
        },
        x = () => {
            (0, A.K)(t, A.C.STORE_EMBED)
        };
    return (0, r.jsx)(j, {
        appName: u.name,
        title: N.intl.formatToPlainString(N.t.XDRjs5, {
            appName: u.name
        }),
        description: S,
        link: "".concat(location.protocol, "//").concat(location.host).concat(T.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(u.id, C.GlobalDiscoveryAppsSections.STORE)),
        onLinkCopy: x,
        iconSrc: E,
        onIconClick: P,
        children: (0, r.jsx)("div", {
            className: w.mZ,
            children: (0, r.jsx)(l.Button, {
                onClick: D,
                text: N.intl.string(N.t.kRvlKJ)
            })
        })
    })
}

function L(e) {
    var t, a;
    let {
        appId: s,
        skuId: c,
        message: u
    } = e, {
        parentSku: f,
        sku: m,
        subscriptionPlan: g,
        storeListing: E
    } = D(c, s), {
        data: y
    } = (0, d.YY)(null == m ? void 0 : m.applicationId), O = (0, o.bG)([h.A], () => {
        var e;
        return null == (e = h.A.getBasicChannel(u.channel_id)) ? void 0 : e.guild_id
    }, [u]), R = i.useMemo(() => null != y ? (0, v.A)(y, 45) : void 0, [y]), P = (0, I.G)(null != (t = null == y ? void 0 : y.id) ? t : ""), {
        openModal: x,
        subscriptionPurchaseButtonState: L
    } = (0, _.A)({
        skuId: c,
        initialSubscribeForGuild: O
    });
    if (!P || null == y || null == m) return null;
    let M = m.type === T.Puh.SUBSCRIPTION,
        k = !!M && (0, p.bg)(m.flags),
        U = () => {
            (0, l.mMO)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("33563"), n.e("80212")]).then(n.bind(n, 719847));
                return t => (0, r.jsx)(e, {
                    transitionState: t.transitionState,
                    onClose: t.onClose,
                    appId: y.id,
                    guildId: O
                })
            })
        },
        G = () => {
            (0, l.mMO)(async () => {
                let e = M ? (await Promise.resolve().then(n.bind(n, 168393))).SubscriptionDetailsModal : null,
                    t = M ? null : (await Promise.resolve().then(n.bind(n, 963179))).ItemDetailsModal;
                return n => {
                    let i = () => {
                        n.onClose(), U()
                    };
                    return null != e && null != f ? (0, r.jsx)(e, {
                        transitionState: n.transitionState,
                        appId: y.id,
                        skuId: m.id,
                        guildId: O,
                        subscriptionType: k ? "user" : "guild",
                        onClose: n.onClose,
                        onHeaderTitleClick: i
                    }) : null != t ? (0, r.jsx)(t, {
                        transitionState: n.transitionState,
                        appId: y.id,
                        skuId: c,
                        onClose: n.onClose,
                        onHeaderTitleClick: i
                    }) : null
                }
            })
        },
        V = 12,
        F = M ? k ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(l.nys, {
                size: "custom",
                width: V,
                height: V
            }), " ", N.intl.string(N.t.wnifjC)]
        }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(l.RR9, {
                size: "custom",
                width: V,
                height: V
            }), " ", N.intl.string(N.t.NRC3ar)]
        }) : null == E || null == (a = E.description) ? void 0 : a.trim();
    "" === F && (F = void 0);
    let B = () => {
            U(), b.default.track(T.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: y.id,
                sku_id: m.id,
                area: "app_icon"
            })
        },
        H = () => {
            G(), b.default.track(T.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: y.id,
                sku_id: m.id,
                area: "view_details"
            })
        },
        Y = () => {
            b.default.track(T.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: y.id,
                sku_id: m.id,
                area: "purchase_button"
            })
        },
        W = () => {
            (0, A.K)(y.id, A.C.SKU_EMBED, c)
        };
    return (0, r.jsx)(j, {
        appName: y.name,
        title: m.name,
        description: F,
        link: "".concat(location.protocol, "//").concat(location.host).concat(T.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(y.id, C.GlobalDiscoveryAppsSections.STORE)),
        onLinkCopy: W,
        iconSrc: R,
        onIconClick: B,
        children: (0, r.jsxs)("div", {
            className: w.w,
            children: [(0, r.jsx)(l.Button, {
                variant: "secondary",
                onClick: H,
                text: N.intl.string(N.t.DXYfjO)
            }), M ? null != g ? (0, r.jsx)(S.rc, {
                onClick: x,
                appId: y.id,
                subscriptionType: k ? "user" : "guild",
                skuId: m.id,
                icon: l.U1X,
                onHasClicked: Y,
                subscriptionPlan: g,
                state: L
            }) : (0, r.jsx)(l.Button, {
                variant: "primary",
                text: N.intl.string(N.t.uuzaAK),
                onClick: G
            }) : (0, r.jsx)(S.$P, {
                appId: y.id,
                sku: m,
                icon: l.U1X,
                onHasClicked: Y
            })]
        })
    })
}

function j(e) {
    let {
        appName: t,
        title: n,
        description: i,
        link: a,
        iconSrc: s,
        onIconClick: o,
        onLinkCopy: c,
        children: u
    } = e;
    return (0, r.jsxs)("div", {
        className: w.iE,
        children: [(0, r.jsxs)("div", {
            className: w.wx,
            children: [(0, r.jsxs)("div", {
                className: w.qd,
                children: [(0, r.jsx)(l.U1X, {
                    size: "xxs"
                }), (0, r.jsx)(l.Text, {
                    variant: "eyebrow",
                    color: "text-muted",
                    children: t
                })]
            }), O.p5 && (0, r.jsx)(l.K0, {
                "aria-label": N.intl.string(N.t.WqhZss),
                icon: () => (0, r.jsx)(l.qYV, {
                    size: "xs"
                }),
                size: "sm",
                onClick: () => {
                    (0, O.C)(a, () => {
                        (0, l.showToast)((0, l.createToast)(N.intl.string(N.t["L/PwZf"]), l.ToastType.SUCCESS)), c()
                    })
                },
                variant: "icon-only"
            })]
        }), (0, r.jsxs)("div", {
            className: w.Qs,
            children: [(0, r.jsxs)("div", {
                className: w.oB,
                children: [null != s && (0, r.jsx)(l.DUT, {
                    onClick: o,
                    children: (0, r.jsx)("img", {
                        src: s.href,
                        alt: "",
                        className: w.Z2
                    })
                }), (0, r.jsxs)("div", {
                    className: w.Tf,
                    style: null == i ? {
                        justifyContent: "space-evenly"
                    } : void 0,
                    children: [(0, r.jsx)(l.Text, {
                        variant: "heading-md/semibold",
                        tag: "div",
                        children: n
                    }), null != i && (0, r.jsx)(l.Text, {
                        variant: "heading-md/medium",
                        color: "text-muted",
                        tag: "div",
                        className: w.h_,
                        children: i
                    })]
                })]
            }), u]
        })]
    })
}