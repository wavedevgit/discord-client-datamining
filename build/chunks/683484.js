/** chunk id: 683484 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => I
});
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(311907),
    o = n(397927),
    d = n(684013),
    c = n(956793),
    u = n(47167),
    h = n(742589),
    p = n(353428),
    f = n(95701),
    _ = n(470710),
    A = n(734057),
    g = n(71393),
    m = n(994500),
    x = n(309010),
    E = n(745891),
    y = n(855790),
    v = n(985018),
    S = n(140072);
class C extends s.Component {
    state = {
        showOpacitySlider: !1
    };
    componentDidUpdate() {
        this.props.locked && this.state.showOpacitySlider && this.setState({
            showOpacitySlider: !1
        })
    }
    handleClickCall = e => {
        let {
            channel: t,
            userIsInChannelCall: n,
            channelHasActiveCall: i
        } = this.props;
        if (i) n ? c.default.selectVoiceChannel(null) : d.A.callPrivateChannel(t.id, !1);
        else {
            let n = !e.shiftKey;
            d.A.callPrivateChannel(t.id, n)
        }
    };
    handleOpenOpacitySettings = () => {
        let {
            pinned: e
        } = this.props;
        this.setState({
            showOpacitySlider: !0
        }), e && d.A.setPreviewInGameMode(!0)
    };
    handleCloseOpacitySettings = () => {
        let {
            pinned: e
        } = this.props;
        this.setState({
            showOpacitySlider: !1
        }), e && d.A.setPreviewInGameMode(!1)
    };
    handleMouseDown = e => {
        let {
            onMouseDown: t
        } = this.props;
        null != t && t(e)
    };
    renderCallButton() {
        let e, {
            channel: t,
            channelHasActiveCall: n,
            userIsInChannelCall: s,
            isBlocked: a
        } = this.props;
        if (!(0, f.Gw)(t.type)) return null;
        let l = o._jp,
            r = !1;
        return n ? s ? (e = v.intl.string(v.t["4ry6yi"]), l = o.zWQ) : e = v.intl.string(v.t["0D/6Rz"]) : a ? (e = v.intl.string(v.t.PHzjvX), r = !0) : e = v.intl.string(v.t.focH1t), (0, i.jsx)(h.A.Icon, {
            icon: l,
            tooltip: e,
            onClick: this.handleClickCall,
            disabled: r
        })
    }
    renderWidgetButtons = () => {
        let {
            locked: e,
            handlePin: t,
            pinned: n
        } = this.props, a = n ? v.intl.string(v.t.cSu80j) : v.intl.string(v.t.cM8Vnm);
        return e ? null : (0, i.jsxs)(s.Fragment, {
            children: [this.renderCallButton(), n ? (0, i.jsx)(h.A.Icon, {
                icon: o.OHS,
                tooltip: v.intl.string(v.t.OVovCb),
                onClick: this.handleOpenOpacitySettings
            }) : null, (0, i.jsx)(h.A.Icon, {
                icon: n ? o.hl9 : o.qgw,
                tooltip: a,
                selected: n,
                onClick: t
            })]
        })
    };
    render() {
        let {
            className: e,
            draggableClassName: t,
            locked: n,
            channel: s,
            channelName: a,
            guild: r,
            onMouseDown: d,
            onContextMenu: c,
            isPreviewingInGame: u,
            disableDragIndicator: f
        } = this.props, {
            showOpacitySlider: _
        } = this.state;
        return _ && !n ? (0, i.jsxs)(y.Ay.Bar, {
            className: S.dl,
            children: [(0, i.jsx)(E.A, {}), (0, i.jsx)(h.A.Icon, {
                icon: o.PGe,
                onClick: this.handleCloseOpacitySettings,
                tooltip: v.intl.string(v.t.cpT0Cq)
            })]
        }) : (0, i.jsx)(y.Ay.Background, {
            opacityOverride: n || u ? null : 1,
            children: (0, i.jsx)("div", {
                className: l()(e, t, S.N1),
                onMouseDown: d,
                onContextMenu: c,
                children: (0, i.jsxs)(h.A, {
                    guildId: s.guild_id,
                    channelId: s.id,
                    toolbar: this.renderWidgetButtons(),
                    transparent: !0,
                    children: [u || n || f ? null : (0, i.jsx)(o.WP0, {
                        size: "custom",
                        color: "currentColor",
                        className: l()(S.co, t),
                        width: 20,
                        height: 20
                    }), (0, p.zF)({
                        channel: s,
                        channelName: a
                    }), n ? null : (0, p.EP)(s, r)]
                })
            })
        })
    }
}

function I(e) {
    let {
        channel: t,
        ...n
    } = e, s = (0, r.bG)([x.A, A.A], () => {
        let e = x.A.getVoiceChannelId();
        return A.A.getChannel(e)
    }), a = (0, r.bG)([g.A], () => g.A.getGuild(t.guild_id)), l = (0, r.bG)([_.A], () => _.A.isCallActive(t.id)), o = (0, u.Ay)(t), d = (0, r.bG)([m.A], () => !!t.isDM() && null != t.getRecipientId() && m.A.isBlocked(t.getRecipientId()));
    return (0, i.jsx)(C, {
        channel: t,
        channelName: o,
        guild: a,
        channelHasActiveCall: l,
        userIsInChannelCall: null != s && s.id === t.id,
        isBlocked: d,
        ...n
    })
}