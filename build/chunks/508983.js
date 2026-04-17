/** chunk id: 508983 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => Z
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(989349),
    o = n.n(a),
    c = n(837381),
    u = n(311907),
    d = n(827734),
    _ = n(990078),
    A = n(397927),
    E = n(956793),
    m = n(775602),
    I = n(709066),
    T = n(845625),
    g = n(785823),
    N = n(449585),
    f = n(137207),
    C = n(22007),
    p = n(378570),
    h = n(589022),
    S = n(576705),
    R = n(287809),
    x = n(562153),
    O = n(427262),
    M = n(465364),
    D = n(763754),
    U = n(901057),
    P = n(936044),
    L = n(643204),
    v = n(535421),
    b = n(112758),
    y = n(754459),
    k = n(809115),
    j = n(888675),
    G = n(381941),
    F = n(652215),
    H = n(705751),
    w = n(200700),
    B = n(985018),
    X = n(609836);

function V(e, t) {
    let {
        popouts: n,
        selected: i,
        setPopout: l
    } = (0, y.A)(e.id, G.Fd), {
        usernameProfile: s,
        avatarProfile: a
    } = n, o = (0, b.r4)(e.author.id, t.id), c = (0, b.UY)(e.author.id, t.id, e.id), u = (0, b.m)(e, t, s, l);
    return {
        selected: i,
        onContextMenu: o,
        onContextMenuModerateUser: c,
        onClickUsername: u,
        onClickAvatar: (0, b.Jo)(a, l),
        onPopoutRequestClose: r.useCallback(() => l({
            usernameProfile: !1,
            avatarProfile: !1,
            referencedUsernameProfile: !1
        }), [l]),
        renderPopout: v.A,
        showAvatarPopout: a,
        showUsernamePopout: s
    }
}

function q(e, t, n) {
    return r.useMemo(() => {
        if (null != t && null != n) return r => (0, i.jsx)(h.A, {
            ...r,
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
        compact: r
    } = e;
    return (0, i.jsx)("div", {
        className: s()(X.xQ, n, {
            [X.oE]: r
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
        className: s()(X.A3, n),
        children: t
    })
}

function W(e) {
    switch (e) {
        case T.G.DELETE_USER_MESSAGE:
            return (0, i.jsx)(A.ucK, {
                size: "xs",
                color: "currentColor",
                className: X.yr
            });
        case T.G.SET_COMPLETED:
            return (0, i.jsx)(A.A9s, {
                size: "xs",
                color: "currentColor",
                className: s()(X.yr, X.r0)
            });
        case T.G.SUBMIT_FEEDBACK:
            return (0, i.jsx)(A.iFK, {
                size: "xs",
                color: "currentColor",
                className: X.yr
            });
        default:
            return null
    }
}

function J(e) {
    let {
        alertAction: t,
        guildId: n
    } = e, r = (0, u.bG)([R.default], () => R.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == r) return W(e);
        let l = function(e, t, n) {
            let i = x.Ay.getNickname(n, null, t) ?? O.Ay.getUserTag(t),
                r = o()(e.ts),
                l = `${i} ${r.fromNow()}`;
            try {
                switch (parseInt(e.actionType)) {
                    case T.G.DELETE_USER_MESSAGE:
                        return B.intl.formatToPlainString(B.t.BtKE9h, {
                            userName: i,
                            timestamp: r.fromNow()
                        });
                    case T.G.SET_COMPLETED:
                        return B.intl.formatToPlainString(B.t.dyo9US, {
                            userName: i,
                            timestamp: r.fromNow()
                        });
                    case T.G.SUBMIT_FEEDBACK:
                        return B.intl.formatToPlainString(B.t["C9/kIO"], {
                            userName: i,
                            timestamp: r.fromNow()
                        });
                    default:
                        return l
                }
            } catch (e) {
                return l
            }
        }(t, r, n);
        return (0, i.jsx)(_.m, {
            text: l,
            children: W(e)
        })
    } catch (e) {
        return null
    }
}

function z(e) {
    let {
        alertActionsExecution: t,
        guildId: n
    } = e, r = Object.values(t.actions).sort((e, t) => e.actionType < t.actionType ? 1 : -1);
    return (0, i.jsx)("div", {
        className: X.q_,
        children: r.map(e => (0, i.jsx)(J, {
            alertAction: e,
            guildId: n
        }, e.actionType))
    })
}
let Q = r.memo(function(e) {
    let t, {
            message: n,
            channel: r,
            embedChannel: l,
            compact: s,
            interactionUserId: a
        } = e,
        o = V(n, r),
        c = q(r, n.author),
        u = (0, D.Ay)(n),
        d = (0, L.tO)({
            message: n,
            channel: r,
            author: u,
            guildId: r?.guild_id,
            compact: s,
            ...o
        }, c),
        _ = R.default.getUser(a),
        E = V(n, r),
        m = q(r, _, R.default.getCurrentUser());
    if (null != _) {
        let e = (0, D.FT)(_, r),
            i = (0, L.tO)({
                message: n,
                channel: r,
                author: e,
                guildId: r?.guild_id,
                compact: s,
                ...E
            }, m);
        t = () => i
    }
    return (0, i.jsx)(A.Text, {
        variant: "text-md/normal",
        color: "text-strong",
        tag: "span",
        className: X.he,
        children: (0, g.fu)(n, l, () => (0, i.jsx)("div", {
            className: X.aT,
            children: (0, i.jsx)(U.A, {
                channel: l,
                className: X.HA,
                openChatWithoutConnecting: !0
            })
        }), () => d, t)
    })
});

function Z(e) {
    let {
        id: t,
        compact: n,
        message: l,
        channel: a
    } = e, {
        avatarSrc: o,
        eventHandlers: {
            onMouseEnter: _,
            onMouseLeave: h
        }
    } = (0, k.a)(!0), {
        onFocus: R,
        ...x
    } = (0, c.rm)(t ?? ""), {
        isFocused: O,
        handleFocus: D,
        handleBlur: U
    } = (0, b.G8)(R), v = (0, u.bG)([m.A], () => m.A.keyboardModeEnabled), y = (0, u.bG)([S.A], () => S.A.can(F.xBc.MANAGE_MESSAGES, a), [a]), {
        ruleName: G,
        embedChannel: q,
        decisionId: W,
        keywordMatchedContent: J,
        keyword: Z,
        content: $,
        flaggedMessageId: ee,
        timeoutDuration: et,
        decisionReason: en,
        alertActionsExecution: ei,
        quarantineType: er,
        interactionUserId: el
    } = (0, g.Ay)(l), es = r.useMemo(() => (0, M.Tz)($, J, a.id), [$, J, a]), {
        selected: ea,
        ...eo
    } = V(l, a), ec = r.useCallback(() => {
        (0, N.w2)(l.id, $, W, a)
    }, [l.id, $, W, a]), eu = r.useCallback(e => {
        null != ee && null != q && (e.stopPropagation(), e.preventDefault(), (0, C.A)(F.BVt.CHANNEL(q?.guild_id, q?.id, ee)))
    }, [q, ee]), ed = r.useCallback(e => {
        null != q && (E.default.selectChannel({
            guildId: q.guild_id,
            channelId: e,
            messageId: l.id
        }), (0, p.iN)(e))
    }, [l, q]), e_ = r.useCallback(() => {
        (0, f.E5)(l.id, a, T.G.DELETE_USER_MESSAGE)
    }, [a, l.id]), eA = (0, w.getFriendlyDurationString)(Number(et)), eE = null != en, em = y && null != ee && (null == ei || !ei.actions.hasOwnProperty(T.G.DELETE_USER_MESSAGE)), eI = l.embeds.length > 0 ? l.embeds[0].fields.find(e => "channel_id" === e.rawName)?.rawValue : null, eT = null != eI;
    return (0, i.jsx)("div", {
        onMouseEnter: _,
        onMouseLeave: h,
        children: (0, i.jsx)(j.A, {
            className: s()(X.rs, {
                [X.oE]: n
            }),
            iconNode: n ? null : (0, i.jsx)(k.l, {
                src: o
            }),
            iconContainerClassName: X.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: s()(X.Qs, {
                    [X.oE]: n
                }),
                children: [(0, i.jsx)(L.ix, {
                    message: l,
                    messageClassname: X.he,
                    className: s()(X.QV, X.he, {
                        [X.oE]: n
                    }),
                    username: (0, i.jsxs)("div", {
                        className: X.he,
                        children: [(0, i.jsx)(A.Text, {
                            variant: "text-md/normal",
                            color: "text-brand",
                            tag: "span",
                            className: X.Xh,
                            children: B.intl.string(B.t.hG1StD)
                        }), (0, i.jsx)(I.A, {
                            type: H.nu.SYSTEM_DM,
                            className: X.Al
                        }), (0, i.jsx)(Q, {
                            message: l,
                            channel: a,
                            embedChannel: q,
                            compact: n,
                            interactionUserId: el
                        })]
                    }),
                    compact: n,
                    showTimestamp: !0
                }), (0, i.jsx)("div", {
                    className: s()(X.BK, {
                        [X.oE]: n
                    }),
                    children: (0, i.jsx)(P.A, {
                        ...x,
                        message: l,
                        channel: q,
                        content: es,
                        compact: n,
                        withFooter: !0,
                        hideTimestamp: !0,
                        className: s()(X.gD, {
                            [X.oE]: n,
                            [X.wH]: ea || v && O,
                            [X.JD]: null != ee && null != q
                        }),
                        childrenAccessories: (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)("div", {
                                className: X.Y4,
                                children: [null != Z && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(A.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        tag: "span",
                                        children: B.intl.format(B.t.SYIUTR, {
                                            keyword: Z
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: s()(X.Om, X.Gx)
                                    })]
                                }), null != G && (0, i.jsx)(A.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    tag: "span",
                                    children: B.intl.format(B.t.ZoOyKB, {
                                        ruleName: G
                                    })
                                }), null != eA && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)("div", {
                                        className: s()(X.Om, X.Gx)
                                    }), (0, i.jsx)(A.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        tag: "span",
                                        className: X.__invalid_footerText,
                                        children: B.intl.format(B.t["3LYql6"], {
                                            duration: eA
                                        })
                                    })]
                                }), null != er && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)("div", {
                                        className: s()(X.Om, X.Gx)
                                    }), (0, i.jsx)(A.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        tag: "span",
                                        className: X.nx,
                                        children: B.intl.format(B.t["26bB2M"], {
                                            reason: (0, g.o2)(er)
                                        })
                                    })]
                                })]
                            }), eE ? (0, i.jsx)(Y, {
                                children: (0, i.jsx)(A.Text, {
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
                        onBlur: U,
                        onClick: eu
                    })
                }), (0, i.jsx)(K, {
                    compact: n,
                    children: (0, i.jsxs)("div", {
                        className: s()(X.Y4, X.UD, {
                            [X.oE]: n
                        }),
                        children: [(0, i.jsxs)("div", {
                            className: X.AX,
                            children: [(0, i.jsx)(A.lmn, {
                                size: "xs",
                                color: d.A.unsafe_rawColors.BRAND_500.css,
                                className: X.Dq
                            }), (0, i.jsx)(A.QWc, {
                                variant: "primary",
                                size: "sm",
                                textVariant: "text-xs/normal",
                                text: B.intl.string(B.t.DEoVWZ),
                                onClick: e => {
                                    eo.onContextMenuModerateUser?.(e)
                                }
                            })]
                        }), eT ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                className: X.Om
                            }), (0, i.jsx)("div", {
                                className: X.AX,
                                children: (0, i.jsx)(A.QWc, {
                                    onClick: () => ed(eI),
                                    variant: "primary",
                                    size: "sm",
                                    textVariant: "text-xs/normal",
                                    text: B.intl.string(B.t.jtkj06)
                                })
                            })]
                        }) : null, (0, i.jsx)("div", {
                            className: X.Om
                        }), (0, i.jsx)("div", {
                            className: X.AX,
                            children: (0, i.jsx)(A.QWc, {
                                onClick: ec,
                                variant: "primary",
                                size: "sm",
                                textVariant: "text-xs/normal",
                                text: B.intl.string(B.t["94JbM3"])
                            })
                        }), em ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                className: X.Om
                            }), (0, i.jsx)("div", {
                                className: X.AX,
                                children: (0, i.jsx)(A.QWc, {
                                    onClick: e_,
                                    variant: "primary",
                                    size: "sm",
                                    textVariant: "text-xs/normal",
                                    text: B.intl.string(B.t["3A52tY"])
                                })
                            })]
                        }) : null, null != ei ? (0, i.jsx)(z, {
                            alertActionsExecution: ei,
                            guildId: a.guild_id
                        }) : null]
                    })
                })]
            })
        })
    })
}