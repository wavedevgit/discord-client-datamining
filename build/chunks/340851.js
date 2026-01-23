/** Chunk was on 97492 **/
/** chunk id: 340851, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => V,
    LR: () => U,
    aI: () => B
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
    p = n(401843),
    h = n(296216),
    f = n(323073),
    g = n(793574),
    m = n(480890),
    b = n(643501),
    A = n(916641),
    y = n(652896),
    _ = n(279250),
    O = n(346846),
    j = n(142524),
    v = n(958140),
    x = n(721931),
    E = n(766319),
    C = n(342296),
    S = n(481947),
    I = n(961350),
    N = n(71393),
    T = n(576705),
    P = n(287809),
    w = n(977997),
    R = n(544105),
    D = n(502075),
    M = n(985018),
    L = n(861379);

function k(e) {
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

function G(e, t) {
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

function U(e) {
    let {
        numUsers: t
    } = e;
    return (0, r.jsx)("div", {
        className: L.BN,
        children: (0, r.jsxs)(o.Text, {
            color: "text-muted",
            variant: "text-sm/medium",
            children: ["+", t]
        })
    })
}

function B(e) {
    let {
        numAudience: t,
        collapsed: n
    } = e, l = n ? t : M.intl.formatToPlainString(M.t["+v2pN2"], {
        count: t
    });
    return (0, r.jsxs)("div", {
        className: s()(L.yJ, {
            [L.Nr]: n
        }),
        children: [(0, r.jsx)("div", {
            className: L.$L,
            children: (0, r.jsx)(o.LoC, {
                size: "md",
                color: "currentColor",
                className: L.wG
            })
        }), (0, r.jsx)(o.Text, {
            color: "text-muted",
            variant: "text-sm/medium",
            children: l
        })]
    })
}
let V = (0, h.J)(function(e) {
    var t;
    let {
        collapsed: i,
        user: h,
        channel: U,
        mute: B,
        localMute: V,
        localVideoDisabled: F,
        deaf: H,
        video: K,
        embeddedApplication: W,
        serverMute: z,
        serverDeaf: Y,
        nick: q,
        ringing: X,
        speaking: J,
        voiceDb: Q,
        latched: Z,
        disconnected: $,
        connectUserDragSource: ee,
        canDrag: et,
        isStreaming: en,
        isWatching: er,
        isGuest: el,
        priority: ei,
        showPreview: es,
        hidePreview: ea,
        shouldShowHoverPopout: eo,
        previewIsOpen: ec,
        otherClientSessionType: eu,
        voicePlatform: ed,
        isSelfOnOtherClient: ep = !1,
        tabIndex: eh,
        location: ef,
        isSelf: eg,
        application: em,
        hangStatusActivity: eb,
        requestToStreamActivity: eA,
        showHangStatus: ey
    } = e, e_ = l.useRef(null), [eO, ej] = l.useState(!1), ev = l.useRef(null), [ex, eE] = l.useState(!1), [eC, eS] = l.useState(!1), [eI, eN] = l.useState(!1), [eT, eP] = l.useState(!1), ew = eC || eT || eI, eR = ex || ew, eD = (null == eA ? void 0 : eA.session_id) != null, eM = () => {
        ej(!eO)
    }, eL = (e, t) => {
        let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
        null != t && n.has(t) && (eI && eN(!1), eC && eS(!1)), ek()
    }, ek = () => {
        (en || ey || eD) && (null == ea || ea(h.id))
    }, eG = e => {
        e ? ev.current = setTimeout(() => {
            eE(!0)
        }, 150 * !!ec) : clearTimeout(ev.current)
    };
    l.useEffect(() => () => clearTimeout(ev.current), []);
    let eU = e => {
            e && eE(!1)
        },
        eB = () => {
            if (!(en && (0, _.eo)(U, w.A, N.A, T.A, b.default)[0])) return;
            let e = {
                streamType: D.U4.GUILD,
                ownerId: h.id,
                channelId: U.id,
                guildId: U.guild_id
            };
            I.default.getId() !== h.id && d.default.selectVoiceChannel(U.id), er ? ((0, O.A)(e), c.A.selectParticipant(e.channelId, (0, y._z)(e))) : (0, p.Nl)(e), null == ea || ea(h.id)
        },
        eV = e => {
            (0, u.L3)(e, async () => {
                let {
                    default: e
                } = await Promise.all([n.e("97262"), n.e("29534"), n.e("55296"), n.e("84841"), n.e("52458")]).then(n.bind(n, 107632));
                return t => (0, r.jsx)(e, G(k({}, t), {
                    user: h,
                    guildId: U.guild_id,
                    channel: U,
                    showMediaItems: !0,
                    showStageChannelItems: U.isGuildStageVoice(),
                    onInteraction: (0, m.s)("GuildChannelUserContextMenu", g.A.VOICE_USER, {
                        targetUserId: h.id
                    })
                }))
            })
        },
        eF = e => eg ? (0, r.jsx)(v.h, G(k({}, e), {
            channel: U,
            setIsHangStatusInputFocused: eS,
            setIsEmojiPickerOpen: eP
        })) : null != eb ? (0, r.jsx)(x.E, G(k({}, e), {
            hangStatusActivity: eb,
            channel: U,
            userId: h.id
        })) : null,
        eH = () => (0, r.jsx)(E.A, {
            userId: h.id,
            channel: U
        }),
        eK = () => (0, f.r9)() && (0, f.UK)(U.id) ? null : (0, r.jsx)(j.A, {
            user: h,
            channel: U,
            onWatch: eB,
            previewIsOpen: ec,
            location: ef
        }),
        eW = (0, r.jsx)("div", {
            className: L.kZ,
            "data-dnd-name": U.name,
            onMouseEnter: ep ? void 0 : () => {
                (en || ey || eD) && !eO && (null == es || es(h.id))
            },
            onMouseLeave: ep ? void 0 : ek,
            children: (0, r.jsx)(C.A, {
                clickTrap: (null == h ? void 0 : h.id) === (null == (t = P.default.getCurrentUser()) ? void 0 : t.id) && eO,
                targetElementRef: e_,
                user: h,
                guildId: U.guild_id,
                channelId: U.id,
                newAnalyticsLocations: [g.A.VOICE_USER],
                shouldShow: eO,
                onRequestClose: () => ej(!1),
                children: e => (e => {
                    let t = R.hv.has(null != eu ? eu : ""),
                        n = {
                            user: h,
                            speaking: J,
                            voiceDb: Q,
                            latched: Z,
                            disconnected: $,
                            mute: B,
                            localMute: V,
                            localVideoDisabled: F,
                            isStreaming: en,
                            isGuest: el,
                            video: K,
                            priority: ei,
                            ringing: X,
                            deaf: H,
                            nick: q,
                            collapsed: i,
                            overlap: i,
                            serverMute: z,
                            serverDeaf: Y,
                            tabIndex: eh,
                            otherClientSessionType: eu,
                            voicePlatform: ed,
                            embeddedApplication: W,
                            avatarContainerClass: s()({
                                [L.dj]: !0
                            }),
                            disabled: ep && !t,
                            selected: eO,
                            onClick: t ? void 0 : eM,
                            onDoubleClick: eB,
                            onContextMenu: eV,
                            guildId: U.guild_id,
                            isSelf: eg,
                            application: em,
                            channelId: U.id,
                            hangStatusActivity: eb,
                            showHangStatus: ey
                        };
                    if (ep) {
                        var l;
                        return (0, r.jsx)(a.m, {
                            text: null != (l = (0, A.A)(eu)) ? l : M.intl.string(M.t.IyYqqY),
                            children: (0, r.jsx)(S.Ay, k({
                                ref: e_
                            }, n))
                        })
                    }
                    let c = () => null;
                    return ey && eR ? c = eF : en ? c = eK : eD && h.id !== I.default.getId() ? c = eH : ey && (c = eF), (0, r.jsx)(o.YNO, {
                        targetElementRef: e_,
                        position: "right",
                        renderPopout: c,
                        shouldShow: (eo || ey && ew) && !eO,
                        onRequestClose: eL,
                        align: ey && eR && !eg ? "center" : void 0,
                        spacing: ey && eR ? 8 : 0,
                        children: () => (0, r.jsx)(S.Ay, G(k({}, n), {
                            ref: e_,
                            onMouseDown: e.onMouseDown,
                            onKeyDown: e.onKeyDown,
                            handleHoverHangStatus: eG,
                            handleHoverIcons: eU,
                            onAddHangStatusClicked: () => eN(!0)
                        }))
                    })
                })(e)
            })
        });
    return et ? ee(eW) : eW
})