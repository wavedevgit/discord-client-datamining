/** Chunk was on 20941 **/
/** chunk id: 213012, original params: e,t,n (module,exports,require) **/
n.d(t, {
    I: () => i
});
var r = n(562465),
    l = n(73153),
    a = n(652215);
let i = () => r.Bo.get({
    url: a.Rsh.GUILD_AFFINITIES,
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