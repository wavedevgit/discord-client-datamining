/** chunk id: 725034, original params: t,n,i (module,exports,require) **/
i.d(n, {
    default: () => M
});
var l = i(627968),
    e = i(64700),
    r = i(158954),
    u = i(417597),
    A = i(964486),
    a = i(793574),
    d = i(688810),
    o = i(961350),
    s = i(696451),
    E = i(71393),
    _ = i(954571),
    f = i(229527),
    g = i(81400),
    c = i(411335),
    N = i(652215),
    I = i(340837),
    O = i(985018);

function M(t) {
    let {
        onClose: n,
        transitionState: i,
        guildId: M
    } = t, R = (0, u.bG)([o.default], () => o.default.getId()), T = (0, u.bG)([s.Ay], () => s.Ay.getMember(M, R), [M, R]), U = (0, u.bG)([E.A], () => E.A.getGuild(M), [M]), b = U?.name ?? "", D = (0, f.wj)(T), {
        analyticsLocations: G
    } = (0, d.Ay)(a.A.AUTOMOD_PROFILE_QUARANTINE_ALERT), [C, h] = (0, g.j8)({
        guildId: M,
        analyticsLocations: G
    }), k = D.has(I.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? O.intl.formatToPlainString(O.t.Oh20JS, {
        guildName: b
    }) : O.intl.formatToPlainString(O.t["+VAZ/Z"], {
        guildName: b
    });
    h || (k = O.intl.formatToPlainString(O.t.tcrtME, {
        guildName: b
    }));
    let P = h ? O.intl.string(O.t.Viksoo) : O.intl.string(O.t.WikgZ1);
    return ((0, A.Ay)(() => {
        _.default.track(N.HAw.OPEN_MODAL, {
            type: c.oN,
            guild_id: M,
            other_user_id: R
        })
    }), e.useEffect(() => {
        if (null == U) return void n()
    }, [U, n]), null == U) ? null : (0, l.jsx)(r.Modal, {
        transitionState: i,
        onClose: n,
        title: O.intl.string(O.t["P+6K9C"]),
        subtitle: k,
        actions: [{
            text: P,
            onClick: () => {
                C(), n()
            }
        }]
    })
}