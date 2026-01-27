/** Chunk was on 41727 **/
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
    f = n(816662),
    g = n(446600),
    m = n(728321),
    b = n(95701),
    A = n(616356),
    y = n(71393),
    _ = n(576705),
    O = n(967198),
    j = n(343360),
    v = n(652215),
    x = n(985018),
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
    return null != t && !!t && !(0, j.ws)(n, e.type)
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
    return (0, o.bG)([_.A, O.A], () => n || O.A.getGuildId() === v.YYv || !_.A.can(v.xBc.MANAGE_CHANNELS, t) && !_.A.can(v.xBc.MANAGE_ROLES, t) && !_.A.can(v.xBc.MANAGE_WEBHOOKS, t) || (0, b.tr)(t.type) && !_.A.can(v.xBc.VIEW_CHANNEL, t) || t.isGuildVocal() && !_.A.can(v.xBc.CONNECT, t) || !b.bk.has(t.type) || t.isModeratorReportChannel()) ? null : (0, l.jsx)(c.m, {
        asContainer: !0,
        text: x.intl.string(x.t["3gUsJb"]),
        children: (0, l.jsx)(u.DUT, {
            className: a()(E.Xs, i ? E.Tf : void 0, s ? E.bw : E.UI),
            onClick: function() {
                d.Ay.open(t.id)
            },
            tabIndex: r,
            "aria-label": x.intl.string(x.t["3gUsJb"]),
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
        forceShowButtons: f,
        hasChannelInfo: b = !1
    } = e, O = (0, o.bG)([y.A], () => y.A.getGuild(t.getGuildId())), j = (0, o.bG)([g.A], () => g.A.getStageInstanceByChannel(t.id), [t.id]), C = (0, o.bG)([p.Ay], () => p.Ay.getActiveEventByChannel(t.id), [t.id]), I = (0, o.bG)([_.A], () => (0, h.K)(_.A, O, t, j)), N = (0, o.bG)([], () => (null == t ? void 0 : t.type) === v.rbe.GUILD_VOICE ? x.intl.string(x.t["EE+P0H"]) : x.intl.string(x.t["0jeAXt"])), T = i.useRef(null);
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
            className: a()(E.Xs, f ? E.Tf : void 0, b ? E.bw : E.UI),
            onClick: function() {
                if (null != O) {
                    let e = A.A.getAllActiveStreams().filter(e => e.state !== v.XYD.ENDED && e.channelId === t.id);
                    (0, u.mMO)(async () => {
                        let {
                            default: r
                        } = await Promise.all([n.e("43600"), n.e("42821")]).then(n.bind(n, 234355));
                        return n => {
                            var i, s;
                            return (0, l.jsx)(r, (i = S({}, n), s = s = {
                                guild: O,
                                channel: t,
                                streamUserId: 1 === e.length ? e[0].ownerId : null,
                                source: v.PE1.GUILD_CHANNELS,
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
        text: x.intl.string(x.t["ROh4T+"]),
        children: (0, l.jsx)(u.DUT, {
            className: E.Xs,
            onClick: () => {
                (0, f.Ol)(t.guild_id, t.id)
            },
            "aria-label": x.intl.string(x.t["ROh4T+"]),
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
        text: x.intl.string(x.t["N2c/Un"]),
        children: (0, l.jsx)(u.DUT, {
            className: E.Xs,
            onClick: () => {
                (0, f.jA)(t.guild_id, t.id, !0, {
                    section: v.JJy.CHANNEL_LIST
                })
            },
            "aria-label": x.intl.string(x.t["N2c/Un"]),
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