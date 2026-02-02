/** chunk id: 164684, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Y: () => A,
    x: () => h
});
var r = n(627968),
    l = n(397927),
    a = n(157559),
    i = n(793574),
    s = n(203982),
    o = n(216623),
    c = n(85109),
    u = n(226017),
    p = n(652215);
n(811233);
var d = n(985018);

function f(e, t) {
    if (null == e) return {};
    var n, r, l, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = function(e, t) {
            if (null == e) return {};
            var n, r, l = {},
                a = Object.getOwnPropertyNames(e);
            for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l
        }(e, t), Object.getOwnPropertySymbols)
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}
async function A(e) {
    let {
        displayToast: t = !1
    } = e, A = f(e, ["displayToast"]);
    if (null == c.A.getSavedMessage(A.channelId, A.messageId) && !(0, u.A)()) return void(0, l.mMO)(async () => {
        let {
            default: e
        } = await n.e("159").then(n.bind(n, 530951));
        return t => (0, r.jsx)(e, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r;
                    r = n[t], t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r
                })
            }
            return e
        }({
            source: i.A.FOR_LATER_HELPERS
        }, t))
    });
    if (null != await (0, o.oN)(A).catch(e => {
            var t, n, r;
            return (null == e || null == (n = e.body) ? void 0 : n.code) === p.t02.TOO_MANY_SAVED_MESSAGES ? a.A.show({
                title: d.intl.string(d.t.mlbiZW),
                body: d.intl.formatToPlainString(d.t["1zVbEG"], {
                    max: 200
                }),
                cancelText: d.intl.string(d.t.BddRzS),
                confirmText: d.intl.string(d.t.ZGbTcy),
                onConfirm: () => s._.dispatch(p.jej.TOGGLE_FOR_LATER)
            }) : (0, l.showToast)((0, l.createToast)(null != (t = null == e || null == (r = e.body) ? void 0 : r.message) ? t : d.intl.string(d.t.R0RpRX), l.ToastType.FAILURE)), null
        }) && t) {
        let e = null != A.dueAt ? d.intl.string(d.t.i1IsOy) : d.intl.string(d.t["WQdL/6"]),
            t = null != A.dueAt ? l.ToastType.CLOCK : l.ToastType.BOOKMARK;
        (0, l.showToast)((0, l.createToast)(e, t))
    }
}
async function h(e) {
    let {
        displayToast: t = !1
    } = e, n = f(e, ["displayToast"]);
    if (null != await (0, o.cf)(n).catch(e => {
            var t, n;
            return (0, l.showToast)((0, l.createToast)(null != (t = null == e || null == (n = e.body) ? void 0 : n.message) ? t : d.intl.string(d.t.R0RpRX), l.ToastType.FAILURE)), null
        }) && t) {
        let e = null != n.dueAt ? d.intl.string(d.t.D0tS02) : d.intl.string(d.t["5KOMiV"]),
            t = null != n.dueAt ? l.ToastType.CLOCK : l.ToastType.BOOKMARK;
        (0, l.showToast)((0, l.createToast)(e, t))
    }
}