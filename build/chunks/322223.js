/** Chunk was on web.js **/
/** chunk id: 322223, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => S
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(263063),
    l = n(134413),
    c = n(221950),
    u = n(71393),
    d = n(309010),
    f = n(967198),
    p = n(954571),
    _ = n(585510),
    h = n(834409),
    m = n(903093),
    g = n(652215),
    E = n(746080),
    y = n(985018),
    b = n(858411);

function O(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            O(e, t, n[t])
        })
    }
    return e
}

function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function I(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function S(e) {
    var t, O;
    let {
        onDismiss: A
    } = e, S = (0, a.bG)([f.A], () => f.A.getGuildId()), T = (0, a.bG)([d.A], () => null != S ? d.A.getChannelId(S) : null, [S]), C = null != S ? S : null, N = (0, a.bG)([u.A], () => null != C ? u.A.getGuild(C) : null, [C]), {
        shouldShowIncidentActions: w,
        incidentData: R,
        isUnderLockdown: P
    } = (0, _.Li)(C), D = (0, l.fw)(null != (t = null == N ? void 0 : N.id) ? t : g.dJq), x = i.useCallback(() => null != N && (0, c.aZ)(N.id), [N]);
    if (null == N || null == R || !w) return null;
    let L = e => {
            e && D && T !== E.VV.MEMBER_SAFETY && x() ? p.default.track(g.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                notice_type: g.kqX.GUILD_RAID_NOTIFICATION,
                guild_id: N.id
            }) : (0, s.mMO)(async () => {
                let e = {
                        source: h.Eo.NAGBAR,
                        alertType: (0, m.$5)(R)
                    },
                    {
                        default: t
                    } = await n.e("43233").then(n.bind(n, 671576));
                return n => (0, r.jsx)(t, I(v({}, n), {
                    guildId: N.id,
                    analyticsData: e
                }))
            })
        },
        j = (0, r.jsx)(o.A, {
            className: b.$f,
            guild: N,
            size: o.A.Sizes.MINI
        }),
        M = (0, m.ql)(R, N.name);
    if (null != (null != (O = R.dmsDisabledUntil) ? O : R.invitesDisabledUntil) && P) return (0, r.jsxs)(s.$Td, {
        className: b.lm,
        color: s.Hv$.NEUTRAL,
        children: [(0, r.jsx)(s.PMB, {
            onClick: A,
            noticeType: g.kqX.GUILD_RAID_NOTIFICATION
        }), j, M, (0, r.jsx)(s.zr9, {
            className: b.hP,
            onClick: () => L(!1),
            children: (0, r.jsxs)("div", {
                className: b.rx,
                children: [(0, r.jsx)(s.XAi, {
                    size: "xs",
                    color: "currentColor"
                }), (0, r.jsx)("span", {
                    children: y.intl.string(y.t["c+7oa7"])
                })]
            })
        })]
    });
    let k = (0, m.P$)(R) ? y.intl.formatToPlainString(y.t.tZTx2E, {
            guildName: N.name
        }) : (0, m.Qm)(R) ? y.intl.formatToPlainString(y.t["1bSmxr"], {
            guildName: N.name
        }) : y.intl.formatToPlainString(y.t.W87xDE, {
            guildName: N.name
        }),
        U = D && T === E.VV.MEMBER_SAFETY;
    return (0, r.jsxs)(s.$Td, {
        className: b.lm,
        color: s.Hv$.WARNING,
        children: [(0, r.jsx)(s.PMB, {
            onClick: A,
            noticeType: g.kqX.GUILD_RAID_NOTIFICATION
        }), j, k, !U && (0, r.jsx)(s.zr9, {
            className: b.hP,
            onClick: () => L(!0),
            children: (0, r.jsx)("div", {
                className: b.rx,
                children: (0, r.jsx)("span", {
                    children: y.intl.string(y.t.zDJDhr)
                })
            })
        })]
    })
}