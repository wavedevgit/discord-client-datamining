/** chunk id: 725034 params = (module,exports,require) **/
e.d(n, {
    default: () => M
});
var i = e(627968),
    l = e(64700),
    r = e(158954),
    u = e(417597),
    A = e(964486),
    a = e(793574),
    d = e(688810),
    o = e(961350),
    s = e(696451),
    E = e(71393),
    _ = e(954571),
    f = e(229527),
    g = e(81400),
    c = e(411335),
    I = e(652215),
    N = e(340837),
    O = e(985018);

function M(t) {
    let {
        onClose: n,
        transitionState: e,
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
    }), l.useEffect(() => {
        if (null == U) return void n()
    }, [U, n]), null == U) ? null : (0, i.jsx)(r.Modal, {
        transitionState: e,
        onClose: n,
        title: O.intl.string(O.t["P+6K9C"]),
        subtitle: k,
        actions: [{
            text: P,
            onClick: () => {
                h(), n()
            }
        }]
    })
}