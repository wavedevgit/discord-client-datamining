/** chunk id: 861495 params = (module,exports,require) **/
n.d(t, {
    Q: () => s,
    Y: () => a
});
var r = n(892227),
    l = n(649032);

function s(e, t) {
    if (!t || null == e) return !1;
    let n = e.next_reward_date,
        r = e.program_current_state;
    if (null == r) return !1;
    if (null == n || "" === n) {
        if (![l.L.PAYMENT_PROCESSING, l.L.PAYMENT_ERROR].includes(r)) return !1
    } else {
        let e = new Date(n).getTime();
        if (Number.isNaN(e) || e < Date.now()) return !1
    }
    return !0
}

function a(e, t, n) {
    if (!n || null == e || null == t) return !1;
    let l = e.next_reward_date;
    if (null == l || "" === l) return !1;
    let s = new Date(l).getTime();
    return !(Number.isNaN(s) || s <= Date.now() || (0, r.default)(new Date(l), new Date) > t)
}