/** chunk id: 420970, original params: e,t,n (module,exports,require) **/
n.d(t, {
    T: () => l
});
var i = n(355443),
    r = n(672162);

function l(e, t) {
    let {
        scope: n,
        handler: l
    } = t, a = {
        scope: n,
        handler: l
    }, s = i.H[e]?.request, o = null;
    return null != s && (a.validation = function(e) {
        return null == o && (o = (0, r.k5)(e.object(s(e)))), o
    }), a
}