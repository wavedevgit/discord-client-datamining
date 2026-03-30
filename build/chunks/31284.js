/** chunk id: 31284 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => j
});
var n = i(627968),
    s = i(64700),
    a = i(503698),
    l = i.n(a),
    r = i(936504),
    o = i(311907),
    d = i(397927),
    c = i(827343),
    u = i(951001),
    h = i(956793),
    _ = i(47167),
    p = i(235986),
    f = i(42473),
    m = i(994314),
    g = i(241847),
    A = i(178442),
    x = i(71393),
    v = i(430452),
    y = i(994500),
    E = i(287809),
    I = i(977997),
    S = i(572487),
    C = i(855790),
    b = i(652215),
    N = i(985018),
    T = i(672829),
    O = i(470534);
class L extends s.PureComponent {
    rtcConnectionStatusRef = s.createRef();
    handleToggleSelfMute = () => {
        let {
            context: e
        } = this.props;
        c.A.toggleSelfMute({
            context: e,
            location: "Overlay Controls"
        })
    };
    handleToggleSelfDeaf = () => {
        let {
            context: e
        } = this.props;
        c.A.toggleSelfDeaf({
            context: e,
            location: "Overlay Controls"
        })
    };
    handleDisconnect() {
        h.default.selectVoiceChannel(null)
    }
    renderPopout = e => {
        let {
            lobbyId: t
        } = this.props;
        return (0, n.jsx)(g.A, {
            channelId: e,
            lobbyId: t,
            isOverlay: !0
        })
    };
    renderChannelLink(e) {
        let {
            guild: t
        } = this.props, i = (0, _.m1)(e, E.default, y.A), s = null != t ? `${i} / ${t.name}` : i, a = null != t ? t.id : b.ME;
        return (0, n.jsx)(r.N_, {
            to: b.BVt.CHANNEL(a),
            onClick: t => {
                t.stopPropagation(), u.A.channelListScrollTo(a, e.id)
            },
            children: (0, n.jsx)(m.A, {
                className: O.Ix,
                children: s
            })
        })
    }
    render() {
        let {
            className: e,
            contentClassName: t,
            pinned: i,
            lobbyId: s,
            channel: a,
            quality: r,
            lastPing: o,
            hasVideo: c,
            connectionState: u,
            deaf: h,
            mute: _
        } = this.props;
        return null == a ? null : (0, n.jsx)(C.Ay.Bar, {
            className: l()(e, T.ne, {
                [T.CW]: !i
            }),
            children: (0, n.jsxs)(C.Ay.Content, {
                className: l()(t, T.Qs),
                dynamicSize: !0,
                children: [(0, n.jsx)("div", {
                    className: O.vW,
                    children: (0, n.jsx)(d.YNO, {
                        targetElementRef: this.rtcConnectionStatusRef,
                        renderPopout: () => this.renderPopout(a.id),
                        position: "top",
                        children: e => (0, n.jsx)(d.DUT, {
                            ...e,
                            innerRef: this.rtcConnectionStatusRef,
                            children: (0, n.jsx)(A.A, {
                                channelId: a.id,
                                quality: r,
                                lastPing: o,
                                hasVideo: c,
                                state: u,
                                children: this.renderChannelLink(a)
                            })
                        })
                    })
                }), (0, n.jsxs)(p.A, {
                    grow: 0,
                    children: [(0, n.jsx)(f.A, {
                        tooltipText: _ ? N.intl.string(N.t.YqAjXy) : N.intl.string(N.t.w4m945),
                        icon: _ ? d.z0P : d.cNw,
                        iconForeground: _ ? T.of : null,
                        onClick: this.handleToggleSelfMute
                    }), (0, n.jsx)(f.A, {
                        tooltipText: h ? N.intl.string(N.t["2US872"]) : N.intl.string(N.t.wjcRFX),
                        icon: h ? d.cQT : d.LoC,
                        onClick: this.handleToggleSelfDeaf,
                        iconForeground: h ? T.of : null
                    }), null == s && (0, n.jsx)(f.A, {
                        tooltipText: N.intl.string(N.t["6vrfgt"]),
                        onClick: this.handleDisconnect,
                        icon: d.zWQ
                    })]
                })]
            })
        })
    }
}

function j(e) {
    let {
        context: t,
        lobbyId: i,
        channel: s,
        ...a
    } = e, l = (0, o.bG)([x.A], () => x.A.getGuild(s?.getGuildId())), r = (0, o.bG)([I.A], () => null != s && I.A.hasVideo(s.id)), [d, c] = (0, o.yK)([v.Ay], () => [v.Ay.isSelfMute(t) || v.Ay.isSelfMutedTemporarily(t), v.Ay.isSelfDeaf(t)]), [u, h, _] = (0, o.yK)([S.A], () => [S.A.getConnectionState(i), S.A.getLastPing(i), S.A.getQuality(i)]);
    return (0, n.jsx)(L, {
        ...a,
        context: t,
        lobbyId: i,
        channel: s,
        guild: l,
        hasVideo: r,
        mute: d,
        deaf: c,
        connectionState: u,
        lastPing: h,
        quality: _
    })
}