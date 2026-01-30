/** chunk id: 426620, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var r, i = n(311907),
    a = n(73153);

function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let s = null;

function l() {
    s = null, d.persist()
}

function c(e) {
    let {
        newUserType: t
    } = e;
    s = t, d.persist()
}
class u extends(r = i.Ay.PersistedStore) {
    initialize(e) {
        var t;
        s = null != (t = null == e ? void 0 : e.type) ? t : null
    }
    getType() {
        return s
    }
    getState() {
        return {
            type: s
        }
    }
}
o(u, "displayName", "NewUserStore"), o(u, "persistKey", "nuf");
let d = new u(a.h, {
        NUF_NEW_USER: c,
        NUF_COMPLETE: l
    }),
    f = d