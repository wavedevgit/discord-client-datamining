/** Chunk was on web.js **/
/** chunk id: 774812, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
}), n(896048);
var r = n(506774),
    i = n(439372);

function a(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let o = "formGuidelinesStorageKey";
class s extends i.A {
    _initialize() {
        let e = r.w.get(o);
        null != e && (this.seenForumGuidelines = new Set(e))
    }
    _terminate() {
        r.w.set(o, this.seenForumGuidelines)
    }
    markAsSeen(e) {
        this.seenForumGuidelines.add(e), r.w.set(o, this.seenForumGuidelines)
    }
    hasSeen(e) {
        return this.seenForumGuidelines.has(e)
    }
    constructor(...e) {
        super(...e), a(this, "seenForumGuidelines", new Set)
    }
}
let l = new s