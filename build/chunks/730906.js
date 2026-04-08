/** chunk id: 730906 params = (module,exports,require) **/
i.d(t, {
    A: () => o
});
var l = i(284009),
    n = i.n(l),
    a = i(311907),
    s = i(508675),
    r = i(7584);

function o(e) {
    let {
        emojiId: t,
        emojiName: i
    } = e, l = (0, a.bG)([s.Ay], () => null != t ? s.Ay.getCustomEmojiById(t) : null);
    if (null != l || null != i)
        if (null == t) return n()(null != i, "emojiName must be defined if emojiId is not defined"), r.Ay.convertSurrogateToName(i, !1);
        else return l?.name
}