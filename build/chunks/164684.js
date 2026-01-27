/** Chunk was on 92750 **/
/** chunk id: 164684, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Y: () => f,
    x: () => b
});
var s = n(627968),
    r = n(397927),
    a = n(157559),
    i = n(793574),
    l = n(203982),
    c = n(216623),
    o = n(85109),
    u = n(226017),
    p = n(652215);
n(811233);
var d = n(985018);

function g(e, t) {
    if (null == e) return {};
    var n, s, r, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) s = n[r], !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (a[s] = e[s]);
        return a
    }
    if (a = function(e, t) {
            if (null == e) return {};
            var n, s, r = {},
                a = Object.getOwnPropertyNames(e);
            for (s = 0; s < a.length; s++) n = a[s], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            return r
        }(e, t), Object.getOwnPropertySymbols)
        for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) s = n[r], !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (a[s] = e[s]);
    return a
}
async function f(e) {
    let {
        displayToast: t = !1
    } = e, f = g(e, ["displayToast"]);
    if (null == o.A.getSavedMessage(f.channelId, f.messageId) && !(0, u.A)()) return void(0, r.mMO)(async () => {
        let {
            default: e
        } = await n.e("159").then(n.bind(n, 530951));
        return t => (0, s.jsx)(e, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    s = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), s.forEach(function(t) {
                    var s;
                    s = n[t], t in e ? Object.defineProperty(e, t, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = s
                })
            }
            return e
        }({
            source: i.A.FOR_LATER_HELPERS
        }, t))
    });
    if (null != await (0, c.oN)(f).catch(e => {
            var t, n, s;
            return (null == e || null == (n = e.body) ? void 0 : n.code) === p.t02.TOO_MANY_SAVED_MESSAGES ? a.A.show({
                title: d.intl.string(d.t.mlbiZW),
                body: d.intl.formatToPlainString(d.t["1zVbEG"], {
                    max: 200
                }),
                cancelText: d.intl.string(d.t.BddRzS),
                confirmText: d.intl.string(d.t.ZGbTcy),
                onConfirm: () => l._.dispatch(p.jej.TOGGLE_FOR_LATER)
            }) : (0, r.showToast)((0, r.createToast)(null != (t = null == e || null == (s = e.body) ? void 0 : s.message) ? t : d.intl.string(d.t.R0RpRX), r.ToastType.FAILURE)), null
        }) && t) {
        let e = null != f.dueAt ? d.intl.string(d.t.i1IsOy) : d.intl.string(d.t["WQdL/6"]),
            t = null != f.dueAt ? r.ToastType.CLOCK : r.ToastType.BOOKMARK;
        (0, r.showToast)((0, r.createToast)(e, t))
    }
}
async function b(e) {
    let {
        displayToast: t = !1
    } = e, n = g(e, ["displayToast"]);
    if (null != await (0, c.cf)(n).catch(e => {
            var t, n;
            return (0, r.showToast)((0, r.createToast)(null != (t = null == e || null == (n = e.body) ? void 0 : n.message) ? t : d.intl.string(d.t.R0RpRX), r.ToastType.FAILURE)), null
        }) && t) {
        let e = null != n.dueAt ? d.intl.string(d.t.D0tS02) : d.intl.string(d.t["5KOMiV"]),
            t = null != n.dueAt ? r.ToastType.CLOCK : r.ToastType.BOOKMARK;
        (0, r.showToast)((0, r.createToast)(e, t))
    }
}