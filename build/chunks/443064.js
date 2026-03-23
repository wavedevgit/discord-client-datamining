/** chunk id: 443064 params = (module,exports,require) **/
n.d(t, {
    A: () => J
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(827734),
    d = n(990078),
    c = n(397927),
    u = n(297413),
    m = n(935649),
    _ = n(847599),
    g = n(36149),
    A = n(521933),
    x = n(50268),
    p = n(922301),
    h = n(81400),
    f = n(557722),
    T = n(207560),
    E = n(790114),
    S = n(836602),
    b = n(262),
    C = n(950191),
    N = n(854627),
    v = n(542535),
    I = n(915614),
    j = n(662758),
    y = n(957565),
    O = n(975571),
    R = n(427262),
    L = n(837921),
    P = n(253932),
    D = n(780964),
    M = n(192501),
    G = n(840065),
    k = n(652215),
    U = n(53516),
    w = n(985018),
    V = n(536242),
    B = n(609290);
let F = L.Ay.getEnableHardwareAcceleration() ? c.JsQ : c.euF;

function H() {
    (0, G.openUserSettings)(D.X.PROFILE_PANEL)
}

function Y(e) {
    let {
        className: t,
        user: l
    } = e, r = s.useRef(null), u = (0, h.EC)(), m = u?.nick?.[0] ?? null, [_, g] = s.useState(!1);
    s.useEffect(() => {
        g(null != r.current && r.current.scrollWidth > r.current.clientWidth)
    }, [l.username]);
    let A = !l.isClaimed(),
        x = A ? w.intl.string(w.t["7Ngnyr"]) : void 0;
    return (0, i.jsxs)("div", {
        className: a()(B.ZZ, t),
        children: [(0, i.jsx)("div", {
            className: B.NQ,
            children: (0, i.jsxs)("div", {
                className: B.Fj,
                children: [(0, i.jsx)(c.Text, {
                    variant: "text-md/medium",
                    className: B.p9,
                    children: w.intl.string(w.t.qqhR3L)
                }), (0, i.jsxs)("div", {
                    className: B.HR,
                    ref: r,
                    children: [(0, i.jsx)(c.Text, {
                        tag: "span",
                        color: "text-strong",
                        variant: "text-md/normal",
                        children: l.username
                    }), !l.hasUniqueUsername() && (0, i.jsxs)(c.Text, {
                        tag: "span",
                        color: "text-default",
                        variant: "text-md/normal",
                        children: ["#", l.discriminator]
                    })]
                })]
            })
        }), null != m && (0, i.jsx)("div", {
            className: B.a$,
            children: (0, i.jsx)(d.m, {
                __unsupportedReactNodeAsText: m,
                "aria-label": !1,
                children: (0, i.jsx)(c.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: o.A.colors.STATUS_WARNING.css
                })
            })
        }), (0, i.jsx)(d.m, {
            text: x,
            children: (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: B.pr,
                children: (0, i.jsx)(c.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: _ ? w.intl.string(w.t["16kTw/"]) : w.intl.string(w.t.bt75uw),
                    disabled: A,
                    "aria-label": w.intl.string(w.t.JECa91),
                    onClick: () => (0, c.mMO)(async () => {
                        let {
                            default: e
                        } = await n.e("13161").then(n.bind(n, 331632));
                        return t => (0, i.jsx)(e, {
                            ...t
                        })
                    })
                })
            })
        })]
    })
}

function z(e) {
    let {
        user: t,
        className: n
    } = e, l = (0, h.EC)(), r = l?.nick?.[0] ?? null, u = R.Ay.getGlobalName(t), m = s.useRef(null), [_, g] = s.useState(!1);
    return s.useEffect(() => {
        g(null != m.current && m.current.scrollWidth > m.current.clientWidth)
    }, [u]), (0, i.jsxs)("div", {
        className: a()(B.ZZ, n),
        children: [(0, i.jsx)("div", {
            className: B.NQ,
            children: (0, i.jsxs)("div", {
                className: B.Fj,
                children: [(0, i.jsx)(c.Text, {
                    variant: "text-md/medium",
                    className: B.p9,
                    children: w.intl.string(w.t["9AjdkD"])
                }), (0, i.jsx)("div", {
                    className: B.HR,
                    ref: m,
                    children: (0, i.jsx)(c.Text, {
                        tag: "span",
                        color: "text-strong",
                        variant: "text-md/normal",
                        children: null == u ? w.intl.string(w.t.ep5kjK) : u
                    })
                })]
            })
        }), null != r && (0, i.jsx)("div", {
            className: B.a$,
            children: (0, i.jsx)(d.m, {
                __unsupportedReactNodeAsText: r,
                "aria-label": !1,
                children: (0, i.jsx)(c.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: o.A.colors.STATUS_WARNING.css
                })
            })
        }), (0, i.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: B.pr,
            children: (0, i.jsx)(c.Button, {
                variant: "secondary",
                size: "sm",
                text: _ ? w.intl.string(w.t["16kTw/"]) : w.intl.string(w.t.bt75uw),
                "aria-label": w.intl.string(w.t.YXeWYM),
                onClick: H
            })
        })]
    })
}

function X(e) {
    let {
        text: t,
        censor: n,
        revealLabel: l,
        hideLabel: a
    } = e, [r, o] = s.useState(!1), d = r ? t : n(t);
    return (0, i.jsxs)("div", {
        className: B.c1,
        children: [d, (0, i.jsx)(c.QWc, {
            variant: "primary",
            textVariant: "text-sm/medium",
            "aria-label": r ? a : l,
            onClick: () => o(!r),
            text: r ? w.intl.string(w.t.fgq1gs) : w.intl.string(w.t.dcztdU)
        })]
    })
}

function W(e) {
    let t, {
        className: s,
        user: l
    } = e;
    if (l.isClaimed())
        if (null == l.email) t = {
            buttonText: w.intl.string(w.t.OYkgVk),
            buttonAriaLabel: w.intl.string(w.t["pvBD+W"]),
            valueMessage: w.intl.string(w.t["8SfTN/"]),
            handleClick: () => (0, c.mMO)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("89129"), n.e("75283")]).then(n.bind(n, 354096));
                return t => (0, i.jsx)(e, {
                    ...t
                })
            })
        };
        else {
            let {
                email: e
            } = l;
            t = {
                buttonText: w.intl.string(w.t.bt75uw),
                buttonAriaLabel: w.intl.string(w.t["8peUT0"]),
                valueMessage: (0, i.jsx)(X, {
                    text: e,
                    censor: M.B,
                    revealLabel: w.intl.string(w.t["Zvx+yV"]),
                    hideLabel: w.intl.string(w.t.nqTD4d)
                }),
                handleClick: () => (0, c.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("89129"), n.e("75283")]).then(n.bind(n, 354096));
                    return t => (0, i.jsx)(e, {
                        ...t
                    })
                })
            }
        }
    else t = {
        buttonText: w.intl.string(w.t.BleMPB),
        buttonAriaLabel: w.intl.string(w.t.BleMPB),
        valueMessage: w.intl.string(w.t.qxk9zo),
        handleClick: () => A.A.openClaimAccountModal()
    };
    return (0, i.jsxs)("div", {
        className: a()(B.ZZ, s),
        children: [(0, i.jsx)("div", {
            className: B.NQ,
            children: (0, i.jsxs)("div", {
                children: [(0, i.jsx)(c.Text, {
                    variant: "text-md/medium",
                    className: B.p9,
                    children: w.intl.string(w.t.tlZllC)
                }), (0, i.jsx)("div", {
                    children: (0, i.jsx)(c.Text, {
                        tag: "span",
                        color: "text-strong",
                        variant: "text-md/normal",
                        children: t.valueMessage
                    })
                })]
            })
        }), (0, i.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: B.pr,
            children: (0, i.jsx)(c.Button, {
                variant: "secondary",
                size: "sm",
                text: t.buttonText,
                "aria-label": t.buttonAriaLabel,
                onClick: t.handleClick
            })
        })]
    })
}

function K(e) {
    let t, {
        className: s,
        user: l
    } = e;
    if (!l.isClaimed()) return null;
    let {
        phone: r,
        email: o
    } = l, d = null != r;
    return t = d ? (0, i.jsx)(X, {
        text: r,
        censor: M.D,
        revealLabel: w.intl.string(w.t.eY3xlT),
        hideLabel: w.intl.string(w.t["jllbv+"])
    }) : w.intl.string(w.t.I5kDqj), (0, i.jsxs)("div", {
        className: a()(B.ZZ, s),
        children: [(0, i.jsx)("div", {
            className: B.NQ,
            children: (0, i.jsxs)("div", {
                children: [(0, i.jsx)(c.Text, {
                    variant: "text-md/medium",
                    className: B.p9,
                    children: w.intl.string(w.t.kerONq)
                }), (0, i.jsx)("div", {
                    children: (0, i.jsx)(c.Text, {
                        tag: "span",
                        color: "text-strong",
                        variant: "text-md/normal",
                        children: t
                    })
                })]
            })
        }), (0, i.jsxs)("div", {
            className: B.PU,
            children: [d && null != o ? (0, i.jsx)("div", {
                className: a()(B.pr, B.DT),
                children: (0, i.jsx)(c.QWc, {
                    textVariant: "text-sm/medium",
                    variant: "secondary",
                    text: w.intl.string(w.t.N86XcP),
                    "aria-label": w.intl.string(w.t.Rpn4A3),
                    onClick: function() {
                        (0, c.qfG)(e => (0, i.jsx)(j.default, {
                            ...e,
                            title: w.intl.string(w.t["3CTiKi"]),
                            children: l.hasFlag(k.nhx.MFA_SMS) ? w.intl.string(w.t.jrhJyo) : void 0,
                            actionText: w.intl.string(w.t.N86XcP),
                            handleSubmit: e => f.A.removePhone(e, f.d.USER_SETTINGS_UPDATE)
                        }))
                    }
                })
            }) : null, (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: B.pr,
                children: (0, i.jsx)(c.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: d ? w.intl.string(w.t.bt75uw) : w.intl.string(w.t.OYkgVk),
                    "aria-label": d ? w.intl.string(w.t.YDabSe) : w.intl.string(w.t["SfUuE+"]),
                    onClick: function() {
                        (0, c.mMO)(async () => {
                            let {
                                default: e
                            } = await Promise.resolve().then(n.bind(n, 615715));
                            return t => (0, i.jsx)(e, {
                                reason: f.d.USER_SETTINGS_UPDATE,
                                ...t
                            })
                        }, {
                            modalKey: U.V
                        })
                    }
                })
            })]
        })]
    })
}

function Z(e) {
    let {
        user: t
    } = e, n = (0, x.A)({
        id: t.id,
        label: w.intl.string(w.t["/AXYnE"])
    }), l = P.Q_.useSetting(), a = s.useRef(null);
    return l && y.p5 ? (0, i.jsx)(c.YNO, {
        targetElementRef: a,
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, i.jsx)(c.W1t, {
                "data-menu-migrated": !0,
                onClose: t,
                onSelect: void 0,
                navId: "copy-id",
                "aria-label": w.intl.string(w.t.RANhlE),
                children: n
            })
        },
        children: e => (0, i.jsx)(c.DUT, {
            ...e,
            innerRef: a,
            className: B.SI,
            "aria-label": w.intl.string(w.t.DEoVWZ),
            children: (0, i.jsx)(c.jNK, {
                size: "md",
                color: "currentColor",
                className: B.D$
            })
        })
    }) : null
}

function q(e) {
    let {
        className: t
    } = e, l = (0, g.b8)(), r = (0, g.yM)(), o = (0, g.Y2)(), d = !l || r, u = w.intl.string(w.t["9KiIz6"]), A = w.intl.string(w.t.DVywUB), x = w.intl.string(w.t.lKDPGA), p = s.useCallback(() => {
        window.open(O.A.getArticleURL(k.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank")
    }, []), h = s.useCallback(() => {
        (0, c.mMO)(async () => {
            let {
                default: e
            } = await n.e("45361").then(n.bind(n, 151080));
            return t => (0, i.jsx)(e, {
                ...t
            })
        })
    }, []), f = s.useMemo(() => l ? r ? w.intl.string(w.t.sK0dmH) : o ? w.intl.format(V.default.WM5adV, {
        handleOnHelpUrlHook: p
    }) : w.intl.string(w.t.XxRj7f) : x, [l, r, o, x, p]), T = l && !r && o;
    return (0, i.jsxs)("div", {
        className: a()(B.ZZ, t),
        children: [(0, i.jsx)("div", {
            className: B.NQ,
            children: (0, i.jsxs)("div", {
                children: [(0, i.jsx)(c.Text, {
                    variant: "text-md/medium",
                    className: B.p9,
                    children: w.intl.string(w.t["/52UYy"])
                }), (0, i.jsx)("div", {
                    children: (0, i.jsxs)(c.Text, {
                        tag: "span",
                        color: "text-strong",
                        variant: "text-md/normal",
                        children: [o && l && !r ? `${w.intl.string(w.t.XxRj7f)} • ` : null, f]
                    })
                })]
            })
        }), T && (0, i.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: B.pr,
            children: (0, i.jsx)(c.Button, {
                variant: "secondary",
                size: "sm",
                text: w.intl.string(w.t.bt75uw),
                "aria-label": w.intl.string(w.t.bt75uw),
                onClick: h
            })
        }), d && !T && (0, i.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: B.pr,
            children: (0, i.jsx)(c.Button, {
                variant: "secondary",
                size: "sm",
                text: r ? u : A,
                "aria-label": r ? u : A,
                onClick: () => m.A.showAgeVerificationGetStartedModal({
                    entryPoint: _.q1.ACCOUNT_AGE_GROUP
                })
            })
        })]
    })
}

function J(e) {
    let {
        currentUser: t
    } = e, n = (0, C.Ay)(t.id), s = (0, b.A)(n), l = P.jP.useSetting(), a = (0, r.bG)([S.A], () => S.A.getErrors()), o = a?.avatar?.[0], {
        avatarSrc: d,
        avatarDecorationSrc: m
    } = (0, N.A)({
        userId: t?.id,
        size: c._3J.SIZE_80
    }), _ = (0, E.A)(), g = (0, T.fk)();
    return (0, i.jsxs)("div", {
        className: B.DM,
        children: [(0, i.jsx)(I.o, {
            user: t,
            displayProfile: n,
            avatarSize: c._3J.SIZE_80,
            avatarOffsetX: 16,
            avatarOffsetY: -22,
            bannerWidth: _ ? 696 : 660,
            bannerHeight: 100,
            themePadding: 0
        }), (0, i.jsxs)("div", {
            className: B.eF,
            children: [(0, i.jsx)(F, {
                className: B.my,
                src: d,
                avatarDecoration: m,
                status: l,
                size: c._3J.SIZE_80,
                "aria-label": t.username
            }), (0, i.jsxs)("div", {
                children: [(0, i.jsxs)("div", {
                    className: B.Ib,
                    children: [(0, i.jsx)(u.A, {
                        user: t,
                        className: B.a1,
                        discriminatorClass: B.D2,
                        displayNameStylesType: p.G.STATIC
                    }), (0, i.jsx)(Z, {
                        user: t
                    })]
                }), (0, i.jsx)(v.A, {
                    badges: s,
                    className: B.C_,
                    badgeClassName: B.qS
                })]
            }), (0, i.jsx)(c.Button, {
                variant: "primary",
                size: "sm",
                text: w.intl.string(w.t["2p2aYz"]),
                onClick: H
            })]
        }), (0, i.jsxs)("div", {
            className: B.Tp,
            children: [null != o ? (0, i.jsx)(c.Text, {
                className: B.mx,
                variant: "text-xs/normal",
                color: "text-feedback-critical",
                children: o
            }) : null, (0, i.jsxs)("div", {
                className: B.FL,
                children: [(0, i.jsx)(z, {
                    className: B.mS,
                    user: t
                }), (0, i.jsx)(Y, {
                    user: t
                }), (0, i.jsx)(W, {
                    className: B.Zr,
                    user: t
                }), (0, i.jsx)(K, {
                    className: B.Zr,
                    user: t
                }), g && (0, i.jsx)(q, {
                    className: B.Zr
                })]
            })]
        })]
    })
}