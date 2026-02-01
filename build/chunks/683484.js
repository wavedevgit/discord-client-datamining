/** chunk id: 683484, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => j
}), n(896048);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(311907),
    a = n(397927),
    c = n(684013),
    d = n(956793),
    u = n(47167),
    h = n(742589),
    p = n(353428),
    f = n(95701),
    g = n(470710),
    y = n(734057),
    A = n(71393),
    m = n(994500),
    b = n(309010),
    O = n(745891),
    _ = n(855790),
    v = n(985018),
    E = n(803946);

function x(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class S extends r.Component {
    componentDidUpdate() {
        this.props.locked && this.state.showOpacitySlider && this.setState({
            showOpacitySlider: !1
        })
    }
    renderCallButton() {
        let e, {
            channel: t,
            channelHasActiveCall: n,
            userIsInChannelCall: r,
            isBlocked: s
        } = this.props;
        if (!(0, f.Gw)(t.type)) return null;
        let l = a._jp,
            o = !1;
        return n ? r ? (e = v.intl.string(v.t["4ry6yi"]), l = a.zWQ) : e = v.intl.string(v.t["0D/6Rz"]) : s ? (e = v.intl.string(v.t.PHzjvX), o = !0) : e = v.intl.string(v.t.focH1t), (0, i.jsx)(h.A.Icon, {
            icon: l,
            tooltip: e,
            onClick: this.handleClickCall,
            disabled: o
        })
    }
    render() {
        let {
            className: e,
            draggableClassName: t,
            locked: n,
            channel: r,
            channelName: s,
            guild: o,
            onMouseDown: c,
            onContextMenu: d,
            isPreviewingInGame: u,
            disableDragIndicator: f
        } = this.props, {
            showOpacitySlider: g
        } = this.state;
        return g && !n ? (0, i.jsxs)(_.Ay.Bar, {
            className: E.dl,
            children: [(0, i.jsx)(O.A, {}), (0, i.jsx)(h.A.Icon, {
                icon: a.PGe,
                onClick: this.handleCloseOpacitySettings,
                tooltip: v.intl.string(v.t.cpT0Cq)
            })]
        }) : (0, i.jsx)(_.Ay.Background, {
            opacityOverride: n || u ? null : 1,
            children: (0, i.jsx)("div", {
                className: l()(e, t, E.N1),
                onMouseDown: c,
                onContextMenu: d,
                children: (0, i.jsxs)(h.A, {
                    guildId: r.guild_id,
                    channelId: r.id,
                    toolbar: this.renderWidgetButtons(),
                    transparent: !0,
                    children: [u || n || f ? null : (0, i.jsx)(a.WP0, {
                        size: "custom",
                        color: "currentColor",
                        className: l()(E.co, t),
                        width: 20,
                        height: 20
                    }), (0, p.zF)({
                        channel: r,
                        channelName: s
                    }), n ? null : (0, p.EP)(r, o)]
                })
            })
        })
    }
    constructor(...e) {
        super(...e), x(this, "state", {
            showOpacitySlider: !1
        }), x(this, "handleClickCall", e => {
            let {
                channel: t,
                userIsInChannelCall: n,
                channelHasActiveCall: i
            } = this.props;
            if (i) n ? d.default.selectVoiceChannel(null) : c.A.callPrivateChannel(t.id, !1);
            else {
                let n = !i && !e.shiftKey;
                c.A.callPrivateChannel(t.id, n)
            }
        }), x(this, "handleOpenOpacitySettings", () => {
            let {
                pinned: e
            } = this.props;
            this.setState({
                showOpacitySlider: !0
            }), e && c.A.setPreviewInGameMode(!0)
        }), x(this, "handleCloseOpacitySettings", () => {
            let {
                pinned: e
            } = this.props;
            this.setState({
                showOpacitySlider: !1
            }), e && c.A.setPreviewInGameMode(!1)
        }), x(this, "handleMouseDown", e => {
            let {
                onMouseDown: t
            } = this.props;
            null != t && t(e)
        }), x(this, "renderWidgetButtons", () => {
            let {
                locked: e,
                handlePin: t,
                pinned: n
            } = this.props, s = n ? v.intl.string(v.t.cSu80j) : v.intl.string(v.t.cM8Vnm);
            return e ? null : (0, i.jsxs)(r.Fragment, {
                children: [this.renderCallButton(), n ? (0, i.jsx)(h.A.Icon, {
                    icon: a.OHS,
                    tooltip: v.intl.string(v.t.OVovCb),
                    onClick: this.handleOpenOpacitySettings
                }) : null, (0, i.jsx)(h.A.Icon, {
                    icon: n ? a.hl9 : a.qgw,
                    tooltip: s,
                    selected: n,
                    onClick: t
                })]
            })
        })
    }
}

function j(e) {
    let {
        channel: t
    } = e, n = function(e, t) {
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
    }(e, ["channel"]), r = (0, o.bG)([b.A, y.A], () => {
        let e = b.A.getVoiceChannelId();
        return y.A.getChannel(e)
    }), s = (0, o.bG)([A.A], () => A.A.getGuild(t.guild_id)), l = (0, o.bG)([g.A], () => g.A.isCallActive(t.id)), a = (0, u.Ay)(t), c = (0, o.bG)([m.A], () => !!t.isDM() && null != t.getRecipientId() && m.A.isBlocked(t.getRecipientId()));
    return (0, i.jsx)(S, function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
                x(e, t, n[t])
            })
        }
        return e
    }({
        channel: t,
        channelName: a,
        guild: s,
        channelHasActiveCall: l,
        userIsInChannelCall: null != r && r.id === t.id,
        isBlocked: c
    }, n))
}