/** chunk id: 213012, original params: e,t,n (module,exports,require) **/
n.d(t, {
    I: () => a
});
var r = n(562465),
    l = n(73153),
    i = n(652215);
let a = () => r.Bo.get({
    url: i.Rsh.GUILD_AFFINITIES,
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