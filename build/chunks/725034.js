/** chunk id: 725034 params = (module,exports,require) **/
n.d(e, {
    default: () => M
});
var l = n(627968),
    i = n(64700),
    r = n(158954),
    u = n(417597),
    A = n(964486),
    a = n(793574),
    d = n(688810),
    o = n(961350),
    s = n(696451),
    E = n(71393),
    _ = n(954571),
    f = n(229527),
    g = n(81400),
    c = n(411335),
    I = n(652215),
    N = n(340837),
    O = n(985018);

function M(t) {
    let {
        onClose: e,
        transitionState: n,
        guildId: M
    } = t, R = (0, u.bG)([o.default], () => o.default.getId()), T = (0, u.bG)([s.Ay], () => s.Ay.getMember(M, R), [M, R]), U = (0, u.bG)([E.A], () => E.A.getGuild(M), [M]), b = U?.name ?? "", D = (0, f.wj)(T), {
        analyticsLocations: G
    } = (0, d.Ay)(a.A.AUTOMOD_PROFILE_QUARANTINE_ALERT), [h, C] = (0, g.j8)({
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
        _.default.track(I.HAw.OPEN_MODAL, {
            type: c.oN,
            guild_id: M,
            other_user_id: R
        })
    }), i.useEffect(() => {
        if (null == U) return void e()
    }, [U, e]), null == U) ? null : (0, l.jsx)(r.Modal, {
        transitionState: n,
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