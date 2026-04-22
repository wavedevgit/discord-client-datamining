/** chunk id: 213012 params = (module,exports,require) **/
n.d(t, {
    I: () => a
});
var i = n(562465),
    l = n(73153),
    s = n(652215);
let a = () => i.Bo.get({
    url: s.Rsh.GUILD_AFFINITIES,
    oldFormErrors: !0,
    rejectWithError: !1
}).then(e => {
    let {
        body: {
            guild_affinities: t
        }
    } = e;
    l.h.dispatch({
        type: "LOAD_GUILD_AFFINITIES_SUCCESS",
        guildAffinities: t
    })
}, () => {
    l.h.dispatch({
        type: "LOAD_GUILD_AFFINITIES_FAILURE"
    })
})