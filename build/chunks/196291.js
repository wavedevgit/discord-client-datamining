/** chunk id: 196291 params = (module,exports,require) **/
n.d(t, {
    A: () => M
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
    g = n(535646),
    A = n(511484),
    m = n(202639),
    h = n(811611),
    p = n(407217),
    x = n(101058),
    E = n(207803),
    T = n(836602),
    S = n(193658),
    C = n(954571),
    I = n(927578),
    f = n(884546),
    b = n(230084),
    N = n(180020),
    v = n(212168),
    O = n(730588),
    j = n(63675),
    R = n(253604),
    y = n(652215),
    P = n(788868),
    L = n(355097),
    D = n(985018),
    G = n(567567);

function M(e) {
    let {
        user: t,
        isVisible: n,
        shouldShow: M
    } = e, U = I.Ay.isPremium(t), k = I.Ay.canUseAnimatedAvatar(t), {
        pendingAvatar: V,
        pendingThemeColors: w,
        tryItOutThemeColors: H,
        tryItOutAvatar: B,
        tryItOutBanner: F
    } = (0, l.cf)([T.A], () => {
        let e = T.A.getPendingChanges(),
            t = T.A.getErrors(),
            n = T.A.getTryItOutChanges();
        return {
            ...e,
            ...n,
            errors: t
        }
    }), {
        preset: Y,
        onShuffle: z
    } = (0, _.A)(), X = s.useRef(null);
    (0, S.A)(X, L._F.TRY_IT_OUT);
    let {
        analyticsLocations: W,
        newestAnalyticsLocation: K,
        sourceAnalyticsLocations: Z
    } = (0, d.Ay)(o.A.USER_SETTINGS_TRY_OUT_PREMIUM), q = e => {
        e && ((0, r.zq)(B), (0, E.Zz)(H), (0, E.Dv)(F), C.default.track(y.HAw.TRY_IT_OUT_PRESET_SELECTED, {
            preset: Y
        }))
    };
    s.useEffect(() => {
        n && C.default.track(y.HAw.PREMIUM_UPSELL_VIEWED, {
            type: P.e.PREMIUM_PROFILE_TRY_IT_OUT,
            location: {
                page: y.liQ.USER_SETTINGS
            },
            location_stack: Z
        })
    }, [Z, t, n]);
    let J = (0, u.V)()?.subscription_trial?.sku_id === P.pe.TIER_2,
        Q = (0, c.O)(),
        $ = (0, A.U9)(Q, P.pe.TIER_2);
    return M ? (0, i.jsx)(d.f5, {
        value: W,
        children: (0, i.jsxs)(v.A, {
            ref: X,
            className: G.MT,
            type: v.i.PREMIUM,
            isShown: !0,
            hasBackground: !0,
            children: [(0, i.jsx)(f.A, {
                stickyPreview: !1,
                layoutClassName: G.th,
                profilePreviewTitle: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(a.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: G.PC
                    }), D.intl.string(D.t.gMlDNd)]
                }),
                profilePreview: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(g.A, {
                        preset: Y,
                        onShuffle: z
                    }), (0, i.jsx)(R.A, {
                        user: t
                    })]
                }),
                children: (0, i.jsxs)("div", {
                    className: G.EN,
                    children: [(0, i.jsxs)("div", {
                        children: [(0, i.jsx)(a.Heading, {
                            variant: "heading-xl/extrabold",
                            children: D.intl.string(D.t["2zGdAW"])
                        }), (0, i.jsx)(a.Text, {
                            className: G.h_,
                            variant: "text-sm/normal",
                            children: D.intl.string(D.t.xeEC20)
                        })]
                    }), (0, i.jsx)(j.A, {
                        className: G.fz,
                        user: t,
                        pendingAvatarSrc: (0, x.V7)({
                            userId: t.id,
                            image: B ?? V
                        }),
                        pendingColors: H ?? w,
                        onThemeColorsChange: E.a,
                        showPremiumIcon: !1,
                        preventDisabled: !0
                    }), (0, i.jsx)(O.A, {
                        className: G.fz,
                        isTryItOut: !0,
                        showRemoveBannerButton: null != F,
                        onBannerChange: E.xe,
                        showPremiumIcon: !1
                    }), !k && (0, i.jsx)(b.A, {
                        className: G.fz,
                        isTryItOut: !0,
                        onAvatarChange: E.e$,
                        showRemoveAvatarButton: !1,
                        changeAvatarButtonText: D.intl.string(D.t["7z0D1c"]),
                        sectionTitle: D.intl.string(D.t.vtFfPX)
                    }), (0, i.jsx)(N.A, {
                        user: t,
                        className: G.fz
                    }), !J && (0, i.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        children: D.intl.string(D.t["smo74/"])
                    })]
                })
            }), !J && (0, i.jsx)(m.d, {
                onSubscribeModalClose: q,
                className: G.Kv,
                showUpsell: !0,
                text: D.intl.format(D.t.TmfgI2, {
                    onClick: () => {
                        (0, p.K)({
                            analyticsSource: K,
                            onSubscribeFinish: q
                        })
                    }
                }),
                button: U ? D.intl.string(D.t.AfRWI8) : $ ? D.intl.formatToPlainString(D.t.bkQ4bH, {
                    percent: Q?.discount.amount
                }) : D.intl.string(D.t.pj0XBN),
                position: "inline"
            }), J && (0, i.jsxs)("div", {
                children: [(0, i.jsx)("div", {
                    className: G.BU
                }), (0, i.jsx)(h.Ay, {
                    type: P.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                    subscriptionTier: P.pe.TIER_2
                })]
            })]
        })
    }) : null
}