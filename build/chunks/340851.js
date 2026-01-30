/** Chunk was on 1113 **/
/** chunk id: 340851, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => F,
    LR: () => B,
    aI: () => H
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(990078),
    o = n(397927),
    c = n(367513),
    u = n(442433),
    d = n(956793),
    h = n(401843),
    p = n(296216),
    g = n(323073),
    f = n(793574),
    m = n(480890),
    b = n(643501),
    A = n(916641),
    y = n(652896),
    O = n(279250),
    _ = n(346846),
    j = n(142524),
    x = n(958140),
    v = n(721931),
    E = n(766319),
    C = n(342296),
    S = n(481947),
    I = n(961350),
    N = n(71393),
    T = n(576705),
    P = n(287809),
    w = n(977997),
    R = n(338234),
    D = n(376696),
    L = n(544105),
    M = n(502075),
    G = n(985018),
    k = n(861379);

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

function B(e) {
    let {
        numUsers: t
    } = e;
    return (0, r.jsx)("div", {
        className: k.BN,
        children: (0, r.jsxs)(o.Text, {
            color: "text-muted",
            variant: "text-sm/medium",
            children: ["+", t]
        })
    })
}

function H(e) {
    let {
        numAudience: t,
        collapsed: n
    } = e, l = n ? t : G.intl.formatToPlainString(G.t["+v2pN2"], {
        count: t
    });
    return (0, r.jsxs)("div", {
        className: s()(k.yJ, {
            [k.Nr]: n
        }),
        children: [(0, r.jsx)("div", {
            className: k.$L,
            children: (0, r.jsx)(o.LoC, {
                size: "md",
                color: "currentColor",
                className: k.wG
            })
        }), (0, r.jsx)(o.Text, {
            color: "text-muted",
            variant: "text-sm/medium",
            children: l
        })]
    })
}
let F = (0, p.J)(function(e) {
    var t;
    let {
        collapsed: i,
        user: p,
        channel: B,
        mute: H,
        localMute: F,
        localVideoDisabled: K,
        deaf: Y,
        video: W,
        embeddedApplication: z,
        serverMute: q,
        serverDeaf: X,
        nick: J,
        ringing: Q,
        speaking: Z,
        latched: $,
        disconnected: ee,
        connectUserDragSource: et,
        canDrag: en,
        isStreaming: er,
        isWatching: el,
        isGuest: ei,
        priority: es,
        showPreview: ea,
        hidePreview: eo,
        shouldShowHoverPopout: ec,
        previewIsOpen: eu,
        otherClientSessionType: ed,
        voicePlatform: eh,
        isSelfOnOtherClient: ep = !1,
        tabIndex: eg,
        location: ef,
        isSelf: em,
        application: eb,
        hangStatusActivity: eA,
        requestToStreamActivity: ey,
        showHangStatus: eO
    } = e, {
        enableUserHoverActivities: e_
    } = (0, R.fC)({
        guildId: B.guild_id,
        location: "VoiceUser"
    }), ej = l.useRef(null), [ex, ev] = l.useState(!1), eE = l.useRef(null), [eC, eS] = l.useState(!1), [eI, eN] = l.useState(!1), [eT, eP] = l.useState(!1), [ew, eR] = l.useState(!1), eD = eI || ew || eT, eL = eC || eD, eM = (null == ey ? void 0 : ey.session_id) != null, eG = () => {
        ev(!ex)
    }, ek = (e, t) => {
        let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
        null != t && n.has(t) && (eT && eP(!1), eI && eN(!1)), eU()
    }, eU = () => {
        null == eo || eo(p.id)
    }, eV = e => {
        (!e_ || em) && (e ? eE.current = setTimeout(() => {
            eS(!0)
        }, 150 * !!eu) : clearTimeout(eE.current))
    };
    l.useEffect(() => () => clearTimeout(eE.current), []);
    let eB = e => {
            e && eS(!1)
        },
        eH = () => {
            if (!(er && (0, O.eo)(B, w.A, N.A, T.A, b.default)[0])) return;
            let e = {
                streamType: M.U4.GUILD,
                ownerId: p.id,
                channelId: B.id,
                guildId: B.guild_id
            };
            I.default.getId() !== p.id && d.default.selectVoiceChannel(B.id), el ? ((0, _.A)(e), c.A.selectParticipant(e.channelId, (0, y._z)(e))) : (0, h.Nl)(e), null == eo || eo(p.id)
        },
        eF = e => {
            (0, u.L3)(e, async () => {
                let {
                    default: e
                } = await Promise.all([n.e("97262"), n.e("29534"), n.e("55296"), n.e("84841"), n.e("52458")]).then(n.bind(n, 107632));
                return t => (0, r.jsx)(e, V(U({}, t), {
                    user: p,
                    guildId: B.guild_id,
                    channel: B,
                    showMediaItems: !0,
                    showStageChannelItems: B.isGuildStageVoice(),
                    onInteraction: (0, m.s)("GuildChannelUserContextMenu", f.A.VOICE_USER, {
                        targetUserId: p.id
                    })
                }))
            })
        },
        eK = e => em ? (0, r.jsx)(x.h, V(U({}, e), {
            channel: B,
            setIsHangStatusInputFocused: eN,
            setIsEmojiPickerOpen: eR
        })) : null != eA ? (0, r.jsx)(v.E, V(U({}, e), {
            hangStatusActivity: eA,
            channel: B,
            userId: p.id
        })) : null,
        eY = () => (0, r.jsx)(E.A, {
            userId: p.id,
            channel: B
        }),
        eW = () => (0, g.r9)() && (0, g.UK)(B.id) ? null : (0, r.jsx)(j.A, {
            user: p,
            channel: B,
            onWatch: eH,
            previewIsOpen: eu,
            location: ef
        }),
        ez = (0, r.jsx)("div", {
            className: k.kZ,
            "data-dnd-name": B.name,
            onMouseEnter: ep ? void 0 : () => {
                e_ ? (em && eO && !ex && !eL && eS(!0), ex || null == ea || ea(p.id)) : (er || eO || eM) && !ex && (null == ea || ea(p.id))
            },
            onMouseLeave: ep ? void 0 : eU,
            children: (0, r.jsx)(C.A, {
                clickTrap: (null == p ? void 0 : p.id) === (null == (t = P.default.getCurrentUser()) ? void 0 : t.id) && ex,
                targetElementRef: ej,
                user: p,
                guildId: B.guild_id,
                channelId: B.id,
                newAnalyticsLocations: [f.A.VOICE_USER],
                shouldShow: ex,
                onRequestClose: () => ev(!1),
                children: e => (e => {
                    let t = L.hv.has(null != ed ? ed : ""),
                        n = {
                            user: p,
                            speaking: Z,
                            latched: $,
                            disconnected: ee,
                            mute: H,
                            localMute: F,
                            localVideoDisabled: K,
                            isStreaming: er,
                            isGuest: ei,
                            video: W,
                            priority: es,
                            ringing: Q,
                            deaf: Y,
                            nick: J,
                            collapsed: i,
                            overlap: i,
                            serverMute: q,
                            serverDeaf: X,
                            tabIndex: eg,
                            otherClientSessionType: ed,
                            voicePlatform: eh,
                            embeddedApplication: z,
                            avatarContainerClass: s()({
                                [k.dj]: !0
                            }),
                            disabled: ep && !t,
                            selected: ex,
                            onClick: t ? void 0 : eG,
                            onDoubleClick: eH,
                            onContextMenu: eF,
                            guildId: B.guild_id,
                            isSelf: em,
                            application: eb,
                            channelId: B.id,
                            hangStatusActivity: eA,
                            showHangStatus: eO
                        };
                    if (ep) {
                        var l;
                        return (0, r.jsx)(a.m, {
                            text: null != (l = (0, A.A)(ed)) ? l : G.intl.string(G.t.IyYqqY),
                            children: (0, r.jsx)(S.Ay, U({
                                ref: ej
                            }, n))
                        })
                    }
                    let c = () => null;
                    return eO && eL && (!e_ || em) ? c = eK : e_ ? c = em && eO ? eK : () => (0, r.jsx)(D.A, {
                        channel: B,
                        user: p,
                        onAction: eU,
                        onWatchStream: er ? eH : void 0,
                        previewIsOpen: eu,
                        hangStatusActivity: eA
                    }) : er ? c = eW : eM && p.id !== I.default.getId() ? c = eY : eO && (c = eK), (0, r.jsx)(o.YNO, {
                        targetElementRef: ej,
                        position: "right",
                        renderPopout: c,
                        shouldShow: (ec || eO && eD && (!e_ || em)) && !ex,
                        onRequestClose: ek,
                        align: eO && eL && !em && !e_ ? "center" : void 0,
                        spacing: eO && eL && (!e_ || em) ? 8 : 0,
                        children: () => (0, r.jsx)(S.Ay, V(U({}, n), {
                            ref: ej,
                            onMouseDown: e.onMouseDown,
                            onKeyDown: e.onKeyDown,
                            handleHoverHangStatus: eV,
                            handleHoverIcons: eB,
                            onAddHangStatusClicked: () => eP(!0)
                        }))
                    })
                })(e)
            })
        });
    return en ? et(ez) : ez
})