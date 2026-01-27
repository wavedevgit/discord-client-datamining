/** Chunk was on web.js **/
/** chunk id: 347209, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
}), n(896048);
var r = n(439372),
    i = n(967198),
    a = n(17591),
    o = n(307731);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class l extends r.A {
    handleInteraction(e) {
        let {
            interaction: t
        } = e;
        if ([o.Vl.EmojiButtonMouseEntered].includes(t)) {
            let e = i.A.getGuildId();
            (0, a.V)(e)
        }
    }
    constructor(...e) {
        super(...e), s(this, "actions", {
            EMOJI_INTERACTION_INITIATED: this.handleInteraction
        })
    }
}
let c = new l