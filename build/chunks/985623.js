/** chunk id: 985623, original params: e,t,n (module,exports,require) **/
var r = n(111956),
    i = n(646344),
    a = "Expected a function";
e.exports = function(e, t, n) {
    var o = !0,
        s = !0;
    if ("function" != typeof e) throw TypeError(a);
    return i(n) && (o = "leading" in n ? !!n.leading : o, s = "trailing" in n ? !!n.trailing : s), r(e, t, {
        leading: o,
        maxWait: t,
        trailing: s
    })
}