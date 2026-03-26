/** chunk id: 322223 params = (module,exports,require) **/
n.d(t, {
    A: () => S
});
var i = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(397927),
    a = n(263063),
    o = n(134413),
    c = n(221950),
    u = n(71393),
    d = n(309010),
    _ = n(967198),
    E = n(954571),
    A = n(585510),
    T = n(834409),
    I = n(903093),
    N = n(652215),
    p = n(746080),
    h = n(985018),
    m = n(858411);

function S(e) {
    let {
        onDismiss: t
    } = e, S = (0, r.bG)([_.A], () => _.A.getGuildId()), C = (0, r.bG)([d.A], () => null != S ? d.A.getChannelId(S) : null, [S]), R = S ?? null, g = (0, r.bG)([u.A], () => null != R ? u.A.getGuild(R) : null, [R]), {
        shouldShowIncidentActions: O,
        incidentData: y,
        isUnderLockdown: P
    } = (0, A.Li)(R), x = (0, o.fw)(g?.id ?? N.dJq), f = l.useCallback(() => null != g && (0, c.aZ)(g.id), [g]);
    if (null == g || null == y || !O) return null;
    let D = e => {
            e && x && C !== p.VV.MEMBER_SAFETY && f() ? E.default.track(N.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                notice_type: N.kqX.GUILD_RAID_NOTIFICATION,
                guild_id: g.id
            }) : (0, s.mMO)(async () => {
                let e = {
                        source: T.Eo.NAGBAR,
                        alertType: (0, I.$5)(y)
                    },
                    {
                        default: t
                    } = await n.e("43233").then(n.bind(n, 671576));
                return n => (0, i.jsx)(t, {
                    ...n,
                    guildId: g.id,
                    analyticsData: e
                })
            })
        },
        L = (0, i.jsx)(a.Ay, {
            className: m.$f,
            guild: g,
            size: a.Ay.Sizes.MINI
        }),
        U = (0, I.ql)(y, g.name);
    if (null != (y.dmsDisabledUntil ?? y.invitesDisabledUntil) && P) return (0, i.jsxs)(s.$Td, {
        className: m.lm,
        color: s.Hv$.NEUTRAL,
        children: [(0, i.jsx)(s.PMB, {
            onClick: t,
            noticeType: N.kqX.GUILD_RAID_NOTIFICATION
        }), L, U, (0, i.jsx)(s.zr9, {
            className: m.hP,
            onClick: () => D(!1),
            children: (0, i.jsxs)("div", {
                className: m.rx,
                children: [(0, i.jsx)(s.XAi, {
                    size: "xs",
                    color: "currentColor"
                }), (0, i.jsx)("span", {
                    children: h.intl.string(h.t["c+7oa7"])
                })]
            })
        })]
    });
    let M = (0, I.P$)(y) ? h.intl.formatToPlainString(h.t.tZTx2E, {
            guildName: g.name
        }) : (0, I.Qm)(y) ? h.intl.formatToPlainString(h.t["1bSmxr"], {
            guildName: g.name
        }) : h.intl.formatToPlainString(h.t.W87xDE, {
            guildName: g.name
        }),
        j = x && C === p.VV.MEMBER_SAFETY;
    return (0, i.jsxs)(s.$Td, {
        className: m.lm,
        color: s.Hv$.WARNING,
        children: [(0, i.jsx)(s.PMB, {
            onClick: t,
            noticeType: N.kqX.GUILD_RAID_NOTIFICATION
        }), L, M, !j && (0, i.jsx)(s.zr9, {
            className: m.hP,
            onClick: () => D(!0),
            children: (0, i.jsx)("div", {
                className: m.rx,
                children: (0, i.jsx)("span", {
                    children: h.intl.string(h.t.zDJDhr)
                })
            })
        })]
    })
}