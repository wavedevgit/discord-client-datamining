/** Chunk was on 19750 **/
/** chunk id: 140033, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => W
}), n(896048), n(492834);
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(390544),
    o = n(311907),
    c = n(554146),
    d = n(435371),
    u = n(397927),
    m = n(793574),
    f = n(379848),
    g = n(95035),
    _ = n(760751),
    x = n(403362),
    v = n(307600),
    j = n(363487),
    p = n(665171),
    b = n(397400),
    h = n(165655),
    y = n(496587),
    O = n(684610),
    S = n(500897),
    N = n(225180),
    A = n(117265),
    C = n(365003),
    I = n(680127),
    E = n(858192),
    T = n(49999),
    P = n(294726),
    w = n(985018),
    R = n(748137);

function M(e) {
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
}

function k(e) {
    let {
        guildId: t,
        instance: n
    } = e, [i, l] = a.useState(!1), s = a.useCallback(() => {
        l(!0), (0, p.as)(t, n.id).finally(() => {
            l(!1)
        })
    }, [t, n.id]);
    return (0, r.jsx)(u.Button, {
        fullWidth: !0,
        text: w.intl.string(P.default.TMzy7d),
        variant: "secondary",
        loading: i,
        onClick: s
    })
}

function G(e) {
    return (0, r.jsx)(u.Button, M({
        fullWidth: !0,
        text: w.intl.string(P.default.tkbVdf),
        variant: "secondary",
        icon: u.I9m,
        iconPosition: "end"
    }, e))
}

function D(e) {
    return (0, r.jsx)(u.Button, M({
        fullWidth: !0,
        text: w.intl.string(P.default["fQCcM/"]),
        variant: "primary"
    }, e))
}

function L(e) {
    return (0, r.jsx)(u.Button, M({
        fullWidth: !0,
        text: w.intl.string(P.default.gWMqnI),
        variant: "primary",
        icon: u.I9m,
        iconPosition: "end"
    }, e))
}

function U(e) {
    let {
        guildId: t
    } = e, [n, i] = a.useState(!1), l = a.useCallback(() => {
        i(!0), (0, p.cq)(t).finally(() => {
            i(!1)
        })
    }, [t]);
    return (0, r.jsx)(u.Button, {
        fullWidth: !0,
        text: w.intl.string(P.default.BLEx3k),
        variant: "secondary",
        loading: n,
        onClick: l
    })
}

function B(e) {
    let {
        instance: t
    } = e, n = (0, C.A)(t.providerType, t.gameServerPanelUrl);
    return (0, r.jsx)(u.Button, {
        fullWidth: !0,
        text: w.intl.string(P.default.bBkeMs),
        variant: "secondary",
        onClick: () => {
            null != n && (0, v.h)({
                href: n
            })
        }
    })
}

function W(e) {
    let {
        guildId: t,
        instance: n
    } = e, i = (0, A.A)(n), [p, M] = (0, f.kn)([c.M.GAME_SERVER_HOSTING_PORTKEY_TOS]), W = p !== c.M.GAME_SERVER_HOSTING_PORTKEY_TOS, V = (0, o.bG)([_.A], () => _.A.getDetectableGame(n.gameId)), F = (0, C.A)(n.providerType, n.gameServerPanelUrl), q = a.useCallback(() => {
        var e;
        (0, b.Ai)(t, n.gameId, null != (e = null == V ? void 0 : V.name) ? e : "", n.id), W || null == n.providerType ? (0, I.A)(t, n) : (0, E.A)({
            provider: n.providerType,
            onAccept: () => {
                M(T.i.TAKE_ACTION), (0, I.A)(t, n)
            }
        })
    }, [n, W, M, t, null == V ? void 0 : V.name]), {
        handleCopyServerIp: z,
        animateCopyIcon: H
    } = (0, S.A)(t, n.id, m.A.GAME_SERVER_GAME, null != i ? i : ""), K = (0, N.A)(n.gameId, "cover"), Y = (0, j.A)(t), Z = a.useCallback(() => {
        var e;
        (0, b.f7)(t, n.id), (0, v.h)({
            href: null != (e = n.gameServerPanelUrl) ? e : ""
        })
    }, [n.gameServerPanelUrl, t, n.id]), Q = a.useMemo(() => {
        switch (n.status) {
            case s.M.SLEEPING:
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(k, {
                        guildId: t,
                        instance: n
                    }), Y && (0, r.jsx)(G, {
                        onClick: Z,
                        disabled: null == n.gameServerPanelUrl
                    })]
                });
            case s.M.OFFLINE:
            case s.M.ONLINE:
            case s.M.STARTING:
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(D, {
                        onClick: q
                    }), Y && (0, r.jsx)(G, {
                        onClick: Z,
                        disabled: null == n.gameServerPanelUrl
                    })]
                });
            case s.M.STARTUP_FAILED:
            case s.M.MISSING_STOCK:
                return Y ? (0, r.jsx)(L, {
                    onClick: Z
                }) : (0, r.jsx)(D, {
                    onClick: q,
                    disabled: !0
                });
            case s.M.DELETED:
                return Y ? (0, r.jsx)(G, {
                    onClick: Z,
                    disabled: null == n.gameServerPanelUrl
                }) : (0, r.jsx)(D, {
                    onClick: q,
                    disabled: !0
                });
            case s.M.PROVIDER_ERRORED:
                return (0, r.jsxs)(r.Fragment, {
                    children: [Y && null != F ? (0, r.jsx)(B, {
                        guildId: t,
                        instance: n
                    }) : (0, r.jsx)(D, {
                        onClick: q,
                        disabled: !0
                    }), (0, r.jsx)(U, {
                        guildId: t,
                        instance: n
                    })]
                });
            default:
                return null
        }
    }, [n, q, Y, Z, t, F]), $ = a.useMemo(() => {
        if (null == n.gameConfig) return null;
        let e = [n.gameConfig.type, n.gameConfig.version].filter(x.Vq).join(" ");
        return "" === e ? null : e
    }, [n.gameConfig]), X = a.useMemo(() => {
        switch (n.status) {
            case s.M.STARTING:
                if (null == n.gameServerPanelUrl) return w.intl.string(P.default["1A3US2"]);
                return null;
            case s.M.STARTUP_FAILED:
                return w.intl.string(Y ? P.default.Mdoc98 : P.default.osZiRl);
            case s.M.MISSING_STOCK:
                return w.intl.string(Y ? P.default.YCakvM : P.default.osZiRl);
            case s.M.PROVIDER_ERRORED:
                return w.intl.string(Y ? P.default.NRyCeY : P.default.osZiRl);
            default:
                return null
        }
    }, [n.status, n.gameServerPanelUrl, Y]);
    return (0, r.jsxs)(y.A, {
        actions: Q,
        children: [(0, r.jsxs)("div", {
            className: R.serverDetailsContainer,
            children: [(0, r.jsxs)("div", {
                className: R.serverHeader,
                children: [(0, r.jsx)("img", {
                    src: null != K ? K : "",
                    alt: "",
                    className: R.gameImage
                }), (0, r.jsxs)("div", {
                    className: R.serverInfo,
                    children: [(0, r.jsx)(u.Heading, {
                        variant: "heading-md/medium",
                        children: n.name
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [null == V ? void 0 : V.name, $].filter(x.Vq).join(" • ")
                    })]
                })]
            }), (0, r.jsx)("div", {
                children: (0, r.jsxs)("div", {
                    className: R.detailsGrid,
                    children: [(0, r.jsxs)("div", {
                        className: R.detailItem,
                        children: [(0, r.jsx)(u.Text, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: w.intl.string(P.default.bDdi7n)
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            children: "".concat(null != n.onlineConnectionsCount && n.onlineConnectionsCount >= 0 ? n.onlineConnectionsCount : "—", " / ").concat(null != n.maxConnectionsCount && n.maxConnectionsCount >= 0 ? n.maxConnectionsCount : "—")
                        })]
                    }), (0, r.jsxs)("div", {
                        className: R.detailItem,
                        children: [(0, r.jsx)(u.Text, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: w.intl.string(P.default["7phwMG"])
                        }), (0, r.jsx)("div", {
                            className: R.serverIpContainer,
                            children: null == i ? (0, r.jsx)(u.Text, {
                                variant: "text-sm/medium",
                                children: "—"
                            }) : W ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    children: i
                                }), (0, r.jsx)(u.DUT, {
                                    className: R.copyButton,
                                    "aria-label": w.intl.string(w.t.OpuAlK),
                                    onClick: z,
                                    children: H ? (0, r.jsx)(u.A9s, {
                                        size: "sm"
                                    }) : (0, r.jsx)(u.TdU, {
                                        size: "sm"
                                    })
                                })]
                            }) : null != n.providerType && (0, r.jsx)(g.A, {
                                onClick: () => {
                                    (0, E.A)({
                                        provider: n.providerType,
                                        onAccept: () => {
                                            M(T.i.TAKE_ACTION), z()
                                        }
                                    })
                                },
                                children: w.intl.string(P.default["f+F7H3"])
                            })
                        })]
                    }), (0, r.jsxs)("div", {
                        className: R.detailItem,
                        children: [(0, r.jsx)(u.Text, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: w.intl.string(P.default["n+ZX7y"])
                        }), (0, r.jsxs)("div", {
                            className: R.statusContainer,
                            children: [n.status === s.M.STARTING ? (0, r.jsx)(u.y$y, {
                                type: u.tVU.SPINNING_CIRCLE_SIMPLE,
                                className: R.statusLoading
                            }) : (0, r.jsx)("span", {
                                className: l()(R.statusIndicator, null != n.status && R[n.status])
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-sm/medium",
                                children: function(e) {
                                    switch (e) {
                                        case s.M.STARTING:
                                            return w.intl.string(P.default.SgjaXI);
                                        case s.M.STARTUP_FAILED:
                                            return w.intl.string(P.default["7C9Z3s"]);
                                        case s.M.OFFLINE:
                                            return w.intl.string(P.default["Ys/RrB"]);
                                        case s.M.ONLINE:
                                            return w.intl.string(P.default["60kAzo"]);
                                        case s.M.DELETED:
                                            return w.intl.string(P.default.Z1NZwX);
                                        case s.M.MISSING_STOCK:
                                            return w.intl.string(P.default["+a5G2l"]);
                                        case s.M.SLEEPING:
                                            return w.intl.string(P.default.y0z8ZO);
                                        case s.M.PROVIDER_ERRORED:
                                            return w.intl.string(P.default["6g/oji"]);
                                        default:
                                            return "—"
                                    }
                                }(n.status)
                            }), null != X && (0, r.jsx)(d.m_, {
                                position: "top",
                                text: X,
                                children: (0, r.jsx)(u.cBN, {
                                    className: R.statusTooltipIcon,
                                    size: "xs"
                                })
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: R.detailItem,
                        children: [(0, r.jsx)(u.Text, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: w.intl.string(P.default.mJlz3T)
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            children: null != n.regionName ? n.regionName : "—"
                        })]
                    })]
                })
            })]
        }), Y && (0, r.jsx)("div", {
            className: R.overflowMenu,
            children: (0, r.jsx)(O.A, {
                guildId: t,
                instance: n
            })
        }), (0, r.jsx)("div", {
            className: R.imageBackground,
            children: (0, r.jsx)(h.T, {
                imageUrl: null != K ? K : ""
            })
        })]
    })
}