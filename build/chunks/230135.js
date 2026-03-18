/** chunk id: 230135 params = (module,exports,require) **/
n.d(t, {
    O: () => i,
    u: () => s
});
var l = n(73153);
let s = (e, t) => {
    l.h.wait(() => {
        l.h.dispatch({
            type: "APPLIED_GUILD_BOOST_COUNT_UPDATE",
            guildId: e,
            premiumCount: t
        })
    })
};

function i() {
    l.h.dispatch({
        type: "APPLIED_GUILD_BOOST_COUNT_RESET"
    })
}