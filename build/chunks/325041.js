/** chunk id: 325041 params = (module,exports,require) **/
e.exports = function(e, n, t) {
    var i = -1,
        l = e.length;
    n < 0 && (n = -n > l ? 0 : l + n), (t = t > l ? l : t) < 0 && (t += l), l = n > t ? 0 : t - n >>> 0, n >>>= 0;
    for (var r = Array(l); ++i < l;) r[i] = e[i + n];
    return r
}