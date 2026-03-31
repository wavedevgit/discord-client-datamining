/** chunk id: 211059 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var i = n(73153);
let l = {
    viewPrompt: function(e, t) {
        i.h.wait(() => {
            i.h.dispatch({
                type: "GUILD_PROMPT_VIEWED",
                prompt: e,
                guildId: t
            })
        })
    }
}