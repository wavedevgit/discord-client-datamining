/** chunk id: 346247 params = (module,exports,require) **/
t.d(n, {
    A: () => C
});
var l = t(627968),
    i = t(64700),
    r = t(311907),
    a = t(397927),
    d = t(80682),
    s = t(267102),
    o = t(206835),
    u = t(576622),
    c = t(961350),
    A = t(696451),
    g = t(71393),
    E = t(576705),
    h = t(287809),
    m = t(652215),
    x = t(985018);

function C(e) {
    let {
        guildId: n,
        userId: C,
        analyticsLocation: b,
        analyticsLocations: f,
        context: M,
        icon: I
    } = e, p = g.A.getGuild(n), S = c.default.getId(), j = (0, r.bG)([h.default], () => h.default.getUser(C)), G = (0, r.bG)([A.Ay], () => A.Ay.isGuestOrLurker(n, C), [n, C]);
    (0, r.bG)([E.A], () => E.A.getGuildVersion(n), [n]);
    let y = i.useMemo(() => ({
        [n]: [C]
    }), [n, C]);
    (0, d.Eq)(y, "useChangeIdentityItem");
    let N = M === m.BRT.POPOUT,
        v = (0, o.A)({
            guild: p,
            analyticsLocations: f
        }),
        O = (0, s.aL)();
    if (null == p || N) return null;
    let T = S === C && (E.A.can(m.xBc.CHANGE_NICKNAME, p) || E.A.can(m.xBc.MANAGE_NICKNAMES, p)),
        _ = S === C,
        U = E.A.canManageUser(m.xBc.MANAGE_NICKNAMES, C, p);
    if (!(T || U || _) || null == j || G) return null;
    let D = p.features.has(m.GuildFeatures.HUB) ? x.intl.string(x.t["+MWrWt"]) : x.intl.string(x.t["PKQB/H"]),
        B = _ ? D : x.intl.string(x.t.dilOF6);
    return (0, l.jsx)(a.Drp, {
        id: "change-nickname",
        label: B,
        icon: I,
        leadingAccessory: null != I ? {
            type: "icon",
            icon: I
        } : void 0,
        action: () => {
            _ ? ((0, u.A)(j.id, j.getAvatarURL(n, 80), {
                guildId: n
            }), v(), O.dispatch(m.jej.POPOUT_CLOSE), (0, a.s7G)()) : (0, a.mMO)(async () => {
                let {
                    default: e
                } = await t.e("48635").then(t.bind(t, 752118));
                return t => (0, l.jsx)(e, {
                    ...t,
                    guildId: n,
                    user: j,
                    analyticsSource: b,
                    analyticsLocations: f
                })
            })
        }
    })
}