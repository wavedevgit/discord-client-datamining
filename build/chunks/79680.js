/** chunk id: 79680 params = (module,exports,require) **/
s.d(t, {
    A: () => c
});
var r = s(562465),
    n = s(73153),
    i = s(142120),
    l = s(345942),
    a = s(71393),
    d = s(652215);
let c = {
    acceptGuildTemplate: (e, t, s) => (n.h.dispatch({
        type: "GUILD_TEMPLATE_ACCEPT",
        code: e
    }), new Promise((c, u) => {
        r.Bo.post({
            url: d.Rsh.UNRESOLVED_GUILD_TEMPLATE(e),
            body: {
                name: t,
                icon: s
            },
            oldFormErrors: !0,
            rejectWithError: !1
        }).then(t => {
            let s = t.body;
            n.h.dispatch({
                type: "GUILD_TEMPLATE_ACCEPT_SUCCESS",
                code: e,
                guild: s
            }), i.A.isConnected() ? a.A.addConditionalChangeListener(() => {
                if (null != a.A.getGuild(s.id)) return (0, l.u)(s.id), c(s), !1
            }) : ((0, l.u)(s.id), c(s))
        }, t => {
            n.h.dispatch({
                type: "GUILD_TEMPLATE_ACCEPT_FAILURE",
                code: e
            }), u(t.body)
        })
    }))
}