/** Chunk was on 80307 **/
/** chunk id: 472734, original params: t,i,a (module,exports,require) **/
a.d(i, {
    SocialLayerStorefrontItemClaimedSuccessfullyModal: () => k
});
var n = a(627968),
    e = a(64700),
    l = a(158954),
    r = a(397927),
    s = a(964486),
    c = a(793574),
    o = a(688810),
    d = a(362490),
    u = a(954571),
    _ = a(25171),
    x = a(690493),
    p = a(844815),
    m = a(383089),
    A = a(41032),
    f = a(188275),
    j = a(652215),
    C = a(985018),
    h = a(778560);

function k(t) {
    let {
        transitionState: i,
        onClose: a,
        sku: k,
        application: T,
        analyticsLocations: S
    } = t, v = (0, p.j)(T), {
        fetched: b,
        hasAlreadyLinked: g,
        canStartAuthorization: L,
        startAuthorization: N
    } = (0, d.RD)(T), E = (0, x.J)(T), {
        analyticsLocations: I
    } = (0, o.Ay)(null != S ? S : [], c.A.SOCIAL_LAYER_CLAIM_PURCHASED_ITEM_MODAL), y = !b || null == v, R = e.useRef({
        analyticsLocations: I,
        skuId: k.id,
        applicationId: T.id,
        isLaunchable: v,
        isApplicationConnected: E,
        canStartAuthorization: L
    });
    e.useEffect(() => {
        R.current.isLaunchable = v, R.current.isApplicationConnected = E, R.current.canStartAuthorization = L
    }, [v, E, L]), (0, s.Ay)(() => {
        u.default.track(j.HAw.OPEN_MODAL, {
            location_stack: I,
            type: f.e2,
            sku_id: k.id,
            application_id: T.id
        })
    }), e.useEffect(() => {
        if (y) return;
        let {
            analyticsLocations: t,
            skuId: i,
            applicationId: a,
            canStartAuthorization: n
        } = R.current;
        u.default.track(j.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
            location_stack: t,
            sku_id: i,
            application_id: a,
            is_gift: !1,
            is_account_linked: g,
            can_start_authorization: n
        })
    }, [y, g]);
    let O = e.useCallback(() => {
            let {
                analyticsLocations: t,
                skuId: i,
                applicationId: a
            } = R.current;
            u.default.track(j.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: a,
                is_gift: !1
            }), N({
                analyticsLocations: t
            })
        }, [N]),
        w = e.useCallback(() => {
            let {
                analyticsLocations: t,
                skuId: i
            } = R.current;
            u.default.track(j.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: T.id,
                is_gift: !1
            }), _.A.launchGame(T.id)
        }, [T.id]),
        D = e.useCallback(() => {
            let {
                analyticsLocations: t,
                skuId: i,
                applicationId: n,
                isLaunchable: e,
                isApplicationConnected: l
            } = R.current;
            u.default.track(j.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: n,
                is_gift: !1,
                is_launchable: null != e && e,
                is_application_connected: l
            }), a()
        }, [a]);
    if (y) return (0, n.jsx)(l.dWK, {
        transitionState: i,
        onClose: a,
        children: (0, n.jsx)(l.cwr, {
            children: (0, n.jsx)(r.y$y, {})
        })
    });
    if (g) {
        let t = v && !E ? {
            variant: "primary",
            text: C.intl.string(C.t["s+J8Dl"]),
            onClick: w,
            icon: l.tfB
        } : {
            variant: "primary",
            text: C.intl.string(C.t.cpT0Cq),
            onClick: D
        };
        return (0, n.jsxs)(l.dWK, {
            transitionState: i,
            onClose: a,
            children: [(0, n.jsx)(A.z, {
                sku: k,
                title: C.intl.string(C.t["5glWta"])
            }), (0, n.jsx)(l.cwr, {
                children: (0, n.jsx)(r.Text, {
                    variant: "text-md/normal",
                    className: h.j,
                    children: C.intl.formatToPlainString(C.t.W2znvX, {
                        skuName: k.name,
                        applicationName: T.name
                    })
                })
            }), (0, n.jsx)(l.H7u, {
                actions: [t],
                actionsFullWidth: !0
            })]
        })
    } {
        let t = {
            variant: "primary",
            text: C.intl.string(C.t["VDAhr+"]),
            onClick: O,
            icon: l.A5T,
            disabled: !L
        };
        return (0, n.jsx)(m.m, {
            sku: k,
            application: T,
            transitionState: i,
            onClose: a,
            hasAlreadyLinked: g,
            canStartAuthorization: L,
            primaryCTAButtonProps: t,
            bodyText: C.intl.formatToPlainString(C.t.Qmkje8, {
                applicationName: T.name
            }),
            title: C.intl.string(C.t.GPAtvf)
        })
    }
}