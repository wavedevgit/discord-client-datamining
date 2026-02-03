/** chunk id: 806911, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => ep
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    o = n.n(a),
    s = n(735438),
    l = n.n(s),
    c = n(311907),
    u = n(205693),
    d = n(397927),
    f = n(827343),
    p = n(367513),
    _ = n(951001),
    h = n(398590),
    m = n(31728),
    g = n(793574),
    E = n(58149),
    y = n(313961),
    b = n(520698),
    O = n(525788),
    v = n(384059),
    A = n(47167),
    I = n(958713),
    S = n(525505),
    T = n(652896),
    C = n(880144),
    N = n(638480),
    w = n(338771),
    R = n(991701),
    P = n(574172),
    D = n(976860),
    L = n(461782),
    x = n(447404),
    M = n(271195),
    j = n(905216),
    k = n(128286),
    U = n(528057),
    G = n(352018),
    F = n(616356),
    V = n(961350),
    B = n(430452),
    H = n(994500),
    Y = n(287809),
    W = n(788318),
    K = n(803301),
    z = n(531685),
    q = n(954571),
    Z = n(562153),
    Q = n(427262),
    X = n(712577),
    J = n(566331),
    $ = n(768088),
    ee = n(256195),
    et = n(729365),
    en = n(566566),
    er = n(222692),
    ei = n(652215),
    ea = n(806931),
    eo = n(612071),
    es = n(976092);

function el(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function ec(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            el(e, t, n[t])
        })
    }
    return e
}

function eu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function ed(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eu(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
class ef extends i.PureComponent {
    get viewProperties() {
        let {
            participantOnScreen: e,
            currentUserId: t,
            channel: n
        } = this.props, r = (0, ea.Ay)(e), i = null != e && e.type !== ea.lp.ACTIVITY && e.user.id === t;
        return {
            canPopout: r && !i,
            canSettings: r && i,
            canStopStream: r,
            canSeeViewers: r,
            canSeeParticipantName: ((null == e ? void 0 : e.type) === ea.lp.STREAM || (null == e ? void 0 : e.type) === ea.lp.USER) && n.type !== ei.rbe.DM,
            canDisconnect: !r,
            isSelf: i
        }
    }
    get streamerPaused() {
        let {
            isMainWindowFocused: e,
            activeSelfStream: t,
            participantOnScreen: n
        } = this.props;
        return null != t && (null == n ? void 0 : n.id) === (0, T._z)(t) && !e
    }
    get activeStreamForSelectedParticipant() {
        let {
            participantOnScreen: e,
            activeStreams: t
        } = this.props;
        return (0, ea.Ay)(e) ? t.find(t => (0, T._z)(t) === e.id) : null
    }
    getScreenMessage() {
        let {
            participantOnScreen: e,
            currentUserId: t
        } = this.props;
        if (!(0, ea.Ay)(e)) return null;
        let n = this.activeStreamForSelectedParticipant;
        return null == n ? null : (0, N.A)(n, e.user, e.user.id === t, this.streamerPaused)
    }
    componentDidMount() {
        let {
            channel: e
        } = this.props;
        q.default.track(ei.HAw.VIDEO_LAYOUT_TOGGLED, ec({
            video_layout: "pip"
        }, (0, E.QS)(e.id)))
    }
    componentWillUnmount() {
        let {
            channel: e
        } = this.props;
        q.default.track(ei.HAw.VIDEO_LAYOUT_TOGGLED, ec({
            video_layout: y.A.getLayout(e.id)
        }, (0, E.QS)(e.id)))
    }
    renderStreamState() {
        let e = this.activeStreamForSelectedParticipant,
            {
                participantOnScreen: t,
                width: n,
                isOverlayRenderingVideo: i,
                videoStreamError: a,
                cameraEncodeError: o
            } = this.props;
        if (null != a && null == o) {
            if ((null == t ? void 0 : t.type) === ea.lp.STREAM) return (0, r.jsx)($.A, {
                stream: t.stream,
                width: n,
                avError: a
            });
            else if ((null == t ? void 0 : t.type) === ea.lp.USER) return (0, r.jsx)(en.A, {
                userId: t.user.id,
                width: n,
                avError: a
            })
        }
        switch (!0) {
            case (null == e ? void 0 : e.state) === ei.XYD.ENDED:
                return (0, r.jsx)(J.A, {
                    stream: e,
                    width: n
                });
            case (null == e ? void 0 : e.state) === ei.XYD.FAILED:
                return (0, r.jsx)($.A, {
                    stream: e,
                    width: n
                });
            case (null == t ? void 0 : t.type) === ea.lp.HIDDEN_STREAM:
                return (0, r.jsx)(ee.A, {
                    participant: t,
                    width: n
                });
            case i:
                return (0, r.jsx)(et.A, {
                    width: n
                })
        }
        return null
    }
    renderParticipantName() {
        let {
            channel: e,
            participantOnScreen: t
        } = this.props;
        if ((null == t ? void 0 : t.type) === ea.lp.STREAM || (null == t ? void 0 : t.type) === ea.lp.USER) {
            var n;
            let i = null != (n = Z.Ay.getNickname(e.getGuildId(), e.id, t.user)) ? n : Q.Ay.getName(t.user);
            return (0, r.jsx)(d.Text, {
                variant: "text-md/normal",
                color: "always-white",
                className: eo.F8,
                lineClamp: 1,
                children: i
            })
        }
        return null
    }
    render() {
        let {
            channel: e,
            streamId: t,
            participantOnScreen: n,
            isVideoEnabled: i,
            width: a
        } = this.props, o = (0, A.m1)(e, Y.default, H.A), s = (null == n ? void 0 : n.id) === V.default.getId() && i, l = this.renderStreamState(), c = this.activeStreamForSelectedParticipant, u = null;
        return (null == n ? void 0 : n.type) !== ea.lp.ACTIVITY && (null != l ? u = l : ((null == n ? void 0 : n.type) === ea.lp.USER || (null == n ? void 0 : n.type) === ea.lp.STREAM) && (u = (0, r.jsx)(X.A, {
            paused: this.streamerPaused,
            streamId: t,
            component: B.A.getVideoComponent(),
            mirror: s,
            children: (0, r.jsx)(R.A, {
                size: d._3J.SIZE_80,
                src: null == n ? void 0 : n.user.getAvatarURL(e.guild_id, 80),
                "aria-label": null == n ? void 0 : n.user.username,
                guildId: e.guild_id,
                userId: null == n ? void 0 : n.user.id
            })
        }))), (0, r.jsx)(L.Ay, {
            timeout: 1800,
            children: e => {
                var t;
                return (0, r.jsx)(M.A, ed(ec({
                    title: o,
                    backgroundKey: null != (t = null == n ? void 0 : n.id) ? t : "",
                    screenMessage: null == l ? this.getScreenMessage() : null,
                    onJumpToChannel: this.handleJumpToChannel,
                    onHide: this.handleHidePIP,
                    renderBottomLeftControls: this.renderBottomLeftControls,
                    renderBottomRightControls: this.renderBottomRightControls,
                    preventIdleComponent: x.A,
                    width: a,
                    className: es.a8,
                    videoControlsClassName: (null == c ? void 0 : c.state) === ei.XYD.ENDED ? eo._v : void 0
                }, e), {
                    children: u
                }))
            }
        })
    }
    constructor(...e) {
        super(...e), el(this, "state", {
            screensharePopoutOpen: !1
        }), el(this, "_ref", i.createRef()), el(this, "handleVideo", e => {
            f.A.setVideoEnabled(e)
        }), el(this, "handleEnableVideoWhenUnavailable", () => {
            let {
                isVideoAvailable: e
            } = this.props;
            e ? this.handleVideo(!0) : (0, er.A)()
        }), el(this, "handleJumpToChannel", () => {
            var e;
            let {
                channel: t
            } = this.props;
            (0, h.bz)();
            let n = null != (e = t.getGuildId()) ? e : ei.ME;
            (0, D.uh)(n, t.id), _.A.channelListScrollTo(n, t.id);
            let r = this.activeStreamForSelectedParticipant;
            null != r && p.A.selectParticipant(r.channelId, (0, T._z)(r))
        }), el(this, "handleStopStream", () => {
            let {
                participantOnScreen: e
            } = this.props;
            o()((0, ea.Ay)(e), "cannot stop stream for non streamer"), (0, v.X)(g.A.VIDEO_PIP, v.O.STREAM, !1), (0, w.A)(e.stream)
        }), el(this, "handleHidePIP", () => {
            let {
                channel: e
            } = this.props;
            m.jD(e.id)
        }), el(this, "handleOpenPopout", () => {
            let {
                channel: e
            } = this.props;
            (0, v.X)(g.A.VIDEO_PIP, v.O.POPOUT, !0), P.openChannelCallPopout(e)
        }), el(this, "renderBottomLeftControls", () => {
            let {
                canSeeParticipantName: e
            } = this.viewProperties;
            return e ? this.renderParticipantName() : null
        }), el(this, "renderBottomRightControls", () => {
            let {
                canSettings: e,
                canPopout: t,
                canDisconnect: n,
                canStopStream: i,
                canSeeViewers: a
            } = this.viewProperties;
            return (0, r.jsxs)(r.Fragment, {
                children: [a ? this.renderViewersIcon() : null, e ? this.renderSettingsIcon() : null, t ? this.renderPopoutIcon() : null, i ? this.renderStopStreamButton() : null, n ? this.renderDisconnectButton() : null]
            })
        }), el(this, "renderDisconnectButton", () => (0, r.jsx)(j.A, {
            className: eo.iq,
            onClick: () => (0, v.X)(g.A.VIDEO_PIP, v.O.DISCONNECT)
        })), el(this, "renderStopStreamButton", () => {
            let {
                isSelf: e
            } = this.viewProperties;
            return (0, r.jsx)(U.A, {
                isSelfStream: e,
                className: eo.iq,
                onClick: this.handleStopStream
            })
        }), el(this, "renderViewersIcon", () => {
            let {
                participantOnScreen: e,
                channel: t
            } = this.props;
            return o()((0, ea.Ay)(e) || (null == e ? void 0 : e.type) === ea.lp.ACTIVITY, "Cannot render participants for participant type ".concat(null == e ? void 0 : e.type)), (0, r.jsx)(x.A, {
                children: (0, r.jsx)(O.A, {
                    channelId: t.id,
                    guildId: t.getGuildId(),
                    className: eo.iq,
                    participant: e,
                    compact: !0
                })
            })
        }), el(this, "renderPopoutIcon", () => (0, r.jsx)(k.A, {
            className: eo.iq,
            popoutOpen: !1,
            onOpenPopout: this.handleOpenPopout,
            onClosePopout: ei.FXj
        })), el(this, "renderSettingsIcon", () => {
            let {
                participantOnScreen: e,
                activeStreams: t
            } = this.props;
            o()((0, ea.Ay)(e), "Cannot render settings for non stream participant");
            let n = t.find(t => (0, T._z)(t) === e.id);
            return null == n || n.state === ei.XYD.ENDED ? null : (0, r.jsx)(G.A, {
                stream: n,
                className: eo.iq,
                appContext: ei.BRT.APP,
                location: g.A.VIDEO_PIP
            })
        })
    }
}

function ep(e) {
    let {
        channel: t,
        width: n
    } = e, i = (0, c.bG)([W.A], () => W.A.getSpeaker(t.id)), a = (0, c.bG)([y.A], () => y.A.getParticipant(t.id, i), [t.id, i]), o = (0, c.bG)([B.A], () => l()(B.A.getVideoDevices()).values().first()), s = (0, c.bG)([K.A], () => null != a && a.type !== ea.lp.ACTIVITY && a.type !== ea.lp.HIDDEN_STREAM ? K.A.getStreamId(a.user.id, t.getGuildId(), (0, b.A)(a.type)) : null, [a, t]), d = null == o || o.disabled, f = !d, p = (0, c.bG)([B.A], () => !d && B.A.isVideoEnabled(), [d]), _ = (0, c.bG)([B.A], () => (0, C.A)(B.A)), h = (0, c.bG)([V.default], () => V.default.getId()), m = (0, c.bG)([F.A], () => F.A.getCurrentUserActiveStream()), g = null != a && "user" in a ? a.user.id : "", E = (0, S.A)((null == a ? void 0 : a.type) === ea.lp.STREAM ? u.x.STREAM : u.x.DEFAULT, g), O = (0, I.A)(g), v = (0, c.yK)([F.A], () => F.A.getAllActiveStreams());
    return (0, r.jsx)(ef, {
        channel: t,
        streamId: s,
        participantOnScreen: a,
        isVideoAvailable: f,
        isVideoEnabled: p,
        canGoLive: _,
        currentUserId: h,
        activeStreams: v,
        activeSelfStream: m,
        isMainWindowFocused: z.A.isFocused(),
        width: n,
        isOverlayRenderingVideo: !1,
        videoStreamError: E,
        cameraEncodeError: O
    })
}