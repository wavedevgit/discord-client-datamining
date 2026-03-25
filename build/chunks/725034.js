/** chunk id: 725034 params = (module,exports,require) **/
i.d(e, {
    default: () => b
});
var n = i(627968),
    l = i(64700),
    u = i(158954),
    r = i(417597),
    a = i(964486),
    d = i(793574),
    A = i(688810),
    o = i(961350),
    s = i(696451),
    f = i(71393),
    g = i(954571),
    c = i(229527),
    E = i(81400),
    _ = i(411335),
    I = i(652215),
    N = i(340837),
    O = i(985018);

function b(t) {
    let {
        onClose: e,
        transitionState: i,
        guildId: b
    } = t, M = (0, r.bG)([o.default], () => o.default.getId()), U = (0, r.bG)([s.Ay], () => s.Ay.getMember(b, M), [b, M]), R = (0, r.bG)([f.A], () => f.A.getGuild(b), [b]), T = R?.name ?? "", C = (0, c.wj)(U), {
        analyticsLocations: D
    } = (0, A.Ay)(d.A.AUTOMOD_PROFILE_QUARANTINE_ALERT), [G, h] = (0, E.j8)({
        guildId: b,
        analyticsLocations: D
    }), k = C.has(N.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? O.intl.formatToPlainString(O.t.Oh20JS, {
        guildName: T
    }) : O.intl.formatToPlainString(O.t.h8IXqQ, {
        guildName: T
    });
    h || (k = O.intl.formatToPlainString(O.t.tcrtME, {
        guildName: T
    }));
    let m = h ? O.intl.string(O.t.Viksoo) : O.intl.string(O.t.WikgZ1);
    return ((0, a.Ay)(() => {
        g.default.track(I.HAw.OPEN_MODAL, {
            type: _.oN,
            guild_id: b,
            other_user_id: M
        })
    }), l.useEffect(() => {
        if (null == R) return void e()
    }, [R, e]), null == R) ? null : (0, n.jsx)(u.Modal, {
        transitionState: i,
        onClose: e,
        title: O.intl.string(O.t["P+6K9C"]),
        subtitle: k,
        actions: [{
            text: m,
            onClick: () => {
                G(), e()
            }
        }]
    })
}