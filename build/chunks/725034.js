/** chunk id: 725034, original params: t,l,n (module,exports,require) **/
n.d(l, {
    default: () => M
}), n(896048);
var i = n(627968),
    e = n(64700),
    u = n(158954),
    r = n(417597),
    A = n(964486),
    a = n(793574),
    d = n(688810),
    o = n(961350),
    f = n(696451),
    s = n(71393),
    E = n(954571),
    _ = n(229527),
    g = n(81400),
    c = n(411335),
    N = n(652215),
    I = n(340837),
    O = n(985018);

function M(t) {
    var l;
    let {
        onClose: n,
        transitionState: M,
        guildId: R
    } = t, T = (0, r.bG)([o.default], () => o.default.getId()), U = (0, r.bG)([f.Ay], () => f.Ay.getMember(R, T), [R, T]), b = (0, r.bG)([s.A], () => s.A.getGuild(R), [R]), D = null != (l = null == b ? void 0 : b.name) ? l : "", G = (0, _.wj)(U), {
        analyticsLocations: C
    } = (0, d.Ay)(a.A.AUTOMOD_PROFILE_QUARANTINE_ALERT), [h, k] = (0, g.j8)({
        guildId: R,
        analyticsLocations: C
    }), P = G.has(I.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? O.intl.formatToPlainString(O.t.Oh20JS, {
        guildName: D
    }) : O.intl.formatToPlainString(O.t["+VAZ/Z"], {
        guildName: D
    });
    k || (P = O.intl.formatToPlainString(O.t.tcrtME, {
        guildName: D
    }));
    let m = k ? O.intl.string(O.t.Viksoo) : O.intl.string(O.t.WikgZ1);
    return ((0, A.Ay)(() => {
        E.default.track(N.HAw.OPEN_MODAL, {
            type: c.oN,
            guild_id: R,
            other_user_id: T
        })
    }), e.useEffect(() => {
        if (null == b) return void n()
    }, [b, n]), null == b) ? null : (0, i.jsx)(u.Modal, {
        transitionState: M,
        onClose: n,
        title: O.intl.string(O.t["P+6K9C"]),
        subtitle: P,
        actions: [{
            text: m,
            onClick: () => {
                h(), n()
            }
        }]
    })
}