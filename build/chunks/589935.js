/** chunk id: 589935, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => P
}), n(733351);
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(311907),
    o = n(990078),
    u = n(397927),
    c = n(686956),
    E = n(966327),
    _ = n(429913),
    d = n(47167),
    g = n(769015),
    A = n(967144),
    T = n(576622),
    I = n(734057),
    O = n(696451),
    h = n(351906),
    N = n(287809),
    m = n(509402),
    f = n(562153),
    S = n(266047),
    p = n(221950),
    G = n(11541),
    R = n(985018),
    D = n(745483);

function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = l
        })
    }
    return e
}

function L(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let x = r.memo(function() {
        return (0, l.jsx)(o.m, {
            "data-pending-richtooltip-migration": !0,
            text: R.intl.string(R.t["vu/MiQ"]),
            children: (0, l.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: D.IV,
                children: R.intl.string(R.t.yobFdm)
            })
        })
    }),
    b = r.memo(function() {
        return (0, l.jsx)(o.m, {
            text: R.intl.string(R.t.OrCp9h),
            children: (0, l.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: D.IV,
                children: R.intl.string(R.t["4upToT"])
            })
        })
    }),
    M = {
        [G.UP.UNSPECIFIED]: {
            type: G.UP.UNSPECIFIED,
            getJoinTypeLabel: () => R.intl.string(R.t.DvMBkS),
            icon: null,
            hasTooltip: !1
        },
        [G.UP.BOT]: {
            type: G.UP.BOT,
            getJoinTypeLabel: () => R.intl.string(R.t.HumZAi),
            icon: (0, l.jsx)(u.CnV, {
                size: "custom",
                color: "currentColor",
                className: D.XY,
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [G.UP.INTEGRATION]: {
            type: G.UP.INTEGRATION,
            getJoinTypeLabel: () => R.intl.string(R.t.gmCUFw),
            icon: (0, l.jsx)(u.XC7, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [G.UP.DISCOVERY]: {
            type: G.UP.DISCOVERY,
            getJoinTypeLabel: () => R.intl.string(R.t["Ql/e9Y"]),
            icon: (0, l.jsx)(u.QGJ, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [G.UP.HUB]: {
            type: G.UP.HUB,
            getJoinTypeLabel: () => R.intl.string(R.t.Op8B3O),
            icon: (0, l.jsx)(u.Pfh, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [G.UP.INVITE]: {
            type: G.UP.INVITE,
            getJoinTypeLabel: e => e,
            icon: (0, l.jsx)(u.qYV, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [G.UP.VANITY_URL]: {
            type: G.UP.VANITY_URL,
            getJoinTypeLabel: e => e,
            icon: (0, l.jsx)(u.qYV, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [G.UP.MANUAL_MEMBER_VERIFICATION]: {
            type: G.UP.MANUAL_MEMBER_VERIFICATION,
            getJoinTypeLabel: e => null != e ? R.intl.formatToPlainString(R.t["VHLp+u"], {
                code: e
            }) : R.intl.string(R.t.vdu7oS),
            icon: (0, l.jsx)(m.A, {
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [G.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL]: {
            type: G.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL,
            getJoinTypeLabel: () => R.intl.string(R.t["9/ZreX"]),
            icon: (0, l.jsx)(u._xR, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        }
    };

function v(e) {
    var t, n;
    let {
        guildId: a,
        inviterUser: o,
        joinSourceType: c,
        className: _,
        onClickInviter: d
    } = e, g = (0, s.bG)([O.Ay], () => null == o ? null : O.Ay.getMember(a, o.id), [o, a]), T = (0, A.gn)(null == g ? void 0 : g.guildId, null == g ? void 0 : g.userId, null != (t = null == g ? void 0 : g.colorStrings) ? t : null), I = r.useCallback(e => {
        e.stopPropagation(), e.preventDefault(), null != o && (null == d || d(o))
    }, [o, d]);
    return null == o ? null : (0, l.jsxs)("div", {
        className: i()(D.u6, _),
        children: [(0, l.jsx)(u.Text, {
            variant: "text-xs/medium",
            children: c !== G.UP.BOT ? R.intl.string(R.t.azhY2u) : R.intl.string(R.t["2ByN2n"])
        }), (0, l.jsxs)(u.DUT, {
            className: i()(D.kp, null != d && D.vk),
            onClick: I,
            children: [(0, l.jsx)(E.A, {
                user: o,
                size: u._3J.SIZE_16
            }), (0, l.jsx)(u.Text, {
                variant: "text-xs/medium",
                children: (0, l.jsx)(u.gyj, {
                    name: f.Ay.getName(a, null, o),
                    colorString: null != (n = null == g ? void 0 : g.colorString) ? n : null,
                    colorStrings: T
                })
            })]
        })]
    })
}

function U(e) {
    let {
        channel: t,
        className: n
    } = e, r = (0, d.Ay)(t, !0);
    return (0, l.jsx)("div", {
        className: i()(D.kp, n),
        children: (0, l.jsx)(u.Text, {
            variant: "text-xs/medium",
            children: R.intl.format(R.t["2VQq2p"], {
                channelName: null != r ? r : R.intl.string(R.t.zLZPmk)
            })
        })
    })
}

function j(e) {
    let {
        children: t,
        hasTooltip: n,
        guildId: a,
        inviterUser: i,
        joinSourceType: u,
        joinSourceChannelId: c
    } = e, E = (0, s.bG)([I.A], () => I.A.getChannel(c)), _ = (0, d.Ay)(E, !0), g = !!n && (u === G.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL || null != i), A = r.useMemo(() => u === G.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL ? (0, l.jsx)(U, {
        channel: E
    }) : (0, l.jsx)(v, {
        guildId: a,
        inviterUser: i,
        joinSourceType: u
    }), [u, a, i, E]);
    if (!g) return t;
    let T = u === G.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL ? R.intl.formatToPlainString(R.t["2VQq2p"], {
        channelName: null != _ ? _ : R.intl.string(R.t.zLZPmk)
    }) : u === G.UP.BOT ? R.intl.string(R.t["2ByN2n"]) : R.intl.string(R.t.azhY2u);
    return (0, l.jsx)(o.m, {
        "aria-label": T,
        __unsupportedReactNodeAsText: A,
        children: t
    })
}

function y(e) {
    let {
        type: t
    } = e, n = (0, G.eN)(t);
    return null == n ? null : (0, l.jsx)("div", {
        className: D.c5,
        style: {
            width: 12,
            height: 12,
            backgroundImage: n
        }
    })
}

function k(e) {
    let {
        sourceInviteCode: t,
        joinSourceType: n,
        joinSourceApplicationId: a,
        integrationType: o,
        joinSourceChannelId: c,
        showJoinMethodContextAsFooter: E,
        guildId: d,
        inviterUser: A,
        onClickInviter: T
    } = e, O = function(e, t) {
        if (null == e) return {};
        var n, l, r, a = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
            return a
        }
        if (a = function(e, t) {
                if (null == e) return {};
                var n, l, r = {},
                    a = Object.getOwnPropertyNames(e);
                for (l = 0; l < a.length; l++) n = a[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                return r
            }(e, t), Object.getOwnPropertySymbols)
            for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
        return a
    }(e, ["sourceInviteCode", "joinSourceType", "joinSourceApplicationId", "integrationType", "joinSourceChannelId", "showJoinMethodContextAsFooter", "guildId", "inviterUser", "onClickInviter"]), h = null != n ? M[n] : null, N = n === G.UP.INTEGRATION && null != o, m = (0, _.h)(a), f = (0, s.bG)([I.A], () => I.A.getChannel(c)), S = r.useCallback(e => {
        switch (e.stopPropagation(), e.preventDefault(), !0) {
            case null == t && null == n:
            case null == n:
                return;
            case n === G.UP.INVITE && null != t:
                var l;
                (0, p.Ld)(d, {
                    selectedSourceInviteCode: null != (l = null == t ? void 0 : t.trim()) ? l : void 0,
                    selectedJoinSourceType: n
                });
                return;
            default:
                return void(0, p.Ld)(d, {
                    selectedSourceInviteCode: null,
                    selectedJoinSourceType: null != n ? n : void 0
                })
        }
    }, [d, n, t]);
    switch (!0) {
        case null == h:
        case null == n:
        case n === G.UP.UNSPECIFIED:
            return (0, l.jsx)(x, C({}, O));
        case null != o && N:
            return (0, l.jsxs)(u.DUT, L(C({
                className: D.B$
            }, O), {
                "aria-label": (0, G.v8)(o),
                role: "button",
                tabIndex: 0,
                onClick: S,
                children: [(0, l.jsx)(y, {
                    type: o
                }), (0, l.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    children: (0, G.v8)(o)
                })]
            }));
        case n === G.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL && null != m:
            return (0, l.jsxs)("div", {
                className: i()(E && D.TS),
                children: [(0, l.jsxs)(u.DUT, L(C({
                    className: D.SH
                }, O), {
                    "aria-label": null == h ? void 0 : h.getJoinTypeLabel(null != t ? t : void 0),
                    role: "button",
                    tabIndex: 0,
                    onClick: S,
                    children: [(0, l.jsx)(g.A, {
                        game: m,
                        size: g.M.XXSMALL
                    }), (0, l.jsx)(u.Text, {
                        variant: "text-sm/medium",
                        className: D.YL,
                        children: m.name
                    })]
                })), E && (0, l.jsx)(U, {
                    channel: f
                })]
            });
        case null != h:
            return (0, l.jsxs)("div", {
                className: i()(E && D.TS),
                children: [(0, l.jsxs)(u.DUT, L(C({
                    className: D.B$
                }, O), {
                    "aria-label": null == h ? void 0 : h.getJoinTypeLabel(null != t ? t : void 0),
                    role: "button",
                    tabIndex: 0,
                    onClick: S,
                    children: [null == h ? void 0 : h.icon, (0, l.jsx)(u.Text, {
                        variant: "text-sm/medium",
                        children: null == h ? void 0 : h.getJoinTypeLabel(null != t ? t : void 0)
                    })]
                })), E && (0, l.jsx)(v, {
                    guildId: d,
                    inviterUser: A,
                    joinSourceType: n,
                    className: D.nz,
                    onClickInviter: T
                })]
            });
        default:
            return (0, l.jsx)(x, C({}, O))
    }
}
let P = r.memo(function(e) {
    var t, n;
    let {
        userId: a,
        guildId: i,
        showJoinMethodContextAsFooter: o,
        onClickInviter: u
    } = e, E = (0, s.bG)([S.A], () => S.A.getEnhancedMember(i, a), [i, a]), _ = null != (t = null == E ? void 0 : E.inviterId) ? t : null, d = (0, s.bG)([N.default], () => N.default.getUser(_), [_]);
    r.useEffect(() => {
        null != _ && (c.A.requestMembersById(i, [_]), (0, T.A)(_, void 0, {
            guildId: i
        }))
    }, [i, _]);
    let g = (0, s.bG)([h.A], () => h.A.hideInstantInvites, []);
    if (null == E) return (0, l.jsx)(x, {});
    let {
        sourceInviteCode: A,
        joinSourceType: I,
        joinSourceChannelId: O,
        joinSourceApplicationId: m,
        integrationType: f
    } = E, p = null != I ? M[I] : null, R = null != (n = null == p ? void 0 : p.hasTooltip) && n;
    return (I === G.UP.INVITE || I === G.UP.VANITY_URL || I === G.UP.MANUAL_MEMBER_VERIFICATION && null != A) && g ? (0, l.jsx)(b, {}) : (0, l.jsx)(j, {
        hasTooltip: R && !o,
        inviterUser: null != d ? d : null,
        guildId: i,
        joinSourceType: I,
        joinSourceChannelId: O,
        children: (0, l.jsx)(k, {
            sourceInviteCode: A,
            joinSourceType: I,
            joinSourceApplicationId: m,
            joinSourceChannelId: O,
            integrationType: f,
            showJoinMethodContextAsFooter: o,
            inviterUser: null != d ? d : null,
            guildId: i,
            onClickInviter: u
        })
    })
})