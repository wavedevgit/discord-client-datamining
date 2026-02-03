/** chunk id: 371741, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Av: () => Q,
    Ay: () => et,
    VO: () => $
});
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    c = n(837381),
    u = n(311907),
    d = n(397927),
    h = n(775602),
    p = n(93474),
    f = n(201275),
    m = n(384231),
    g = n(853145),
    A = n(9842),
    b = n(976860),
    _ = n(253932),
    y = n(734057),
    v = n(540999),
    E = n(580745),
    O = n(661191),
    C = n(141468),
    S = n(375901),
    x = n(143413),
    j = n(763754),
    I = n(245748),
    T = n(491182),
    N = n(860227),
    P = n(112758),
    w = n(866897),
    R = n(754459),
    D = n(538355),
    M = n(522871),
    k = n(699352),
    L = n(426153),
    U = n(444529),
    G = n(241874),
    F = n(91624),
    H = n(653008),
    B = n(162792),
    V = n(675722),
    K = n(381941),
    W = n(652215),
    z = n(985018),
    Y = n(119907);

function q() {
    return (q = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l])
        }
        return e
    }).apply(this, arguments)
}

function J(e) {
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

function Z(e, t) {
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

function X(e, t) {
    if (null == e) return {};
    var n, l, r, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
        return i
    }
    if (i = function(e, t) {
            if (null == e) return {};
            var n, l, r = {},
                i = Object.getOwnPropertyNames(e);
            for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            return r
        }(e, t), Object.getOwnPropertySymbols)
        for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
    return i
}

function Q(e, t, n) {
    return e.getElementById((0, S.j)(t, n))
}

function $(e) {
    var t;
    let {
        id: n,
        message: r,
        message: {
            messageReference: i
        },
        compact: s = !1,
        className: d
    } = e;
    o()(r.type === W.lAJ.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
    let h = (0, c.rm)(null != (t = e.id) ? t : ""),
        {} = h,
        p = q({}, h),
        f = (0, u.bG)([A.A], () => A.A.getMessageByReference(i)),
        {
            popouts: m,
            setPopout: g
        } = (0, R.A)(r.id, K.Fd),
        b = (0, j.Ay)(r),
        _ = (0, N.fF)(r),
        y = (0, N.ZD)(r);
    return r.type === W.lAJ.THREAD_STARTER_MESSAGE && null != f && f.state === A.a.LOADED ? (0, l.jsx)(ee, Z(J({}, e), {
        viewingChannelId: r.channel_id,
        message: f.message,
        groupId: f.message.id
    })) : (0, l.jsx)(T.A, Z(J({}, p), {
        id: n,
        compact: s,
        className: a()(d, {
            [Y.iU]: !0,
            [Y.HJ]: !s,
            [Y.H4]: !0,
            [Y._A]: !0
        }),
        childrenHeader: (0, G.A)({
            messageProps: e,
            setPopout: g,
            messagePopouts: m,
            replyReference: i,
            author: b
        }),
        childrenSystemMessage: (0, V.A)(e),
        childrenMessageContent: null,
        "aria-labelledby": _,
        "aria-describedby": y,
        hasThread: !1,
        author: b
    }))
}

function ee(e) {
    var t, n;
    let {
        id: i,
        message: s,
        message: {
            id: o,
            channel_id: p
        },
        channel: {
            guild_id: g
        },
        compact: y = !1,
        className: E,
        groupId: O,
        viewingChannelId: S
    } = e, I = s.type === W.lAJ.REPLY ? s.messageReference : void 0, M = (0, c.rm)(null != (t = e.id) ? t : ""), {
        onFocus: L
    } = M, U = X(M, ["onFocus"]), {
        isFocused: H,
        handleFocus: q,
        handleBlur: Q
    } = (0, P.G8)(L), {
        popouts: $,
        selected: ee,
        setPopout: et
    } = (0, R.A)(s.id, K.Fd), en = _.hD.useSetting(), el = _.rs.useSetting(), er = (0, u.bG)([A.A], () => A.A.getMessageByReference(I)), ei = (0, m.S)((null != (n = s.editedTimestamp) ? n : s.timestamp).valueOf()), {
        handleMouseEnter: ea,
        handleMouseLeave: es,
        isHovered: eo
    } = (0, P.yp)({
        groupId: O,
        message: s,
        defaultValue: ee
    }), ec = (0, u.bG)([h.A], () => h.A.keyboardModeEnabled), eu = ee || ec && H, ed = eu || eo, eh = (0, u.bG)([v.A], () => v.A.isDeveloper), {
        content: ep,
        hasSpoilerEmbeds: ef,
        hasBailedAst: em
    } = (0, D.A)(s, {
        hideSimpleEmbedContent: en && el,
        isInteracting: ed,
        formatInline: !1,
        allowList: ei,
        allowHeading: ei,
        allowLinks: !0,
        allowDevLinks: eh,
        previewLinkTarget: !0,
        viewingChannelId: S
    }), eg = (0, w.A)(o, p, ec), eA = (0, j.Ay)(s), eb = (0, N.fF)(s, O), e_ = (0, N.ZD)(s), ey = (0, F.A)(e, ep, !1), ev = r.useCallback(() => (0, b.uh)(g, p, o), [g, p, o]), eE = (0, f.$7)({
        guildId: g,
        roleId: eA.iconRoleId
    });
    return (0, l.jsxs)("div", {
        className: Y.m5,
        children: [(0, l.jsx)(d.DUT, {
            className: Y.lA,
            onClick: ev,
            "aria-label": z.intl.string(z.t.k5WiPf),
            children: z.intl.string(z.t.k5WiPf)
        }), (0, l.jsx)(T.A, Z(J({}, U), {
            id: i,
            compact: y,
            className: a()(E, {
                [Y.iU]: !0,
                [Y.HJ]: !y,
                [Y.mK]: s.mentioned,
                [Y.M1]: (0, C.ec)(s),
                [Y.H4]: (0, x.A)(s),
                [Y._A]: s.id === O || s.type === W.lAJ.REPLY,
                [Y.wH]: eu
            }),
            zalgo: !0,
            onKeyDown: eg,
            onFocus: q,
            onBlur: Q,
            childrenRepliedMessage: s.type === W.lAJ.REPLY && (0, B.A)(Z(J({}, e), {
                setPopout: et,
                referencedUsernameProfile: $.referencedUsernameProfile,
                referencedAvatarProfile: $.referencedAvatarProfile,
                replyReference: I,
                replyMessage: er,
                isReplySpineClickable: !0
            })),
            childrenHeader: (0, G.A)({
                messageProps: e,
                setPopout: et,
                messagePopouts: $,
                replyReference: I,
                author: eA,
                repliedMessage: er,
                roleIcon: eE
            }),
            childrenAccessories: (0, k.A)({
                channelMessageProps: e,
                hasSpoilerEmbeds: ef,
                hasBailedAst: em,
                isInteracting: ed,
                renderThreadAccessory: !1,
                renderSuppressEmbeds: !1,
                renderReactions: !1,
                disableComponentInteractivity: !0
            }),
            childrenSystemMessage: (0, V.A)(e),
            childrenMessageContent: ey,
            onMouseMove: ea,
            onMouseLeave: es,
            "aria-labelledby": eb,
            "aria-describedby": e_,
            hasThread: !1,
            author: eA
        }))]
    })
}
let et = r.memo(function(e) {
    var t, n;
    let i, s, {
        id: b,
        message: S,
        message: {
            id: q
        },
        channel: Q,
        channel: {
            id: $
        },
        compact: ee = !1,
        className: et,
        flashKey: en,
        groupId: el,
        renderContentOnly: er
    } = e;
    o()(S.type !== W.lAJ.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
    let ei = W.sl8.has(S.type) ? S.messageReference : void 0,
        ea = (0, c.rm)(null != (t = e.id) ? t : ""),
        {
            onFocus: es
        } = ea,
        eo = X(ea, ["onFocus"]),
        ec = _.hD.useSetting(),
        eu = _.rs.useSetting(),
        ed = (0, u.bG)([A.A], () => A.A.getMessageByReference(ei)),
        {
            popouts: eh,
            selected: ep,
            setPopout: ef
        } = (0, R.A)(S.id, K.Fd),
        em = (0, P.VL)(S, Q, ef),
        eg = (0, P.ri)(S, Q),
        {
            handleMouseEnter: eA,
            handleMouseLeave: eb,
            hasHovered: e_,
            isHovered: ey
        } = (0, P.yp)({
            groupId: el,
            message: S,
            defaultValue: ep
        }),
        {
            isFocused: ev,
            hasFocused: eE,
            handleFocus: eO,
            handleBlur: eC
        } = (0, P.G8)(es),
        eS = r.useCallback(e => {
            eO(e), eA(e)
        }, [eO, eA]),
        ex = r.useCallback(e => {
            eC(e), eb()
        }, [eC, eb]),
        ej = (0, u.bG)([E.A], () => E.A.isEditing($, q), [$, q]),
        eI = (0, u.bG)([h.A], () => h.A.keyboardModeEnabled),
        eT = ep || ej || eI && ev,
        eN = eT || ey,
        eP = (0, u.bG)([y.A], () => S.hasFlag(W.pr7.HAS_THREAD) && y.A.getChannel(O.default.castMessageIdAsChannelId(S.id))),
        ew = S.isFirstMessageInForumPost(Q),
        eR = (0, m.S)((null != (n = S.editedTimestamp) ? n : S.timestamp).valueOf()),
        eD = (0, u.bG)([v.A], () => v.A.isDeveloper),
        {
            content: eM,
            hasSpoilerEmbeds: ek,
            hasBailedAst: eL
        } = (0, D.A)(S, {
            hideSimpleEmbedContent: ec && eu,
            isInteracting: eN,
            formatInline: !1,
            allowList: ew || eR,
            allowHeading: ew || eR,
            allowLinks: !0,
            allowDevLinks: eD,
            previewLinkTarget: !0
        }),
        eU = (0, w.A)(q, $, eI),
        eG = (0, j.Ay)(S),
        eF = (0, u.bG)([g.A], () => g.A.getPendingReply($)),
        eH = (i = r.useRef(en), r.useEffect(() => {
            i.current = null != en ? en : i.current
        }), null != en ? en : i.current),
        eB = (0, f.$7)({
            guildId: Q.guild_id,
            roleId: eG.iconRoleId
        }),
        eV = (0, N.fF)(S, el),
        eK = (0, N.ZD)(S),
        eW = (0, u.bG)([p.A], () => p.A.getMessage(q), [q]),
        ez = (0, M.A)({
            message: S,
            channel: Q
        }),
        eY = r.useRef(window),
        eq = null != eW;
    s = S.type === W.lAJ.CUSTOM_GIFT ? "" : !ej && eq ? (0, L.A)(e, eM) : (0, F.A)(e, eM, ej);
    let eJ = S.id === el,
        eZ = (0, l.jsx)(d.vN3, {
            offset: {
                left: 4,
                right: 4
            },
            children: (0, l.jsx)("li", {
                id: b,
                className: Y.Nt,
                "aria-setsize": -1,
                children: (0, l.jsx)(T.A, Z(J({}, eo), {
                    "aria-setsize": -1,
                    "aria-roledescription": z.intl.string(z.t.BAB0yK),
                    "aria-labelledby": eV,
                    "aria-describedby": eK,
                    onFocus: eS,
                    onBlur: ex,
                    onContextMenu: em,
                    onKeyDown: eU,
                    onClick: eg,
                    compact: ee,
                    contentOnly: er,
                    className: a()(et, {
                        [Y.iU]: !0,
                        [Y.HJ]: !ee,
                        [Y.mK]: S.mentioned,
                        [Y.M1]: (0, C.ec)(S),
                        [Y.SH]: S.type === W.lAJ.NITRO_NOTIFICATION,
                        [Y.H4]: (0, x.A)(S),
                        [Y._A]: !er && (eJ || S.type === W.lAJ.REPLY),
                        [Y.wH]: eT,
                        [Y.$n]: (null == eF ? void 0 : eF.message.id) === S.id,
                        [Y.$w]: S.isCommandType() && S.state === W.cmJ.SENDING,
                        [Y.DX]: eq
                    }),
                    zalgo: !ej,
                    childrenRepliedMessage: er || S.type !== W.lAJ.REPLY ? void 0 : (0, B.A)(Z(J({}, e), {
                        setPopout: ef,
                        referencedUsernameProfile: eh.referencedUsernameProfile,
                        referencedAvatarProfile: eh.referencedAvatarProfile,
                        replyReference: ei,
                        replyMessage: ed,
                        isReplySpineClickable: !0
                    })),
                    childrenExecutedCommand: (0, H.A)(e, ef, eh),
                    childrenHeader: er ? void 0 : (0, G.A)({
                        messageProps: e,
                        setPopout: ef,
                        messagePopouts: eh,
                        replyReference: ei,
                        author: eG,
                        repliedMessage: ed,
                        roleIcon: eB
                    }),
                    childrenAccessories: (0, k.A)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: ek,
                        hasBailedAst: eL,
                        handleContextMenu: em,
                        isInteracting: eN,
                        isAutomodBlockedMessage: eq,
                        forceAddReactions: S.type === W.lAJ.EMOJI_ADDED
                    }),
                    childrenButtons: e_ || eE ? (0, U.A)({
                        buttonProps: e,
                        setPopout: ef,
                        messagePopouts: eh,
                        isFocused: ey || ev,
                        messageWindow: eY.current
                    }) : void 0,
                    childrenSystemMessage: (0, V.A)(e),
                    childrenMessageContent: s,
                    onMouseMove: eA,
                    onMouseLeave: eb,
                    hasThread: !er && S.hasFlag(W.pr7.HAS_THREAD) && null != eP,
                    isSystemMessage: (0, x.A)(S),
                    hasReply: S.type === W.lAJ.REPLY,
                    messageRef: e => {
                        var t, n;
                        ez.current = e, eY.current = null != (t = null == e || null == (n = e.ownerDocument) ? void 0 : n.defaultView) ? t : window
                    },
                    author: eG
                }))
            })
        });
    return null != eH ? (0, l.jsx)(I.A, {
        flashKey: eH,
        className: a()({
            [Y.bB]: !0,
            [Y._A]: !ee && S.id === el
        }),
        children: eZ
    }, "bg-flash-".concat(b)) : eZ
})