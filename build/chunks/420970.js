/** chunk id: 420970 params = (module,exports,require) **/
n.d(t, {
    T: () => l
});
var i = n(355443),
    a = n(672162);

function l(e, t) {
    let {
        scope: n,
        handler: l
    } = t, r = {
        scope: n,
        handler: l
    }, s = i.H[e]?.request, o = null;
    return null != s && (r.validation = function(e) {
        return null == o && (o = (0, a.k5)(e.object(s(e)))), o
    }), r
}