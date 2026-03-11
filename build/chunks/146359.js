/** chunk id: 146359 params = (module,exports,require) **/
t.d(n, {
    A: () => b
});
var l = t(627968),
    i = t(64700),
    r = t(311907),
    a = t(397927),
    d = t(80682),
    s = t(660273),
    u = t(351001),
    o = t(867455),
    c = t(406704),
    A = t(734057),
    g = t(71393),
    m = t(576705),
    f = t(287809),
    x = t(985018);

function b(e, n, b) {
    let p = i.useMemo(() => ({
        [n]: [e.id]
    }), [n, e.id]);
    (0, d.Eq)(p, "useThreadAdminActionItems"), (0, r.bG)([m.A], () => m.A.getGuildVersion(n), [n]);
    let h = (0, r.bG)([A.A], () => A.A.getChannel(b)),
        E = (0, r.bG)([g.A], () => g.A.getGuild(n), [n]),
        C = (0, r.bG)([f.default], () => f.default.getCurrentUser()),
        _ = (0, s.A)(h, "Context Menu"),
        N = (0, c.qi)(h?.id);
    return C?.id === e.id ? [_] : null == E || null == h || null == C ? [] : [N ? (0, l.jsx)(a.Drp, {
        id: "remove",
        label: h.isForumPost() ? x.intl.formatToPlainString(x.t.v2KNNx, {
            user: e.username
        }) : x.intl.formatToPlainString(x.t["27xWaT"], {
            user: e.username
        }),
        color: "danger",
        action: () => o.A.removeMember(h.id, e.id, "Context Menu")
    }) : null, (0, u.L7)(e, E) ? (0, l.jsx)(a.Drp, {
        id: "kick",
        label: N ? x.intl.formatToPlainString(x.t["1Ie87p"], {
            user: e.username
        }) : x.intl.formatToPlainString(x.t["9l/iTS"], {
            user: e.username
        }),
        color: "danger",
        action: () => (0, a.mMO)(async () => {
            let {
                default: n
            } = await t.e("62624").then(t.bind(t, 324785));
            return t => (0, l.jsx)(n, {
                ...t,
                guildId: E.id,
                user: e
            })
        })
    }) : null, (0, u.EZ)(e, E) ? (0, l.jsx)(a.Drp, {
        id: "ban",
        label: N ? x.intl.formatToPlainString(x.t.i62APf, {
            user: e.username
        }) : x.intl.formatToPlainString(x.t.WnpUBi, {
            user: e.username
        }),
        color: "danger",
        action: () => (0, a.mMO)(async () => {
            let {
                default: n
            } = await t.e("80123").then(t.bind(t, 333179));
            return t => (0, l.jsx)(n, {
                ...t,
                guildId: E.id,
                user: e
            })
        })
    }) : null]
}