/** Chunk was on 97492 **/
/** chunk id: 906141, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => V
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    c = n(33358),
    u = n(384231),
    d = n(207133),
    p = n(704413),
    h = n(9842),
    f = n(253932),
    g = n(734057),
    m = n(994500),
    b = n(661191),
    A = n(988012),
    y = n(141468),
    _ = n(694318),
    O = n(143413),
    j = n(763754),
    v = n(467073),
    x = n(491182),
    E = n(860227),
    C = n(756369),
    S = n(538355),
    I = n(522871),
    N = n(715628),
    T = n(752636),
    P = n(675722),
    w = n(268719),
    R = n(234957),
    D = n(888675),
    M = n(652215),
    L = n(985018),
    k = n(410132),
    G = n(119907);

function U(e) {
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

function B(e, t) {
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
let V = l.memo(function e(t) {
    var n;
    let l, {
            channel: i,
            message: o,
            compact: D = !1,
            className: k,
            onContextMenu: V,
            onClick: H,
            disableInteraction: K = !1,
            hasThread: W,
            treatSpam: z
        } = t,
        Y = M.sl8.has(o.type) ? o.messageReference : void 0,
        q = (0, a.bG)([h.A], () => h.A.getMessageByReference(Y)),
        X = (0, a.bG)([g.A], () => o.type === M.lAJ.THREAD_STARTER_MESSAGE && q.state === h.a.LOADED ? g.A.getChannel(q.message.channel_id) : null),
        J = f.X6.useSetting(),
        Q = f.hD.useSetting(),
        Z = f.rs.useSetting(),
        $ = f.kt.useSetting(),
        ee = (0, u.S)((null != (n = o.editedTimestamp) ? n : o.timestamp).valueOf()),
        et = (0, d.A)(null == i ? void 0 : i.id),
        {
            disableReactionCreates: en
        } = (0, v.A)(i),
        {
            content: er,
            hasSpoilerEmbeds: el,
            hasBailedAst: ei
        } = (0, S.A)(o, {
            hideSimpleEmbedContent: Q && Z,
            allowList: ee,
            allowHeading: ee,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        es = (0, j.Ay)(o),
        ea = (0, a.bG)([g.A], () => o.hasFlag(M.pr7.HAS_THREAD) && g.A.getChannel(b.default.castMessageIdAsChannelId(o.id))),
        eo = o.type === M.lAJ.THREAD_STARTER_MESSAGE && q.state === h.a.LOADED && null != X,
        ec = !eo && void 0 === l,
        eu = (0, I.A)({
            message: o,
            channel: i,
            enabled: ec
        }),
        ed = (0, c.P)(o),
        ep = (0, A._f)(o.id, o.channel_id),
        eh = (0, p.A)(o),
        ef = (0, E.fF)(o);
    return eo ? (0, r.jsx)(e, B(U({}, t), {
        message: q.message,
        channel: X,
        hasThread: !1
    })) : (m.A.isBlockedForMessage(o) ? l = L.t["+FcYM/"] : m.A.isIgnoredForMessage(o) ? l = L.t["VFWjc+"] : (0, _.kf)(o) && z && (l = L.t.xfkfTK), void 0 !== l) ? (0, r.jsx)(F, {
        className: k,
        compact: D,
        count: 1,
        collapsedReason: l
    }) : (0, r.jsx)(x.A, {
        compact: D,
        className: s()(k, {
            [G.M1]: (0, y.ec)(o),
            [G.XN]: K,
            [G._A]: t.isGroupStart
        }),
        childrenRepliedMessage: (0, R.A)(o, i, Y, q, D),
        childrenHeader: (0, T.A)(B(U({}, t), {
            author: es,
            guildId: i.guild_id
        })),
        childrenAccessories: (0, r.jsx)(C.iV, {
            channel: i,
            message: o,
            hasSpoilerEmbeds: el,
            hasBailedAst: ei,
            compact: D,
            canSuppressEmbeds: !1,
            canDeleteAttachments: !1,
            disableReactionReads: !1,
            disableReactionCreates: en,
            disableComponentInteractivity: !0,
            disableReactionUpdates: !1,
            renderThreadAccessory: W,
            inlineAttachmentMedia: J,
            inlineEmbedMedia: Q,
            renderEmbeds: Z,
            gifAutoPlay: $,
            poll: eh,
            showListsAndHeaders: ee,
            showMaskedLinks: ee,
            shouldHideMediaOptions: et,
            enabledContentHarmTypeFlags: ed,
            ctaButtonType: ep
        }),
        childrenExecutedCommand: (0, w.A)(o, i, D),
        childrenMessageContent: (0, N.A)(t, er),
        childrenSystemMessage: (0, P.A)(t),
        onContextMenu: V,
        onClick: H,
        hasThread: !1 !== W && null != ea && o.hasFlag(M.pr7.HAS_THREAD),
        hasReply: o.type === M.lAJ.REPLY,
        isSystemMessage: (0, O.A)(o),
        messageRef: eu,
        author: es,
        "aria-labelledby": ef,
        "aria-roledescription": L.intl.string(L.t.BAB0yK)
    })
});

function F(e) {
    let {
        className: t,
        count: n,
        compact: l,
        collapsedReason: i
    } = e;
    return (0, r.jsx)(x.A, {
        className: t,
        compact: l,
        role: "group",
        childrenMessageContent: (0, r.jsx)(D.A, {
            compact: l,
            className: k.L9,
            iconNode: (0, r.jsx)(o.PGe, {
                size: "md",
                color: "currentColor",
                className: k.Q6
            }),
            children: (0, r.jsx)("div", {
                className: k.Fo,
                children: L.intl.format(i, {
                    count: n
                })
            })
        })
    })
}