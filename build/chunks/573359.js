/** chunk id: 573359, original params: e,t,n (module,exports,require) **/
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
let s = {
    isDisplayingWowMomentConfirmation: !1,
    isAnimated: !1
};

function l() {
    s = {
        isDisplayingWowMomentConfirmation: !1,
        isAnimated: !1
    }
}

function c() {
    l()
}

function u(e) {
    let {
        value: t,
        isAnimated: n
    } = e;
    s.isDisplayingWowMomentConfirmation = t, s.isAnimated = n
}
class d extends(r = i.Ay.Store) {
    getState() {
        return s
    }
    get isDisplayingWowMomentConfirmation() {
        return s.isDisplayingWowMomentConfirmation
    }
    get isAnimated() {
        return s.isAnimated
    }
}
o(d, "displayName", "WowMomentConfirmationStore");
let f = new d(a.h, {
    LOGOUT: c,
    WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION: u
})