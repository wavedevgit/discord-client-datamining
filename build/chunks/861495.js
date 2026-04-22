/** chunk id: 861495 params = (module,exports,require) **/
n.d(t, {
    Q: () => l,
    Y: () => r
});
var s = n(892227),
    a = n(649032);

function l(e, t) {
    if (!t || null == e) return !1;
    let n = e.next_reward_date,
        s = e.program_current_state;
    if (null == s) return !1;
    if (null == n || "" === n) {
        if (![a.L.PAYMENT_PROCESSING, a.L.PAYMENT_ERROR].includes(s)) return !1
    } else {
        let e = new Date(n).getTime();
        if (Number.isNaN(e) || e < Date.now()) return !1
    }
    return !0
}

function r(e, t, n) {
    if (!n || null == e || null == t) return !1;
    let a = e.next_reward_date;
    if (null == a || "" === a) return !1;
    let l = new Date(a).getTime();
    return !(Number.isNaN(l) || l <= Date.now() || (0, s.default)(new Date(a), new Date) > t)
}