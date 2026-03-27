/** chunk id: 861495 params = (module,exports,require) **/
a.d(t, {
    Q: () => s,
    Y: () => i
});
var r = a(892227),
    n = a(649032);

function s(e, t) {
    if (!t || null == e) return !1;
    let a = e.next_reward_date,
        r = e.program_current_state;
    if (null == r) return !1;
    if (null == a || "" === a) {
        if (![n.L.PAYMENT_PROCESSING, n.L.PAYMENT_ERROR].includes(r)) return !1
    } else {
        let e = new Date(a).getTime();
        if (Number.isNaN(e) || e < Date.now()) return !1
    }
    return !0
}

function i(e, t, a) {
    if (!a || null == e || null == t) return !1;
    let n = e.next_reward_date;
    if (null == n || "" === n) return !1;
    let s = new Date(n).getTime();
    return !(Number.isNaN(s) || s <= Date.now() || (0, r.default)(new Date(n), new Date) > t)
}