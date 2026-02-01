/** chunk id: 557534, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => D,
    Jd: () => T,
    O6: () => N,
    gQ: () => P,
    h$: () => I
});
var r, l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    c = n(990078),
    u = n(397927),
    d = n(435183),
    p = n(698441),
    h = n(855687),
    g = n(816662),
    f = n(446600),
    m = n(728321),
    b = n(95701),
    A = n(616356),
    y = n(71393),
    O = n(576705),
    j = n(967198),
    x = n(343360),
    _ = n(652215),
    v = n(985018),
    E = n(728444);

function C(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            C(e, t, n[t])
        })
    }
    return e
}

function I(e, t, n) {
    return null != t && !!t && !(0, x.ws)(n, e.type)
}

function N(e, t) {
    return null == t ? E.fx : e > t ? E.mU : E.TR
}

function T(e) {
    let {
        channel: t,
        disableManageChannels: n,
        tabIndex: r,
        forceShowButtons: i,
        hasChannelInfo: s = !1
    } = e;
    return (0, o.bG)([O.A, j.A], () => n || j.A.getGuildId() === _.YYv || !O.A.can(_.xBc.MANAGE_CHANNELS, t) && !O.A.can(_.xBc.MANAGE_ROLES, t) && !O.A.can(_.xBc.MANAGE_WEBHOOKS, t) || (0, b.tr)(t.type) && !O.A.can(_.xBc.VIEW_CHANNEL, t) || t.isGuildVocal() && !O.A.can(_.xBc.CONNECT, t) || !b.bk.has(t.type) || t.isModeratorReportChannel()) ? null : (0, l.jsx)(c.m, {
        asContainer: !0,
        text: v.intl.string(v.t["3gUsJb"]),
        children: (0, l.jsx)(u.DUT, {
            className: a()(E.Xs, i ? E.Tf : void 0, s ? E.bw : E.UI),
            onClick: function() {
                d.Ay.open(t.id)
            },
            tabIndex: r,
            "aria-label": v.intl.string(v.t["3gUsJb"]),
            children: (0, l.jsx)(u.Zes, {
                size: "xs",
                color: "currentColor",
                className: E.gE
            })
        })
    })
}

function P(e) {
    let {
        channel: t,
        isDefaultChannel: r = !1,
        locked: s,
        tabIndex: d,
        forceShowButtons: g,
        hasChannelInfo: b = !1
    } = e, j = (0, o.bG)([y.A], () => y.A.getGuild(t.getGuildId())), x = (0, o.bG)([f.A], () => f.A.getStageInstanceByChannel(t.id), [t.id]), C = (0, o.bG)([p.Ay], () => p.Ay.getActiveEventByChannel(t.id), [t.id]), I = (0, o.bG)([O.A], () => (0, h.K)(O.A, j, t, x)), N = (0, o.bG)([], () => (null == t ? void 0 : t.type) === _.rbe.GUILD_VOICE ? v.intl.string(v.t["EE+P0H"]) : v.intl.string(v.t["0jeAXt"])), T = i.useRef(null);
    if (s || !I || t.isModeratorReportChannel()) return null;
    let P = (0, l.jsx)(u.Rvf, {
        size: "xs",
        className: E.gE,
        "aria-hidden": !0,
        color: "currentColor"
    });
    return r && (P = (0, l.jsx)(m.A, {
        childRef: T,
        tutorialId: "instant-invite",
        position: "left",
        children: (0, l.jsx)("div", {
            ref: T,
            children: P
        })
    })), (0, l.jsx)(c.m, {
        asContainer: !0,
        text: N,
        children: (0, l.jsx)(u.DUT, {
            className: a()(E.Xs, g ? E.Tf : void 0, b ? E.bw : E.UI),
            onClick: function() {
                if (null != j) {
                    let e = A.A.getAllActiveStreams().filter(e => e.state !== _.XYD.ENDED && e.channelId === t.id);
                    (0, u.mMO)(async () => {
                        let {
                            default: r
                        } = await Promise.all([n.e("43600"), n.e("42821")]).then(n.bind(n, 234355));
                        return n => {
                            var i, s;
                            return (0, l.jsx)(r, (i = S({}, n), s = s = {
                                guild: j,
                                channel: t,
                                streamUserId: 1 === e.length ? e[0].ownerId : null,
                                source: _.PE1.GUILD_CHANNELS,
                                guildScheduledEvent: C
                            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r)
                                }
                                return n
                            })(Object(s)).forEach(function(e) {
                                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
                            }), i))
                        }
                    })
                }
            },
            tabIndex: d,
            "aria-label": N,
            children: P
        })
    })
}

function w(e) {
    let {
        channel: t
    } = e;
    return (0, l.jsx)(c.m, {
        asContainer: !0,
        text: v.intl.string(v.t["ROh4T+"]),
        children: (0, l.jsx)(u.DUT, {
            className: E.Xs,
            onClick: () => {
                (0, g.Ol)(t.guild_id, t.id)
            },
            "aria-label": v.intl.string(v.t["ROh4T+"]),
            children: (0, l.jsx)(u.PGe, {
                size: "xs",
                color: "currentColor",
                className: E.gE
            })
        })
    })
}

function R(e) {
    let {
        channel: t
    } = e;
    return (0, l.jsx)(c.m, {
        asContainer: !0,
        text: v.intl.string(v.t["N2c/Un"]),
        children: (0, l.jsx)(u.DUT, {
            className: E.Xs,
            onClick: () => {
                (0, g.jA)(t.guild_id, t.id, !0, {
                    section: _.JJy.CHANNEL_LIST
                })
            },
            "aria-label": v.intl.string(v.t["N2c/Un"]),
            children: (0, l.jsx)(u.A9s, {
                size: "xs",
                color: "currentColor",
                className: E.gE
            })
        })
    })
}
class D extends(r = i.PureComponent) {
    renderEditButton() {
        return (0, l.jsx)(T, S({}, this.props))
    }
    renderInviteButton() {
        return (0, l.jsx)(P, S({}, this.props))
    }
    renderRemoveSuggestionButton() {
        return (0, l.jsx)(w, S({}, this.props))
    }
    renderAcceptSuggestionButton() {
        return (0, l.jsx)(R, S({}, this.props))
    }
    getClassName() {
        let {
            position: e,
            sortingPosition: t
        } = this.props;
        return N(e, t)
    }
    isDisabled() {
        let {
            channel: e,
            sorting: t,
            sortingType: n
        } = this.props;
        return I(e, t, n)
    }
}
C(D, "defaultProps", {
    isDefaultChannel: !1
})