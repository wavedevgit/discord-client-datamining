/** chunk id: 213012 params = (module,exports,require) **/
n.d(e, {
    I: () => s
});
var i = n(562465),
    l = n(73153),
    r = n(652215);
let s = () => i.Bo.get({
    url: r.Rsh.GUILD_AFFINITIES,
    oldFormErrors: !0,
    rejectWithError: !1
}).then(t => {
    let {
        body: {
            guild_affinities: e
        }
    } = t;
    l.h.dispatch({
        type: "LOAD_GUILD_AFFINITIES_SUCCESS",
        guildAffinities: e
    })
}, () => {
    l.h.dispatch({
        type: "LOAD_GUILD_AFFINITIES_FAILURE"
    })
})