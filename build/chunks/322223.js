/** chunk id: 322223 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(397927),
    a = n(263063),
    o = n(134413),
    c = n(221950),
    d = n(71393),
    u = n(309010),
    _ = n(967198),
    E = n(954571),
    T = n(585510),
    A = n(834409),
    I = n(903093),
    N = n(652215),
    p = n(746080),
    R = n(985018),
    S = n(858411);

function m(e) {
    let {
        onDismiss: t
    } = e, m = (0, r.bG)([_.A], () => _.A.getGuildId()), h = (0, r.bG)([u.A], () => null != m ? u.A.getChannelId(m) : null, [m]), g = m ?? null, C = (0, r.bG)([d.A], () => null != g ? d.A.getGuild(g) : null, [g]), {
        shouldShowIncidentActions: O,
        incidentData: y,
        isUnderLockdown: x
    } = (0, T.Li)(g), P = (0, o.fw)(C?.id ?? N.dJq), D = l.useCallback(() => null != C && (0, c.aZ)(C.id), [C]);
    if (null == C || null == y || !O) return null;
    let U = e => {
            e && P && h !== p.VV.MEMBER_SAFETY && D() ? E.default.track(N.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                notice_type: N.kqX.GUILD_RAID_NOTIFICATION,
                guild_id: C.id
            }) : (0, s.mMO)(async () => {
                let e = {
                        source: A.Eo.NAGBAR,
                        alertType: (0, I.$5)(y)
                    },
                    {
                        default: t
                    } = await n.e("43233").then(n.bind(n, 671576));
                return n => (0, i.jsx)(t, {
                    ...n,
                    guildId: C.id,
                    analyticsData: e
                })
            })
        },
        f = (0, i.jsx)(a.Ay, {
            className: S.$f,
            guild: C,
            size: a.Ay.Sizes.MINI
        }),
        M = (0, I.ql)(y, C.name);
    if (null != (y.dmsDisabledUntil ?? y.invitesDisabledUntil) && x) return (0, i.jsxs)(s.$Td, {
        className: S.lm,
        color: s.Hv$.NEUTRAL,
        children: [(0, i.jsx)(s.PMB, {
            onClick: t,
            noticeType: N.kqX.GUILD_RAID_NOTIFICATION
        }), f, M, (0, i.jsx)(s.zr9, {
            className: S.hP,
            onClick: () => U(!1),
            children: (0, i.jsxs)("div", {
                className: S.rx,
                children: [(0, i.jsx)(s.XAi, {
                    size: "xs",
                    color: "currentColor"
                }), (0, i.jsx)("span", {
                    children: R.intl.string(R.t["c+7oa7"])
                })]
            })
        })]
    });
    let L = (0, I.P$)(y) ? R.intl.formatToPlainString(R.t.tZTx2E, {
            guildName: C.name
        }) : (0, I.Qm)(y) ? R.intl.formatToPlainString(R.t["1bSmxr"], {
            guildName: C.name
        }) : R.intl.formatToPlainString(R.t.W87xDE, {
            guildName: C.name
        }),
        j = P && h === p.VV.MEMBER_SAFETY;
    return (0, i.jsxs)(s.$Td, {
        className: S.lm,
        color: s.Hv$.WARNING,
        children: [(0, i.jsx)(s.PMB, {
            onClick: t,
            noticeType: N.kqX.GUILD_RAID_NOTIFICATION
        }), f, L, !j && (0, i.jsx)(s.zr9, {
            className: S.hP,
            onClick: () => U(!0),
            children: (0, i.jsx)("div", {
                className: S.rx,
                children: (0, i.jsx)("span", {
                    children: R.intl.string(R.t.zDJDhr)
                })
            })
        })]
    })
}