/** chunk id: 196291 params = (module,exports,require) **/
n.d(t, {
    A: () => U
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(793574),
    o = n(688810),
    d = n(422936),
    c = n(234419),
    u = n(10368),
    m = n(535646),
    _ = n(511484),
    g = n(202639),
    A = n(811611),
    x = n(407217),
    p = n(101058),
    h = n(207803),
    f = n(84540),
    T = n(836602),
    E = n(954571),
    S = n(515718),
    b = n(927578),
    C = n(919395),
    N = n(884546),
    v = n(597551),
    I = n(230084),
    j = n(180020),
    y = n(212168),
    O = n(730588),
    R = n(63675),
    L = n(253604),
    P = n(652215),
    D = n(788868),
    M = n(355097),
    G = n(985018),
    k = n(567567);

function U(e) {
    let {
        user: t,
        isVisible: n,
        shouldShow: U
    } = e, w = b.Ay.isPremium(t), V = b.Ay.canUseAnimatedAvatar(t), {
        pendingAvatar: B,
        pendingThemeColors: F,
        tryItOutThemeColors: H,
        tryItOutAvatar: Y,
        tryItOutBanner: z
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
        preset: X,
        onShuffle: W
    } = (0, u.A)(), K = s.useRef(null);
    (0, v.A)(K, M._F.TRY_IT_OUT);
    let {
        analyticsLocations: Z,
        newestAnalyticsLocation: q,
        sourceAnalyticsLocations: J
    } = (0, o.Ay)(r.A.USER_SETTINGS_TRY_OUT_PREMIUM), Q = e => {
        e && (z?.startsWith("https:") === !0 ? fetch(z).then(e => e.blob()).then(e => (0, S.We)(e)).then(e => {
            (0, f.p)({
                avatar: Y,
                themeColors: H,
                banner: e
            })
        }).catch(() => {
            (0, f.p)({
                avatar: Y,
                themeColors: H
            })
        }) : null != z ? (0, f.p)({
            avatar: Y,
            themeColors: H,
            banner: z
        }) : (0, f.p)({
            avatar: Y,
            themeColors: H
        }), (0, C.WU)(Y), E.default.track(P.HAw.TRY_IT_OUT_PRESET_SELECTED, {
            preset: X
        }))
    };
    s.useEffect(() => {
        n && E.default.track(P.HAw.PREMIUM_UPSELL_VIEWED, {
            type: D.e.PREMIUM_PROFILE_TRY_IT_OUT,
            location: {
                page: P.liQ.USER_SETTINGS
            },
            location_stack: J
        })
    }, [J, t, n]);
    let $ = (0, c.V)()?.subscription_trial?.sku_id === D.pe.TIER_2,
        ee = (0, d.O)(),
        et = (0, _.U9)(ee, D.pe.TIER_2);
    return U ? (0, i.jsx)(o.f5, {
        value: Z,
        children: (0, i.jsxs)(y.A, {
            ref: K,
            className: k.MT,
            type: y.i.PREMIUM,
            isShown: !0,
            hasBackground: !0,
            children: [(0, i.jsx)(N.A, {
                stickyPreview: !1,
                layoutClassName: k.th,
                profilePreviewTitle: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(a.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: k.PC
                    }), G.intl.string(G.t.gMlDNd)]
                }),
                profilePreview: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(m.A, {
                        preset: X,
                        onShuffle: W
                    }), (0, i.jsx)(L.A, {
                        user: t
                    })]
                }),
                children: (0, i.jsxs)("div", {
                    className: k.EN,
                    children: [(0, i.jsxs)("div", {
                        children: [(0, i.jsx)(a.Heading, {
                            variant: "heading-xl/extrabold",
                            children: G.intl.string(G.t["2zGdAW"])
                        }), (0, i.jsx)(a.Text, {
                            className: k.h_,
                            variant: "text-sm/normal",
                            children: G.intl.string(G.t.xeEC20)
                        })]
                    }), (0, i.jsx)(R.A, {
                        className: k.fz,
                        user: t,
                        pendingAvatarSrc: (0, p.V7)({
                            userId: t.id,
                            image: Y ?? B
                        }),
                        pendingColors: H ?? F,
                        onThemeColorsChange: h.a,
                        showPremiumIcon: !1,
                        preventDisabled: !0
                    }), (0, i.jsx)(O.A, {
                        className: k.fz,
                        isTryItOut: !0,
                        showRemoveBannerButton: null != z,
                        onBannerChange: h.xe,
                        showPremiumIcon: !1
                    }), !V && (0, i.jsx)(I.A, {
                        className: k.fz,
                        isTryItOut: !0,
                        onAvatarChange: h.e$,
                        showRemoveAvatarButton: !1,
                        changeAvatarButtonText: G.intl.string(G.t["7z0D1c"]),
                        sectionTitle: G.intl.string(G.t.vtFfPX)
                    }), (0, i.jsx)(j.A, {
                        user: t,
                        className: k.fz
                    }), !$ && (0, i.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        children: G.intl.string(G.t["smo74/"])
                    })]
                })
            }), !$ && (0, i.jsx)(g.d, {
                onSubscribeModalClose: Q,
                className: k.Kv,
                showUpsell: !0,
                text: G.intl.format(G.t.TmfgI2, {
                    onClick: () => {
                        (0, x.K)({
                            analyticsSource: q,
                            onSubscribeFinish: Q
                        })
                    }
                }),
                button: w ? G.intl.string(G.t.AfRWI8) : et ? G.intl.formatToPlainString(G.t.bkQ4bH, {
                    percent: ee?.discount.amount
                }) : G.intl.string(G.t.pj0XBN),
                position: "inline"
            }), $ && (0, i.jsxs)("div", {
                children: [(0, i.jsx)("div", {
                    className: k.BU
                }), (0, i.jsx)(A.Ay, {
                    type: D.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                    subscriptionTier: D.pe.TIER_2
                })]
            })]
        })
    }) : null
}