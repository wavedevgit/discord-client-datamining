/** chunk id: 837367 params = (module,exports,require) **/
n.d(t, {
    q: () => i
});

function i(e) {
    let t, n = !1;
    return function() {
        for (var i = arguments.length, l = Array(i), r = 0; r < i; r++) l[r] = arguments[r];
        return n || (n = !0, t = e(...l)), t
    }
}