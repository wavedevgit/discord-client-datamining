/** chunk id: 202027, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(417597),
    i = n(508675),
    a = n(7584);

function o(e, t) {
    return {
        customEmoji: (0, r.bG)([i.Ay], () => null != e ? i.Ay.getCustomEmojiById(e) : null, [e]),
        unicodeEmoji: null != t ? a.Ay.getByName(a.Ay.convertSurrogateToName(t, !1)) : null
    }
}