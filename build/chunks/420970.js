/** chunk id: 420970 params = (module,exports,require) **/
n.d(t, {
    T: () => r
});
var i = n(355443),
    l = n(672162);

function r(e, t) {
    let {
        scope: n,
        handler: r
    } = t, a = {
        scope: n,
        handler: r
    }, s = i.H[e]?.request, o = null;
    return null != s && (a.validation = function(e) {
        return null == o && (o = (0, l.k5)(e.object(s(e)))), o
    }), a
}