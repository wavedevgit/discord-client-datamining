/** chunk id: 837367 params = (module,exports,require) **/
n.d(t, {
    q: () => i
});

function i(e) {
    let t, n = !1;
    return function() {
        for (var i = arguments.length, a = Array(i), l = 0; l < i; l++) a[l] = arguments[l];
        return n || (n = !0, t = e(...a)), t
    }
}