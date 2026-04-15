/** chunk id: 837367 params = (module,exports,require) **/
n.d(t, {
    q: () => i
});

function i(e) {
    let t, n = !1;
    return function() {
        for (var i = arguments.length, l = Array(i), a = 0; a < i; a++) l[a] = arguments[a];
        return n || (n = !0, t = e(...l)), t
    }
}