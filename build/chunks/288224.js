/** chunk id: 288224 params = (module,exports,require) **/
l.d(t, {
    X: () => i
});
var n = l(73153);

function i(e) {
    let {
        emojiId: t,
        userImage: l
    } = e;
    n.h.dispatch({
        type: "EMOJI_CACHE_RAW_EMOJI_ASSET",
        emojiId: t,
        userImage: l
    })
}