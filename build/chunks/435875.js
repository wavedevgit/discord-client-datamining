/** chunk id: 435875 params = (module,exports,require) **/
n.d(t, {
    q: () => d
});
var i = n(73153),
    l = n(846293),
    a = n(970163),
    r = n(961350),
    s = n(696451),
    o = n(652215);
async function d(e) {
    let {
        code: t
    } = e, d = (await (0, a.A)(t)).invite;
    if (null == d || null == d.guild) return;
    let c = d.guild.id,
        u = s.Ay.getMember(c, r.default.getId()),
        A = !1;
    if (null != u && null != d.roles && d.roles.length > 0) {
        let e = new Set(u.roles ?? []);
        A = d.roles.some(t => !e.has(t.id))
    }
    if (null == u || A) return void i.h.dispatch({
        type: "INVITE_MODAL_OPEN",
        invite: d,
        code: t,
        context: o.BRT.APP
    });
    let {
        default: h
    } = await Promise.resolve().then(n.bind(n, 967305));
    await h({
        guildId: c
    }), l.Ay.transitionToInvite(d, void 0, !0)
}