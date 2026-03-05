/** chunk id: 230135 params = (module,exports,require) **/
s.d(t, {
    O: () => a,
    u: () => n
});
var l = s(73153);
let n = (e, t) => {
    l.h.wait(() => {
        l.h.dispatch({
            type: "APPLIED_GUILD_BOOST_COUNT_UPDATE",
            guildId: e,
            premiumCount: t
        })
    })
};

function a() {
    l.h.dispatch({
        type: "APPLIED_GUILD_BOOST_COUNT_RESET"
    })
}