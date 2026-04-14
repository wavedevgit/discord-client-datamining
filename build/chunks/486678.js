/** chunk id: 486678 params = (module,exports,require) **/
n.d(l, {
    A: () => m
});
var t = n(311907),
    i = n(397927),
    s = n(919395),
    a = n(101058),
    r = n(836602),
    o = n(996988),
    d = n(985253);
let c = (0, i.FT9)(d.T[o.d.MODAL_V2].avatarSize),
    u = {
        pendingThemeColors: void 0,
        avatarDecorationOverride: void 0,
        avatarOverride: void 0
    };

function m(e) {
    let {
        user: l,
        guildId: n,
        allowEditingInModal: i
    } = e;
    return (0, t.cf)([r.A], () => {
        if (!i) return u;
        let {
            pendingThemeColors: e,
            pendingAvatarDecoration: t,
            pendingAvatar: o
        } = r.A.getPendingChanges(n);
        return {
            pendingThemeColors: e,
            avatarDecorationOverride: void 0 === t ? void 0 : (0, s.lw)({
                userValue: l.avatarDecoration,
                pendingValue: t,
                guildId: n
            }),
            avatarOverride: (0, a.V7)({
                userId: l.id,
                image: o,
                size: c
            })
        }
    }, [l, n, i])
}