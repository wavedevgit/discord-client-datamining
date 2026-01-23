/** Chunk was on 97492 **/
/** chunk id: 211059, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => l
});
var r = n(73153);
let l = {
    viewPrompt: function(e, t) {
        r.h.wait(() => {
            r.h.dispatch({
                type: "GUILD_PROMPT_VIEWED",
                prompt: e,
                guildId: t
            })
        })
    }
}