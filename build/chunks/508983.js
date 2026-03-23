/** chunk id: 508983 params = (module,exports,require) **/
n.d(t, {
    A: () => Z
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(989349),
    o = n.n(s),
    c = n(837381),
    d = n(311907),
    u = n(827734),
    _ = n(990078),
    m = n(397927),
    A = n(956793),
    E = n(775602),
    I = n(709066),
    T = n(845625),
    f = n(785823),
    N = n(449585),
    g = n(137207),
    C = n(22007),
    h = n(378570),
    p = n(589022),
    R = n(576705),
    x = n(287809),
    S = n(562153),
    O = n(427262),
    M = n(465364),
    D = n(763754),
    P = n(901057),
    U = n(936044),
    v = n(643204),
    L = n(535421),
    j = n(112758),
    y = n(754459),
    b = n(809115),
    k = n(888675),
    G = n(381941),
    F = n(652215),
    B = n(705751),
    H = n(200700),
    V = n(985018),
    w = n(906135);

function q(e, t) {
    let {
        popouts: n,
        selected: i,
        setPopout: l
    } = (0, y.A)(e.id, G.Fd), {
        usernameProfile: r,
        avatarProfile: s
    } = n, o = (0, j.r4)(e.author.id, t.id), c = (0, j.UY)(e.author.id, t.id, e.id), d = (0, j.m)(e, t, r, l);
    return {
        selected: i,
        onContextMenu: o,
        onContextMenuModerateUser: c,
        onClickUsername: d,
        onClickAvatar: (0, j.Jo)(s, l),
        onPopoutRequestClose: a.useCallback(() => l({
            usernameProfile: !1,
            avatarProfile: !1,
            referencedUsernameProfile: !1
        }), [l]),
        renderPopout: L.A,
        showAvatarPopout: s,
        showUsernamePopout: r
    }
}

function X(e, t, n) {
    return a.useMemo(() => {
        if (null != t && null != n) return a => (0, i.jsx)(p.A, {
            ...a,
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
        compact: a
    } = e;
    return (0, i.jsx)("div", {
        className: r()(w.xQ, n, {
            [w.oE]: a
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
        className: r()(w.A3, n),
        children: t
    })
}

function z(e) {
    switch (e) {
        case T.G.DELETE_USER_MESSAGE:
            return (0, i.jsx)(m.ucK, {
                size: "xs",
                color: "currentColor",
                className: w.yr
            });
        case T.G.SET_COMPLETED:
            return (0, i.jsx)(m.A9s, {
                size: "xs",
                color: "currentColor",
                className: r()(w.yr, w.r0)
            });
        case T.G.SUBMIT_FEEDBACK:
            return (0, i.jsx)(m.iFK, {
                size: "xs",
                color: "currentColor",
                className: w.yr
            });
        default:
            return null
    }
}

function J(e) {
    let {
        alertAction: t,
        guildId: n
    } = e, a = (0, d.bG)([x.default], () => x.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == a) return z(e);
        let l = function(e, t, n) {
            let i = S.Ay.getNickname(n, null, t) ?? O.Ay.getUserTag(t),
                a = o()(e.ts),
                l = `${i} ${a.fromNow()}`;
            try {
                switch (parseInt(e.actionType)) {
                    case T.G.DELETE_USER_MESSAGE:
                        return V.intl.formatToPlainString(V.t.BtKE9h, {
                            userName: i,
                            timestamp: a.fromNow()
                        });
                    case T.G.SET_COMPLETED:
                        return V.intl.formatToPlainString(V.t.dyo9US, {
                            userName: i,
                            timestamp: a.fromNow()
                        });
                    case T.G.SUBMIT_FEEDBACK:
                        return V.intl.formatToPlainString(V.t["C9/kIO"], {
                            userName: i,
                            timestamp: a.fromNow()
                        });
                    default:
                        return l
                }
            } catch (e) {
                return l
            }
        }(t, a, n);
        return (0, i.jsx)(_.m, {
            text: l,
            children: z(e)
        })
    } catch (e) {
        return null
    }
}

function W(e) {
    let {
        alertActionsExecution: t,
        guildId: n
    } = e, a = Object.values(t.actions).sort((e, t) => e.actionType < t.actionType ? 1 : -1);
    return (0, i.jsx)("div", {
        className: w.q_,
        children: a.map(e => (0, i.jsx)(J, {
            alertAction: e,
            guildId: n
        }, e.actionType))
    })
}
let Q = a.memo(function(e) {
    let t, {
            message: n,
            channel: a,
            embedChannel: l,
            compact: r,
            interactionUserId: s
        } = e,
        o = q(n, a),
        c = X(a, n.author),
        d = (0, D.Ay)(n),
        u = (0, v.tO)({
            message: n,
            channel: a,
            author: d,
            guildId: a?.guild_id,
            compact: r,
            ...o
        }, c),
        _ = x.default.getUser(s),
        A = q(n, a),
        E = X(a, _, x.default.getCurrentUser());
    if (null != _) {
        let e = (0, D.FT)(_, a),
            i = (0, v.tO)({
                message: n,
                channel: a,
                author: e,
                guildId: a?.guild_id,
                compact: r,
                ...A
            }, E);
        t = () => i
    }
    return (0, i.jsx)(m.Text, {
        variant: "text-md/normal",
        color: "text-strong",
        tag: "span",
        className: w.he,
        children: (0, f.fu)(n, l, () => (0, i.jsx)("div", {
            className: w.aT,
            children: (0, i.jsx)(P.A, {
                channel: l,
                className: w.HA,
                openChatWithoutConnecting: !0
            })
        }), () => u, t)
    })
});

function Z(e) {
    let {
        id: t,
        compact: n,
        message: l,
        channel: s
    } = e, {
        avatarSrc: o,
        eventHandlers: {
            onMouseEnter: _,
            onMouseLeave: p
        }
    } = (0, b.a)(!0), {
        onFocus: x,
        ...S
    } = (0, c.rm)(t ?? ""), {
        isFocused: O,
        handleFocus: D,
        handleBlur: P
    } = (0, j.G8)(x), L = (0, d.bG)([E.A], () => E.A.keyboardModeEnabled), y = (0, d.bG)([R.A], () => R.A.can(F.xBc.MANAGE_MESSAGES, s), [s]), {
        ruleName: G,
        embedChannel: X,
        decisionId: z,
        keywordMatchedContent: J,
        keyword: Z,
        content: $,
        flaggedMessageId: ee,
        timeoutDuration: et,
        decisionReason: en,
        alertActionsExecution: ei,
        quarantineType: ea,
        interactionUserId: el
    } = (0, f.Ay)(l), er = a.useMemo(() => (0, M.Tz)($, J, s.id), [$, J, s]), {
        selected: es,
        ...eo
    } = q(l, s), ec = a.useCallback(() => {
        (0, N.w2)(l.id, $, z, s)
    }, [l.id, $, z, s]), ed = a.useCallback(e => {
        null != ee && null != X && (e.stopPropagation(), e.preventDefault(), (0, C.A)(F.BVt.CHANNEL(X?.guild_id, X?.id, ee)))
    }, [X, ee]), eu = a.useCallback(e => {
        null != X && (A.default.selectChannel({
            guildId: X.guild_id,
            channelId: e,
            messageId: l.id
        }), (0, h.iN)(e))
    }, [l, X]), e_ = a.useCallback(() => {
        (0, g.E5)(l.id, s, T.G.DELETE_USER_MESSAGE)
    }, [s, l.id]), em = (0, H.getFriendlyDurationString)(Number(et)), eA = null != en, eE = y && null != ee && (null == ei || !ei.actions.hasOwnProperty(T.G.DELETE_USER_MESSAGE)), eI = l.embeds.length > 0 ? l.embeds[0].fields.find(e => "channel_id" === e.rawName)?.rawValue : null, eT = null != eI;
    return (0, i.jsx)("div", {
        onMouseEnter: _,
        onMouseLeave: p,
        children: (0, i.jsx)(k.A, {
            className: r()(w.rs, {
                [w.oE]: n
            }),
            iconNode: n ? null : (0, i.jsx)(b.l, {
                src: o
            }),
            iconContainerClassName: w.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: r()(w.Qs, {
                    [w.oE]: n
                }),
                children: [(0, i.jsx)(v.ix, {
                    message: l,
                    messageClassname: w.he,
                    className: r()(w.QV, w.he, {
                        [w.oE]: n
                    }),
                    username: (0, i.jsxs)("div", {
                        className: w.he,
                        children: [(0, i.jsx)(m.Text, {
                            variant: "text-md/normal",
                            color: "text-brand",
                            tag: "span",
                            className: w.Xh,
                            children: V.intl.string(V.t.hG1StD)
                        }), (0, i.jsx)(I.A, {
                            type: B.nu.SYSTEM_DM,
                            className: w.Al
                        }), (0, i.jsx)(Q, {
                            message: l,
                            channel: s,
                            embedChannel: X,
                            compact: n,
                            interactionUserId: el
                        })]
                    }),
                    compact: n,
                    showTimestamp: !0
                }), (0, i.jsx)("div", {
                    className: r()(w.BK, {
                        [w.oE]: n
                    }),
                    children: (0, i.jsx)(U.A, {
                        ...S,
                        message: l,
                        channel: X,
                        content: er,
                        compact: n,
                        withFooter: !0,
                        hideTimestamp: !0,
                        className: r()(w.gD, {
                            [w.oE]: n,
                            [w.wH]: es || L && O,
                            [w.JD]: null != ee && null != X
                        }),
                        childrenAccessories: (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)("div", {
                                className: w.Y4,
                                children: [null != Z && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(m.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        tag: "span",
                                        children: V.intl.format(V.t.SYIUTR, {
                                            keyword: Z
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: r()(w.Om, w.Gx)
                                    })]
                                }), null != G && (0, i.jsx)(m.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    tag: "span",
                                    children: V.intl.format(V.t.ZoOyKB, {
                                        ruleName: G
                                    })
                                }), null != em && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)("div", {
                                        className: r()(w.Om, w.Gx)
                                    }), (0, i.jsx)(m.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        tag: "span",
                                        className: w.__invalid_footerText,
                                        children: V.intl.format(V.t["3LYql6"], {
                                            duration: em
                                        })
                                    })]
                                }), null != ea && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)("div", {
                                        className: r()(w.Om, w.Gx)
                                    }), (0, i.jsx)(m.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        tag: "span",
                                        className: w.nx,
                                        children: V.intl.format(V.t["26bB2M"], {
                                            reason: (0, f.o2)(ea)
                                        })
                                    })]
                                })]
                            }), eA ? (0, i.jsx)(Y, {
                                children: (0, i.jsx)(m.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-default",
                                    tag: "span",
                                    children: en
                                })
                            }) : null]
                        }),
                        popoutProps: eo,
                        zalgo: !0,
                        onFocus: D,
                        onBlur: P,
                        onClick: ed
                    })
                }), (0, i.jsx)(K, {
                    compact: n,
                    children: (0, i.jsxs)("div", {
                        className: r()(w.Y4, w.UD, {
                            [w.oE]: n
                        }),
                        children: [(0, i.jsxs)("div", {
                            className: w.AX,
                            children: [(0, i.jsx)(m.lmn, {
                                size: "xs",
                                color: u.A.unsafe_rawColors.BRAND_500.css,
                                className: w.Dq
                            }), (0, i.jsx)(m.QWc, {
                                variant: "primary",
                                size: "sm",
                                textVariant: "text-xs/normal",
                                text: V.intl.string(V.t.DEoVWZ),
                                onClick: e => {
                                    eo.onContextMenuModerateUser?.(e)
                                }
                            })]
                        }), eT ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                className: w.Om
                            }), (0, i.jsx)("div", {
                                className: w.AX,
                                children: (0, i.jsx)(m.QWc, {
                                    onClick: () => eu(eI),
                                    variant: "primary",
                                    size: "sm",
                                    textVariant: "text-xs/normal",
                                    text: V.intl.string(V.t.jtkj06)
                                })
                            })]
                        }) : null, (0, i.jsx)("div", {
                            className: w.Om
                        }), (0, i.jsx)("div", {
                            className: w.AX,
                            children: (0, i.jsx)(m.QWc, {
                                onClick: ec,
                                variant: "primary",
                                size: "sm",
                                textVariant: "text-xs/normal",
                                text: V.intl.string(V.t["94JbM3"])
                            })
                        }), eE ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                className: w.Om
                            }), (0, i.jsx)("div", {
                                className: w.AX,
                                children: (0, i.jsx)(m.QWc, {
                                    onClick: e_,
                                    variant: "primary",
                                    size: "sm",
                                    textVariant: "text-xs/normal",
                                    text: V.intl.string(V.t["3A52tY"])
                                })
                            })]
                        }) : null, null != ei ? (0, i.jsx)(W, {
                            alertActionsExecution: ei,
                            guildId: s.guild_id
                        }) : null]
                    })
                })]
            })
        })
    })
}