/** Chunk was on 19418 **/
/** chunk id: 819744, original params: e,n,t (module,exports,require) **/
t.d(n, {
    g: () => l
});
var i = t(562465),
    r = t(652215);

function l(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT;
    i.Bo.post({
        url: r.Rsh.FORCE_SEND_PROMPT(e),
        body: {
            prompt_type: n
        },
        rejectWithError: !0
    })
}