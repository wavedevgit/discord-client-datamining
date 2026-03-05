/** chunk id: 346247, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var a = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    r = n(80682),
    u = n(267102),
    c = n(206835),
    d = n(576622),
    A = n(961350),
    o = n(696451),
    g = n(71393),
    p = n(576705),
    G = n(287809),
    f = n(652215),
    h = n(985018);

function b(e) {
    let {
        guildId: t,
        userId: b,
        analyticsLocation: C,
        analyticsLocations: M,
        context: N,
        icon: y
    } = e, E = g.A.getGuild(t), O = A.default.getId(), _ = (0, l.bG)([G.default], () => G.default.getUser(b)), I = (0, l.bG)([o.Ay], () => o.Ay.isGuestOrLurker(t, b), [t, b]);
    (0, l.bG)([p.A], () => p.A.getGuildVersion(t), [t]);
    let k = i.useMemo(() => ({
        [t]: [b]
    }), [t, b]);
    (0, r.Eq)(k, "useChangeIdentityItem");
    let x = N === f.BRT.POPOUT,
        B = (0, c.A)({
            guild: E,
            analyticsLocations: M
        }),
        P = (0, u.aL)();
    if (null == E || x) return null;
    let U = O === b && (p.A.can(f.xBc.CHANGE_NICKNAME, E) || p.A.can(f.xBc.MANAGE_NICKNAMES, E)),
        L = O === b,
        j = p.A.canManageUser(f.xBc.MANAGE_NICKNAMES, b, E);
    if (!(U || j || L) || null == _ || I) return null;
    let m = E.features.has(f.GuildFeatures.HUB) ? h.intl.string(h.t["+MWrWt"]) : h.intl.string(h.t["PKQB/H"]),
        v = L ? m : h.intl.string(h.t.dilOF6);
    return (0, a.jsx)(s.Drp, {
        id: "change-nickname",
        label: v,
        icon: y,
        leadingAccessory: null != y ? {
            type: "icon",
            icon: y
        } : void 0,
        action: () => {
            L ? ((0, d.A)(_.id, _.getAvatarURL(t, 80), {
                guildId: t
            }), B(), P.dispatch(f.jej.POPOUT_CLOSE), (0, s.s7G)()) : (0, s.mMO)(async () => {
                let {
                    default: e
                } = await n.e("48635").then(n.bind(n, 752118));
                return n => (0, a.jsx)(e, {
                    ...n,
                    guildId: t,
                    user: _,
                    analyticsSource: C,
                    analyticsLocations: M
                })
            })
        }
    })
}