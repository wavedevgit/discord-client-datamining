/** chunk id: 643204 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => q,
    ix: () => W,
    tO: () => J
}), n(321073), n(938796);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(607399),
    o = n(665260),
    u = n(311907),
    c = n(990078),
    d = n(397927),
    m = n(793574),
    h = n(688810),
    g = n(429913),
    A = n(593643),
    f = n(802341),
    p = n(634202),
    x = n(17447),
    C = n(908247),
    N = n(870136),
    v = n(200759),
    E = n(919395),
    T = n(9842),
    b = n(657048),
    _ = n(93956),
    j = n(352413),
    I = n(854627),
    S = n(342296),
    R = n(964404),
    y = n(71393),
    M = n(576705),
    O = n(287809),
    w = n(486020),
    L = n(203982),
    k = n(763754),
    G = n(635071),
    D = n(860227),
    U = n(449859),
    P = n(855344),
    H = n(812299),
    V = n(109054),
    F = n(652215),
    $ = n(985018),
    B = n(679740);

function z(e) {
    let {
        avatarSrc: t,
        avatarDecorationSrc: n,
        compact: i,
        onClick: s,
        onContextMenu: a,
        onMouseDown: o,
        onMouseEnter: u,
        onMouseLeave: c,
        onKeyDown: d,
        showCommunicationDisabledStyles: m = !1,
        className: h,
        avatarImgRef: g
    } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("img", {
            ref: g,
            onClick: s,
            onContextMenu: a,
            onKeyDown: d,
            onMouseDown: o,
            onMouseEnter: u,
            onMouseLeave: c,
            src: t,
            "aria-hidden": !0,
            className: r()(h, B.my, {
                [B.oE]: i,
                [B.vk]: null != s,
                [B.uU]: m
            }),
            alt: " "
        }), null == n || i ? null : (0, l.jsx)("img", {
            className: B.M,
            src: n,
            alt: " ",
            "aria-hidden": !0
        })]
    })
}
let K = i.memo(function(e) {
    let {
        message: t,
        author: n,
        channel: s,
        guildId: r,
        compact: a = !1,
        roleIconProps: o,
        showUsernamePopout: c,
        renderPopout: m,
        onClickUsername: h,
        onContextMenu: g,
        displayCompactAvatars: N = !1,
        onPopoutRequestClose: E,
        preview: T,
        subscribeToGroupId: _,
        hideGuildTag: j
    } = e, I = (0, k.Ay)(t, n), S = i.useMemo(() => (0, H.y)({
        message: t,
        channel: s,
        user: t?.author,
        compact: a,
        isRepliedMessage: !1
    }), [t, s, a]), R = i.useRef(null), M = (0, u.bG)([y.A], () => y.A.getGuild(r)), O = i.useMemo(() => Y(a, N, o, M), [a, N, o, M]), w = i.useMemo(() => null == o ? null : 1 === O && null != M ? (0, l.jsx)(d.YNO, {
        targetElementRef: R,
        animation: d.YNO.Animation.TRANSLATE,
        align: "center",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        position: "right",
        renderPopout: () => (0, l.jsx)(P.A, {
            roleIcon: o,
            guild: M
        }),
        clickTrap: !0,
        children: e => {
            let {
                onClick: t
            } = e;
            return (0, l.jsx)(b.A, {
                ref: R,
                ...o,
                className: B.UT,
                onClick: t
            })
        }
    }, "role-icon-children") : 2 === O ? (0, l.jsx)(b.A, {
        ...o,
        className: B.UT
    }, "role-icon-children") : null, [O, o, M]), {
        enabled: L
    } = (0, A.D8)({
        guildId: M?.id,
        location: "MessageHeader"
    }), D = x.L.useConfig({
        location: "message_header"
    }).enabled, U = i.useMemo(() => {
        let e = [];
        return null != w && e.push(w), null != M && (e.push((0, l.jsx)(v.A, {
            guild: M,
            message: t
        }, "new-member")), L && e.push((0, l.jsx)(f.A, {
            guild: M,
            message: t
        }, "voice-channel"))), null != s && null != M && e.push((0, l.jsx)(p.A, {
            guild: M,
            channel: s,
            userId: t.author.id,
            messageId: t.id
        }, "connections")), D && null != s && e.push((0, l.jsx)(C.A, {
            channelId: s.id,
            messageId: t.id
        }, "moderation-label")), e
    }, [t, s, w, M, L, D]);
    return null == I ? null : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(G.A, {
            message: t,
            channel: s,
            author: I,
            compact: a,
            roleIcon: o,
            showPopout: c,
            renderPopout: m,
            onClick: h,
            onContextMenu: g,
            onPopoutRequestClose: E,
            decorations: {
                [G.w.SYSTEM_TAG]: S,
                [G.w.BADGES]: U
            },
            previewGuildId: r,
            preview: T,
            subscribeToGroupId: _,
            hideGuildTag: j
        }), a && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("i", {
                className: B.me,
                children: ":"
            }), " "]
        })]
    })
});

function J(e, t, n) {
    let {
        message: i,
        channel: s,
        author: r,
        compact: a = !1,
        onContextMenu: o,
        showUsernamePopout: u,
        roleIcon: c,
        onClickUsername: d,
        onPopoutRequestClose: m
    } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(G.A, {
            message: i,
            channel: s,
            author: r,
            compact: a,
            roleIcon: c,
            showPopout: u,
            renderPopout: t,
            onClick: d,
            onContextMenu: o,
            onPopoutRequestClose: m,
            decorations: n,
            preview: !0
        }), a && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("i", {
                className: B.me,
                children: ":"
            }), " "]
        })]
    })
}

function W(e) {
    let {
        message: t,
        avatar: n,
        username: i,
        usernameSpanId: s,
        usernameClassName: a,
        compact: u,
        showTimestamp: c,
        showTimestampOnHover: m,
        ariaLabelledBy: h,
        ariaDescribedBy: A,
        className: f,
        messageClassname: p,
        badges: x
    } = e, C = (0, o.Lt)(t.flags, F.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null, N = (0, g.h)(C);
    return (0, l.jsxs)(l.Fragment, {
        children: [!u && n, (0, l.jsxs)(d.H, {
            className: r()(B.wx, f),
            "aria-describedby": A,
            "aria-labelledby": h,
            children: [c && u && (0, l.jsx)(U.A, {
                id: (0, D.xl)(t),
                compact: !0,
                timestamp: t.timestamp,
                isVisibleOnlyOnHover: m,
                className: p,
                isInline: !1,
                application: N
            }), u && n, (0, l.jsx)("span", {
                id: s,
                className: a,
                children: i
            }), c && !u && (0, l.jsx)(U.A, {
                id: (0, D.xl)(t),
                timestamp: t.timestamp,
                className: p,
                application: N
            }), null != x && x.length > 0 ? (0, l.jsx)("div", {
                className: B.cV,
                children: x
            }) : null]
        })]
    })
}

function Y(e, t, n, l) {
    return (!e || t) && null != n && null != l ? 1 : (!e || t) && null != n ? 2 : 0
}
let q = i.memo(function(e) {
    let {
        message: t,
        repliedMessage: n,
        compact: s = !1,
        renderPopout: g,
        showTimestampOnHover: A,
        roleIcon: f,
        subscribeToGroupId: p,
        hideTimestamp: x,
        hideGuildTag: C,
        className: v,
        channel: b,
        preview: k
    } = e, G = i.useMemo(() => null != g ? e => g(e, t) : void 0, [g, t]), [, U] = (0, N.Ay)(t.author.id, e.guildId), P = (0, u.bG)([M.A, y.A], () => {
        let n = y.A.getGuild(e.guildId);
        return null != t.author && null != n && M.A.canManageUser(F.xBc.MODERATE_MEMBERS, t.author, n)
    }, [t.author, e.guildId]), J = U && P, q = function(e) {
        let {
            props: t,
            guildId: n,
            handleRenderPopout: s,
            showCommunicationDisabledStyles: r = !1,
            className: o
        } = e, {
            message: c,
            author: d,
            compact: g = !1,
            subscribeToGroupId: A,
            animate: f = !0,
            onContextMenu: p,
            onClickAvatar: x,
            onPopoutRequestClose: C,
            showAvatarPopout: N
        } = t, v = i.useRef(null), [T, b] = i.useState(!1), {
            analyticsLocations: _
        } = (0, h.Ay)(m.A.AVATAR), y = (0, u.bG)([O.default], () => O.default.getCurrentUser()), M = (0, u.bG)([R.Ay], () => t.displayCompactAvatars ?? R.Ay.displayCompactAvatars), k = (0, V.A)(c), G = g ? 32 : 80, {
            pendingAvatarDecoration: D
        } = (0, j.A)({
            guildId: n
        }), U = (0, E.lw)({
            pendingValue: c.author.id === y?.id ? D : void 0,
            userValue: c.author?.avatarDecoration,
            guildValue: d?.guildMemberAvatarDecoration,
            guildId: n
        }), {
            avatarSrc: P,
            avatarDecorationSrc: H,
            eventHandlers: $
        } = (0, I.A)({
            userId: c.author.id,
            guildId: n,
            size: G,
            animateOnHover: null != A ? !T : !f,
            avatarDecorationOverride: U,
            showPending: !0
        }), B = c.isInteractionPlaceholder(), K = i.useMemo(() => B && null == c.author.avatar && null == d.guildMemberAvatar && c.application?.icon != null ? w.Ay.getApplicationIconURL({
            id: c.application.id,
            icon: c.application.icon,
            size: G,
            fallbackAvatar: !1
        }) ?? P : null != c.webhookId && null == d.guildMemberAvatar ? w.Ay.getUserAvatarURL({
            avatar: c.author.avatar,
            id: c.author.id,
            discriminator: c.author.discriminator,
            bot: !0
        }, !1, G) : P, [B, c.author.avatar, c.author.id, c.author.discriminator, c.application?.icon, c.application?.id, c.webhookId, P, G, d.guildMemberAvatar]);
        if (i.useEffect(() => {
                if (null != A) return L._.subscribeKeyed(F.zOV.ANIMATE_CHAT_AVATAR, `${A}:${c.author.id}`, b), () => void L._.unsubscribeKeyed(F.zOV.ANIMATE_CHAT_AVATAR, `${A}:${c.author.id}`, b)
            }, [c.author.id, A]), !g || M) return null != s && null != N ? (0, l.jsx)(h.f5, {
            value: _,
            children: (0, l.jsx)(S.A, {
                targetElementRef: v,
                user: c.author,
                guildId: n,
                channelId: c.channel_id,
                messageId: c.id,
                shouldShow: N,
                shouldPreload: k,
                renderPopout: s,
                position: a.Fr ? "window_center" : "right",
                avatarUrl: K,
                onRequestClose: C,
                clickTrap: N,
                children: e => z({
                    ...$,
                    avatarSrc: K,
                    avatarDecorationSrc: H,
                    compact: g,
                    onClick: x,
                    onContextMenu: p,
                    onMouseDown: e.onMouseDown,
                    onKeyDown: e.onKeyDown,
                    showCommunicationDisabledStyles: r,
                    className: o,
                    avatarImgRef: v
                })
            })
        }) : (0, l.jsx)(h.f5, {
            value: _,
            children: z({
                ...$,
                avatarSrc: K,
                avatarDecorationSrc: H,
                compact: g,
                onClick: x,
                onContextMenu: p,
                onMouseDown: void 0,
                onKeyDown: void 0,
                showCommunicationDisabledStyles: r,
                className: o
            })
        })
    }({
        props: e,
        guildId: e.guildId,
        handleRenderPopout: G,
        showCommunicationDisabledStyles: J
    }), X = (0, u.bG)([R.Ay], () => e.displayCompactAvatars ?? R.Ay.displayCompactAvatars), Q = i.useMemo(() => (0, H.k)({
        message: t,
        channel: b,
        user: t?.author,
        compact: s,
        isRepliedMessage: !1
    }), [t, b, s]), Z = (0, u.bG)([y.A], () => Y(s, X, f, y.A.getGuild(e.guildId)), [s, X, f, e.guildId]), ee = i.useMemo(() => {
        let e = [];
        return (0, o.Lt)(t.flags, F.pr7.SUPPRESS_NOTIFICATIONS) && e.push((0, l.jsx)(_.A, {}, "suppress-notifications")), e
    }, [t]), et = (0, D.d$)(t, p), en = (0, D.xl)(t), el = x ? `${et}` : `${et} ${en}`, ei = n?.state === T.a.LOADED ? (0, D.nS)(t) : void 0;
    return (0, l.jsx)(W, {
        message: t,
        avatar: q,
        username: (0, l.jsxs)(l.Fragment, {
            children: [J && (0, l.jsx)(c.m, {
                text: $.intl.string($.t["AeYyL+"]),
                children: (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(d.gQi, {
                        size: "xxs",
                        color: "currentColor",
                        className: s ? B.EI : B.bu
                    }), (0, l.jsx)(d.AC4, {
                        children: $.intl.string($.t.AmHag5)
                    })]
                })
            }), (0, l.jsx)(K, {
                ...e,
                message: t,
                channel: b,
                compact: s,
                roleIconProps: f,
                renderPopout: G,
                preview: k,
                subscribeToGroupId: p,
                hideGuildTag: C
            })]
        }),
        usernameSpanId: (0, D.d$)(t, p),
        usernameClassName: r()(B.TK, {
            [B.yF]: 0 !== Z,
            [B.hB]: null != Q || ee.length > 0
        }),
        compact: s,
        showTimestamp: !0 !== x,
        showTimestampOnHover: A,
        ariaLabelledBy: el,
        ariaDescribedBy: ei,
        className: v,
        badges: ee
    })
})