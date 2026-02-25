/** chunk id: 230135, original params: e,t,l (module,exports,require) **/
l.d(t, {
    O: () => a,
    u: () => n
});
var s = l(73153);
let n = (e, t) => {
    s.h.wait(() => {
        s.h.dispatch({
            type: "APPLIED_GUILD_BOOST_COUNT_UPDATE",
            guildId: e,
            premiumCount: t
        })
    })
};

function a() {
    s.h.dispatch({
        type: "APPLIED_GUILD_BOOST_COUNT_RESET"
    })
}