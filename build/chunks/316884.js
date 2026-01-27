/** Chunk was on web.js **/
/** chunk id: 316884, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l,
    b: () => s
});
var r = n(417597),
    i = n(508675),
    a = n(307731);
let o = [];

function s(e) {
    let {
        emojiStoreInstance: t = i.Ay,
        guildId: n,
        pickerIntention: r
    } = e;
    return {
        topEmojis: r !== a.b_.REACTION ? t.getTopEmoji(n) : o,
        newlyAddedEmojis: r !== a.b_.REACTION ? t.getNewlyAddedEmoji(n) : o
    }
}

function l(e, t) {
    return (0, r.cf)([i.Ay], () => s({
        emojiStoreInstance: i.Ay,
        guildId: e,
        pickerIntention: t
    }), [e, t])
}