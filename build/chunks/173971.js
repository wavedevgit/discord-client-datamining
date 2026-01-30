/** chunk id: 173971, original params: t,e,i (module,exports,require) **/
i.d(e, {
    default: () => w
}), i(896048);
var n = i(627968),
    a = i(64700),
    s = i(158954),
    l = i(311907),
    r = i(562465),
    o = i(397927),
    c = i(75255),
    u = i(964486),
    d = i(775602),
    _ = i(793574),
    x = i(688810),
    m = i(362490),
    p = i(587895),
    f = i(518926),
    g = i(946261),
    j = i(209932),
    A = i(287809),
    C = i(954571),
    S = i(690521),
    h = i(25171),
    T = i(45938),
    k = i(403362),
    N = i(427262),
    E = i(690493),
    I = i(844815),
    v = i(383089),
    L = i(41032),
    y = i(188275),
    R = i(652215),
    b = i(985018),
    O = i(836263);

function w(t) {
    let {
        transitionState: e,
        sku: i,
        onClose: s,
        giftCode: o,
        channelContext: d,
        customGiftMessage: f,
        emojiName: g,
        soundId: j,
        analyticsLocations: A
    } = t, [S, h] = a.useState({
        state: "LINK"
    }), [T, N] = a.useState(!1), E = (0, l.bG)([p.A], () => p.A.getApplication(i.applicationId)), I = (0, m.RD)(E), {
        analyticsLocations: v
    } = (0, x.Ay)(null != A ? A : [], _.A.SOCIAL_LAYER_GIFT_CODE_CLAIM_MODAL);
    a.useEffect(() => {
        o.redeemed && "LINK" === S.state && h({
            state: "ERROR",
            error: new r.Wl(b.intl.string(b.t.Iw2TUW), R.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED)
        })
    }, [o, S.state]);
    let L = a.useRef({
        analyticsLocations: v,
        giftCode: o,
        hasCustomMessage: null != f && "" !== f,
        customGiftMessage: f,
        skuProductLine: i.productLine,
        emojiName: g,
        soundId: j,
        skuId: i.id
    });
    (0, u.Ay)(() => {
        let {
            analyticsLocations: t,
            skuId: e
        } = L.current;
        C.default.track(R.HAw.OPEN_MODAL, {
            location_stack: t,
            type: y.Nu,
            sku_id: e,
            application_id: null == E ? void 0 : E.id
        })
    }), a.useEffect(() => {
        let {
            analyticsLocations: t,
            hasCustomMessage: e,
            customGiftMessage: i,
            giftCode: n,
            emojiName: a,
            soundId: s,
            skuProductLine: l
        } = L.current;
        C.default.track(R.HAw.GIFT_ACCEPT_STEP, {
            to_step: S.state,
            location_stack: t,
            has_custom_message: e,
            is_custom_message_edited: e && i !== b.intl.string(b.t.ZkOo1U),
            gift_style: n.giftStyle,
            gift_code: n.code,
            emoji_name: a,
            sound_id: s,
            product_line: l
        })
    }, [S.state]);
    let O = a.useCallback(async () => {
        var t, e;
        let {
            analyticsLocations: i,
            skuId: n,
            hasCustomMessage: a,
            customGiftMessage: s,
            emojiName: l,
            soundId: r
        } = L.current;
        C.default.track(R.HAw.SLAYER_STOREFRONT_GIFT_CODE_CLAIM_CLICKED, {
            location_stack: i,
            sku_id: n,
            application_id: null == E ? void 0 : E.id,
            gift_code: o.code,
            gift_style: null != (t = null == (e = o.giftStyle) ? void 0 : e.toString()) ? t : null,
            has_custom_message: a,
            is_custom_message_edited: a && s !== b.intl.string(b.t.ZkOo1U),
            emoji_name: l,
            sound_id: r
        });
        try {
            N(!0), await c.A.redeemGiftCode({
                code: o.code,
                options: {
                    channelId: d
                }
            }), h({
                state: "SUCCESS"
            })
        } catch (t) {
            h({
                state: "ERROR",
                error: t
            })
        } finally {
            N(!1)
        }
    }, [o, h, d, null == E ? void 0 : E.id]);
    if (null == E) return null;
    switch (S.state) {
        case "LINK":
            return (0, n.jsx)(M, {
                sku: i,
                application: E,
                transitionState: e,
                onClose: s,
                successStateButtonText: b.intl.string(b.t.go1e4x),
                onSuccessButtonClick: O,
                isSuccessButtonLoading: T,
                analyticsLocations: v,
                startAuthorizeResult: I
            });
        case "SUCCESS":
            return (0, n.jsx)(P, {
                transitionState: e,
                application: E,
                sku: i,
                giftCode: o,
                customGiftMessage: f,
                onClose: s,
                analyticsLocations: v,
                emojiName: g,
                soundId: j
            });
        case "ERROR":
            return (0, n.jsx)(D, {
                transitionState: e,
                onClose: s,
                error: S.error,
                application: E,
                hasAlreadyLinked: I.hasAlreadyLinked
            });
        default:
            (0, k.xb)(S)
    }
}
let D = t => {
    let e, i, {
            transitionState: a,
            onClose: l,
            error: r,
            application: o,
            hasAlreadyLinked: c
        } = t,
        u = A.default.getCurrentUser();
    return r.code === R.t02.INVALID_GIFT_REDEMPTION_OWNED ? (e = b.intl.string(b.t.uXnSGo), i = c ? b.intl.formatToPlainString(b.t["TNRN/e"], {
        applicationName: o.name
    }) : b.intl.formatToPlainString(b.t.VkR30M, {
        applicationName: o.name
    })) : (e = b.intl.string(b.t.dMYg1c), i = (0, T.eN)(r, u)), (0, n.jsxs)(s.dWK, {
        transitionState: a,
        onClose: l,
        children: [(0, n.jsx)(s.rQ0, {
            title: e,
            alignCenter: !0
        }), (0, n.jsx)(s.cwr, {
            children: (0, n.jsx)(s.EYj, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: i
            })
        }), (0, n.jsx)(s.H7u, {
            actions: [{
                variant: "primary",
                text: b.intl.string(b.t.WAI6xu),
                onClick: l
            }],
            actionsFullWidth: !0
        })]
    })
};

function M(t) {
    let {
        sku: e,
        application: i,
        transitionState: l,
        onClose: r,
        successStateButtonText: c,
        onSuccessButtonClick: u,
        isSuccessButtonLoading: d,
        analyticsLocations: _,
        startAuthorizeResult: x
    } = t, {
        hasAlreadyLinked: m,
        canStartAuthorization: p,
        startAuthorization: f,
        fetched: g
    } = x, j = a.useRef({
        analyticsLocations: _,
        skuId: e.id,
        applicationId: i.id,
        canStartAuthorization: p
    });
    a.useEffect(() => {
        j.current.canStartAuthorization = p
    }, [p]), a.useEffect(() => {
        if (!g) return;
        let {
            analyticsLocations: t,
            skuId: e,
            applicationId: i,
            canStartAuthorization: n
        } = j.current;
        C.default.track(R.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
            location_stack: t,
            sku_id: e,
            application_id: i,
            is_gift: !0,
            is_account_linked: m,
            can_start_authorization: n
        })
    }, [g, m]);
    let A = a.useCallback(() => {
        let {
            analyticsLocations: t,
            skuId: e,
            applicationId: i
        } = j.current;
        C.default.track(R.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
            location_stack: t,
            sku_id: e,
            application_id: i,
            is_gift: !0
        }), f({
            analyticsLocations: t
        })
    }, [f]);
    if (!g) return (0, n.jsx)(s.dWK, {
        transitionState: l,
        onClose: r,
        children: (0, n.jsx)(s.cwr, {
            children: (0, n.jsx)("div", {
                className: O.g4,
                children: (0, n.jsx)(o.y$y, {})
            })
        })
    });
    let S = m ? {
        variant: "primary",
        text: c,
        onClick: u,
        loading: d
    } : {
        variant: "primary",
        text: b.intl.string(b.t["VDAhr+"]),
        onClick: A,
        icon: s.A5T,
        disabled: !p
    };
    return (0, n.jsx)(v.m, {
        sku: e,
        application: i,
        transitionState: l,
        onClose: r,
        hasAlreadyLinked: m,
        canStartAuthorization: p,
        primaryCTAButtonProps: S,
        bodyText: m ? b.intl.formatToPlainString(b.t.sL5yz7, {
            applicationName: i.name
        }) : b.intl.formatToPlainString(b.t.PaYE38, {
            applicationName: i.name
        }),
        title: b.intl.string(b.t["Bn1J+a"])
    })
}

function P(t) {
    let {
        transitionState: e,
        onClose: i,
        sku: r,
        application: c,
        giftCode: u,
        customGiftMessage: d,
        analyticsLocations: _,
        emojiName: x,
        soundId: m
    } = t, p = (0, I.j)(c), f = (0, E.J)(c), [g, j] = a.useState(null), S = (0, l.bG)([A.default], () => A.default.getUser(u.userId)), T = N.Ay.getName(S), k = a.useRef({
        analyticsLocations: _,
        skuId: r.id,
        applicationId: c.id,
        isLaunchable: p,
        isApplicationConnected: f
    });
    if (a.useEffect(() => {
            k.current.isLaunchable = p, k.current.isApplicationConnected = f
        }, [p, f]), null == p) return (0, n.jsx)(s.dWK, {
        transitionState: e,
        onClose: i,
        children: (0, n.jsx)(s.cwr, {
            children: (0, n.jsx)(o.y$y, {})
        })
    });
    let v = p && !f ? {
        variant: "primary",
        text: b.intl.string(b.t["s+J8Dl"]),
        onClick: () => {
            C.default.track(R.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: _,
                sku_id: r.id,
                application_id: c.id,
                is_gift: !0
            }), h.A.launchGame(c.id)
        },
        icon: s.tfB
    } : {
        variant: "primary",
        text: b.intl.string(b.t.cpT0Cq),
        onClick: () => {
            C.default.track(R.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                location_stack: _,
                sku_id: r.id,
                application_id: c.id,
                is_gift: !0,
                is_launchable: null != p && p,
                is_application_connected: f
            }), i()
        }
    };
    return (0, n.jsxs)(s.dWK, {
        transitionState: e,
        onClose: i,
        children: [(0, n.jsx)("div", {
            style: {
                position: "absolute",
                top: "-".concat(100, "px")
            },
            ref: t => j(t)
        }), (0, n.jsx)(L.z, {
            sku: r
        }), (0, n.jsxs)(s.cwr, {
            children: [(0, n.jsx)(s.EYj, {
                variant: "text-md/normal",
                color: "text-subtle",
                className: O.j7,
                children: b.intl.formatToPlainString(b.t["6yrIzU"], {
                    sender: T
                })
            }), null != d && "" !== d && (0, n.jsx)(s.EYj, {
                variant: "text-lg/semibold",
                color: "text-subtle",
                className: O.pt,
                children: d
            }), (0, n.jsx)("div", {
                className: O.S3,
                children: (0, n.jsx)(s.wx6, {
                    type: "success",
                    children: b.intl.formatToPlainString(b.t.W2znvX, {
                        skuName: r.name,
                        applicationName: c.name
                    })
                })
            }), null != g && (0, n.jsx)(U, {
                confettiTarget: g,
                emojiName: x
            }), null != m && (0, n.jsx)(G, {
                soundId: m
            })]
        }), (0, n.jsx)(s.H7u, {
            actions: [v],
            actionsFullWidth: !0
        })]
    })
}
let G = t => {
        let {
            soundId: e
        } = t;
        return a.useEffect(() => {
            var t;
            let i = j.A.getSoundById(e);
            (0, g.playGiftSound)(e, null != (t = null == i ? void 0 : i.volume) ? t : 1)
        }, [e]), null
    },
    W = {
        xMin: -120,
        xMax: 120,
        yMin: -80,
        yMax: -200
    },
    U = t => {
        let {
            confettiTarget: e,
            emojiName: i
        } = t, s = (0, l.bG)([d.A], () => d.A.useReducedMotion), r = a.useRef(e), [o, c] = a.useState(!0), u = a.useCallback(() => {
            c(!1)
        }, []);
        if (s || !o) return null;
        let _ = null != i ? S.Ay.getURL(i) : void 0;
        return (0, n.jsx)(f.A, {
            confettiTarget: r.current,
            emojiURL: _,
            numBursts: 5,
            particlesPerBurst: 50,
            speedValues: W,
            dragCoefficientValue: 1,
            onAnimationEnd: u
        })
    }