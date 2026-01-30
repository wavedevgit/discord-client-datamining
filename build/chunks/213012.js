/** chunk id: 213012, original params: e,t,n (module,exports,require) **/
n.d(t, {
    I: () => s
});
var r = n(562465),
    i = n(73153),
    l = n(652215);
let s = () => r.Bo.get({
    url: l.Rsh.GUILD_AFFINITIES,
    oldFormErrors: !0,
    rejectWithError: !1
}).then(e => {
    let {
        body: {
            guild_affinities: t
        }
    } = e;
    i.h.dispatch({
        type: "LOAD_GUILD_AFFINITIES_SUCCESS",
        guildAffinities: t
    })
}, () => {
    i.h.dispatch({
        type: "LOAD_GUILD_AFFINITIES_FAILURE"
    })
})