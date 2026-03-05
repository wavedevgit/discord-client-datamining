/** chunk id: 288224 params = (module,exports,require) **/
n.d(t, {
    X: () => i
});
var l = n(73153);

function i(e) {
    let {
        emojiId: t,
        userImage: n
    } = e;
    l.h.dispatch({
        type: "EMOJI_CACHE_RAW_EMOJI_ASSET",
        emojiId: t,
        userImage: n
    })
}