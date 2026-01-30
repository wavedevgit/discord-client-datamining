/** chunk id: 820431, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
}), n(896048);
var r = n(439372),
    i = n(734057),
    a = n(473503),
    o = n(746080);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class l extends r.A {
    handleChannelPreload(e) {
        let {
            channelId: t
        } = e;
        if ((0, o.jq)(t)) return;
        let n = i.A.getChannel(t);
        null != n && n.isForumLikeChannel() && (0, a.kB)(n)
    }
    constructor(...e) {
        super(...e), s(this, "actions", {
            CHANNEL_PRELOAD: this.handleChannelPreload
        })
    }
}
let c = new l