/** Chunk was on 44411 **/
/** chunk id: 551851, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var i, s = n(311907),
    r = n(73153);

function l(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let o = {};

function a(e) {
    let {
        guildId: t,
        expand: n
    } = e;
    n ? o[t] = !0 : delete o[t]
}
class d extends(i = s.Ay.PersistedStore) {
    initialize(e) {
        o = null != e ? e : {}
    }
    isVoiceCategoryExpanded(e) {
        var t;
        return null != (t = null != e && o[e]) && t
    }
    isVoiceCategoryCollapsed(e) {
        return !this.isVoiceCategoryExpanded(e)
    }
    getState() {
        return o
    }
}
l(d, "displayName", "ChannelListVoiceCategoryStore"), l(d, "persistKey", "ChannelListVoiceCategoryStore");
let u = new d(r.h, {
    VOICE_CATEGORY_COLLAPSE: a,
    VOICE_CATEGORY_EXPAND: a
})