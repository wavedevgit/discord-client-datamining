/** chunk id: 196291, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => M
}), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(631670),
    o = n(793574),
    c = n(688810),
    d = n(422936),
    u = n(234419),
    _ = n(10368),
    p = n(535646),
    m = n(511484),
    g = n(202639),
    A = n(811611),
    f = n(407217),
    b = n(101058),
    h = n(207803),
    E = n(836602),
    O = n(193658),
    C = n(954571),
    x = n(927578),
    S = n(884546),
    T = n(230084),
    I = n(180020),
    y = n(212168),
    N = n(730588),
    j = n(63675),
    v = n(253604),
    P = n(652215),
    R = n(788868),
    D = n(355097),
    L = n(985018),
    w = n(567567);

function M(e) {
    var t, n;
    let {
        user: M,
        isVisible: G,
        shouldShow: U
    } = e, k = x.Ay.isPremium(M), B = x.Ay.canUseAnimatedAvatar(M), {
        pendingAvatar: H,
        pendingThemeColors: V,
        tryItOutThemeColors: F,
        tryItOutAvatar: Y,
        tryItOutBanner: W
    } = (0, l.cf)([E.A], () => {
        var e, t;
        let n = E.A.getPendingChanges(),
            r = E.A.getErrors();
        return e = function(e) {
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
        }({}, n, E.A.getTryItOutChanges()), t = t = {
            errors: r
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }), {
        preset: K,
        onShuffle: z
    } = (0, _.A)(), Z = i.useRef(null);
    (0, O.A)(Z, D._F.TRY_IT_OUT);
    let {
        analyticsLocations: X,
        newestAnalyticsLocation: q,
        sourceAnalyticsLocations: J
    } = (0, c.Ay)(o.A.USER_SETTINGS_TRY_OUT_PREMIUM), Q = e => {
        e && ((0, a.zq)(Y), (0, h.Zz)(F), (0, h.Dv)(W), C.default.track(P.HAw.TRY_IT_OUT_PRESET_SELECTED, {
            preset: K
        }))
    };
    i.useEffect(() => {
        G && C.default.track(P.HAw.PREMIUM_UPSELL_VIEWED, {
            type: R.e.PREMIUM_PROFILE_TRY_IT_OUT,
            location: {
                page: P.liQ.USER_SETTINGS
            },
            location_stack: J
        })
    }, [J, M, G]);
    let $ = (null == (n = (0, u.V)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === R.pe.TIER_2,
        ee = (0, d.O)(),
        et = (0, m.U9)(ee, R.pe.TIER_2);
    return U ? (0, r.jsx)(c.f5, {
        value: X,
        children: (0, r.jsxs)(y.A, {
            ref: Z,
            className: w.MT,
            type: y.i.PREMIUM,
            isShown: !0,
            hasBackground: !0,
            children: [(0, r.jsx)(S.A, {
                layoutClassName: w.th,
                profilePreviewTitle: (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(s.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: w.PC
                    }), L.intl.string(L.t.gMlDNd)]
                }),
                profilePreview: (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(p.A, {
                        preset: K,
                        onShuffle: z
                    }), (0, r.jsx)(v.A, {
                        user: M
                    })]
                }),
                children: (0, r.jsxs)("div", {
                    className: w.EN,
                    children: [(0, r.jsxs)("div", {
                        children: [(0, r.jsx)(s.Heading, {
                            variant: "heading-xl/extrabold",
                            children: L.intl.string(L.t["2zGdAW"])
                        }), (0, r.jsx)(s.Text, {
                            className: w.h_,
                            variant: "text-sm/normal",
                            children: L.intl.string(L.t.xeEC20)
                        })]
                    }), (0, r.jsx)(j.A, {
                        className: w.fz,
                        user: M,
                        pendingAvatarSrc: (0, b.V7)({
                            userId: M.id,
                            image: null != Y ? Y : H
                        }),
                        pendingColors: null != F ? F : V,
                        onThemeColorsChange: h.a,
                        showPremiumIcon: !1,
                        preventDisabled: !0
                    }), (0, r.jsx)(N.A, {
                        className: w.fz,
                        isTryItOut: !0,
                        showRemoveBannerButton: null != W,
                        onBannerChange: h.xe,
                        showPremiumIcon: !1
                    }), !B && (0, r.jsx)(T.A, {
                        className: w.fz,
                        isTryItOut: !0,
                        onAvatarChange: h.e$,
                        showRemoveAvatarButton: !1,
                        changeAvatarButtonText: L.intl.string(L.t["7z0D1c"]),
                        sectionTitle: L.intl.string(L.t.vtFfPX)
                    }), (0, r.jsx)(I.A, {
                        user: M,
                        className: w.fz
                    }), !$ && (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: L.intl.string(L.t["smo74/"])
                    })]
                })
            }), !$ && (0, r.jsx)(g.d, {
                onSubscribeModalClose: Q,
                className: w.Kv,
                showUpsell: !0,
                text: L.intl.format(L.t.TmfgI2, {
                    onClick: () => {
                        (0, f.K)({
                            analyticsSource: q,
                            onSubscribeFinish: Q
                        })
                    }
                }),
                button: k ? L.intl.string(L.t.AfRWI8) : et ? L.intl.formatToPlainString(L.t.bkQ4bH, {
                    percent: null == ee ? void 0 : ee.discount.amount
                }) : L.intl.string(L.t.pj0XBN),
                position: "inline"
            }), $ && (0, r.jsxs)("div", {
                children: [(0, r.jsx)("div", {
                    className: w.BU
                }), (0, r.jsx)(A.Ay, {
                    type: R.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                    subscriptionTier: R.pe.TIER_2
                })]
            })]
        })
    }) : null
}