/** chunk id: 486678 params = (module,exports,require) **/
l.d(n, {
    A: () => m
});
var i = l(311907),
    t = l(397927),
    s = l(919395),
    a = l(101058),
    r = l(836602),
    o = l(996988),
    d = l(985253);
let c = (0, t.FT9)(d.T[o.d.MODAL_V2].avatarSize),
    u = {
        pendingThemeColors: void 0,
        avatarDecorationOverride: void 0,
        avatarOverride: void 0
    };

function m(e) {
    let {
        user: n,
        guildId: l,
        allowEditingInModal: t
    } = e;
    return (0, i.cf)([r.A], () => {
        if (!t) return u;
        let {
            pendingThemeColors: e,
            pendingAvatarDecoration: i,
            pendingAvatar: o
        } = r.A.getPendingChanges(l);
        return {
            pendingThemeColors: e,
            avatarDecorationOverride: void 0 === i ? void 0 : (0, s.lw)({
                userValue: n.avatarDecoration,
                pendingValue: i,
                guildId: l
            }),
            avatarOverride: (0, a.V7)({
                userId: n.id,
                image: o,
                size: c
            })
        }
    }, [n, l, t])
}