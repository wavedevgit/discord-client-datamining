/** chunk id: 31284 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => D
});
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(936504),
    o = n(311907),
    d = n(397927),
    c = n(827343),
    u = n(951001),
    h = n(956793),
    p = n(47167),
    f = n(235986),
    A = n(42473),
    _ = n(994314),
    g = n(241847),
    m = n(178442),
    x = n(71393),
    E = n(430452),
    y = n(994500),
    v = n(287809),
    S = n(977997),
    C = n(572487),
    I = n(855790),
    N = n(652215),
    T = n(985018),
    b = n(371280),
    O = n(435549);
class j extends s.PureComponent {
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
        return (0, i.jsx)(g.A, {
            channelId: e,
            lobbyId: t,
            isOverlay: !0
        })
    };
    renderChannelLink(e) {
        let {
            guild: t
        } = this.props, n = (0, p.m1)(e, v.default, y.A), s = null != t ? `${n} / ${t.name}` : n, a = null != t ? t.id : N.ME;
        return (0, i.jsx)(r.N_, {
            to: N.BVt.CHANNEL(a),
            onClick: t => {
                t.stopPropagation(), u.A.channelListScrollTo(a, e.id)
            },
            children: (0, i.jsx)(_.A, {
                className: O.Ix,
                children: s
            })
        })
    }
    render() {
        let {
            className: e,
            contentClassName: t,
            pinned: n,
            lobbyId: s,
            channel: a,
            quality: r,
            lastPing: o,
            hasVideo: c,
            connectionState: u,
            deaf: h,
            mute: p
        } = this.props;
        return null == a ? null : (0, i.jsx)(I.Ay.Bar, {
            className: l()(e, b.ne, {
                [b.CW]: !n
            }),
            children: (0, i.jsxs)(I.Ay.Content, {
                className: l()(t, b.Qs),
                dynamicSize: !0,
                children: [(0, i.jsx)("div", {
                    className: O.vW,
                    children: (0, i.jsx)(d.YNO, {
                        targetElementRef: this.rtcConnectionStatusRef,
                        renderPopout: () => this.renderPopout(a.id),
                        position: "top",
                        children: e => (0, i.jsx)(d.DUT, {
                            ...e,
                            innerRef: this.rtcConnectionStatusRef,
                            children: (0, i.jsx)(m.A, {
                                channelId: a.id,
                                quality: r,
                                lastPing: o,
                                hasVideo: c,
                                state: u,
                                children: this.renderChannelLink(a)
                            })
                        })
                    })
                }), (0, i.jsxs)(f.A, {
                    grow: 0,
                    children: [(0, i.jsx)(A.A, {
                        tooltipText: p ? T.intl.string(T.t.YqAjXy) : T.intl.string(T.t.w4m945),
                        icon: p ? d.z0P : d.cNw,
                        iconForeground: p ? b.of : null,
                        onClick: this.handleToggleSelfMute
                    }), (0, i.jsx)(A.A, {
                        tooltipText: h ? T.intl.string(T.t["2US872"]) : T.intl.string(T.t.wjcRFX),
                        icon: h ? d.cQT : d.LoC,
                        onClick: this.handleToggleSelfDeaf,
                        iconForeground: h ? b.of : null
                    }), null == s && (0, i.jsx)(A.A, {
                        tooltipText: T.intl.string(T.t["6vrfgt"]),
                        onClick: this.handleDisconnect,
                        icon: d.zWQ
                    })]
                })]
            })
        })
    }
}

function D(e) {
    let {
        context: t,
        lobbyId: n,
        channel: s,
        ...a
    } = e, l = (0, o.bG)([x.A], () => x.A.getGuild(s?.getGuildId())), r = (0, o.bG)([S.A], () => null != s && S.A.hasVideo(s.id)), [d, c] = (0, o.yK)([E.Ay], () => [E.Ay.isSelfMute(t) || E.Ay.isSelfMutedTemporarily(t), E.Ay.isSelfDeaf(t)]), [u, h, p] = (0, o.yK)([C.A], () => [C.A.getConnectionState(n), C.A.getLastPing(n), C.A.getQuality(n)]);
    return (0, i.jsx)(j, {
        ...a,
        context: t,
        lobbyId: n,
        channel: s,
        guild: l,
        hasVideo: r,
        mute: d,
        deaf: c,
        connectionState: u,
        lastPing: h,
        quality: p
    })
}