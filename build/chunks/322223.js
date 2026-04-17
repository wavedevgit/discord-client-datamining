/** chunk id: 322223 params = (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(263063),
    o = n(134413),
    d = n(221950),
    c = n(71393),
    u = n(309010),
    h = n(967198),
    A = n(954571),
    _ = n(585510),
    m = n(834409),
    p = n(903093),
    g = n(652215),
    f = n(746080),
    E = n(985018),
    x = n(500928);

function I(e) {
    let {
        onDismiss: t
    } = e, I = (0, s.bG)([h.A], () => h.A.getGuildId()), C = (0, s.bG)([u.A], () => null != I ? u.A.getChannelId(I) : null, [I]), N = I ?? null, T = (0, s.bG)([c.A], () => null != N ? c.A.getGuild(N) : null, [N]), {
        shouldShowIncidentActions: S,
        incidentData: b,
        isUnderLockdown: y
    } = (0, _.Li)(N), v = (0, o.fw)(T?.id ?? g.dJq), R = l.useCallback(() => null != T && (0, d.aZ)(T.id), [T]);
    if (null == T || null == b || !S) return null;
    let j = e => {
            e && v && C !== f.VV.MEMBER_SAFETY && R() ? A.default.track(g.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                notice_type: g.kqX.GUILD_RAID_NOTIFICATION,
                guild_id: T.id
            }) : (0, a.mMO)(async () => {
                let e = {
                        source: m.Eo.NAGBAR,
                        alertType: (0, p.$5)(b)
                    },
                    {
                        default: t
                    } = await n.e("43233").then(n.bind(n, 671576));
                return n => (0, i.jsx)(t, {
                    ...n,
                    guildId: T.id,
                    analyticsData: e
                })
            })
        },
        O = (0, i.jsx)(r.Ay, {
            className: x.$f,
            guild: T,
            size: r.Ay.Sizes.MINI
        }),
        L = (0, p.ql)(b, T.name);
    if (null != (b.dmsDisabledUntil ?? b.invitesDisabledUntil) && y) return (0, i.jsxs)(a.$Td, {
        className: x.lm,
        color: a.Hv$.NEUTRAL,
        children: [(0, i.jsx)(a.PMB, {
            onClick: t,
            noticeType: g.kqX.GUILD_RAID_NOTIFICATION
        }), O, L, (0, i.jsx)(a.zr9, {
            className: x.hP,
            onClick: () => j(!1),
            children: (0, i.jsxs)("div", {
                className: x.rx,
                children: [(0, i.jsx)(a.XAi, {
                    size: "xs",
                    color: "currentColor"
                }), (0, i.jsx)("span", {
                    children: E.intl.string(E.t["c+7oa7"])
                })]
            })
        })]
    });
    let M = (0, p.P$)(b) ? E.intl.formatToPlainString(E.t.tZTx2E, {
            guildName: T.name
        }) : (0, p.Qm)(b) ? E.intl.formatToPlainString(E.t["1bSmxr"], {
            guildName: T.name
        }) : E.intl.formatToPlainString(E.t.W87xDE, {
            guildName: T.name
        }),
        D = v && C === f.VV.MEMBER_SAFETY;
    return (0, i.jsxs)(a.$Td, {
        className: x.lm,
        color: a.Hv$.WARNING,
        children: [(0, i.jsx)(a.PMB, {
            onClick: t,
            noticeType: g.kqX.GUILD_RAID_NOTIFICATION
        }), O, M, !D && (0, i.jsx)(a.zr9, {
            className: x.hP,
            onClick: () => j(!0),
            children: (0, i.jsx)("div", {
                className: x.rx,
                children: (0, i.jsx)("span", {
                    children: E.intl.string(E.t.zDJDhr)
                })
            })
        })]
    })
}