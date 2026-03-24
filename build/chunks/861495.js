/** chunk id: 861495 params = (module,exports,require) **/
a.d(t, {
    Q: () => s,
    Y: () => i
});
var n = a(892227),
    r = a(649032);

function s(e, t) {
    if (!t || null == e) return !1;
    let a = e.next_reward_date,
        n = e.program_current_state;
    if (null == n) return !1;
    if (null == a || "" === a) {
        if (![r.L.PAYMENT_PROCESSING, r.L.PAYMENT_ERROR].includes(n)) return !1
    } else {
        let e = new Date(a).getTime();
        if (Number.isNaN(e) || e < Date.now()) return !1
    }
    return !0
}

function i(e, t, a) {
    if (!a || null == e || null == t) return !1;
    let r = e.next_reward_date;
    if (null == r || "" === r) return !1;
    let s = new Date(r).getTime();
    return !(Number.isNaN(s) || s <= Date.now() || (0, n.default)(new Date(r), new Date) > t)
}