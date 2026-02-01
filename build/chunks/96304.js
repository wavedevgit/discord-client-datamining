/** chunk id: 96304, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => eN,
    l: () => eC
}), n(228524), n(896048), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(284009),
    l = n.n(s),
    c = n(735438),
    u = n.n(c),
    d = n(311907),
    f = n(582754),
    p = n(397927),
    _ = n(73153),
    h = n(923408),
    m = n(736653),
    g = n(775602),
    E = n(793574),
    y = n(688810),
    b = n(822123),
    O = n(770335),
    v = n(263063),
    A = n(931959),
    I = n(148355),
    S = n(950191),
    T = n(576622),
    C = n(270574),
    N = n(915614),
    w = n(946356),
    R = n(939496),
    P = n(780964),
    D = n(840065),
    L = n(71393),
    x = n(287809),
    M = n(178368),
    j = n(954571),
    k = n(486020),
    U = n(975571),
    G = n(927578),
    V = n(837921),
    F = n(112848),
    B = n(704640),
    H = n(149757),
    Y = n(30084),
    W = n(683793),
    K = n(499369),
    z = n(788868),
    q = n(652215),
    Z = n(985018),
    Q = n(565274),
    X = n(324770),
    J = n(838436),
    $ = n(376038),
    ee = n(66889),
    et = n(578586),
    en = n(955868),
    er = n(631294),
    ei = n(751297),
    ea = n(943298),
    eo = n(33487),
    es = n(581820);

function el(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function ec() {
    return (ec = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(this, arguments)
}

function eu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            el(e, t, n[t])
        })
    }
    return e
}

function ed(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function ef(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ed(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let ep = V.Ay.getEnableHardwareAcceleration() ? p.JsQ : p.euF,
    e_ = {
        boostItemVisual: et,
        emojiStickersVisual: en,
        screenShareItemVisual: eo,
        uploadsMessagesItemVisual: er,
        uploadsMessagesItemVisualV2: ei,
        PL: ea,
        TR: es
    },
    eh = {
        boostItemVisual: X,
        emojiStickersVisual: J,
        screenShareItemVisual: eo,
        uploadsMessagesItemVisual: $,
        uploadsMessagesItemVisualV2: ee,
        PL: ea,
        TR: es
    };

function em() {
    let e = (0, m.Ay)();
    return (0, f.Mw)(e) ? eh : e_
}

function eg(e) {
    let {
        description: t,
        onLearnMore: n,
        renderVisual: i
    } = e, a = eT();
    return (0, r.jsxs)("div", {
        className: o()(Q.Kw, {
            [Q.u0]: a
        }),
        children: [(0, r.jsxs)("div", {
            className: o()(Q.p3, {
                [Q.u0]: a
            }),
            children: [(0, r.jsx)(p.Text, {
                variant: "text-md/normal",
                children: t
            }), (0, r.jsx)(p.QWc, {
                onClick: n,
                text: Z.intl.string(Z.t.hvVgAZ)
            })]
        }), (0, r.jsx)("div", {
            className: o()(Q.aS, {
                [Q.u0]: a
            }),
            children: i()
        })]
    })
}

function eE(e) {
    let {} = e, t = ec({}, e), {
        theme: n
    } = (0, R.E)(), i = (0, p.rdh)(p.LU0.colors.INTERACTIVE_TEXT_ACTIVE, n).hex();
    return (0, r.jsx)(p.tvc, ef(eu({
        size: "md"
    }, t), {
        color: i
    }))
}

function ey(e) {
    let t, {
            currentUser: n,
            premiumType: i,
            onClose: a
        } = e,
        o = (0, S.Ay)(n.id),
        s = (0, d.bG)([g.A], () => g.A.useReducedMotion),
        l = i === z.PremiumTypes.TIER_1,
        c = () => {
            a(), (0, D.openUserSettings)(P.X.PROFILE_PANEL, {
                section: q.nc_.PROFILE_CUSTOMIZATION
            }), j.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                action: "user_profile_customization"
            })
        };
    return t = (null == o ? void 0 : o.premiumType) === z.PremiumTypes.TIER_2 ? (0, r.jsxs)(w.A, {
        user: n,
        displayProfile: o,
        forceShowPremium: !0,
        themeType: null,
        className: Q.Kq,
        children: [(0, r.jsx)(N.o, {
            user: n,
            displayProfile: o,
            avatarSize: p._3J.SIZE_56,
            avatarOffsetX: 8,
            avatarOffsetY: 2,
            bannerWidth: 172,
            bannerHeight: 60,
            themePadding: 4
        }), (0, r.jsx)(ep, {
            className: Q.jU,
            src: n.getAvatarURL(void 0, (0, p.FT9)(p._3J.SIZE_56), !s),
            size: p._3J.SIZE_56,
            "aria-label": n.username
        }), (0, r.jsxs)("div", {
            className: Q.b$,
            children: [(0, r.jsx)(C.A, {
                className: Q.Bj,
                usernameClass: Q.TE,
                name: n.toString()
            }), (0, r.jsx)(eE, {
                className: Q.kC
            })]
        })]
    }) : (0, r.jsxs)("div", {
        className: Q.xl,
        children: [(0, r.jsx)(ep, {
            className: Q.wK,
            src: n.getAvatarURL(void 0, (0, p.FT9)(p._3J.SIZE_56), !s),
            size: p._3J.SIZE_56,
            "aria-label": n.username
        }), (0, r.jsxs)("div", {
            className: Q.Un,
            children: [(0, r.jsx)(C.A, {
                className: Q.Bj,
                usernameClass: Q.TE,
                name: n.toString()
            }), (0, r.jsx)(p.tvc, {
                size: "md",
                color: "currentColor",
                className: Q.kC
            })]
        })]
    }), (0, r.jsx)(eg, {
        description: l ? Z.intl.format(Z.t.xCaYwE, {}) : Z.intl.format(Z.t["gpqr+n"], {}),
        onLearnMore: c,
        renderVisual: () => t
    })
}

function eb(e) {
    var t, n, i;
    let {
        currentUser: a,
        onClose: o
    } = e, s = (0, F.$F)(), {
        analyticsLocations: l
    } = (0, y.Ay)(E.A.PREMIUM_UNCANCEL_MODAL), c = (0, F.Xb)(), u = null != (t = null == s ? void 0 : s.id) ? t : z.Ac.PREMIUM_TENURE_1_MONTH, d = (0, B.A)(u);
    if (!(0, G.YE)(a, z.PremiumTypes.TIER_2) || null == c) return null;
    let f = null != (n = null == s ? void 0 : s.status) ? n : F.Wo.UPCOMING,
        _ = null != (i = null == s ? void 0 : s.nameUnformatted) ? i : z.VD[z.Ac.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        h = (0, H.I)(u),
        m = Z.intl.string(_),
        g = f === F.Wo.EARNED,
        b = null != s && "daysLeft" in s ? s.daysLeft : 1,
        O = Z.t.pwkxYF;
    if (g) {
        let e = Math.max((0, G.To)(c), 1);
        e >= 365 ? (b = Math.floor(e / 365), O = Z.t["/ojPfi"]) : (b = e, O = Z.t.IItWYo)
    }
    let v = () => {
        o(), (0, Y.D)({
            analyticsLocations: l,
            displayProfile: null
        }), j.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
            action: "badges"
        })
    };
    return (0, r.jsx)(eg, {
        description: Z.intl.format(O, {
            time: b
        }),
        onLearnMore: v,
        renderVisual: () => (0, r.jsx)(p.hLv, {
            className: Q.nc,
            color: d,
            children: (0, r.jsx)("img", {
                alt: m,
                src: h,
                className: Q.pq
            })
        })
    })
}

function eO(e) {
    let {
        premiumType: t
    } = e, n = 3, i = (0, d.bG)([g.A], () => g.A.useReducedMotion), a = (0, b.Fj)(null).filter(e => e.type === O.i.GUILD && (e.animated || null != e.guildId)).slice(0, n), o = (0, d.yK)([A.A], () => A.A.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, n - a.length)), s = em().emojiStickersVisual, l = t === z.PremiumTypes.TIER_1, c = () => {
        window.open(U.A.getArticleURL(q.MVz.PREMIUM_DETAILS)), j.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
            action: "emojis_stickers"
        })
    };
    return (0, r.jsx)(eg, {
        description: l ? Z.intl.format(Z.t.couiKJ, {}) : Z.intl.format(Z.t["0hUHi6"], {}),
        onLearnMore: c,
        renderVisual: () => null != a && a.length > 0 || !l && null != o && o.length > 0 ? (0, r.jsxs)("div", {
            className: Q.iB,
            children: [a.map(e => null == e.id ? e.url : k.Ay.getEmojiURL({
                id: e.id,
                animated: !i && e.animated,
                size: 58
            })).map((e, t) => null != e ? (0, r.jsx)("img", {
                className: Q.d7,
                alt: "",
                src: e
            }, "emoji-".concat(t)) : null), l ? null : o.map(e => (0, r.jsx)(I.A, {
                disableAnimation: i,
                sticker: e,
                size: 58,
                withLoadingIndicator: !1
            }, e.id))]
        }) : (0, r.jsx)("img", {
            className: Q.OP,
            alt: "",
            src: s
        })
    })
}

function ev(e) {
    let {
        premiumType: t,
        onClose: n
    } = e;
    i.useEffect(() => _.h.wait(() => (0, h.CD)()), []);
    let a = (0, d.bG)([g.A], () => g.A.useReducedMotion),
        [s, l] = (0, d.yK)([M.A, L.A], () => {
            let e = M.A.boostSlots,
                t = new Map;
            u()(e).map("premiumGuildSubscription").map("guildId").forEach(e => {
                if (null != L.A.getGuild(e)) {
                    var n;
                    let r = null != (n = t.get(e)) ? n : 0;
                    t.set(e, r + 1)
                }
            });
            let n = null,
                r = 0;
            return t.size > 0 && ([n, r] = Array.from(t.entries()).reduce((e, t) => t[1] > e[1] ? t : e)), [L.A.getGuild(n), r]
        }),
        c = null != s && l > 0,
        f = em().boostItemVisual,
        m = () => {
            n(), (0, D.openUserSettings)(P.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                section: q.nc_.GUILD_BOOSTING
            }), j.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                action: "boosts"
            })
        };
    return (0, r.jsx)(eg, {
        description: t === z.PremiumTypes.TIER_1 ? Z.intl.format(Z.t.K4Hv69, {}) : Z.intl.format(Z.t.wRxEDW, {}),
        onLearnMore: m,
        renderVisual: () => c ? (0, r.jsx)("div", {
            className: Q.Ht,
            children: (0, r.jsxs)("div", {
                className: Q.W5,
                children: [(0, r.jsx)(v.A, {
                    guild: s,
                    size: v.A.Sizes.MEDIUM,
                    animate: !a,
                    className: Q.Hc
                }), (0, r.jsxs)("div", {
                    className: Q.IA,
                    children: [(0, r.jsx)(p.Text, {
                        variant: "text-md/normal",
                        className: o()(Q.v, Q.e0),
                        children: s.name
                    }), (0, r.jsxs)("div", {
                        className: Q.i$,
                        children: [(0, r.jsx)(p._Jp, {
                            color: p.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                            className: Q.jZ
                        }), (0, r.jsx)(p.Text, {
                            variant: "text-xs/normal",
                            className: o()(Q.v, Q.x2),
                            children: Z.intl.format(Z.t["Ou/g/P"], {
                                boostCount: l
                            })
                        })]
                    })]
                })]
            })
        }) : (0, r.jsx)("img", {
            alt: "",
            src: f
        })
    })
}
let eA = () => {
    let e = em().screenShareItemVisual,
        t = () => {
            window.open(U.A.getArticleURL(q.MVz.STREAM_QUALITY_SETTINGS)), j.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                action: "screen_share"
            })
        };
    return (0, r.jsx)(eg, {
        description: Z.intl.format(Z.t.wK04T1, {}),
        onLearnMore: t,
        renderVisual: () => (0, r.jsx)("img", {
            alt: "",
            src: e
        })
    })
};

function eI(e) {
    let {
        premiumType: t
    } = e, n = em().uploadsMessagesItemVisual, i = () => {
        window.open(U.A.getArticleURL(q.MVz.PREMIUM_DETAILS)), j.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
            action: "msgs_uploads"
        })
    };
    return (0, r.jsx)(eg, {
        description: t === z.PremiumTypes.TIER_2 ? Z.intl.format(Z.t.GsOFRJ, {}) : Z.intl.format(Z.t.wFWO6D, {}),
        onLearnMore: i,
        renderVisual: () => (0, r.jsx)("img", {
            alt: "",
            src: n
        })
    })
}
let eS = i.createContext({
        isPremiumRebrand: !1
    }),
    eT = () => i.useContext(eS).isPremiumRebrand;

function eC(e) {
    let {
        currentUser: t,
        premiumType: n,
        onClose: a,
        isDowngrade: s = !1,
        isPremiumRebrand: l = !1
    } = e, c = i.useMemo(() => {
        let e = [];
        switch (n) {
            case z.PremiumTypes.TIER_0:
                e.push((0, r.jsx)(eO, {
                    premiumType: n
                }), (0, r.jsx)(eI, {
                    premiumType: n
                }));
                break;
            case z.PremiumTypes.TIER_1:
                s ? e.push((0, r.jsx)(ey, {
                    currentUser: t,
                    premiumType: n,
                    onClose: a
                }, "profile-item"), (0, r.jsx)(eA, {}, "screen-share-item"), (0, r.jsx)(ev, {
                    premiumType: n,
                    onClose: a
                }, "boost-item")) : e.push((0, r.jsx)(ey, {
                    currentUser: t,
                    premiumType: n,
                    onClose: a
                }, "profile-item"), (0, r.jsx)(eO, {
                    premiumType: n
                }, "emoji-stickers-item"), (0, r.jsx)(eA, {}, "screen-share-item"), (0, r.jsx)(eI, {
                    premiumType: n
                }, "uploads-item"), (0, r.jsx)(ev, {
                    premiumType: n,
                    onClose: a
                }, "boost-item"));
                break;
            case z.PremiumTypes.TIER_2:
                s ? e.push((0, r.jsx)(ey, {
                    currentUser: t,
                    premiumType: n,
                    onClose: a
                }, "profile-item"), (0, r.jsx)(ev, {
                    premiumType: n,
                    onClose: a
                }, "boost-item"), (0, r.jsx)(eA, {}, "screen-share-item")) : e.push((0, r.jsx)(eb, {
                    currentUser: t,
                    onClose: a
                }, "badge-item"), (0, r.jsx)(ey, {
                    currentUser: t,
                    premiumType: n,
                    onClose: a
                }, "profile-item"), (0, r.jsx)(eO, {
                    premiumType: n
                }, "emoji-stickers-item"), (0, r.jsx)(ev, {
                    premiumType: n,
                    onClose: a
                }, "boost-item"), (0, r.jsx)(eA, {}, "screen-share-item"), (0, r.jsx)(eI, {
                    premiumType: n
                }, "uploads-item"))
        }
        return e
    }, [n, t, a, s]);
    return (0, r.jsx)(eS.Provider, {
        value: {
            isPremiumRebrand: l
        },
        children: (0, r.jsx)("div", {
            className: o()(Q.xP, {
                [Q.u0]: l,
                [Q.mK]: l && c.length <= 2
            }),
            children: c
        })
    })
}
let eN = function(e) {
    let {
        premiumType: t,
        titleText: n,
        subtitleText: a,
        footer: o,
        onClose: s,
        onDiscountClaim: c,
        onContinue: u,
        analyticsLocations: f,
        isLoading: _ = !1,
        churnUserDiscountOffer: h = null,
        isDowngrade: m = !1,
        subtitleIcon: g,
        subtitleClassName: E
    } = e, y = (0, d.bG)([x.default], () => {
        let e = x.default.getCurrentUser();
        return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e
    });
    i.useEffect(() => {
        (0, T.A)(y.id, y.getAvatarURL(null, 80))
    }, [y]);
    let b = null != h && !_;
    return (i.useEffect(() => {
        b && j.default.track(q.HAw.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
            location_stack: f,
            discount_id: null == h ? void 0 : h.discount_id
        })
    }, [b, f, h]), _) ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(K.A, {
            premiumType: t,
            onClose: s
        }), (0, r.jsx)(p.$mQ, {
            "data-migration-pending": !0,
            className: Q.rf,
            children: (0, r.jsx)(p.y$y, {
                className: Q.u1
            })
        })]
    }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(K.A, {
            premiumType: t,
            onClose: s
        }), (0, r.jsxs)(p.$mQ, {
            "data-migration-pending": !0,
            className: Q.rf,
            children: [(0, r.jsx)(p.Heading, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                className: Q.DD,
                children: n
            }), (0, r.jsxs)("div", {
                className: E,
                children: [g, (0, r.jsx)(p.Text, {
                    variant: "text-md/normal",
                    children: a
                })]
            }), (0, r.jsx)(eC, {
                currentUser: y,
                premiumType: t,
                onClose: s,
                isDowngrade: m
            })]
        }), !b && (0, r.jsx)(p.jlY, {
            "data-migration-pending": !0,
            children: o
        }), b && (0, r.jsx)(W.A, {
            churnUserDiscountOffer: h,
            onDiscountClaim: c,
            onContinue: u
        })]
    })
}