/** chunk id: 322223 params = (module,exports,require) **/
n.d(e, {
    A: () => h
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
    E = n(967198),
    _ = n(954571),
    T = n(585510),
    A = n(834409),
    I = n(903093),
    N = n(652215),
    R = n(746080),
    p = n(985018),
    O = n(592528);

function h(t) {
    let {
        onDismiss: e
    } = t, h = (0, r.bG)([E.A], () => E.A.getGuildId()), C = (0, r.bG)([u.A], () => null != h ? u.A.getChannelId(h) : null, [h]), m = h ?? null, g = (0, r.bG)([d.A], () => null != m ? d.A.getGuild(m) : null, [m]), {
        shouldShowIncidentActions: S,
        incidentData: y,
        isUnderLockdown: M
    } = (0, T.Li)(m), P = (0, o.fw)(g?.id ?? N.dJq), x = l.useCallback(() => null != g && (0, c.aZ)(g.id), [g]);
    if (null == g || null == y || !S) return null;
    let D = t => {
            t && P && C !== R.VV.MEMBER_SAFETY && x() ? _.default.track(N.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                notice_type: N.kqX.GUILD_RAID_NOTIFICATION,
                guild_id: g.id
            }) : (0, s.mMO)(async () => {
                let t = {
                        source: A.Eo.NAGBAR,
                        alertType: (0, I.$5)(y)
                    },
                    {
                        default: e
                    } = await n.e("43233").then(n.bind(n, 671576));
                return n => (0, i.jsx)(e, {
                    ...n,
                    guildId: g.id,
                    analyticsData: t
                })
            })
        },
        U = (0, i.jsx)(a.Ay, {
            className: O.$f,
            guild: g,
            size: a.Ay.Sizes.MINI
        }),
        f = (0, I.ql)(y, g.name);
    if (null != (y.dmsDisabledUntil ?? y.invitesDisabledUntil) && M) return (0, i.jsxs)(s.$Td, {
        className: O.lm,
        color: s.Hv$.NEUTRAL,
        children: [(0, i.jsx)(s.PMB, {
            onClick: e,
            noticeType: N.kqX.GUILD_RAID_NOTIFICATION
        }), U, f, (0, i.jsx)(s.zr9, {
            className: O.hP,
            onClick: () => D(!1),
            children: (0, i.jsxs)("div", {
                className: O.rx,
                children: [(0, i.jsx)(s.XAi, {
                    size: "xs",
                    color: "currentColor"
                }), (0, i.jsx)("span", {
                    children: p.intl.string(p.t["c+7oa7"])
                })]
            })
        })]
    });
    let j = (0, I.P$)(y) ? p.intl.formatToPlainString(p.t.tZTx2E, {
            guildName: g.name
        }) : (0, I.Qm)(y) ? p.intl.formatToPlainString(p.t["1bSmxr"], {
            guildName: g.name
        }) : p.intl.formatToPlainString(p.t.W87xDE, {
            guildName: g.name
        }),
        k = P && C === R.VV.MEMBER_SAFETY;
    return (0, i.jsxs)(s.$Td, {
        className: O.lm,
        color: s.Hv$.WARNING,
        children: [(0, i.jsx)(s.PMB, {
            onClick: e,
            noticeType: N.kqX.GUILD_RAID_NOTIFICATION
        }), U, j, !k && (0, i.jsx)(s.zr9, {
            className: O.hP,
            onClick: () => D(!0),
            children: (0, i.jsx)("div", {
                className: O.rx,
                children: (0, i.jsx)("span", {
                    children: p.intl.string(p.t.zDJDhr)
                })
            })
        })]
    })
}