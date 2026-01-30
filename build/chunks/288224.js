/** chunk id: 288224, original params: e,t,n (module,exports,require) **/
n.d(t, {
    X: () => r
});
var l = n(73153);

function r(e) {
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