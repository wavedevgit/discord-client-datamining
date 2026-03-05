/** chunk id: 837367, original params: e,t,n (module,exports,require) **/
n.d(t, {
    q: () => i
});

function i(e) {
    let t, n = !1;
    return function() {
        for (var i = arguments.length, s = Array(i), l = 0; l < i; l++) s[l] = arguments[l];
        return n || (n = !0, t = e(...s)), t
    }
}