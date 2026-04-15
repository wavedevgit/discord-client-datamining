/** chunk id: 420970 params = (module,exports,require) **/
n.d(t, {
    T: () => a
});
var i = n(355443),
    l = n(672162);

function a(e, t) {
    let {
        scope: n,
        handler: a
    } = t, r = {
        scope: n,
        handler: a
    }, s = i.H[e]?.request, o = null;
    return null != s && (r.validation = function(e) {
        return null == o && (o = (0, l.k5)(e.object(s(e)))), o
    }), r
}