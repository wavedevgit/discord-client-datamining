/** chunk id: 508983, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => q
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(989349),
    o = n.n(s),
    c = n(837381),
    d = n(311907),
    u = n(827734),
    m = n(990078),
    _ = n(397927),
    A = n(956793),
    f = n(775602),
    E = n(709066),
    h = n(845625),
    g = n(785823),
    p = n(449585),
    x = n(137207),
    C = n(22007),
    I = n(378570),
    T = n(589022),
    N = n(576705),
    S = n(287809),
    R = n(562153),
    v = n(427262),
    M = n(465364),
    j = n(763754),
    O = n(901057),
    b = n(936044),
    y = n(643204),
    L = n(535421),
    D = n(112758),
    U = n(754459),
    P = n(809115),
    k = n(888675),
    G = n(381941),
    w = n(652215),
    F = n(705751),
    H = n(200700),
    B = n(985018),
    V = n(906135);

function z(e, t) {
    let {
        popouts: n,
        selected: i,
        setPopout: a
    } = (0, U.A)(e.id, G.Fd), {
        usernameProfile: r,
        avatarProfile: s
    } = n, o = (0, D.r4)(e.author.id, t.id), c = (0, D.UY)(e.author.id, t.id, e.id), d = (0, D.m)(e, t, r, a);
    return {
        selected: i,
        onContextMenu: o,
        onContextMenuModerateUser: c,
        onClickUsername: d,
        onClickAvatar: (0, D.Jo)(s, a),
        onPopoutRequestClose: l.useCallback(() => a({
            usernameProfile: !1,
            avatarProfile: !1,
            referencedUsernameProfile: !1
        }), [a]),
        renderPopout: L.A,
        showAvatarPopout: s,
        showUsernamePopout: r
    }
}

function J(e, t, n) {
    return l.useMemo(() => {
        if (null != t && null != n) return l => (0, i.jsx)(T.A, {
            ...l,
            user: t,
            currentUser: n,
            guildId: e.guild_id,
            channelId: e.id
        })
    }, [e, t, n])
}

function K(e) {
    let {
        children: t,
        className: n,
        compact: l
    } = e;
    return (0, i.jsx)("div", {
        className: r()(V.xQ, n, {
            [V.oE]: l
        }),
        children: t
    })
}

function Y(e) {
    let {
        children: t,
        className: n
    } = e;
    return (0, i.jsx)("div", {
        className: r()(V.A3, n),
        children: t
    })
}

function W(e) {
    switch (e) {
        case h.G.DELETE_USER_MESSAGE:
            return (0, i.jsx)(_.ucK, {
                size: "xs",
                color: "currentColor",
                className: V.yr
            });
        case h.G.SET_COMPLETED:
            return (0, i.jsx)(_.A9s, {
                size: "xs",
                color: "currentColor",
                className: r()(V.yr, V.r0)
            });
        case h.G.SUBMIT_FEEDBACK:
            return (0, i.jsx)(_.iFK, {
                size: "xs",
                color: "currentColor",
                className: V.yr
            });
        default:
            return null
    }
}

function Q(e) {
    let {
        alertAction: t,
        guildId: n
    } = e, l = (0, d.bG)([S.default], () => S.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == l) return W(e);
        let a = function(e, t, n) {
            let i = R.Ay.getNickname(n, null, t) ?? v.Ay.getUserTag(t),
                l = o()(e.ts),
                a = `${i} ${l.fromNow()}`;
            try {
                switch (parseInt(e.actionType)) {
                    case h.G.DELETE_USER_MESSAGE:
                        return B.intl.formatToPlainString(B.t.BtKE9h, {
                            userName: i,
                            timestamp: l.fromNow()
                        });
                    case h.G.SET_COMPLETED:
                        return B.intl.formatToPlainString(B.t.dyo9US, {
                            userName: i,
                            timestamp: l.fromNow()
                        });
                    case h.G.SUBMIT_FEEDBACK:
                        return B.intl.formatToPlainString(B.t["C9/kIO"], {
                            userName: i,
                            timestamp: l.fromNow()
                        });
                    default:
                        return a
                }
            } catch (e) {
                return a
            }
        }(t, l, n);
        return (0, i.jsx)(m.m, {
            text: a,
            children: W(e)
        })
    } catch (e) {
        return null
    }
}

function Z(e) {
    let {
        alertActionsExecution: t,
        guildId: n
    } = e, l = Object.values(t.actions).sort((e, t) => e.actionType < t.actionType ? 1 : -1);
    return (0, i.jsx)("div", {
        className: V.q_,
        children: l.map(e => (0, i.jsx)(Q, {
            alertAction: e,
            guildId: n
        }, e.actionType))
    })
}
let X = l.memo(function(e) {
    let t, {
            message: n,
            channel: l,
            embedChannel: a,
            compact: r,
            interactionUserId: s
        } = e,
        o = z(n, l),
        c = J(l, n.author),
        d = (0, j.Ay)(n),
        u = (0, y.tO)({
            message: n,
            channel: l,
            author: d,
            guildId: l?.guild_id,
            compact: r,
            ...o
        }, c),
        m = S.default.getUser(s),
        A = z(n, l),
        f = J(l, m, S.default.getCurrentUser());
    if (null != m) {
        let e = (0, j.FT)(m, l),
            i = (0, y.tO)({
                message: n,
                channel: l,
                author: e,
                guildId: l?.guild_id,
                compact: r,
                ...A
            }, f);
        t = () => i
    }
    return (0, i.jsx)(_.Text, {
        variant: "text-md/normal",
        color: "text-strong",
        tag: "span",
        className: V.he,
        children: (0, g.fu)(n, a, () => (0, i.jsx)("div", {
            className: V.aT,
            children: (0, i.jsx)(O.A, {
                channel: a,
                className: V.HA,
                openChatWithoutConnecting: !0
            })
        }), () => u, t)
    })
});

function q(e) {
    let {
        id: t,
        compact: n,
        message: a,
        channel: s
    } = e, {
        avatarSrc: o,
        eventHandlers: {
            onMouseEnter: m,
            onMouseLeave: T
        }
    } = (0, P.a)(!0), {
        onFocus: S,
        ...R
    } = (0, c.rm)(t ?? ""), {
        isFocused: v,
        handleFocus: j,
        handleBlur: O
    } = (0, D.G8)(S), L = (0, d.bG)([f.A], () => f.A.keyboardModeEnabled), U = (0, d.bG)([N.A], () => N.A.can(w.xBc.MANAGE_MESSAGES, s), [s]), {
        ruleName: G,
        embedChannel: J,
        decisionId: W,
        keywordMatchedContent: Q,
        keyword: q,
        content: $,
        flaggedMessageId: ee,
        timeoutDuration: et,
        decisionReason: en,
        alertActionsExecution: ei,
        quarantineType: el,
        interactionUserId: ea
    } = (0, g.Ay)(a), er = l.useMemo(() => (0, M.Tz)($, Q, s.id), [$, Q, s]), {
        selected: es,
        ...eo
    } = z(a, s), ec = l.useCallback(() => {
        (0, p.w2)(a.id, $, W, s)
    }, [a.id, $, W, s]), ed = l.useCallback(e => {
        null != ee && null != J && (e.stopPropagation(), e.preventDefault(), (0, C.A)(w.BVt.CHANNEL(J?.guild_id, J?.id, ee)))
    }, [J, ee]), eu = l.useCallback(e => {
        null != J && (A.default.selectChannel({
            guildId: J.guild_id,
            channelId: e,
            messageId: a.id
        }), (0, I.iN)(e))
    }, [a, J]), em = l.useCallback(() => {
        (0, x.E5)(a.id, s, h.G.DELETE_USER_MESSAGE)
    }, [s, a.id]), e_ = (0, H.getFriendlyDurationString)(Number(et)), eA = null != en, ef = U && null != ee && (null == ei || !ei.actions.hasOwnProperty(h.G.DELETE_USER_MESSAGE)), eE = a.embeds.length > 0 ? a.embeds[0].fields.find(e => "channel_id" === e.rawName)?.rawValue : null, eh = null != eE;
    return (0, i.jsx)("div", {
        onMouseEnter: m,
        onMouseLeave: T,
        children: (0, i.jsx)(k.A, {
            className: r()(V.rs, {
                [V.oE]: n
            }),
            iconNode: n ? null : (0, i.jsx)(P.l, {
                src: o
            }),
            iconContainerClassName: V.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: r()(V.Qs, {
                    [V.oE]: n
                }),
                children: [(0, i.jsx)(y.ix, {
                    message: a,
                    messageClassname: V.he,
                    className: r()(V.QV, V.he, {
                        [V.oE]: n
                    }),
                    username: (0, i.jsxs)("div", {
                        className: V.he,
                        children: [(0, i.jsx)(_.Text, {
                            variant: "text-md/normal",
                            color: "text-brand",
                            tag: "span",
                            className: V.Xh,
                            children: B.intl.string(B.t.hG1StD)
                        }), (0, i.jsx)(E.A, {
                            type: F.nu.SYSTEM_DM,
                            className: V.Al
                        }), (0, i.jsx)(X, {
                            message: a,
                            channel: s,
                            embedChannel: J,
                            compact: n,
                            interactionUserId: ea
                        })]
                    }),
                    compact: n,
                    showTimestamp: !0
                }), (0, i.jsx)("div", {
                    className: r()(V.BK, {
                        [V.oE]: n
                    }),
                    children: (0, i.jsx)(b.A, {
                        ...R,
                        message: a,
                        channel: J,
                        content: er,
                        compact: n,
                        withFooter: !0,
                        hideTimestamp: !0,
                        className: r()(V.gD, {
                            [V.oE]: n,
                            [V.wH]: es || L && v,
                            [V.JD]: null != ee && null != J
                        }),
                        childrenAccessories: (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)("div", {
                                className: V.Y4,
                                children: [null != q && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(_.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        tag: "span",
                                        children: B.intl.format(B.t.SYIUTR, {
                                            keyword: q
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: r()(V.Om, V.Gx)
                                    })]
                                }), null != G && (0, i.jsx)(_.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    tag: "span",
                                    children: B.intl.format(B.t.ZoOyKB, {
                                        ruleName: G
                                    })
                                }), null != e_ && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)("div", {
                                        className: r()(V.Om, V.Gx)
                                    }), (0, i.jsx)(_.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        tag: "span",
                                        className: V.__invalid_footerText,
                                        children: B.intl.format(B.t["3LYql6"], {
                                            duration: e_
                                        })
                                    })]
                                }), null != el && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)("div", {
                                        className: r()(V.Om, V.Gx)
                                    }), (0, i.jsx)(_.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        tag: "span",
                                        className: V.nx,
                                        children: B.intl.format(B.t["26bB2M"], {
                                            reason: (0, g.o2)(el)
                                        })
                                    })]
                                })]
                            }), eA ? (0, i.jsx)(Y, {
                                children: (0, i.jsx)(_.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-default",
                                    tag: "span",
                                    children: en
                                })
                            }) : null]
                        }),
                        popoutProps: eo,
                        zalgo: !0,
                        onFocus: j,
                        onBlur: O,
                        onClick: ed
                    })
                }), (0, i.jsx)(K, {
                    compact: n,
                    children: (0, i.jsxs)("div", {
                        className: r()(V.Y4, V.UD, {
                            [V.oE]: n
                        }),
                        children: [(0, i.jsxs)("div", {
                            className: V.AX,
                            children: [(0, i.jsx)(_.lmn, {
                                size: "xs",
                                color: u.A.unsafe_rawColors.BRAND_500.css,
                                className: V.Dq
                            }), (0, i.jsx)(_.QWc, {
                                variant: "primary",
                                size: "sm",
                                textVariant: "text-xs/normal",
                                text: B.intl.string(B.t.DEoVWZ),
                                onClick: e => {
                                    eo.onContextMenuModerateUser?.(e)
                                }
                            })]
                        }), eh ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                className: V.Om
                            }), (0, i.jsx)("div", {
                                className: V.AX,
                                children: (0, i.jsx)(_.QWc, {
                                    onClick: () => eu(eE),
                                    variant: "primary",
                                    size: "sm",
                                    textVariant: "text-xs/normal",
                                    text: B.intl.string(B.t.jtkj06)
                                })
                            })]
                        }) : null, (0, i.jsx)("div", {
                            className: V.Om
                        }), (0, i.jsx)("div", {
                            className: V.AX,
                            children: (0, i.jsx)(_.QWc, {
                                onClick: ec,
                                variant: "primary",
                                size: "sm",
                                textVariant: "text-xs/normal",
                                text: B.intl.string(B.t["94JbM3"])
                            })
                        }), ef ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                className: V.Om
                            }), (0, i.jsx)("div", {
                                className: V.AX,
                                children: (0, i.jsx)(_.QWc, {
                                    onClick: em,
                                    variant: "primary",
                                    size: "sm",
                                    textVariant: "text-xs/normal",
                                    text: B.intl.string(B.t["3A52tY"])
                                })
                            })]
                        }) : null, null != ei ? (0, i.jsx)(Z, {
                            alertActionsExecution: ei,
                            guildId: s.guild_id
                        }) : null]
                    })
                })]
            })
        })
    })
}