/** chunk id: 483827, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    du: () => p,
    uR: () => f
}), n(747238);
var r = n(492462),
    i = n(960488);
n(728458);
var a = n(192576),
    o = n(935434),
    s = n(652215);

function l(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
n(788868);
let c = e => {
        let {
            location: t
        } = e, {
            enabled: n
        } = o.c.getCurrentConfig({
            location: t
        });
        return n ? {
            enabled: !1,
            discountEnabled: !1
        } : a.O.getConfig({
            location: t
        })
    },
    u = e => {
        let {
            location: t
        } = e, {
            enabled: n
        } = o.c.useExperiment({
            location: t
        }), r = a.O.useConfig({
            location: t
        });
        return n ? {
            enabled: !1,
            discountEnabled: !1
        } : r
    },
    d = (e, t, n) => !t.startsWith(s.BVt.BILLING_MANAGE_SUBSCRIPTION) && n === s.W6J.APPLE_PAYMENT_LINK && e,
    f = e => {
        let {
            location: t
        } = e, {
            search: n,
            pathname: a
        } = (0, i.zy)(), {
            enabled: o
        } = u({
            location: t
        }), {
            deep_link_type: s
        } = (0, r.parse)(n);
        return d(o, a, s)
    },
    p = function(e) {
        let {
            location: t
        } = e, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = window.location.pathname, {
            deep_link_type: a
        } = (0, r.parse)(window.location.search);
        if (i.startsWith(s.BVt.BILLING_MANAGE_SUBSCRIPTION)) return !1;
        let {
            enabled: o
        } = c({
            location: t
        });
        return d(n || o, i, a)
    }