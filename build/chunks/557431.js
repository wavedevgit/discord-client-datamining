/** chunk id: 557431 params = (module,exports,require) **/
e.exports = function(e, t, i, n) {
    var s = -1,
        a = null == e ? 0 : e.length;
    for (n && a && (i = e[++s]); ++s < a;) i = t(i, e[s], s, e);
    return i
}