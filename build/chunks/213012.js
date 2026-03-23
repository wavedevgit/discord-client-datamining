/** chunk id: 213012 params = (module,exports,require) **/
i.d(t, {
    I: () => s
});
var n = i(562465),
    l = i(73153),
    r = i(652215);
let s = () => n.Bo.get({
    url: r.Rsh.GUILD_AFFINITIES,
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