/** Chunk was on 73734 **/
/** chunk id: 322223, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    o = n(263063),
    s = n(134413),
    c = n(221950),
    u = n(71393),
    E = n(309010),
    d = n(967198),
    _ = n(954571),
    A = n(585510),
    T = n(834409),
    I = n(903093),
    O = n(652215),
    N = n(746080),
    p = n(985018),
    R = n(858411);

function S(e) {
    var t, S;
    let {
        onDismiss: P
    } = e, y = (0, l.bG)([d.A], () => d.A.getGuildId()), m = (0, l.bG)([E.A], () => null != y ? E.A.getChannelId(y) : null, [y]), f = null != y ? y : null, C = (0, l.bG)([u.A], () => null != f ? u.A.getGuild(f) : null, [f]), {
        shouldShowIncidentActions: g,
        incidentData: D,
        isUnderLockdown: h
    } = (0, A.Li)(f), U = (0, s.fw)(null != (t = null == C ? void 0 : C.id) ? t : O.dJq), b = i.useCallback(() => null != C && (0, c.aZ)(C.id), [C]);
    if (null == C || null == D || !g) return null;
    let M = e => {
            e && U && m !== N.VV.MEMBER_SAFETY && b() ? _.default.track(O.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                notice_type: O.kqX.GUILD_RAID_NOTIFICATION,
                guild_id: C.id
            }) : (0, a.mMO)(async () => {
                let e = {
                        source: T.Eo.NAGBAR,
                        alertType: (0, I.$5)(D)
                    },
                    {
                        default: t
                    } = await n.e("43233").then(n.bind(n, 671576));
                return n => {
                    var i, l;
                    return (0, r.jsx)(t, (i = function(e) {
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
                    }({}, n), l = l = {
                        guildId: C.id,
                        analyticsData: e
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(l)).forEach(function(e) {
                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
                    }), i))
                }
            })
        },
        j = (0, r.jsx)(o.A, {
            className: R.$f,
            guild: C,
            size: o.A.Sizes.MINI
        }),
        v = (0, I.ql)(D, C.name);
    if (null != (null != (S = D.dmsDisabledUntil) ? S : D.invitesDisabledUntil) && h) return (0, r.jsxs)(a.$Td, {
        className: R.lm,
        color: a.Hv$.NEUTRAL,
        children: [(0, r.jsx)(a.PMB, {
            onClick: P,
            noticeType: O.kqX.GUILD_RAID_NOTIFICATION
        }), j, v, (0, r.jsx)(a.zr9, {
            className: R.hP,
            onClick: () => M(!1),
            children: (0, r.jsxs)("div", {
                className: R.rx,
                children: [(0, r.jsx)(a.XAi, {
                    size: "xs",
                    color: "currentColor"
                }), (0, r.jsx)("span", {
                    children: p.intl.string(p.t["c+7oa7"])
                })]
            })
        })]
    });
    let k = (0, I.P$)(D) ? p.intl.formatToPlainString(p.t.tZTx2E, {
            guildName: C.name
        }) : (0, I.Qm)(D) ? p.intl.formatToPlainString(p.t["1bSmxr"], {
            guildName: C.name
        }) : p.intl.formatToPlainString(p.t.W87xDE, {
            guildName: C.name
        }),
        L = U && m === N.VV.MEMBER_SAFETY;
    return (0, r.jsxs)(a.$Td, {
        className: R.lm,
        color: a.Hv$.WARNING,
        children: [(0, r.jsx)(a.PMB, {
            onClick: P,
            noticeType: O.kqX.GUILD_RAID_NOTIFICATION
        }), j, k, !L && (0, r.jsx)(a.zr9, {
            className: R.hP,
            onClick: () => M(!0),
            children: (0, r.jsx)("div", {
                className: R.rx,
                children: (0, r.jsx)("span", {
                    children: p.intl.string(p.t.zDJDhr)
                })
            })
        })]
    })
}