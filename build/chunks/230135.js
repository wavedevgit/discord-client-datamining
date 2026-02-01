/** chunk id: 230135, original params: e,t,n (module,exports,require) **/
n.d(t, {
    O: () => o,
    u: () => l
});
var r = n(73153);
let l = (e, t) => {
    r.h.wait(() => {
        r.h.dispatch({
            type: "APPLIED_GUILD_BOOST_COUNT_UPDATE",
            guildId: e,
            premiumCount: t
        })
    })
};

function o() {
    r.h.dispatch({
        type: "APPLIED_GUILD_BOOST_COUNT_RESET"
    })
}