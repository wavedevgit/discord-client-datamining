/** chunk id: 213012 params = (module,exports,require) **/
i.d(t, {
    I: () => r
});
var n = i(562465),
    s = i(73153),
    l = i(652215);
let r = () => n.Bo.get({
    url: l.Rsh.GUILD_AFFINITIES,
    oldFormErrors: !0,
    rejectWithError: !1
}).then(e => {
    let {
        body: {
            guild_affinities: t
        }
    } = e;
    s.h.dispatch({
        type: "LOAD_GUILD_AFFINITIES_SUCCESS",
        guildAffinities: t
    })
}, () => {
    s.h.dispatch({
        type: "LOAD_GUILD_AFFINITIES_FAILURE"
    })
})