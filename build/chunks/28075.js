/** Chunk was on web.js **/
/** chunk id: 28075, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r, i = n(311907),
    a = n(73153),
    o = n(736666);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let l = {
    lastInitAttemptMayHaveCrashed: !1
};
class c extends(r = i.Ay.PersistedStore) {
    initialize(e) {
        null != e && (l = e)
    }
    getState() {
        return l
    }
    getLastInitAttemptMayHaveCrashed() {
        return l.lastInitAttemptMayHaveCrashed
    }
}

function u(e) {
    let {
        state: t
    } = e;
    switch (t) {
        case o.R.LOADING:
            l.lastInitAttemptMayHaveCrashed = !0;
            break;
        case o.R.LOADED:
        case o.R.FAILED:
        case o.R.UNSUPPORTED:
            l.lastInitAttemptMayHaveCrashed = !1
    }
}
s(c, "displayName", "VoiceFilterPersistedStore"), s(c, "persistKey", "VoiceFilterPersistedStore");
let d = new c(a.h, {
    VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE: u
})