/** chunk id: 31284, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => R
}), n(896048);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(758879),
    a = n(311907),
    c = n(397927),
    d = n(827343),
    u = n(951001),
    p = n(956793),
    h = n(47167),
    f = n(235986),
    g = n(42473),
    y = n(994314),
    m = n(241847),
    _ = n(178442),
    b = n(71393),
    A = n(430452),
    O = n(994500),
    v = n(287809),
    E = n(977997),
    x = n(572487),
    S = n(855790),
    j = n(652215),
    C = n(985018),
    I = n(737398),
    w = n(255259);

function N(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            N(e, t, n[t])
        })
    }
    return e
}

function P(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
class D extends r.PureComponent {
    handleDisconnect() {
        p.default.selectVoiceChannel(null)
    }
    renderChannelLink(e) {
        let {
            guild: t
        } = this.props, n = (0, h.m1)(e, v.default, O.A), r = null != t ? "".concat(n, " / ").concat(t.name) : n, s = null != t ? t.id : j.ME;
        return (0, i.jsx)(o.N_, {
            to: j.BVt.CHANNEL(s),
            onClick: t => {
                t.stopPropagation(), u.A.channelListScrollTo(s, e.id)
            },
            children: (0, i.jsx)(y.A, {
                className: w.Ix,
                children: r
            })
        })
    }
    render() {
        let {
            className: e,
            contentClassName: t,
            pinned: n,
            lobbyId: r,
            channel: s,
            quality: o,
            lastPing: a,
            hasVideo: d,
            connectionState: u,
            deaf: p,
            mute: h
        } = this.props;
        return null == s ? null : (0, i.jsx)(S.Ay.Bar, {
            className: l()(e, I.ne, {
                [I.CW]: !n
            }),
            children: (0, i.jsxs)(S.Ay.Content, {
                className: l()(t, I.Qs),
                dynamicSize: !0,
                children: [(0, i.jsx)("div", {
                    className: w.vW,
                    children: (0, i.jsx)(c.YNO, {
                        targetElementRef: this.rtcConnectionStatusRef,
                        renderPopout: () => this.renderPopout(s.id),
                        position: "top",
                        children: e => (0, i.jsx)(c.DUT, P(T({}, e), {
                            innerRef: this.rtcConnectionStatusRef,
                            children: (0, i.jsx)(_.A, {
                                channelId: s.id,
                                quality: o,
                                lastPing: a,
                                hasVideo: d,
                                state: u,
                                children: this.renderChannelLink(s)
                            })
                        }))
                    })
                }), (0, i.jsxs)(f.A, {
                    grow: 0,
                    children: [(0, i.jsx)(g.A, {
                        tooltipText: h ? C.intl.string(C.t.YqAjXy) : C.intl.string(C.t.w4m945),
                        icon: h ? c.z0P : c.cNw,
                        iconForeground: h ? I.of : null,
                        onClick: this.handleToggleSelfMute
                    }), (0, i.jsx)(g.A, {
                        tooltipText: p ? C.intl.string(C.t["2US872"]) : C.intl.string(C.t.wjcRFX),
                        icon: p ? c.cQT : c.LoC,
                        onClick: this.handleToggleSelfDeaf,
                        iconForeground: p ? I.of : null
                    }), null == r && (0, i.jsx)(g.A, {
                        tooltipText: C.intl.string(C.t["6vrfgt"]),
                        onClick: this.handleDisconnect,
                        icon: c.zWQ
                    })]
                })]
            })
        })
    }
    constructor(...e) {
        super(...e), N(this, "rtcConnectionStatusRef", r.createRef()), N(this, "handleToggleSelfMute", () => {
            let {
                context: e
            } = this.props;
            d.A.toggleSelfMute({
                context: e,
                location: "Overlay Controls"
            })
        }), N(this, "handleToggleSelfDeaf", () => {
            let {
                context: e
            } = this.props;
            d.A.toggleSelfDeaf({
                context: e,
                location: "Overlay Controls"
            })
        }), N(this, "renderPopout", e => {
            let {
                lobbyId: t
            } = this.props;
            return (0, i.jsx)(m.A, {
                channelId: e,
                lobbyId: t,
                isOverlay: !0
            })
        })
    }
}

function R(e) {
    let {
        context: t,
        lobbyId: n,
        channel: r
    } = e, s = function(e, t) {
        if (null == e) return {};
        var n, i, r, s = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
            return s
        }
        if (s = function(e, t) {
                if (null == e) return {};
                var n, i, r = {},
                    s = Object.getOwnPropertyNames(e);
                for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                return r
            }(e, t), Object.getOwnPropertySymbols)
            for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
        return s
    }(e, ["context", "lobbyId", "channel"]), l = (0, a.bG)([b.A], () => b.A.getGuild(null == r ? void 0 : r.getGuildId())), o = (0, a.bG)([E.A], () => null != r && E.A.hasVideo(r.id)), [c, d] = (0, a.yK)([A.A], () => [A.A.isSelfMute(t) || A.A.isSelfMutedTemporarily(t), A.A.isSelfDeaf(t)]), [u, p, h] = (0, a.yK)([x.A], () => [x.A.getConnectionState(n), x.A.getLastPing(n), x.A.getQuality(n)]);
    return (0, i.jsx)(D, P(T({}, s), {
        context: t,
        lobbyId: n,
        channel: r,
        guild: l,
        hasVideo: o,
        mute: c,
        deaf: d,
        connectionState: u,
        lastPing: p,
        quality: h
    }))
}