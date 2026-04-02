/** chunk id: 322223 params = (module,exports,require) **/
n.d(e, {
    A: () => C
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
    h = n(95473);

function C(t) {
    let {
        onDismiss: e
    } = t, C = (0, r.bG)([E.A], () => E.A.getGuildId()), g = (0, r.bG)([u.A], () => null != C ? u.A.getChannelId(C) : null, [C]), m = C ?? null, O = (0, r.bG)([d.A], () => null != m ? d.A.getGuild(m) : null, [m]), {
        shouldShowIncidentActions: S,
        incidentData: y,
        isUnderLockdown: x
    } = (0, T.Li)(m), M = (0, o.fw)(O?.id ?? N.dJq), U = l.useCallback(() => null != O && (0, c.aZ)(O.id), [O]);
    if (null == O || null == y || !S) return null;
    let P = t => {
            t && M && g !== R.VV.MEMBER_SAFETY && U() ? _.default.track(N.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                notice_type: N.kqX.GUILD_RAID_NOTIFICATION,
                guild_id: O.id
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
                    guildId: O.id,
                    analyticsData: t
                })
            })
        },
        j = (0, i.jsx)(a.Ay, {
            className: h.$f,
            guild: O,
            size: a.Ay.Sizes.MINI
        }),
        D = (0, I.ql)(y, O.name);
    if (null != (y.dmsDisabledUntil ?? y.invitesDisabledUntil) && x) return (0, i.jsxs)(s.$Td, {
        className: h.lm,
        color: s.Hv$.NEUTRAL,
        children: [(0, i.jsx)(s.PMB, {
            onClick: e,
            noticeType: N.kqX.GUILD_RAID_NOTIFICATION
        }), j, D, (0, i.jsx)(s.zr9, {
            className: h.hP,
            onClick: () => P(!1),
            children: (0, i.jsxs)("div", {
                className: h.rx,
                children: [(0, i.jsx)(s.XAi, {
                    size: "xs",
                    color: "currentColor"
                }), (0, i.jsx)("span", {
                    children: p.intl.string(p.t["c+7oa7"])
                })]
            })
        })]
    });
    let f = (0, I.P$)(y) ? p.intl.formatToPlainString(p.t.tZTx2E, {
            guildName: O.name
        }) : (0, I.Qm)(y) ? p.intl.formatToPlainString(p.t["1bSmxr"], {
            guildName: O.name
        }) : p.intl.formatToPlainString(p.t.W87xDE, {
            guildName: O.name
        }),
        k = M && g === R.VV.MEMBER_SAFETY;
    return (0, i.jsxs)(s.$Td, {
        className: h.lm,
        color: s.Hv$.WARNING,
        children: [(0, i.jsx)(s.PMB, {
            onClick: e,
            noticeType: N.kqX.GUILD_RAID_NOTIFICATION
        }), j, f, !k && (0, i.jsx)(s.zr9, {
            className: h.hP,
            onClick: () => P(!0),
            children: (0, i.jsx)("div", {
                className: h.rx,
                children: (0, i.jsx)("span", {
                    children: p.intl.string(p.t.zDJDhr)
                })
            })
        })]
    })
}