/** chunk id: 725034 params = (module,exports,require) **/
i.d(e, {
    default: () => M
});
var l = i(627968),
    n = i(64700),
    u = i(158954),
    r = i(417597),
    A = i(964486),
    a = i(793574),
    d = i(688810),
    o = i(961350),
    s = i(696451),
    f = i(71393),
    E = i(954571),
    _ = i(229527),
    c = i(81400),
    g = i(411335),
    I = i(652215),
    N = i(340837),
    O = i(985018);

function M(t) {
    let {
        onClose: e,
        transitionState: i,
        guildId: M
    } = t, U = (0, r.bG)([o.default], () => o.default.getId()), R = (0, r.bG)([s.Ay], () => s.Ay.getMember(M, U), [M, U]), T = (0, r.bG)([f.A], () => f.A.getGuild(M), [M]), b = T?.name ?? "", D = (0, _.wj)(R), {
        analyticsLocations: G
    } = (0, d.Ay)(a.A.AUTOMOD_PROFILE_QUARANTINE_ALERT), [h, C] = (0, c.j8)({
        guildId: M,
        analyticsLocations: G
    }), k = D.has(N.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? O.intl.formatToPlainString(O.t.Oh20JS, {
        guildName: b
    }) : O.intl.formatToPlainString(O.t.h8IXqQ, {
        guildName: b
    });
    C || (k = O.intl.formatToPlainString(O.t.tcrtME, {
        guildName: b
    }));
    let P = C ? O.intl.string(O.t.Viksoo) : O.intl.string(O.t.WikgZ1);
    return ((0, A.Ay)(() => {
        E.default.track(I.HAw.OPEN_MODAL, {
            type: g.oN,
            guild_id: M,
            other_user_id: U
        })
    }), n.useEffect(() => {
        if (null == T) return void e()
    }, [T, e]), null == T) ? null : (0, l.jsx)(u.Modal, {
        transitionState: i,
        onClose: e,
        title: O.intl.string(O.t["P+6K9C"]),
        subtitle: k,
        actions: [{
            text: P,
            onClick: () => {
                h(), e()
            }
        }]
    })
}