/** Chunk was on 1113 **/
/** chunk id: 371741, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Av: () => Z,
    Ay: () => et,
    VO: () => $
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(284009),
    o = n.n(a),
    c = n(837381),
    u = n(311907),
    d = n(397927),
    h = n(775602),
    p = n(93474),
    g = n(201275),
    f = n(384231),
    m = n(853145),
    b = n(9842),
    A = n(976860),
    y = n(253932),
    O = n(734057),
    _ = n(540999),
    x = n(580745),
    j = n(661191),
    v = n(141468),
    E = n(375901),
    C = n(143413),
    S = n(763754),
    I = n(245748),
    N = n(491182),
    T = n(860227),
    P = n(112758),
    w = n(866897),
    R = n(754459),
    D = n(538355),
    L = n(522871),
    M = n(699352),
    k = n(426153),
    G = n(444529),
    U = n(241874),
    V = n(91624),
    B = n(653008),
    H = n(162792),
    F = n(675722),
    K = n(381941),
    Y = n(652215),
    W = n(985018),
    z = n(119907);

function q() {
    return (q = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(this, arguments)
}

function X(e) {
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

function J(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function Q(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
    }
    if (i = function(e, t) {
            if (null == e) return {};
            var n, r, l = {},
                i = Object.getOwnPropertyNames(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l
        }(e, t), Object.getOwnPropertySymbols)
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
}

function Z(e, t, n) {
    return e.getElementById((0, E.j)(t, n))
}

function $(e) {
    var t;
    let {
        id: n,
        message: l,
        message: {
            messageReference: i
        },
        compact: a = !1,
        className: d
    } = e;
    o()(l.type === Y.lAJ.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
    let h = (0, c.rm)(null != (t = e.id) ? t : ""),
        {} = h,
        p = q({}, h),
        g = (0, u.bG)([b.A], () => b.A.getMessageByReference(i)),
        {
            popouts: f,
            setPopout: m
        } = (0, R.A)(l.id, K.Fd),
        A = (0, S.Ay)(l),
        y = (0, T.fF)(l),
        O = (0, T.ZD)(l);
    return l.type === Y.lAJ.THREAD_STARTER_MESSAGE && null != g && g.state === b.a.LOADED ? (0, r.jsx)(ee, J(X({}, e), {
        viewingChannelId: l.channel_id,
        message: g.message,
        groupId: g.message.id
    })) : (0, r.jsx)(N.A, J(X({}, p), {
        id: n,
        compact: a,
        className: s()(d, {
            [z.iU]: !0,
            [z.HJ]: !a,
            [z.H4]: !0,
            [z._A]: !0
        }),
        childrenHeader: (0, U.A)({
            messageProps: e,
            setPopout: m,
            messagePopouts: f,
            replyReference: i,
            author: A
        }),
        childrenSystemMessage: (0, F.A)(e),
        childrenMessageContent: null,
        "aria-labelledby": y,
        "aria-describedby": O,
        hasThread: !1,
        author: A
    }))
}

function ee(e) {
    var t, n;
    let {
        id: i,
        message: a,
        message: {
            id: o,
            channel_id: p
        },
        channel: {
            guild_id: m
        },
        compact: O = !1,
        className: x,
        groupId: j,
        viewingChannelId: E
    } = e, I = a.type === Y.lAJ.REPLY ? a.messageReference : void 0, L = (0, c.rm)(null != (t = e.id) ? t : ""), {
        onFocus: k
    } = L, G = Q(L, ["onFocus"]), {
        isFocused: B,
        handleFocus: q,
        handleBlur: Z
    } = (0, P.G8)(k), {
        popouts: $,
        selected: ee,
        setPopout: et
    } = (0, R.A)(a.id, K.Fd), en = y.hD.useSetting(), er = y.rs.useSetting(), el = (0, u.bG)([b.A], () => b.A.getMessageByReference(I)), ei = (0, f.S)((null != (n = a.editedTimestamp) ? n : a.timestamp).valueOf()), {
        handleMouseEnter: es,
        handleMouseLeave: ea,
        isHovered: eo
    } = (0, P.yp)({
        groupId: j,
        message: a,
        defaultValue: ee
    }), ec = (0, u.bG)([h.A], () => h.A.keyboardModeEnabled), eu = ee || ec && B, ed = eu || eo, eh = (0, u.bG)([_.A], () => _.A.isDeveloper), {
        content: ep,
        hasSpoilerEmbeds: eg,
        hasBailedAst: ef
    } = (0, D.A)(a, {
        hideSimpleEmbedContent: en && er,
        isInteracting: ed,
        formatInline: !1,
        allowList: ei,
        allowHeading: ei,
        allowLinks: !0,
        allowDevLinks: eh,
        previewLinkTarget: !0,
        viewingChannelId: E
    }), em = (0, w.A)(o, p, ec), eb = (0, S.Ay)(a), eA = (0, T.fF)(a, j), ey = (0, T.ZD)(a), eO = (0, V.A)(e, ep, !1), e_ = l.useCallback(() => (0, A.uh)(m, p, o), [m, p, o]), ex = (0, g.$7)({
        guildId: m,
        roleId: eb.iconRoleId
    });
    return (0, r.jsxs)("div", {
        className: z.m5,
        children: [(0, r.jsx)(d.DUT, {
            className: z.lA,
            onClick: e_,
            "aria-label": W.intl.string(W.t.k5WiPf),
            children: W.intl.string(W.t.k5WiPf)
        }), (0, r.jsx)(N.A, J(X({}, G), {
            id: i,
            compact: O,
            className: s()(x, {
                [z.iU]: !0,
                [z.HJ]: !O,
                [z.mK]: a.mentioned,
                [z.M1]: (0, v.ec)(a),
                [z.H4]: (0, C.A)(a),
                [z._A]: a.id === j || a.type === Y.lAJ.REPLY,
                [z.wH]: eu
            }),
            zalgo: !0,
            onKeyDown: em,
            onFocus: q,
            onBlur: Z,
            childrenRepliedMessage: a.type === Y.lAJ.REPLY && (0, H.A)(J(X({}, e), {
                setPopout: et,
                referencedUsernameProfile: $.referencedUsernameProfile,
                referencedAvatarProfile: $.referencedAvatarProfile,
                replyReference: I,
                replyMessage: el,
                isReplySpineClickable: !0
            })),
            childrenHeader: (0, U.A)({
                messageProps: e,
                setPopout: et,
                messagePopouts: $,
                replyReference: I,
                author: eb,
                repliedMessage: el,
                roleIcon: ex
            }),
            childrenAccessories: (0, M.A)({
                channelMessageProps: e,
                hasSpoilerEmbeds: eg,
                hasBailedAst: ef,
                isInteracting: ed,
                renderThreadAccessory: !1,
                renderSuppressEmbeds: !1,
                renderReactions: !1,
                disableComponentInteractivity: !0
            }),
            childrenSystemMessage: (0, F.A)(e),
            childrenMessageContent: eO,
            onMouseMove: es,
            onMouseLeave: ea,
            "aria-labelledby": eA,
            "aria-describedby": ey,
            hasThread: !1,
            author: eb
        }))]
    })
}
let et = l.memo(function(e) {
    var t, n;
    let i, a, {
        id: A,
        message: E,
        message: {
            id: q
        },
        channel: Z,
        channel: {
            id: $
        },
        compact: ee = !1,
        className: et,
        flashKey: en,
        groupId: er,
        renderContentOnly: el
    } = e;
    o()(E.type !== Y.lAJ.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
    let ei = Y.sl8.has(E.type) ? E.messageReference : void 0,
        es = (0, c.rm)(null != (t = e.id) ? t : ""),
        {
            onFocus: ea
        } = es,
        eo = Q(es, ["onFocus"]),
        ec = y.hD.useSetting(),
        eu = y.rs.useSetting(),
        ed = (0, u.bG)([b.A], () => b.A.getMessageByReference(ei)),
        {
            popouts: eh,
            selected: ep,
            setPopout: eg
        } = (0, R.A)(E.id, K.Fd),
        ef = (0, P.VL)(E, Z, eg),
        em = (0, P.ri)(E, Z),
        {
            handleMouseEnter: eb,
            handleMouseLeave: eA,
            hasHovered: ey,
            isHovered: eO
        } = (0, P.yp)({
            groupId: er,
            message: E,
            defaultValue: ep
        }),
        {
            isFocused: e_,
            hasFocused: ex,
            handleFocus: ej,
            handleBlur: ev
        } = (0, P.G8)(ea),
        eE = l.useCallback(e => {
            ej(e), eb(e)
        }, [ej, eb]),
        eC = l.useCallback(e => {
            ev(e), eA()
        }, [ev, eA]),
        eS = (0, u.bG)([x.A], () => x.A.isEditing($, q), [$, q]),
        eI = (0, u.bG)([h.A], () => h.A.keyboardModeEnabled),
        eN = ep || eS || eI && e_,
        eT = eN || eO,
        eP = (0, u.bG)([O.A], () => E.hasFlag(Y.pr7.HAS_THREAD) && O.A.getChannel(j.default.castMessageIdAsChannelId(E.id))),
        ew = E.isFirstMessageInForumPost(Z),
        eR = (0, f.S)((null != (n = E.editedTimestamp) ? n : E.timestamp).valueOf()),
        eD = (0, u.bG)([_.A], () => _.A.isDeveloper),
        {
            content: eL,
            hasSpoilerEmbeds: eM,
            hasBailedAst: ek
        } = (0, D.A)(E, {
            hideSimpleEmbedContent: ec && eu,
            isInteracting: eT,
            formatInline: !1,
            allowList: ew || eR,
            allowHeading: ew || eR,
            allowLinks: !0,
            allowDevLinks: eD,
            previewLinkTarget: !0
        }),
        eG = (0, w.A)(q, $, eI),
        eU = (0, S.Ay)(E),
        eV = (0, u.bG)([m.A], () => m.A.getPendingReply($)),
        eB = (i = l.useRef(en), l.useEffect(() => {
            i.current = null != en ? en : i.current
        }), null != en ? en : i.current),
        eH = (0, g.$7)({
            guildId: Z.guild_id,
            roleId: eU.iconRoleId
        }),
        eF = (0, T.fF)(E, er),
        eK = (0, T.ZD)(E),
        eY = (0, u.bG)([p.A], () => p.A.getMessage(q), [q]),
        eW = (0, L.A)({
            message: E,
            channel: Z
        }),
        ez = l.useRef(window),
        eq = null != eY;
    a = E.type === Y.lAJ.CUSTOM_GIFT ? "" : !eS && eq ? (0, k.A)(e, eL) : (0, V.A)(e, eL, eS);
    let eX = E.id === er,
        eJ = (0, r.jsx)(d.vN3, {
            offset: {
                left: 4,
                right: 4
            },
            children: (0, r.jsx)("li", {
                id: A,
                className: z.Nt,
                "aria-setsize": -1,
                children: (0, r.jsx)(N.A, J(X({}, eo), {
                    "aria-setsize": -1,
                    "aria-roledescription": W.intl.string(W.t.BAB0yK),
                    "aria-labelledby": eF,
                    "aria-describedby": eK,
                    onFocus: eE,
                    onBlur: eC,
                    onContextMenu: ef,
                    onKeyDown: eG,
                    onClick: em,
                    compact: ee,
                    contentOnly: el,
                    className: s()(et, {
                        [z.iU]: !0,
                        [z.HJ]: !ee,
                        [z.mK]: E.mentioned,
                        [z.M1]: (0, v.ec)(E),
                        [z.SH]: E.type === Y.lAJ.NITRO_NOTIFICATION,
                        [z.H4]: (0, C.A)(E),
                        [z._A]: !el && (eX || E.type === Y.lAJ.REPLY),
                        [z.wH]: eN,
                        [z.$n]: (null == eV ? void 0 : eV.message.id) === E.id,
                        [z.$w]: E.isCommandType() && E.state === Y.cmJ.SENDING,
                        [z.DX]: eq
                    }),
                    zalgo: !eS,
                    childrenRepliedMessage: el || E.type !== Y.lAJ.REPLY ? void 0 : (0, H.A)(J(X({}, e), {
                        setPopout: eg,
                        referencedUsernameProfile: eh.referencedUsernameProfile,
                        referencedAvatarProfile: eh.referencedAvatarProfile,
                        replyReference: ei,
                        replyMessage: ed,
                        isReplySpineClickable: !0
                    })),
                    childrenExecutedCommand: (0, B.A)(e, eg, eh),
                    childrenHeader: el ? void 0 : (0, U.A)({
                        messageProps: e,
                        setPopout: eg,
                        messagePopouts: eh,
                        replyReference: ei,
                        author: eU,
                        repliedMessage: ed,
                        roleIcon: eH
                    }),
                    childrenAccessories: (0, M.A)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: eM,
                        hasBailedAst: ek,
                        handleContextMenu: ef,
                        isInteracting: eT,
                        isAutomodBlockedMessage: eq,
                        forceAddReactions: E.type === Y.lAJ.EMOJI_ADDED
                    }),
                    childrenButtons: ey || ex ? (0, G.A)({
                        buttonProps: e,
                        setPopout: eg,
                        messagePopouts: eh,
                        isFocused: eO || e_,
                        messageWindow: ez.current
                    }) : void 0,
                    childrenSystemMessage: (0, F.A)(e),
                    childrenMessageContent: a,
                    onMouseMove: eb,
                    onMouseLeave: eA,
                    hasThread: !el && E.hasFlag(Y.pr7.HAS_THREAD) && null != eP,
                    isSystemMessage: (0, C.A)(E),
                    hasReply: E.type === Y.lAJ.REPLY,
                    messageRef: e => {
                        var t, n;
                        eW.current = e, ez.current = null != (t = null == e || null == (n = e.ownerDocument) ? void 0 : n.defaultView) ? t : window
                    },
                    author: eU
                }))
            })
        });
    return null != eB ? (0, r.jsx)(I.A, {
        flashKey: eB,
        className: s()({
            [z.bB]: !0,
            [z._A]: !ee && E.id === er
        }),
        children: eJ
    }, "bg-flash-".concat(A)) : eJ
})