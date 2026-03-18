/** chunk id: 624456 params = (module,exports,require) **/
n.d(t, {
    M: () => a,
    l: () => l
});
var i = n(284009),
    r = n.n(i);

function a(e) {
    let t = e.items;
    return r()(1 === t.length, "more than 1 subscription item for role subscription"), t[0].planId
}

function l(e) {
    let t = e?.renewalMutations?.items;
    if (null != t) return r()(t.length <= 1, "more than 1 renewal mutation for role subscription"), t?.[0].planId
}