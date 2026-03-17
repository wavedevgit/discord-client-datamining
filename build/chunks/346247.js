/** chunk id: 346247 params = (module,exports,require) **/
t.d(n, {
    A: () => b
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
    C = t(985018);

function b(e) {
    let {
        guildId: n,
        userId: b,
        analyticsLocation: M,
        analyticsLocations: x,
        context: f,
        icon: I
    } = e, S = g.A.getGuild(n), p = c.default.getId(), y = (0, r.bG)([h.default], () => h.default.getUser(b)), G = (0, r.bG)([A.Ay], () => A.Ay.isGuestOrLurker(n, b), [n, b]);
    (0, r.bG)([E.A], () => E.A.getGuildVersion(n), [n]);
    let N = i.useMemo(() => ({
        [n]: [b]
    }), [n, b]);
    (0, d.Eq)(N, "useChangeIdentityItem");
    let O = f === m.BRT.POPOUT,
        T = (0, o.A)({
            guild: S,
            analyticsLocations: x
        }),
        _ = (0, s.aL)();
    if (null == S || O) return null;
    let j = p === b && (E.A.can(m.xBc.CHANGE_NICKNAME, S) || E.A.can(m.xBc.MANAGE_NICKNAMES, S)),
        U = p === b,
        v = E.A.canManageUser(m.xBc.MANAGE_NICKNAMES, b, S);
    if (!(j || v || U) || null == y || G) return null;
    let R = S.features.has(m.GuildFeatures.HUB) ? C.intl.string(C.t["+MWrWt"]) : C.intl.string(C.t["PKQB/H"]),
        B = U ? R : C.intl.string(C.t.dilOF6);
    return (0, l.jsx)(a.Drp, {
        id: "change-nickname",
        label: B,
        icon: I,
        leadingAccessory: null != I ? {
            type: "icon",
            icon: I
        } : void 0,
        action: () => {
            U ? ((0, u.A)(y.id, y.getAvatarURL(n, 80), {
                guildId: n
            }), T(), _.dispatch(m.jej.POPOUT_CLOSE), (0, a.s7G)()) : (0, a.mMO)(async () => {
                let {
                    default: e
                } = await t.e("48635").then(t.bind(t, 752118));
                return t => (0, l.jsx)(e, {
                    ...t,
                    guildId: n,
                    user: y,
                    analyticsSource: M,
                    analyticsLocations: x
                })
            })
        }
    })
}