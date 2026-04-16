/** chunk id: 472734 params = (module,exports,require) **/
a.d(i, {
    SocialLayerStorefrontItemClaimedSuccessfullyModal: () => T
});
var n = a(627968),
    e = a(64700),
    l = a(158954),
    s = a(397927),
    r = a(262427),
    c = a(964486),
    o = a(793574),
    d = a(688810),
    u = a(362490),
    _ = a(954571),
    x = a(25171),
    p = a(690493),
    m = a(844815),
    A = a(383089),
    j = a(41032),
    C = a(188275),
    h = a(652215),
    f = a(985018),
    k = a(520951);

function T(t) {
    let {
        transitionState: i,
        onClose: a,
        sku: T,
        application: b,
        analyticsLocations: S,
        orbsReward: v
    } = t, N = (0, m.j)(b), {
        fetched: L,
        hasAlreadyLinked: g,
        canStartAuthorization: E,
        startAuthorization: I
    } = (0, u.RD)(b), y = (0, p.J)(b), {
        analyticsLocations: R
    } = (0, d.Ay)(S ?? [], o.A.SOCIAL_LAYER_CLAIM_PURCHASED_ITEM_MODAL), w = !L || null == N, O = e.useRef({
        analyticsLocations: R,
        skuId: T.id,
        applicationId: b.id,
        isLaunchable: N,
        isApplicationConnected: y,
        canStartAuthorization: E
    });
    e.useEffect(() => {
        O.current.isLaunchable = N, O.current.isApplicationConnected = y, O.current.canStartAuthorization = E
    }, [N, y, E]), (0, c.Ay)(() => {
        _.default.track(h.HAw.OPEN_MODAL, {
            location_stack: R,
            type: C.e2,
            sku_id: T.id,
            application_id: b.id
        })
    }), e.useEffect(() => {
        if (w) return;
        let {
            analyticsLocations: t,
            skuId: i,
            applicationId: a,
            canStartAuthorization: n
        } = O.current;
        _.default.track(h.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
            location_stack: t,
            sku_id: i,
            application_id: a,
            is_gift: !1,
            is_account_linked: g,
            can_start_authorization: n
        })
    }, [w, g]);
    let D = e.useCallback(() => {
            let {
                analyticsLocations: t,
                skuId: i,
                applicationId: a
            } = O.current;
            _.default.track(h.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: a,
                is_gift: !1
            }), I({
                analyticsLocations: t
            })
        }, [I]),
        H = e.useCallback(() => {
            let {
                analyticsLocations: t,
                skuId: i
            } = O.current;
            _.default.track(h.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: b.id,
                is_gift: !1
            }), x.A.launchGame(b.id)
        }, [b.id]),
        M = e.useCallback(() => {
            let {
                analyticsLocations: t,
                skuId: i,
                applicationId: n,
                isLaunchable: e,
                isApplicationConnected: l
            } = O.current;
            _.default.track(h.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: n,
                is_gift: !1,
                is_launchable: e ?? !1,
                is_application_connected: l
            }), a()
        }, [a]);
    if (w) return (0, n.jsx)(l.dWK, {
        transitionState: i,
        onClose: a,
        children: (0, n.jsx)(l.cwr, {
            children: (0, n.jsx)(s.y$y, {})
        })
    });
    if (g) {
        let t = N && !y ? {
            variant: "primary",
            text: f.intl.string(f.t["s+J8Dl"]),
            onClick: H,
            icon: l.tfB
        } : {
            variant: "primary",
            text: f.intl.string(f.t.cpT0Cq),
            onClick: M
        };
        return (0, n.jsxs)(l.dWK, {
            transitionState: i,
            onClose: a,
            children: [(0, n.jsx)(j.z, {
                sku: T,
                title: f.intl.string(f.t["5glWta"])
            }), (0, n.jsxs)(l.cwr, {
                children: [(0, n.jsx)(s.Text, {
                    variant: "text-md/normal",
                    className: k.j,
                    children: f.intl.formatToPlainString(f.t.W2znvX, {
                        skuName: T.name,
                        applicationName: b.name
                    })
                }), null != v && v > 0 && (0, n.jsx)("div", {
                    className: k.I,
                    children: (0, n.jsx)(r.J, {
                        Icon: l.Cp8,
                        text: f.intl.format(f.t["0StwHe"], {
                            orbCount: v
                        })
                    })
                })]
            }), (0, n.jsx)(l.H7u, {
                actions: [t],
                actionsFullWidth: !0
            })]
        })
    } {
        let t = {
                variant: "primary",
                text: f.intl.string(f.t["VDAhr+"]),
                onClick: D,
                icon: l.A5T,
                disabled: !E
            },
            e = f.t.URLMAM;
        return (0, n.jsx)(A.m, {
            sku: T,
            application: b,
            transitionState: i,
            onClose: a,
            hasAlreadyLinked: g,
            canStartAuthorization: E,
            primaryCTAButtonProps: t,
            bodyText: f.intl.formatToPlainString(e, {
                applicationName: b.name
            }),
            title: f.intl.string(f.t.GPAtvf)
        })
    }
}