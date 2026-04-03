/** chunk id: 624456 params = (module,exports,require) **/
n.d(t, {
    M: () => r,
    l: () => s
});
var i = n(284009),
    l = n.n(i);

function r(e) {
    let t = e.items;
    return l()(1 === t.length, "more than 1 subscription item for role subscription"), t[0].planId
}

function s(e) {
    let t = e?.renewalMutations?.items;
    if (null != t) return l()(t.length <= 1, "more than 1 renewal mutation for role subscription"), t?.[0].planId
}