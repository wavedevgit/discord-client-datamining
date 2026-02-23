/** chunk id: 230135, original params: e,t,l (module,exports,require) **/
l.d(t, {
    O: () => a,
    u: () => s
});
var n = l(73153);
let s = (e, t) => {
    n.h.wait(() => {
        n.h.dispatch({
            type: "APPLIED_GUILD_BOOST_COUNT_UPDATE",
            guildId: e,
            premiumCount: t
        })
    })
};

function a() {
    n.h.dispatch({
        type: "APPLIED_GUILD_BOOST_COUNT_RESET"
    })
}