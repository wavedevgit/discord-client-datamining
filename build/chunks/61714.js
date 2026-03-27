/** chunk id: 61714 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => ee
});
var n = i(627968),
    s = i(64700),
    a = i(503698),
    l = i.n(a),
    r = i(311907),
    o = i(827734),
    d = i(990078),
    c = i(319060),
    u = i(397927),
    h = i(442433),
    _ = i(391973),
    p = i(684013),
    f = i(401843),
    m = i(717558),
    g = i(429913),
    A = i(47167),
    x = i(235986),
    v = i(15285),
    y = i(769015),
    E = i(652896),
    I = i(277680),
    S = i(118277),
    C = i(905552),
    N = i(22705),
    b = i(994314),
    T = i(63995),
    O = i(69407),
    L = i(520006),
    j = i(352018),
    w = i(481947),
    D = i(616356),
    R = i(734057),
    k = i(760751),
    M = i(430452),
    P = i(309010),
    G = i(485296),
    V = i(157257),
    U = i(607567),
    z = i(256415),
    H = i(996439),
    W = i(427262),
    B = i(9302),
    F = i(31284),
    K = i(799808),
    Y = i(855790),
    Z = i(652215),
    X = i(731854),
    J = i(985018),
    Q = i(912106);

function q(e) {
    let {
        flipped: t = !1,
        locked: i = !1,
        user: a,
        nick: o,
        displayNameMode: d,
        displayUserMode: c,
        size: u = Z.OSZ.LARGE,
        onClick: h,
        onContextMenu: _,
        context: p,
        guildId: f,
        voiceState: g
    } = e, A = (0, r.bG)([M.Ay], () => M.Ay.isLocalMute(a.id)), x = (0, r.bG)([D.A], () => D.A.getCurrentUserActiveStream()), v = (0, r.yK)([D.A], () => null != x ? D.A.getViewerIds(x) : []), y = (0, m.A)({
        userId: a.id,
        context: p
    }), E = (0, r.bG)([G.A], () => G.A.isPrioritySpeaker(a.id, p)), I = (0, r.bG)([D.A], () => null != D.A.getStreamForUser(a.id, f)), S = s.useMemo(() => null != x && x.ownerId !== a.id && v.includes(a.id), [x, a.id, v]);
    if (c === Z.f5z.ONLY_WHILE_SPEAKING && i && !y) return null;
    let {
        mute: C,
        selfMute: N,
        suppress: b,
        deaf: T,
        selfDeaf: O
    } = g;
    return (0, n.jsx)(w.Ay, {
        guildId: f,
        onClick: i ? void 0 : e => h?.(e, a),
        onContextMenu: i ? void 0 : e => _?.(e, a),
        className: l()(Q.TX, {
            [Q.zj]: !y,
            [Q.bG]: !i
        }),
        user: a,
        nick: o,
        speaking: !1,
        flipped: t,
        isStreaming: I,
        iconClassName: l()(Q.Ow, {
            [Q.xt]: i
        }),
        isWatching: S,
        isOverlay: !0,
        size: u,
        priority: E,
        mute: C || N || A,
        localMute: A,
        serverMute: C || b,
        deaf: T || O,
        serverDeaf: T,
        userNameClassName: l()(Q.Xh, {
            [Q.xt]: i,
            [Q.R]: i && (d === Z.pwA.NEVER || !y && d === Z.pwA.ONLY_WHILE_SPEAKING)
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
            } = await Promise.all([i.e("97262"), i.e("32418"), i.e("84821")]).then(i.bind(i, 668569));
            return i => (0, n.jsx)(e, {
                ...i,
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
            } = await i.e("18912").then(i.bind(i, 880510));
            return i => (0, n.jsx)(a, {
                ...i,
                mediaEngineContext: e,
                subtitle: null != t ? void 0 : s
            })
        })
    };
    handlePin = () => {
        let e = !this.props.pinned;
        p.A.track(Z.HAw.OVERLAY_PIN_TOGGLED, {
            pinned: e,
            guild_id: this.props.channel?.guild_id,
            channel_id: this.props.channel?.id,
            channel_type: this.props.channel?.type,
            widget_type: Z.uss.VOICE
        });
        let {
            id: t
        } = this.props;
        (0, _.v0)(t)
    };
    handleStopStream = () => {
        let {
            stream: e
        } = this.props;
        null != e && f.vN((0, E._z)(e))
    };
    renderVoiceUsers() {
        let {
            context: e,
            sortedVoiceStates: t,
            displayNameMode: i,
            displayUserMode: s,
            locked: a,
            isPreviewingInGame: r,
            channel: o,
            anchor: d,
            avatarSizeMode: u
        } = this.props, h = null != d.right, _ = t.map(t => {
            let {
                user: l,
                voiceState: d,
                member: c
            } = t;
            if (null == l || null == o || null == e) return null;
            let _ = a || r;
            return (0, n.jsx)(q, {
                guildId: o?.guild_id,
                user: l,
                nick: c?.nick ?? W.Ay.getName(l),
                flipped: h,
                voiceState: d,
                displayNameMode: i,
                displayUserMode: s,
                size: u,
                locked: _,
                onContextMenu: this.handleUserContextMenu,
                onClick: this.handleUserContextMenu,
                context: e
            }, l.id)
        });
        return (0, n.jsx)(Y.Ay.Body, {
            className: l()({
                [c.A.VOICE_WIDGET_TOP_MARGIN]: a,
                [Q.mn]: a
            }),
            children: (0, n.jsx)(w.Wr, {
                className: Q.tA,
                children: _
            })
        })
    }
    renderHeader() {
        let {
            pinned: e,
            title: t,
            isPreviewingInGame: i
        } = this.props;
        return (0, n.jsxs)(Y.Ay.Bar, {
            className: l()(Q.bl, {
                [Q.VH]: i
            }),
            children: [(0, n.jsxs)(Y.Ay.Content, {
                dynamicSize: !0,
                className: l()(Q.Qs, {
                    [Q.R]: i
                }),
                children: [(0, n.jsx)(u.WP0, {
                    size: "custom",
                    color: o.A.unsafe_rawColors.WHITE.css,
                    width: 20,
                    height: 20,
                    className: l()(Q.Kk, Q.zj, Q.co)
                }), (0, n.jsx)(u.HKD, {
                    size: "custom",
                    color: o.A.unsafe_rawColors.WHITE.css,
                    width: 20,
                    height: 20,
                    className: l()(Q.Kk, Q.zj, Q.Xk)
                }), (0, n.jsx)(u.Text, {
                    variant: "text-md/normal",
                    style: {
                        color: o.A.unsafe_rawColors.PRIMARY_200.css
                    },
                    className: Q.DD,
                    children: t
                })]
            }), i ? null : (0, n.jsx)(Y.Ay.Icon, {
                icon: u.Zes,
                label: J.intl.string(J.t.NiTd0e),
                onClick: this.handleOpenVoiceSettings,
                tooltipPosition: "left",
                size: 18
            }), i ? null : (0, n.jsx)(Y.Ay.Icon, {
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
            isPreviewingInGame: i,
            channel: s,
            application: a,
            streamMetadata: r,
            streamApplication: o,
            stream: c
        } = this.props;
        if (e || null == c || null == s) return null;
        let {
            sanitizedTitle: h,
            title: _
        } = (0, I.A)(r);
        return (0, n.jsx)(Y.Ay.Bar, {
            className: l()(Q.Wm, {
                [Q.R]: i,
                [Q.CW]: !t
            }),
            children: (0, n.jsxs)(Y.Ay.Content, {
                className: Q.Vb,
                dynamicSize: !0,
                children: [(0, n.jsxs)("div", {
                    className: Q.gk,
                    children: [o?.id != null && o.id === a?.id ? (0, n.jsx)(y.A, {
                        className: Q.Gt,
                        game: a
                    }) : (0, n.jsx)(S.A, {
                        title: h
                    }), (0, n.jsxs)(x.A, {
                        direction: x.A.Direction.VERTICAL,
                        justify: x.A.Justify.BETWEEN,
                        className: Q.gA,
                        children: [(0, n.jsx)(u.Text, {
                            className: Q.$A,
                            variant: "text-sm/normal",
                            children: J.intl.string(J.t.XKYej5)
                        }), (0, n.jsx)(b.A, {
                            children: o?.name ?? _
                        })]
                    })]
                }), (0, n.jsxs)(x.A, {
                    grow: 0,
                    children: [(0, n.jsx)("div", {
                        className: Q.yf,
                        children: (0, n.jsx)(L.A, {
                            stream: c,
                            iconClassName: Q.Nd,
                            appContext: Z.BRT.OVERLAY
                        })
                    }), (0, n.jsx)("div", {
                        className: Q.yf,
                        children: (0, n.jsx)(j.A, {
                            stream: c,
                            appContext: Z.BRT.OVERLAY
                        })
                    }), (0, n.jsx)("div", {
                        className: Q.yf,
                        children: (0, n.jsx)(d.m, {
                            asContainer: !0,
                            text: J.intl.string(J.t.S5anIc),
                            children: (0, n.jsx)(u.DUT, {
                                onClick: this.handleStopStream,
                                "aria-label": J.intl.string(J.t.S5anIc),
                                children: (0, n.jsx)(u.GT3, {
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
        (0, K.j_)(this.props, this.shouldDisplay())
    }
    componentDidUpdate(e) {
        (0, K.Mw)(e, this.props, this.shouldDisplay)
    }
    shouldDisplay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
            {
                context: t,
                locked: i,
                pinned: n,
                sortedVoiceStates: s,
                channel: a
            } = e;
        return 0 !== s.length && null != t && null != a && (!i || !!n)
    }
    render() {
        let {
            context: e,
            lobbyId: t,
            locked: i,
            pinned: s,
            isPreviewingInGame: a,
            channel: r
        } = this.props;
        if (null == r || null == e || !this.shouldDisplay()) return null;
        let o = Z.UVF.UNPINNED;
        return s && (o = Z.UVF.PINNED), a && (o = Z.UVF.IN_GAME_PREVIEW), i && (o = Z.UVF.IN_GAME), (0, n.jsxs)(Y.Ay, {
            type: o,
            width: 380,
            children: [i ? null : this.renderHeader(), this.renderVoiceUsers(), this.renderStreamerSettings(), i ? null : (0, n.jsx)(F.A, {
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
    let t = (0, r.bG)([P.A, R.A], () => R.A.getChannel(P.A.getVoiceChannelId())),
        i = (0, A.Ay)(t),
        s = function() {
            let [e] = (0, r.bG)([U.Ay, T.A, P.A, R.A], () => {
                let e = R.A.getChannel(P.A.getVoiceChannelId());
                return null == e ? [
                    [], -1
                ] : e.isGuildStageVoice() ? [T.A.getMutableParticipants(e.id, O.ip.SPEAKER), T.A.getParticipantsVersion(e.id)] : [U.Ay.getVoiceStatesForChannel(e), U.Ay.getVoiceStateVersion(e.getGuildId())]
            }, [], H.D);
            return e
        }(),
        a = (0, r.bG)([D.A], () => D.A.getStreamerActiveStreamMetadata()),
        l = (0, r.bG)([v.Ay, V.A, k.A], () => {
            let e = (0, C.A)(v.Ay, V.A);
            return null != e ? k.A.findGame(e)?.id : null
        }),
        o = (0, g.h)(l),
        d = (0, r.cf)([v.Ay, V.A, D.A, z.default], () => {
            let e = (0, C.A)(v.Ay, V.A),
                t = D.A.getCurrentUserActiveStream();
            return {
                displayUserMode: z.default.getDisplayUserMode(),
                displayNameMode: z.default.getDisplayNameMode(),
                avatarSizeMode: z.default.getAvatarSizeMode(),
                streamApplication: a?.pid === (0, B.getPID)() ? (0, N.A)(e) : null,
                stream: t
            }
        });
    return (0, n.jsx)($, {
        ...d,
        application: o,
        ...e,
        sortedVoiceStates: s,
        channel: t,
        title: i ?? "",
        streamMetadata: a,
        streamApplication: d.streamApplication ?? {
            id: null,
            name: a?.sourceName
        }
    })
}