/** chunk id: 253742 params = (module,exports,require) **/
n.d(t, {
    A: () => R
}), n(321073);
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(442433),
    u = n(717558),
    A = n(770178),
    _ = n(765548),
    h = n(793574),
    m = n(688810),
    g = n(384059),
    p = n(480890),
    E = n(556525),
    I = n(551826),
    f = n(342296),
    C = n(961350),
    T = n(430452),
    N = n(485296),
    S = n(427262),
    x = n(31408),
    v = n(985018),
    b = n(391987);
let y = {
        offset: 2
    },
    O = {
        serverDeaf: {
            icon: d.TJE,
            colorize: !0,
            getStatus: () => v.intl.string(v.t.btxSdB)
        },
        serverMute: {
            icon: d.O1p,
            colorize: !0,
            getStatus: () => v.intl.string(v.t.uLddbQ)
        },
        deaf: {
            icon: d.cQT,
            colorize: !1,
            getStatus: () => v.intl.string(v.t.NjmiOL)
        },
        mute: {
            icon: d.z0P,
            colorize: !1,
            getStatus: () => v.intl.string(v.t.tjtv3P)
        },
        localMute: {
            icon: d.O1p,
            colorize: !1,
            getStatus: () => v.intl.string(v.t["9F+xJU"])
        }
    };

function L(e) {
    let t = a.useRef(null),
        {
            parentAnalyticsLocation: r
        } = (0, m.Ay)(),
        {
            channel: A,
            user: _,
            nick: C,
            mute: L,
            deaf: R,
            serverMute: P,
            serverDeaf: D
        } = e,
        j = (0, s.bG)([T.Ay], () => T.Ay.isLocalMute(_.id)),
        M = (0, u.A)({
            userId: _.id,
            checkSoundSharing: !0
        }),
        w = A.getGuildId() ?? void 0,
        U = _.getAvatarURL(A.guild_id, 24),
        G = C ?? S.Ay.getName(_),
        {
            icon: k,
            colorize: V,
            getStatus: B
        } = function(e) {
            let {
                serverDeaf: t,
                deaf: n,
                serverMute: i,
                mute: a,
                localMute: r
            } = e;
            if (t) return O.serverDeaf;
            if (n) return O.deaf;
            if (i) return O.serverMute;
            if (r) return O.localMute;
            if (a) return O.mute
        }({
            serverDeaf: D,
            deaf: R,
            serverMute: P,
            mute: L,
            localMute: j
        }) ?? {},
        H = null != B ? v.intl.formatToPlainString(v.t["1+MVBP"], {
            userName: G,
            status: B()
        }) : G;

    function F(e) {
        null != w ? (0, c.L3)(e, async () => {
            let {
                default: e
            } = await Promise.all([n.e("97262"), n.e("42128"), n.e("84841"), n.e("50970")]).then(n.bind(n, 107632));
            return t => (0, i.jsx)(e, {
                ...t,
                user: _,
                guildId: w,
                channel: A,
                showMediaItems: !0,
                onInteraction: (0, p.s)("GuildChannelUserContextMenu", h.A.RTC_PANEL, {
                    targetUserId: _.id
                })
            })
        }) : (0, c.L3)(e, async () => {
            let {
                default: e
            } = await Promise.all([n.e("97262"), n.e("32418"), n.e("54631")]).then(n.bind(n, 668569));
            return t => (0, i.jsx)(e, {
                ...t,
                user: _,
                showMediaItems: !0,
                onInteraction: (0, p.s)("UserGenericContextMenu", h.A.RTC_PANEL, {
                    targetUserId: _.id
                })
            })
        })
    }
    let Y = (0, s.bG)([N.A], () => N.A.getVoiceVolume(_.id)),
        W = (0, E.v)({
            isSpeaking: M,
            voiceDb: Y,
            spreadDirection: E.O.INSET_ONLY,
            maxInnerSpreadRadius: 3
        });
    return (0, i.jsx)(f.A, {
        targetElementRef: t,
        user: _,
        guildId: w,
        channelId: A.id,
        position: "top",
        clickTrap: !0,
        children: e => (0, i.jsx)(o.m, {
            text: H,
            children: (0, i.jsx)(d.DUT, {
                innerRef: t,
                onClick: t => {
                    e.onClick(t), (0, g.X)(r, g.O.VOICE_USER)
                },
                className: b.H,
                onContextMenu: F,
                focusProps: y,
                children: (0, i.jsx)(I.A, {
                    shakeLocation: x.uD.VOICE_USER,
                    isShaking: M,
                    children: (0, i.jsx)("div", {
                        className: b.my,
                        style: {
                            backgroundImage: `url(${U})`,
                            ...W
                        },
                        children: null != k ? (0, i.jsx)(k, {
                            className: l()(b.tr, {
                                [b.qE]: V
                            }),
                            color: "currentColor",
                            size: "xs"
                        }) : null
                    })
                })
            })
        })
    })
}

function R(e) {
    let {
        voiceStates: t,
        channel: n,
        className: r
    } = e, [c, u] = a.useState(!1), h = (0, s.bG)([C.default], () => C.default.getId()), {
        containerRef: m,
        maxVisibleAvatars: g
    } = function(e) {
        let [t, n] = a.useState(7), i = (0, _.A)(() => {
            let t = r?.current;
            if (null == t) return;
            let i = Math.floor((t.offsetWidth + 4) / 28);
            n(Math.max(1, e > i ? i - 1 : i))
        }), r = (0, A.w)(i, [e], {
            fireOnMount: !0,
            fireOnDepsChange: !0
        });
        return {
            containerRef: r,
            maxVisibleAvatars: t
        }
    }(t.length - 1), [p, E] = function(e, t, n) {
        let i = [];
        for (let a of e)
            if (a.user.id !== t && !i.some(e => e.user.id === a.user.id)) {
                if (i.length >= n) return [i, !0];
                i.push(a)
            } return [i, !1]
    }(t, h, g), I = c ? d.QGg : d.j96, f = c ? v.intl.string(v.t["Z/Tya5"]) : v.intl.string(v.t.XR5BAc), T = (0, i.jsx)(o.m, {
        text: f,
        ariaHidden: !0,
        children: (0, i.jsx)(d.K0, {
            "aria-label": f,
            onClick: () => u(!c),
            icon: () => (0, i.jsx)(I, {
                size: "md"
            }),
            variant: "icon-only",
            size: "sm"
        })
    }), N = E && c ? t : p;
    return N.length <= 0 ? null : (0, i.jsx)(d.IpV, {
        className: l()(b.XG, r),
        fade: !0,
        children: (0, i.jsxs)("div", {
            ref: m,
            className: l()(b.Xk, !c && b.yZ),
            role: "group",
            "aria-label": v.intl.string(v.t["/ZgaVU"]),
            children: [N.map(e => {
                let {
                    user: t,
                    nick: a,
                    voiceState: r
                } = e;
                return t.id !== h ? (0, i.jsx)(L, {
                    channel: n,
                    user: t,
                    nick: a,
                    mute: r.isVoiceMuted(),
                    deaf: r.isVoiceDeafened(),
                    video: r.selfVideo,
                    serverMute: r.mute,
                    serverDeaf: r.deaf
                }, t.id) : null
            }), E ? T : null]
        })
    })
}