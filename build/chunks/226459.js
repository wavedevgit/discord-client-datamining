/** Chunk was on web.js **/
/** chunk id: 226459, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
}), n(896048);
var r = n(735438),
    i = n(439372),
    a = n(706341),
    o = n(320697),
    s = n(849077);

function l(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let c = 5e3;
class u extends i.A {
    preloadInbox() {
        a.A.loadMoreInbox({
            preload: !0,
            loadingTrigger: s.VA.AUTO_LOAD
        })
    }
    _terminate() {
        this.throttledPreloadInbox.cancel()
    }
    constructor() {
        super(), l(this, "throttledPreloadInbox", void 0), l(this, "stores", new Map().set(o.A, () => {
            o.A.hasPreloaded || o.A.canLoadMore({
                preload: !0
            }) && this.throttledPreloadInbox()
        })), this.throttledPreloadInbox = (0, r.throttle)(this.preloadInbox, c)
    }
}
let d = new u