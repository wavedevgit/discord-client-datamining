/** chunk id: 230135 params = (module,exports,require) **/
i.d(t, {
    O: () => n,
    u: () => s
});
var r = i(73153);
let s = (e, t) => {
    r.h.wait(() => {
        r.h.dispatch({
            type: "APPLIED_GUILD_BOOST_COUNT_UPDATE",
            guildId: e,
            premiumCount: t
        })
    })
};

function n() {
    r.h.dispatch({
        type: "APPLIED_GUILD_BOOST_COUNT_RESET"
    })
}