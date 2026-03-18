/** chunk id: 322223 params = (module,exports,require) **/
"use strict";
n.d(e, {
    A: () => h
});
var i = n(627968),
    r = n(64700),
    s = n(311907),
    l = n(397927),
    a = n(263063),
    o = n(134413),
    c = n(221950),
    u = n(71393),
    d = n(309010),
    E = n(967198),
    _ = n(954571),
    T = n(585510),
    A = n(834409),
    I = n(903093),
    N = n(652215),
    p = n(746080),
    R = n(985018),
    g = n(858411);

function h(t) {
    let {
        onDismiss: e
    } = t, h = (0, s.bG)([E.A], () => E.A.getGuildId()), m = (0, s.bG)([d.A], () => null != h ? d.A.getChannelId(h) : null, [h]), O = h ?? null, C = (0, s.bG)([u.A], () => null != O ? u.A.getGuild(O) : null, [O]), {
        shouldShowIncidentActions: S,
        incidentData: y,
        isUnderLockdown: x
    } = (0, T.Li)(O), P = (0, o.fw)(C?.id ?? N.dJq), U = r.useCallback(() => null != C && (0, c.aZ)(C.id), [C]);
    if (null == C || null == y || !S) return null;
    let M = t => {
            t && P && m !== p.VV.MEMBER_SAFETY && U() ? _.default.track(N.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                notice_type: N.kqX.GUILD_RAID_NOTIFICATION,
                guild_id: C.id
            }) : (0, l.mMO)(async () => {
                let t = {
                        source: A.Eo.NAGBAR,
                        alertType: (0, I.$5)(y)
                    },
                    {
                        default: e
                    } = await n.e("43233").then(n.bind(n, 671576));
                return n => (0, i.jsx)(e, {
                    ...n,
                    guildId: C.id,
                    analyticsData: t
                })
            })
        },
        f = (0, i.jsx)(a.Ay, {
            className: g.$f,
            guild: C,
            size: a.Ay.Sizes.MINI
        }),
        D = (0, I.ql)(y, C.name);
    if (null != (y.dmsDisabledUntil ?? y.invitesDisabledUntil) && x) return (0, i.jsxs)(l.$Td, {
        className: g.lm,
        color: l.Hv$.NEUTRAL,
        children: [(0, i.jsx)(l.PMB, {
            onClick: e,
            noticeType: N.kqX.GUILD_RAID_NOTIFICATION
        }), f, D, (0, i.jsx)(l.zr9, {
            className: g.hP,
            onClick: () => M(!1),
            children: (0, i.jsxs)("div", {
                className: g.rx,
                children: [(0, i.jsx)(l.XAi, {
                    size: "xs",
                    color: "currentColor"
                }), (0, i.jsx)("span", {
                    children: R.intl.string(R.t["c+7oa7"])
                })]
            })
        })]
    });
    let j = (0, I.P$)(y) ? R.intl.formatToPlainString(R.t.tZTx2E, {
            guildName: C.name
        }) : (0, I.Qm)(y) ? R.intl.formatToPlainString(R.t["1bSmxr"], {
            guildName: C.name
        }) : R.intl.formatToPlainString(R.t.W87xDE, {
            guildName: C.name
        }),
        L = P && m === p.VV.MEMBER_SAFETY;
    return (0, i.jsxs)(l.$Td, {
        className: g.lm,
        color: l.Hv$.WARNING,
        children: [(0, i.jsx)(l.PMB, {
            onClick: e,
            noticeType: N.kqX.GUILD_RAID_NOTIFICATION
        }), f, j, !L && (0, i.jsx)(l.zr9, {
            className: g.hP,
            onClick: () => M(!0),
            children: (0, i.jsx)("div", {
                className: g.rx,
                children: (0, i.jsx)("span", {
                    children: R.intl.string(R.t.zDJDhr)
                })
            })
        })]
    })
}