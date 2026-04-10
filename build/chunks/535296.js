/** chunk id: 535296 params = (module,exports,require) **/
n.d(t, {
    Vp: () => V,
    Z: () => K,
    fd: () => W
});
var i = n(627968),
    l = n(64700),
    a = n(835245),
    s = n(695095),
    r = n(158954),
    o = n(311907),
    c = n(793574),
    d = n(688810),
    u = n(201718),
    h = n(633075),
    m = n(622543),
    A = n(605694),
    g = n(246356),
    p = n(332772),
    _ = n(594832),
    f = n(631784),
    E = n(310209),
    C = n(961350),
    x = n(287809),
    S = n(954571),
    I = n(427262),
    T = n(871123),
    v = n(832163),
    N = n(453774),
    y = n(44724),
    b = n(84511),
    j = n(817176),
    R = n(129114),
    M = n(652215),
    L = n(360469),
    O = n(985018),
    D = n(274647);
let P = `vc-gifting-${(0,a.A)()}`,
    U = Object.freeze([]);

function k(e) {
    let {
        application: t
    } = e;
    if (null == t) return null;
    let n = t.getIconURL(L.iu.SMALL);
    return (0, i.jsxs)(r.BJc, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        children: [null != n && (0, i.jsx)("img", {
            className: D.In,
            src: n,
            alt: t.name
        }), (0, i.jsx)(r.EYj, {
            className: D.DD,
            variant: "text-sm/normal",
            children: t.name
        })]
    })
}

function w(e) {
    let {
        user: t,
        isGift: n
    } = e, l = O.intl.string(O.t.kv4lSp), a = O.intl.string(O.t.vzZoSF);
    return n && (l = null != t ? O.intl.format(O.t.YwV901, {
        username: I.Ay.getName(t)
    }) : O.intl.string(O.t.qCmNFr), a = O.intl.string(O.t.SSgrne)), (0, i.jsxs)(r.BJc, {
        direction: "vertical",
        gap: 4,
        children: [(0, i.jsx)(r.DZT, {
            id: P,
            className: D.DD,
            variant: "text-md/normal",
            children: l
        }), (0, i.jsx)(r.EYj, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: a
        })]
    })
}

function G(e) {
    let {
        application: t,
        onClose: n
    } = e, a = t?.id, s = l.useCallback(() => {
        if (null != a) {
            let e = v.A.getGuildIdFromApplicationId(a);
            null != e && (0, y.X)({
                guildId: e
            })
        }
    }, [a]), o = l.useCallback(() => {
        if (null != a) {
            let e = v.A.getGuildIdFromApplicationId(a);
            null != e && (n(), (0, y.default)({
                guildId: e
            }))
        }
    }, [a, n]);
    return null == t ? null : (0, i.jsx)(r.$nd, {
        variant: "secondary",
        icon: r.I9m,
        iconPosition: "end",
        text: O.intl.format(O.t["HDT/rg"], {
            applicationName: t.name
        }),
        onClick: o,
        onMouseDown: s,
        fullWidth: !0
    })
}

function F(e) {
    let {
        userId: t,
        applicationId: n,
        channel: i,
        numItems: a
    } = e, r = l.useMemo(() => [t], [t]), o = l.useMemo(() => null != n ? [n] : [], [n]), {
        status: c,
        recommendations: d,
        skusToUserAndReason: u
    } = (0, f.XQ)({
        userIds: r,
        applicationIds: o,
        numItems: a
    }), h = "loading" === c || 0 === d.length, m = (0, s.A)(h ? U : d, H), A = l.useMemo(() => {
        let {
            hasWishlist: e,
            hasPopular: t
        } = (0, T.wH)(d, u, new Set(r));
        return e && t
    }, [d, u, r]);
    return l.useEffect(() => {
        0 !== d.length && S.default.track(M.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
            guild_id: i.guild_id,
            channel_id: i.id,
            sku_ids: d.map(e => e.id)
        })
    }, [i.id, i.guild_id, d]), {
        status: c,
        recommendations: m,
        skusToUserAndReason: u,
        hasBothSources: A
    }
}

function H(e, t) {
    return e.id === t.id
}

function B(e, t) {
    return e instanceof h.R && e.applicationId === t
}

function V(e) {
    let {
        userId: t,
        applicationId: n,
        channel: a,
        onClose: s
    } = e;
    (0, p.T)({
        location: "social_layer_gifting_voice_panel"
    }), (0, u.P)(t);
    let {
        analyticsLocations: h
    } = (0, d.Ay)(c.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL), f = (0, o.bG)([x.default], () => x.default.getUser(t)), S = (0, o.bG)([m.A], () => m.A.getWidgets(t)?.find(e => B(e, n))), I = t === (0, o.bG)([C.default], () => C.default.getId()), T = (0, N.A)(n), {
        status: v,
        recommendations: y,
        skusToUserAndReason: j,
        hasBothSources: M
    } = F({
        userId: t,
        applicationId: n,
        channel: a,
        numItems: 8
    }), L = "loading" === v || 0 === y.length || null == f, O = l.useMemo(() => null == f || 0 === y.length ? [] : y.map(e => {
        let n = (j[e.id] ?? {})[t] === E.j.WISHLIST;
        return (0, i.jsx)(R.A, {
            sku: e,
            targetUser: f,
            isTargetingCurrentUser: I,
            source: n ? _.uS.WISHLIST : _.uS.POPULAR,
            guildId: a.guild_id,
            channelId: a.id,
            showIcons: M,
            analyticsLocations: h,
            onCardClick: s,
            onButtonClick: s
        }, e.id)
    }), [f, y, a.guild_id, a.id, j, t, I, M, h, s]);
    return (0, i.jsx)(g.A, {
        children: (0, i.jsx)(r.lGe, {
            "aria-labelledby": P,
            modal: !1,
            children: (0, i.jsxs)("div", {
                className: D.kL,
                children: [(0, i.jsxs)(r.BJc, {
                    className: D.wx,
                    direction: "vertical",
                    gap: 12,
                    children: [null != f && null != S ? (0, i.jsx)("div", {
                        className: D.p,
                        children: (0, i.jsx)(A.A, {
                            user: f,
                            widget: S,
                            guildId: a.guild_id,
                            channelId: a.id,
                            disableInteraction: !0,
                            embedded: !0
                        })
                    }) : (0, i.jsx)(k, {
                        application: T
                    }), (0, i.jsx)(w, {
                        user: f,
                        isGift: !I
                    })]
                }), L ? (0, i.jsx)(r.y$y, {
                    className: D.Zp
                }) : (0, i.jsx)("div", {
                    className: D.HV,
                    children: O
                }), (0, i.jsx)(G, {
                    application: T,
                    onClose: s
                }), (0, i.jsx)(b.A, {
                    location: "social_layer_vc_gifting_panel",
                    className: D.Ij
                })]
            })
        })
    })
}

function W(e) {
    let {
        userId: t,
        applicationId: n,
        channel: l
    } = e;
    (0, u.P)(t);
    let a = (0, o.bG)([x.default], () => x.default.getUser(t)),
        s = (0, o.bG)([m.A], () => m.A.getWidgets(t)?.find(e => B(e, n))),
        c = null == a || null == s;
    return (0, i.jsx)(g.A, {
        children: (0, i.jsx)(r.lGe, {
            modal: !1,
            children: (0, i.jsx)("div", {
                className: D.kL,
                children: c ? (0, i.jsx)(r.y$y, {
                    className: D.ps
                }) : (0, i.jsx)("div", {
                    className: D.$4,
                    children: (0, i.jsx)(A.A, {
                        user: a,
                        widget: s,
                        guildId: l.guild_id,
                        channelId: l.id,
                        disableInteraction: !0,
                        embedded: !0
                    })
                })
            })
        })
    })
}

function K(e) {
    let {
        userId: t,
        applicationId: n,
        channel: a,
        onClose: s
    } = e;
    (0, p.T)({
        location: "social_layer_gifting_voice_panel"
    });
    let {
        analyticsLocations: u
    } = (0, d.Ay)(c.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL), h = (0, o.bG)([x.default], () => x.default.getUser(t)), m = t === (0, o.bG)([C.default], () => C.default.getId()), A = (0, N.A)(n), {
        status: f,
        recommendations: S,
        skusToUserAndReason: I,
        hasBothSources: T
    } = F({
        userId: t,
        applicationId: n,
        channel: a,
        numItems: 7
    }), v = "loading" === f || 0 === S.length || null == h, [y, M] = l.useMemo(() => {
        if (null == h || 0 === S.length) return [null, []];
        let e = (I[S[0].id] ?? {})[t] === E.j.WISHLIST;
        return [(0, i.jsx)(j.A, {
            sku: S[0],
            targetUser: h,
            isTargetingCurrentUser: m,
            source: e ? _.uS.WISHLIST : _.uS.POPULAR,
            guildId: a.guild_id,
            channelId: a.id,
            showIcons: T,
            analyticsLocations: u,
            onCardClick: s,
            onButtonClick: s
        }), S.slice(1).map(e => {
            let n = (I[e.id] ?? {})[t] === E.j.WISHLIST;
            return (0, i.jsx)(R.A, {
                sku: e,
                targetUser: h,
                isTargetingCurrentUser: m,
                source: n ? _.uS.WISHLIST : _.uS.POPULAR,
                guildId: a.guild_id,
                channelId: a.id,
                showIcons: T,
                analyticsLocations: u,
                onCardClick: s,
                onButtonClick: s
            }, e.id)
        })]
    }, [h, S, I, t, m, a.guild_id, a.id, T, u, s]);
    return (0, i.jsx)(g.A, {
        children: (0, i.jsx)(r.lGe, {
            "aria-labelledby": P,
            modal: !1,
            children: (0, i.jsxs)("div", {
                className: D.kL,
                children: [(0, i.jsxs)(r.BJc, {
                    className: D.wx,
                    direction: "vertical",
                    gap: 12,
                    children: [(0, i.jsx)(k, {
                        application: A
                    }), (0, i.jsx)(w, {
                        user: h,
                        isGift: !m
                    })]
                }), v ? (0, i.jsx)(r.y$y, {
                    className: D.kc
                }) : (0, i.jsxs)(r.BJc, {
                    direction: "vertical",
                    gap: 12,
                    children: [y, (0, i.jsx)("div", {
                        className: D.aS,
                        children: M
                    })]
                }), (0, i.jsx)(G, {
                    application: A,
                    onClose: s
                }), (0, i.jsx)(b.A, {
                    location: "social_layer_vc_gifting_panel",
                    className: D.Ij
                })]
            })
        })
    })
}