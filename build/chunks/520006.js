/** Chunk was on 97492 **/
/** chunk id: 520006, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
});
var r = n(627968);
n(64700);
var l = n(284009),
    i = n.n(l),
    s = n(311907),
    a = n(397927),
    o = n(298990),
    c = n(688810),
    u = n(384059),
    d = n(267102),
    p = n(71393),
    h = n(375492),
    f = n(576705),
    g = n(709562),
    m = n(652215),
    b = n(985018);

function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function y(e) {
    let {
        applicationId: t,
        stream: l,
        channel: y,
        exitFullScreen: _,
        appContext: O,
        analyticsLocation: j,
        guildScheduledEvent: v,
        shouldPrioritizeGroupPlusIcon: x = !1,
        isRichPresenceInvite: E = !1,
        iconClassName: C,
        look: S,
        size: I,
        buttonText: N,
        color: T
    } = e, P = function(e, t) {
        if (null == e) return {};
        var n, r, l, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var n, r, l = {},
                    i = Object.getOwnPropertyNames(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
    }(e, ["applicationId", "stream", "channel", "exitFullScreen", "appContext", "analyticsLocation", "guildScheduledEvent", "shouldPrioritizeGroupPlusIcon", "isRichPresenceInvite", "iconClassName", "look", "size", "buttonText", "color"]), w = (0, d.Us)(), {
        parentAnalyticsLocation: R
    } = (0, c.Ay)(), D = null == y ? void 0 : y.getGuildId(), M = (0, s.bG)([p.A], () => null != D ? p.A.getGuild(D) : null, [D]), L = (0, s.bG)([h.A], () => null != t ? h.A.getApplicationActivity(t) : void 0), k = null == t || x ? a.DpX : a.dCJ, G = null != t ? b.intl.string(b.t["OzOM/q"]) : b.intl.string(b.t["6F9ivu"]);
    return null != L && E ? (0, r.jsx)(g.A, {
        onClick: () => {
            null != R && (0, u.X)(R, u.O.INVITE), o.qf(L, !1, w)
        },
        iconComponent: k,
        label: G,
        iconClassName: C,
        look: S,
        size: I,
        buttonText: N,
        color: null != T ? T : void 0
    }) : null != M && null != y && f.A.can(m.xBc.CREATE_INSTANT_INVITE, y) ? (0, r.jsx)(g.A, A({
        onClick: () => {
            i()(null != M, "guild cannot be null"), i()(null != y, "channel cannot be null"), null != R && (0, u.X)(R, u.O.INVITE),
                function(e) {
                    let {
                        guild: t,
                        channel: l,
                        streamUserId: i,
                        applicationId: s,
                        appContext: o,
                        exitFullScreen: c,
                        analyticsLocation: u,
                        guildScheduledEvent: d
                    } = e;
                    null == c || c(), (0, a.mMO)(async () => {
                        let {
                            default: e
                        } = await Promise.all([n.e("43600"), n.e("28136"), n.e("42821")]).then(n.bind(n, 234355));
                        return n => {
                            var a, o;
                            return (0, r.jsx)(e, (a = A({}, n), o = o = {
                                guild: t,
                                channel: l,
                                streamUserId: i,
                                applicationId: s,
                                analyticsLocation: u,
                                source: l.isGuildStageVoice() ? m.PE1.STAGE_CHANNEL : m.PE1.STREAM_INVITE,
                                guildScheduledEvent: d
                            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r)
                                }
                                return n
                            })(Object(o)).forEach(function(e) {
                                Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e))
                            }), a))
                        }
                    }, {
                        modalKey: "stream-invite-modal",
                        contextKey: o === m.BRT.POPOUT ? a.KX8 : a.SYi
                    })
                }({
                    guild: M,
                    channel: y,
                    streamUserId: null == l ? void 0 : l.ownerId,
                    applicationId: t,
                    appContext: null != O ? O : w,
                    exitFullScreen: _,
                    analyticsLocation: j,
                    guildScheduledEvent: v
                })
        },
        iconComponent: k,
        label: G,
        iconClassName: C,
        look: S,
        size: I,
        color: T,
        buttonText: N
    }, P)) : null
}