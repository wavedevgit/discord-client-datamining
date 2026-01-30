/** chunk id: 613999, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $l: () => l,
    Ay: () => f,
    O_: () => u,
    xx: () => c
}), n(321073), n(896048);
var r = n(543531),
    i = n(407689),
    a = n(853742),
    o = n(759735);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function l(e) {
    return "".concat(i.mG.FORUM_CHANNEL, "_").concat(e)
}

function c(e, t, n) {
    (0, r.wR)(l(e), t, n)
}

function u(e, t, n) {
    (0, r.zK)(l(e), t, n)
}

function d(e) {
    let {
        guildId: t,
        channelId: n,
        sessionId: r,
        trackedFeedItems: i,
        isForcedFlush: o
    } = e, s = [], l = [];
    for (let e of Object.keys(i)) {
        let t = i[e].computeSeenTimeDestructive(o);
        t > 0 && (s.push(e), l.push(t))
    }
    0 !== s.length && (0, a.Z_)({
        guildId: t,
        channelId: n,
        sessionId: r,
        postIds: s,
        additionalTimes: l
    })
}
class f extends i.id {
    constructor({
        guildId: e,
        channelId: t,
        windowId: n,
        isPaused: r
    }) {
        super({
            windowId: n,
            isPaused: r,
            id: l(t)
        }), s(this, "guildId", void 0), s(this, "channelId", void 0), s(this, "sessionId", void 0), s(this, "createFlushSeenItemsFunction", e => {
            let t = this.trackedFeedItems,
                n = this.channelId,
                r = {
                    guildId: this.guildId,
                    channelId: n,
                    sessionId: this.sessionId,
                    trackedFeedItems: t,
                    isForcedFlush: null != e
                };
            return () => d(r)
        }), this.guildId = e, this.channelId = t, this.sessionId = (0, o.cr)(t)
    }
}