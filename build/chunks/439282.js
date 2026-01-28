/** Chunk was on 78528 **/
/** chunk id: 439282, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => R
}), n(896048), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    c = n(80682),
    u = n(685399),
    d = n(833349),
    p = n(765379),
    h = n(713654),
    f = n(565688),
    g = n(93879),
    m = n(961350),
    b = n(71393),
    A = n(576705),
    y = n(290863),
    _ = n(461213),
    O = n(977997),
    j = n(403362),
    v = n(246084),
    x = n(667936),
    E = n(879349),
    C = n(884415),
    S = n(611330),
    I = n(652215),
    N = n(188275),
    T = n(985018),
    P = n(439792),
    w = n(335419);

function R(e) {
    var t, i;
    let s, {
        channel: h,
        guild: b,
        onAction: A,
        voiceStates: O,
        isChannelSelected: v,
        shouldShowSettingNudge: E
    } = e;
    s = l.useMemo(() => {
        var e;
        return null == O || O.length > 50 ? {} : {
            [h.getGuildId()]: null != (e = O.map(e => {
                let {
                    user: t
                } = e;
                return t.id
            })) ? e : []
        }
    }, [h, O]), (0, c.E)(s, "VoiceChannelActivities");
    let C = (0, u.Ay)(h),
        S = Array.from((0, u.Rz)(C).values()),
        w = null != (t = null == O ? void 0 : O.filter(j.Vq)) ? t : [],
        R = () => e => [I.$pd.PLAYING, I.$pd.WATCHING].includes(e.type) && (null != e.assets || null != e.state || null != e.details || null != e.party) || e.type === I.$pd.LISTENING,
        M = (0, a.bG)([_.A, y.A, m.default], () => {
            let e = {};
            return w.forEach(t => {
                let n = t.user.id === m.default.getId() ? _.A.findActivity(R(), !0) : y.A.findActivity(t.user.id, R());
                if (null != n && !(0, p.A)(n)) {
                    var r, l, i, s;
                    let a = "".concat(null != (r = n.application_id) ? r : "", ":").concat(null != (l = null == (s = n.party) ? void 0 : s.id) ? l : t.user.id),
                        o = null != (i = e[a]) ? i : {
                            members: [],
                            activity: n
                        };
                    o.members.push(t), (0, d.A)(o.activity, I.jUm.JOIN) || (o.activity = n), e[a] = o
                }
            }), Object.values(e)
        }, [w], a.My),
        L = (0, f.m)({
            location: "voice_channel_activities"
        });
    return M.length + S.length === 0 ? null : (0, r.jsxs)(o.HOs, {
        className: P.kL,
        children: [(0, r.jsx)(D, {
            channel: h,
            isChannelSelected: v,
            voiceStatesCount: null != (i = null == O ? void 0 : O.length) ? i : 0
        }), (0, r.jsx)("div", {
            className: P.zN
        }), S.map((e, t) => {
            var n;
            return (0, r.jsx)(x.A, {
                embeddedApp: e,
                presenceActivity: null != (n = e.presenceActivity) ? n : void 0,
                channel: h,
                onAction: A
            }, t)
        }), M.map((e, t) => {
            let {
                members: n,
                activity: i
            } = e;
            return L && null != i.application_id && N.sQ.has(i.application_id) ? (0, r.jsxs)(l.Fragment, {
                children: [(0, r.jsx)(x.A, {
                    presenceActivity: i,
                    channel: h,
                    members: n,
                    onAction: A
                }), (0, r.jsx)(g.A, {
                    className: P.L,
                    applicationId: i.application_id,
                    userIds: n.map(e => e.user.id),
                    location: "voice_channel",
                    guildId: h.guild_id,
                    channelId: h.id
                })]
            }, "".concat(t, "-with-gifting-breadcrumb")) : (0, r.jsx)(x.A, {
                presenceActivity: i,
                channel: h,
                members: n,
                onAction: A
            }, t)
        }), E && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
                className: P.zN
            }), (0, r.jsx)("div", {
                className: P.Vo,
                children: (0, r.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    tag: "span",
                    children: T.intl.format(T.t.ePyoY2, {
                        onClick: () => {
                            (0, o.mMO)(async () => {
                                let {
                                    default: e
                                } = await n.e("62026").then(n.bind(n, 585265));
                                return t => {
                                    var n, l;
                                    return (0, r.jsx)(e, (n = function(e) {
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
                                    }({}, t), l = l = {
                                        guild: b
                                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r)
                                        }
                                        return n
                                    })(Object(l)).forEach(function(e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
                                    }), n))
                                }
                            })
                        }
                    })
                })
            })]
        })]
    })
}

function D(e) {
    let {
        channel: t,
        isChannelSelected: n,
        voiceStatesCount: l
    } = e, i = (0, a.bG)([A.A], () => !A.A.can(I.xBc.CONNECT, t)), o = (0, a.bG)([O.A], () => O.A.hasVideo(t.id)), c = (0, v.Ay)({
        channel: t,
        locked: i,
        video: o,
        selected: n
    }), u = (0, a.bG)([b.A], () => b.A.getGuild(t.guild_id));
    return null == (0, h.gU)(t, u) ? null : (0, r.jsxs)("div", {
        className: s()(P.oT, w.oT),
        children: [(0, r.jsx)(E.A, {
            channel: t
        }), c ? (0, r.jsx)(C.A, {
            userCount: l,
            video: o,
            channel: t
        }) : (0, r.jsx)(S.A, {
            userCount: l
        })]
    })
}