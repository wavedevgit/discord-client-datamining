/** chunk id: 61714 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => ee
});
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(311907),
    o = n(827734),
    d = n(990078),
    c = n(319060),
    u = n(397927),
    h = n(442433),
    p = n(391973),
    f = n(684013),
    _ = n(401843),
    A = n(717558),
    g = n(429913),
    m = n(47167),
    x = n(235986),
    E = n(15285),
    y = n(769015),
    v = n(652896),
    S = n(277680),
    C = n(118277),
    I = n(905552),
    N = n(22705),
    T = n(994314),
    b = n(63995),
    O = n(69407),
    j = n(520006),
    D = n(352018),
    R = n(481947),
    L = n(616356),
    w = n(734057),
    k = n(760751),
    M = n(430452),
    P = n(309010),
    G = n(485296),
    V = n(157257),
    U = n(607567),
    z = n(256415),
    H = n(996439),
    W = n(427262),
    B = n(9302),
    K = n(31284),
    F = n(799808),
    Y = n(855790),
    Z = n(652215),
    X = n(731854),
    J = n(985018),
    Q = n(298041);

function q(e) {
    let {
        flipped: t = !1,
        locked: n = !1,
        user: a,
        nick: o,
        displayNameMode: d,
        displayUserMode: c,
        size: u = Z.OSZ.LARGE,
        onClick: h,
        onContextMenu: p,
        context: f,
        guildId: _,
        voiceState: g
    } = e, m = (0, r.bG)([M.Ay], () => M.Ay.isLocalMute(a.id)), x = (0, r.bG)([L.A], () => L.A.getCurrentUserActiveStream()), E = (0, r.yK)([L.A], () => null != x ? L.A.getViewerIds(x) : []), y = (0, A.A)({
        userId: a.id,
        context: f
    }), v = (0, r.bG)([G.A], () => G.A.isPrioritySpeaker(a.id, f)), S = (0, r.bG)([L.A], () => null != L.A.getStreamForUser(a.id, _)), C = s.useMemo(() => null != x && x.ownerId !== a.id && E.includes(a.id), [x, a.id, E]);
    if (c === Z.f5z.ONLY_WHILE_SPEAKING && n && !y) return null;
    let {
        mute: I,
        selfMute: N,
        suppress: T,
        deaf: b,
        selfDeaf: O
    } = g;
    return (0, i.jsx)(R.Ay, {
        guildId: _,
        onClick: n ? void 0 : e => h?.(e, a),
        onContextMenu: n ? void 0 : e => p?.(e, a),
        className: l()(Q.TX, {
            [Q.zj]: !y,
            [Q.bG]: !n
        }),
        user: a,
        nick: o,
        speaking: !1,
        flipped: t,
        isStreaming: S,
        iconClassName: l()(Q.Ow, {
            [Q.xt]: n
        }),
        isWatching: C,
        isOverlay: !0,
        size: u,
        priority: v,
        mute: I || N || m,
        localMute: m,
        serverMute: I || T,
        deaf: b || O,
        serverDeaf: b,
        userNameClassName: l()(Q.Xh, {
            [Q.xt]: n,
            [Q.R]: n && (d === Z.pwA.NEVER || !y && d === Z.pwA.ONLY_WHILE_SPEAKING)
        })
    })
}
class $ extends s.PureComponent {
    static defaultProps = {
        context: X.x.DEFAULT
    };
    handleUserContextMenu = (e, t) => {
        let {
            context: s
        } = this.props;
        (0, h.L3)(e, async () => {
            let {
                default: e
            } = await Promise.all([n.e("97262"), n.e("32418"), n.e("54631")]).then(n.bind(n, 668569));
            return n => (0, i.jsx)(e, {
                ...n,
                user: t,
                showMediaItems: !0,
                mediaEngineContext: s
            })
        })
    };
    handleOpenVoiceSettings = () => {
        let {
            context: e,
            channel: t,
            title: s
        } = this.props;
        (0, u.mMO)(async () => {
            let {
                default: a
            } = await n.e("18912").then(n.bind(n, 880510));
            return n => (0, i.jsx)(a, {
                ...n,
                mediaEngineContext: e,
                subtitle: null != t ? void 0 : s
            })
        })
    };
    handlePin = () => {
        let e = !this.props.pinned;
        f.A.track(Z.HAw.OVERLAY_PIN_TOGGLED, {
            pinned: e,
            guild_id: this.props.channel?.guild_id,
            channel_id: this.props.channel?.id,
            channel_type: this.props.channel?.type,
            widget_type: Z.uss.VOICE
        });
        let {
            id: t
        } = this.props;
        (0, p.v0)(t)
    };
    handleStopStream = () => {
        let {
            stream: e
        } = this.props;
        null != e && _.vN((0, v._z)(e))
    };
    renderVoiceUsers() {
        let {
            context: e,
            sortedVoiceStates: t,
            displayNameMode: n,
            displayUserMode: s,
            locked: a,
            isPreviewingInGame: r,
            channel: o,
            anchor: d,
            avatarSizeMode: u
        } = this.props, h = null != d.right, p = t.map(t => {
            let {
                user: l,
                voiceState: d,
                member: c
            } = t;
            if (null == l || null == o || null == e) return null;
            let p = a || r;
            return (0, i.jsx)(q, {
                guildId: o?.guild_id,
                user: l,
                nick: c?.nick ?? W.Ay.getName(l),
                flipped: h,
                voiceState: d,
                displayNameMode: n,
                displayUserMode: s,
                size: u,
                locked: p,
                onContextMenu: this.handleUserContextMenu,
                onClick: this.handleUserContextMenu,
                context: e
            }, l.id)
        });
        return (0, i.jsx)(Y.Ay.Body, {
            className: l()({
                [c.A.VOICE_WIDGET_TOP_MARGIN]: a,
                [Q.mn]: a
            }),
            children: (0, i.jsx)(R.Wr, {
                className: Q.tA,
                children: p
            })
        })
    }
    renderHeader() {
        let {
            pinned: e,
            title: t,
            isPreviewingInGame: n
        } = this.props;
        return (0, i.jsxs)(Y.Ay.Bar, {
            className: l()(Q.bl, {
                [Q.VH]: n
            }),
            children: [(0, i.jsxs)(Y.Ay.Content, {
                dynamicSize: !0,
                className: l()(Q.Qs, {
                    [Q.R]: n
                }),
                children: [(0, i.jsx)(u.WP0, {
                    size: "custom",
                    color: o.A.unsafe_rawColors.WHITE.css,
                    width: 20,
                    height: 20,
                    className: l()(Q.Kk, Q.zj, Q.co)
                }), (0, i.jsx)(u.HKD, {
                    size: "custom",
                    color: o.A.unsafe_rawColors.WHITE.css,
                    width: 20,
                    height: 20,
                    className: l()(Q.Kk, Q.zj, Q.Xk)
                }), (0, i.jsx)(u.Text, {
                    variant: "text-md/normal",
                    style: {
                        color: o.A.unsafe_rawColors.PRIMARY_200.css
                    },
                    className: Q.DD,
                    children: t
                })]
            }), n ? null : (0, i.jsx)(Y.Ay.Icon, {
                icon: u.Zes,
                label: J.intl.string(J.t.NiTd0e),
                onClick: this.handleOpenVoiceSettings,
                tooltipPosition: "left",
                size: 18
            }), n ? null : (0, i.jsx)(Y.Ay.Icon, {
                icon: e ? u.hl9 : u.qgw,
                label: e ? J.intl.string(J.t.cSu80j) : J.intl.string(J.t.cM8Vnm),
                onClick: this.handlePin,
                tooltipPosition: "left",
                size: 18,
                isActive: e
            })]
        })
    }
    renderStreamerSettings() {
        let {
            locked: e,
            pinned: t,
            isPreviewingInGame: n,
            channel: s,
            application: a,
            streamMetadata: r,
            streamApplication: o,
            stream: c
        } = this.props;
        if (e || null == c || null == s) return null;
        let {
            sanitizedTitle: h,
            title: p
        } = (0, S.A)(r);
        return (0, i.jsx)(Y.Ay.Bar, {
            className: l()(Q.Wm, {
                [Q.R]: n,
                [Q.CW]: !t
            }),
            children: (0, i.jsxs)(Y.Ay.Content, {
                className: Q.Vb,
                dynamicSize: !0,
                children: [(0, i.jsxs)("div", {
                    className: Q.gk,
                    children: [o?.id != null && o.id === a?.id ? (0, i.jsx)(y.A, {
                        className: Q.Gt,
                        game: a
                    }) : (0, i.jsx)(C.A, {
                        title: h
                    }), (0, i.jsxs)(x.A, {
                        direction: x.A.Direction.VERTICAL,
                        justify: x.A.Justify.BETWEEN,
                        className: Q.gA,
                        children: [(0, i.jsx)(u.Text, {
                            className: Q.$A,
                            variant: "text-sm/normal",
                            children: J.intl.string(J.t.XKYej5)
                        }), (0, i.jsx)(T.A, {
                            children: o?.name ?? p
                        })]
                    })]
                }), (0, i.jsxs)(x.A, {
                    grow: 0,
                    children: [(0, i.jsx)("div", {
                        className: Q.yf,
                        children: (0, i.jsx)(j.A, {
                            stream: c,
                            iconClassName: Q.Nd,
                            appContext: Z.BRT.OVERLAY
                        })
                    }), (0, i.jsx)("div", {
                        className: Q.yf,
                        children: (0, i.jsx)(D.A, {
                            stream: c,
                            appContext: Z.BRT.OVERLAY
                        })
                    }), (0, i.jsx)("div", {
                        className: Q.yf,
                        children: (0, i.jsx)(d.m, {
                            asContainer: !0,
                            text: J.intl.string(J.t.S5anIc),
                            children: (0, i.jsx)(u.DUT, {
                                onClick: this.handleStopStream,
                                "aria-label": J.intl.string(J.t.S5anIc),
                                children: (0, i.jsx)(u.GT3, {
                                    size: "md",
                                    color: "currentColor",
                                    className: Q.Nd
                                })
                            })
                        })
                    })]
                })]
            })
        })
    }
    componentDidMount() {
        (0, F.j_)(this.props, this.shouldDisplay())
    }
    componentDidUpdate(e) {
        (0, F.Mw)(e, this.props, this.shouldDisplay)
    }
    shouldDisplay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
            {
                context: t,
                locked: n,
                pinned: i,
                sortedVoiceStates: s,
                channel: a
            } = e;
        return 0 !== s.length && null != t && null != a && (!n || !!i)
    }
    render() {
        let {
            context: e,
            lobbyId: t,
            locked: n,
            pinned: s,
            isPreviewingInGame: a,
            channel: r
        } = this.props;
        if (null == r || null == e || !this.shouldDisplay()) return null;
        let o = Z.UVF.UNPINNED;
        return s && (o = Z.UVF.PINNED), a && (o = Z.UVF.IN_GAME_PREVIEW), n && (o = Z.UVF.IN_GAME), (0, i.jsxs)(Y.Ay, {
            type: o,
            width: 380,
            children: [n ? null : this.renderHeader(), this.renderVoiceUsers(), this.renderStreamerSettings(), n ? null : (0, i.jsx)(K.A, {
                className: l()({
                    [Q.VH]: a
                }),
                contentClassName: l()({
                    [Q.R]: a
                }),
                channel: r,
                lobbyId: t,
                context: e,
                pinned: s
            })]
        })
    }
}

function ee(e) {
    let t = (0, r.bG)([P.A, w.A], () => w.A.getChannel(P.A.getVoiceChannelId())),
        n = (0, m.Ay)(t),
        s = function() {
            let [e] = (0, r.bG)([U.Ay, b.A, P.A, w.A], () => {
                let e = w.A.getChannel(P.A.getVoiceChannelId());
                return null == e ? [
                    [], -1
                ] : e.isGuildStageVoice() ? [b.A.getMutableParticipants(e.id, O.ip.SPEAKER), b.A.getParticipantsVersion(e.id)] : [U.Ay.getVoiceStatesForChannel(e), U.Ay.getVoiceStateVersion(e.getGuildId())]
            }, [], H.D);
            return e
        }(),
        a = (0, r.bG)([L.A], () => L.A.getStreamerActiveStreamMetadata()),
        l = (0, r.bG)([E.Ay, V.A, k.A], () => {
            let e = (0, I.A)(E.Ay, V.A);
            return null != e ? k.A.findGame(e)?.id : null
        }),
        o = (0, g.h)(l),
        d = (0, r.cf)([E.Ay, V.A, L.A, z.default], () => {
            let e = (0, I.A)(E.Ay, V.A),
                t = L.A.getCurrentUserActiveStream();
            return {
                displayUserMode: z.default.getDisplayUserMode(),
                displayNameMode: z.default.getDisplayNameMode(),
                avatarSizeMode: z.default.getAvatarSizeMode(),
                streamApplication: a?.pid === (0, B.getPID)() ? (0, N.A)(e) : null,
                stream: t
            }
        });
    return (0, i.jsx)($, {
        ...d,
        application: o,
        ...e,
        sortedVoiceStates: s,
        channel: t,
        title: n ?? "",
        streamMetadata: a,
        streamApplication: d.streamApplication ?? {
            id: null,
            name: a?.sourceName
        }
    })
}