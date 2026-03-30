/** chunk id: 861495 params = (module,exports,require) **/
r.d(t, {
    Q: () => s,
    Y: () => i
});
var a = r(892227),
    n = r(649032);

function s(e, t) {
    if (!t || null == e) return !1;
    let r = e.next_reward_date,
        a = e.program_current_state;
    if (null == a) return !1;
    if (null == r || "" === r) {
        if (![n.L.PAYMENT_PROCESSING, n.L.PAYMENT_ERROR].includes(a)) return !1
    } else {
        let e = new Date(r).getTime();
        if (Number.isNaN(e) || e < Date.now()) return !1
    }
    return !0
}

function i(e, t, r) {
    if (!r || null == e || null == t) return !1;
    let n = e.next_reward_date;
    if (null == n || "" === n) return !1;
    let s = new Date(n).getTime();
    return !(Number.isNaN(s) || s <= Date.now() || (0, a.default)(new Date(n), new Date) > t)
}