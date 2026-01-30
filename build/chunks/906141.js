/** chunk id: 906141, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => B
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
    h = n(704413),
    p = n(9842),
    g = n(253932),
    f = n(734057),
    m = n(994500),
    b = n(661191),
    A = n(988012),
    y = n(141468),
    O = n(694318),
    _ = n(143413),
    j = n(763754),
    x = n(467073),
    v = n(491182),
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
    L = n(652215),
    M = n(985018),
    G = n(410132),
    k = n(119907);

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

function V(e, t) {
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
let B = l.memo(function e(t) {
    var n;
    let l, {
            channel: i,
            message: o,
            compact: D = !1,
            className: G,
            onContextMenu: B,
            onClick: F,
            disableInteraction: K = !1,
            hasThread: Y,
            treatSpam: W
        } = t,
        z = L.sl8.has(o.type) ? o.messageReference : void 0,
        q = (0, a.bG)([p.A], () => p.A.getMessageByReference(z)),
        X = (0, a.bG)([f.A], () => o.type === L.lAJ.THREAD_STARTER_MESSAGE && q.state === p.a.LOADED ? f.A.getChannel(q.message.channel_id) : null),
        J = g.X6.useSetting(),
        Q = g.hD.useSetting(),
        Z = g.rs.useSetting(),
        $ = g.kt.useSetting(),
        ee = (0, u.S)((null != (n = o.editedTimestamp) ? n : o.timestamp).valueOf()),
        et = (0, d.A)(null == i ? void 0 : i.id),
        {
            disableReactionCreates: en
        } = (0, x.A)(i),
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
        ea = (0, a.bG)([f.A], () => o.hasFlag(L.pr7.HAS_THREAD) && f.A.getChannel(b.default.castMessageIdAsChannelId(o.id))),
        eo = o.type === L.lAJ.THREAD_STARTER_MESSAGE && q.state === p.a.LOADED && null != X,
        ec = !eo && void 0 === l,
        eu = (0, I.A)({
            message: o,
            channel: i,
            enabled: ec
        }),
        ed = (0, c.P)(o),
        eh = (0, A._f)(o.id, o.channel_id),
        ep = (0, h.A)(o),
        eg = (0, E.fF)(o);
    return eo ? (0, r.jsx)(e, V(U({}, t), {
        message: q.message,
        channel: X,
        hasThread: !1
    })) : (m.A.isBlockedForMessage(o) ? l = M.t["+FcYM/"] : m.A.isIgnoredForMessage(o) ? l = M.t["VFWjc+"] : (0, O.kf)(o) && W && (l = M.t.xfkfTK), void 0 !== l) ? (0, r.jsx)(H, {
        className: G,
        compact: D,
        count: 1,
        collapsedReason: l
    }) : (0, r.jsx)(v.A, {
        compact: D,
        className: s()(G, {
            [k.M1]: (0, y.ec)(o),
            [k.XN]: K,
            [k._A]: t.isGroupStart
        }),
        childrenRepliedMessage: (0, R.A)(o, i, z, q, D),
        childrenHeader: (0, T.A)(V(U({}, t), {
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
            renderThreadAccessory: Y,
            inlineAttachmentMedia: J,
            inlineEmbedMedia: Q,
            renderEmbeds: Z,
            gifAutoPlay: $,
            poll: ep,
            showListsAndHeaders: ee,
            showMaskedLinks: ee,
            shouldHideMediaOptions: et,
            enabledContentHarmTypeFlags: ed,
            ctaButtonType: eh
        }),
        childrenExecutedCommand: (0, w.A)(o, i, D),
        childrenMessageContent: (0, N.A)(t, er),
        childrenSystemMessage: (0, P.A)(t),
        onContextMenu: B,
        onClick: F,
        hasThread: !1 !== Y && null != ea && o.hasFlag(L.pr7.HAS_THREAD),
        hasReply: o.type === L.lAJ.REPLY,
        isSystemMessage: (0, _.A)(o),
        messageRef: eu,
        author: es,
        "aria-labelledby": eg,
        "aria-roledescription": M.intl.string(M.t.BAB0yK)
    })
});

function H(e) {
    let {
        className: t,
        count: n,
        compact: l,
        collapsedReason: i
    } = e;
    return (0, r.jsx)(v.A, {
        className: t,
        compact: l,
        role: "group",
        childrenMessageContent: (0, r.jsx)(D.A, {
            compact: l,
            className: G.L9,
            iconNode: (0, r.jsx)(o.PGe, {
                size: "md",
                color: "currentColor",
                className: G.Q6
            }),
            children: (0, r.jsx)("div", {
                className: G.Fo,
                children: M.intl.format(i, {
                    count: n
                })
            })
        })
    })
}