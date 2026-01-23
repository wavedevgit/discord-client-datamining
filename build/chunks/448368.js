/** Chunk was on web.js **/
/** chunk id: 448368, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => G,
    o: () => U
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(989349),
    l = n.n(o),
    c = n(397927),
    u = n(793574),
    d = n(688810),
    f = n(659859),
    p = n(427930),
    _ = n(387408),
    h = n(427209),
    m = n(969632),
    g = n(9842),
    E = n(697474),
    y = n(378058),
    b = n(486020),
    O = n(405269),
    v = n(403362),
    A = n(860227),
    I = n(291812),
    S = n(943220),
    T = n(943815),
    C = n(838541),
    N = n(652215),
    w = n(985018),
    R = n(679740),
    P = n(206314);

function D(e) {
    let {
        width: t = 12,
        height: n = 8,
        color: i = "currentColor",
        className: a,
        foreground: s
    } = e;
    return (0, r.jsx)("svg", {
        className: a,
        width: t,
        height: n,
        viewBox: "0 0 12 8",
        children: (0, r.jsx)("path", {
            d: "M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z",
            className: s,
            fill: i
        })
    })
}

function x(e) {
    let {
        width: t = 18,
        height: n = 18,
        className: i,
        foreground: a
    } = e;
    return (0, r.jsx)("svg", {
        className: i,
        width: t,
        height: n,
        viewBox: "0 0 18 18",
        children: (0, r.jsx)("path", {
            fill: "#3ba55c",
            d: "M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0",
            className: a
        })
    })
}

function L(e, t, n, i, a, o) {
    return (0, r.jsx)("img", {
        alt: "",
        src: (null == t ? void 0 : t.guildMemberAvatar) != null && null != n ? (0, b.s7)({
            guildId: n,
            userId: e.id,
            avatar: t.guildMemberAvatar
        }) : e.getAvatarURL(n, 16),
        onClick: i,
        onContextMenu: a,
        className: s()({
            [R.mf]: !0,
            [R.vk]: null != i
        }),
        ref: o
    })
}

function j(e, t, n) {
    let {
        referencedMessage: a,
        channel: s,
        compact: o,
        isReplyAuthorBlocked: l,
        repliedAuthor: f,
        showAvatarPopout: p,
        onClickAvatar: _,
        onContextMenu: h,
        onPopoutRequestClose: m
    } = e, {
        analyticsLocations: E
    } = (0, d.Ay)(u.A.AVATAR), y = i.useRef(null);
    if (o || a.state !== g.a.LOADED || l) return n === N.lAJ.CONTEXT_MENU_COMMAND ? (0, r.jsx)("div", {
        className: R.Do,
        children: (0, r.jsx)(c.oyn, {
            size: "xs"
        })
    }) : (0, r.jsx)("div", {
        className: R.Cz,
        children: (0, r.jsx)(D, {
            className: R.UE
        })
    });
    if (a.message.type === N.lAJ.USER_JOIN || a.message.type === N.lAJ.ROLE_SUBSCRIPTION_PURCHASE || a.message.type === N.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT || a.message.type === N.lAJ.GUILD_GAMING_STATS_PROMPT) return (0, r.jsx)(x, {
        className: R.VJ
    });
    if (a.message.type === N.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, r.jsx)(c.qyI, {
        size: "md",
        color: "currentColor",
        className: R.Cw
    });
    if (a.message.type === N.lAJ.POLL_RESULT) return (0, r.jsx)(c.YRe, {
        className: R.Vs,
        width: C.eJ,
        height: C.eJ,
        size: "custom"
    });
    let b = () => L(a.message.author, f, s.guild_id, _, h, y);
    return null != t && null != p ? (0, r.jsx)(d.f5, {
        value: E,
        children: (0, r.jsx)(c.YNO, {
            targetElementRef: y,
            renderPopout: t,
            shouldShow: p,
            position: "right",
            onRequestClose: m,
            children: b
        })
    }) : (0, r.jsx)(d.f5, {
        value: E,
        children: b()
    })
}

function M(e, t) {
    let {
        baseMessage: n,
        channel: i,
        referencedMessage: a,
        showUsernamePopout: s,
        onClickUsername: o,
        onContextMenu: l,
        onPopoutRequestClose: c
    } = e, u = (null == a ? void 0 : a.state) === g.a.LOADED ? a.message : void 0;
    return null == u || u.type === N.lAJ.USER_JOIN || u.type === N.lAJ.ROLE_SUBSCRIPTION_PURCHASE || u.type === N.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION || u.type === N.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT || u.type === N.lAJ.GUILD_GAMING_STATS_PROMPT || u.type === N.lAJ.POLL_RESULT ? null : (0, r.jsx)(S.A, {
        message: u,
        channel: i,
        compact: !0,
        withMentionPrefix: (0, E.A)(n, u),
        showPopout: s,
        renderPopout: t,
        onClick: o,
        onContextMenu: l,
        onPopoutRequestClose: c,
        isRepliedMessage: !0
    })
}

function k(e, t, n) {
    let {
        content: i,
        referencedMessage: a,
        isReplyAuthorBlocked: o,
        isReplyAuthorIgnored: l,
        onClickReply: u
    } = e, d = a.state !== g.a.DELETED ? u : void 0;
    switch (a.state) {
        case g.a.LOADED: {
            let {
                contentPlaceholder: e,
                renderedContent: u,
                trailingIcon: f,
                leadingIcon: p
            } = U(a.message, i, o, l, R.Io, {
                trailingIconClass: R.$4,
                leadingIconClass: R.Vs,
                iconSize: C.eJ
            });
            return (0, r.jsxs)(r.Fragment, {
                children: [p, (0, r.jsx)(c.DUT, {
                    className: s()(R.$y, R.vk, {
                        [R.FQ]: t
                    }),
                    onClick: d,
                    onMouseEnter: n,
                    onMouseLeave: n,
                    children: (0, r.jsx)(c.RDc, {
                        children: null != u ? u : (0, r.jsx)("span", {
                            className: R.MK,
                            children: e
                        })
                    })
                }), f]
            })
        }
        case g.a.NOT_LOADED:
            return (0, r.jsx)(c.DUT, {
                className: s()(R.$y, R.vk),
                onClick: d,
                children: (0, r.jsx)("span", {
                    className: R.MK,
                    children: w.intl.string(w.t["1i+hMi"])
                })
            });
        case g.a.DELETED:
            return (0, r.jsx)("div", {
                className: R.$y,
                children: (0, r.jsx)("span", {
                    className: R.MK,
                    children: w.intl.string(w.t.mE3KJN)
                })
            });
        default:
            (0, v.xb)(a)
    }
}

function U(e, t, n, i, a, o) {
    let l, u, d, g, E = (0, _.A)(e),
        {
            trailingIconClass: b,
            leadingIconClass: O,
            iconSize: v
        } = o,
        A = null == t || "" === t || Array.isArray(t) && 0 === t.length,
        S = (0, y.o6)(E).length > 0,
        T = null != E.interaction,
        C = E.hasFlag(N.pr7.IS_VOICE_MESSAGE),
        D = E.isPoll(),
        x = E.type === N.lAJ.POLL_RESULT;
    if ((0, p.A)(e) && (g = (0, r.jsx)(h.A, {
            size: "custom",
            className: O,
            width: v,
            height: v
        })), n) l = w.intl.string(w.t.XAkOo2);
    else if (i) l = w.intl.string(w.t["G7p6v/"]);
    else if (E.type === N.lAJ.CHANNEL_PINNED_MESSAGE) l = w.intl.string(w.t.sCfDDl);
    else if (E.type === N.lAJ.EMOJI_ADDED) u = (0, r.jsx)(f.HN, {
        message: E,
        rendered: t
    });
    else if (A)
        if (D) {
            var L, j;
            u = (0, r.jsx)("div", {
                className: s()(R.Io, P.PT),
                children: null == E || null == (j = E.poll) || null == (L = j.question) ? void 0 : L.text
            })
        } else x ? l = (0, m.Il)(E) : S ? l = w.intl.string(w.t.kHdYCW) : T ? l = w.intl.string(w.t["E+6SSY"]) : C ? l = w.intl.string(w.t.XC3A52) : E.hasFlag(N.pr7.IS_COMPONENTS_V2) ? l = w.intl.string(w.t.Xxat6S) : (l = w.intl.string(w.t["6hGo0c"]), d = (0, r.jsx)(c.xfq, {
            size: "custom",
            color: "currentColor",
            className: b,
            width: v,
            height: v
        }));
    else u = (0, r.jsx)(I.Ay, {
        message: E,
        content: t,
        className: a,
        compact: !0
    });
    return S ? d = (0, r.jsx)(c.s2T, {
        size: "custom",
        color: "currentColor",
        className: b,
        width: v,
        height: v
    }) : T ? d = (0, r.jsx)(c.kC9, {
        size: "custom",
        color: "currentColor",
        className: b,
        width: v,
        height: v
    }) : C ? d = (0, r.jsx)(c.cNw, {
        size: "custom",
        color: "currentColor",
        className: b,
        width: 19 / 24 * v,
        height: v
    }) : (E.attachments.length > 0 || E.embeds.length > 0) && !x && (d = (0, r.jsx)(c.xfq, {
        size: "custom",
        color: "currentColor",
        className: b,
        width: v,
        height: v
    })), {
        contentPlaceholder: l,
        renderedContent: u,
        trailingIcon: d,
        leadingIcon: g
    }
}

function G(e) {
    let t, {
            repliedAuthor: n,
            baseAuthor: a,
            baseMessage: o,
            referencedMessage: u,
            renderPopout: d,
            isReplySpineClickable: f,
            showReplySpine: p
        } = e,
        [_, h] = i.useState(!1),
        m = i.useMemo(() => null != d && u.state === g.a.LOADED ? e => d(e, u.message) : void 0, [u, d]),
        E = i.useCallback(() => h(e => !e), []),
        y = j(e, m, o.type),
        b = M(e, m),
        v = k(e, _, E),
        I = i.useMemo(() => e.compact ? (0, T.A)((0, O.i$)(l()(), "LT")) : null, [e.compact]);
    null != n && null != a && (t = w.intl.formatToPlainString(w.t.RhbQ2K, {
        author: null == a ? void 0 : a.nick,
        repliedAuthor: null == n ? void 0 : n.nick
    }));
    let S = o.type === N.lAJ.CONTEXT_MENU_COMMAND;
    return (0, r.jsxs)("div", {
        id: (0, A.nS)(o),
        className: s()(R.JZ, I, S ? R.C4 : {
            [R.NB]: !f && p
        }),
        "aria-label": t,
        children: [f && p && (0, r.jsx)(c.DUT, {
            tag: "div",
            "aria-label": w.intl.string(w.t.dpjpOp),
            className: s()(R.Uo, {
                [R.xe]: _
            }),
            onClick: e.onClickReply,
            onMouseEnter: E,
            onMouseLeave: E
        }), y, b, v]
    })
}