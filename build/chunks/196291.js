/** chunk id: 196291 params = (module,exports,require) **/
n.d(t, {
    A: () => G
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(631670),
    o = n(793574),
    d = n(688810),
    c = n(422936),
    u = n(234419),
    _ = n(10368),
    m = n(535646),
    g = n(511484),
    A = n(202639),
    x = n(811611),
    h = n(407217),
    p = n(101058),
    T = n(207803),
    E = n(836602),
    S = n(954571),
    f = n(927578),
    C = n(884546),
    b = n(597551),
    N = n(230084),
    I = n(180020),
    v = n(212168),
    j = n(730588),
    y = n(63675),
    R = n(253604),
    O = n(652215),
    L = n(788868),
    D = n(355097),
    P = n(985018),
    M = n(219501);

function G(e) {
    let {
        user: t,
        isVisible: n,
        shouldShow: G
    } = e, U = f.Ay.isPremium(t), k = f.Ay.canUseAnimatedAvatar(t), {
        pendingAvatar: V,
        pendingThemeColors: w,
        tryItOutThemeColors: B,
        tryItOutAvatar: H,
        tryItOutBanner: F
    } = (0, l.cf)([E.A], () => {
        let e = E.A.getPendingChanges(),
            t = E.A.getErrors(),
            n = E.A.getTryItOutChanges();
        return {
            ...e,
            ...n,
            errors: t
        }
    }), {
        preset: Y,
        onShuffle: z
    } = (0, _.A)(), X = s.useRef(null);
    (0, b.A)(X, D._F.TRY_IT_OUT);
    let {
        analyticsLocations: W,
        newestAnalyticsLocation: K,
        sourceAnalyticsLocations: Z
    } = (0, d.Ay)(o.A.USER_SETTINGS_TRY_OUT_PREMIUM), q = e => {
        e && ((0, r.zq)(H), (0, T.Zz)(B), (0, T.Dv)(F), S.default.track(O.HAw.TRY_IT_OUT_PRESET_SELECTED, {
            preset: Y
        }))
    };
    s.useEffect(() => {
        n && S.default.track(O.HAw.PREMIUM_UPSELL_VIEWED, {
            type: L.e.PREMIUM_PROFILE_TRY_IT_OUT,
            location: {
                page: O.liQ.USER_SETTINGS
            },
            location_stack: Z
        })
    }, [Z, t, n]);
    let J = (0, u.V)()?.subscription_trial?.sku_id === L.pe.TIER_2,
        Q = (0, c.O)(),
        $ = (0, g.U9)(Q, L.pe.TIER_2);
    return G ? (0, i.jsx)(d.f5, {
        value: W,
        children: (0, i.jsxs)(v.A, {
            ref: X,
            className: M.MT,
            type: v.i.PREMIUM,
            isShown: !0,
            hasBackground: !0,
            children: [(0, i.jsx)(C.A, {
                stickyPreview: !1,
                layoutClassName: M.th,
                profilePreviewTitle: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(a.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: M.PC
                    }), P.intl.string(P.t.gMlDNd)]
                }),
                profilePreview: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(m.A, {
                        preset: Y,
                        onShuffle: z
                    }), (0, i.jsx)(R.A, {
                        user: t
                    })]
                }),
                children: (0, i.jsxs)("div", {
                    className: M.EN,
                    children: [(0, i.jsxs)("div", {
                        children: [(0, i.jsx)(a.Heading, {
                            variant: "heading-xl/extrabold",
                            children: P.intl.string(P.t["2zGdAW"])
                        }), (0, i.jsx)(a.Text, {
                            className: M.h_,
                            variant: "text-sm/normal",
                            children: P.intl.string(P.t.xeEC20)
                        })]
                    }), (0, i.jsx)(y.A, {
                        className: M.fz,
                        user: t,
                        pendingAvatarSrc: (0, p.V7)({
                            userId: t.id,
                            image: H ?? V
                        }),
                        pendingColors: B ?? w,
                        onThemeColorsChange: T.a,
                        showPremiumIcon: !1,
                        preventDisabled: !0
                    }), (0, i.jsx)(j.A, {
                        className: M.fz,
                        isTryItOut: !0,
                        showRemoveBannerButton: null != F,
                        onBannerChange: T.xe,
                        showPremiumIcon: !1
                    }), !k && (0, i.jsx)(N.A, {
                        className: M.fz,
                        isTryItOut: !0,
                        onAvatarChange: T.e$,
                        showRemoveAvatarButton: !1,
                        changeAvatarButtonText: P.intl.string(P.t["7z0D1c"]),
                        sectionTitle: P.intl.string(P.t.vtFfPX)
                    }), (0, i.jsx)(I.A, {
                        user: t,
                        className: M.fz
                    }), !J && (0, i.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        children: P.intl.string(P.t["smo74/"])
                    })]
                })
            }), !J && (0, i.jsx)(A.d, {
                onSubscribeModalClose: q,
                className: M.Kv,
                showUpsell: !0,
                text: P.intl.format(P.t.TmfgI2, {
                    onClick: () => {
                        (0, h.K)({
                            analyticsSource: K,
                            onSubscribeFinish: q
                        })
                    }
                }),
                button: U ? P.intl.string(P.t.AfRWI8) : $ ? P.intl.formatToPlainString(P.t.bkQ4bH, {
                    percent: Q?.discount.amount
                }) : P.intl.string(P.t.pj0XBN),
                position: "inline"
            }), J && (0, i.jsxs)("div", {
                children: [(0, i.jsx)("div", {
                    className: M.BU
                }), (0, i.jsx)(x.Ay, {
                    type: L.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                    subscriptionTier: L.pe.TIER_2
                })]
            })]
        })
    }) : null
}