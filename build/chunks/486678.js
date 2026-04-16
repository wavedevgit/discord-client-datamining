/** chunk id: 486678 params = (module,exports,require) **/
l.d(n, {
    A: () => m
});
var t = l(311907),
    i = l(397927),
    s = l(919395),
    a = l(101058),
    r = l(836602),
    o = l(996988),
    d = l(985253);
let c = (0, i.FT9)(d.T[o.d.MODAL_V2].avatarSize),
    u = {
        pendingThemeColors: void 0,
        avatarDecorationOverride: void 0,
        avatarOverride: void 0
    };

function m(e) {
    let {
        user: n,
        guildId: l,
        allowEditingInModal: i
    } = e;
    return (0, t.cf)([r.A], () => {
        if (!i) return u;
        let {
            pendingThemeColors: e,
            pendingAvatarDecoration: t,
            pendingAvatar: o
        } = r.A.getPendingChanges(l);
        return {
            pendingThemeColors: e,
            avatarDecorationOverride: void 0 === t ? void 0 : (0, s.lw)({
                userValue: n.avatarDecoration,
                pendingValue: t,
                guildId: l
            }),
            avatarOverride: (0, a.V7)({
                userId: n.id,
                image: o,
                size: c
            })
        }
    }, [n, l, i])
}