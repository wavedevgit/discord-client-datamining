/** chunk id: 230135, original params: e,t,n (module,exports,require) **/
n.d(t, {
    O: () => s,
    u: () => r
});
var l = n(73153);
let r = (e, t) => {
    l.h.wait(() => {
        l.h.dispatch({
            type: "APPLIED_GUILD_BOOST_COUNT_UPDATE",
            guildId: e,
            premiumCount: t
        })
    })
};

function s() {
    l.h.dispatch({
        type: "APPLIED_GUILD_BOOST_COUNT_RESET"
    })
}