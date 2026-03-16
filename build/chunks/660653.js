/** chunk id: 660653 params = (module,exports,require) **/
r.d(e, {
    Wb: () => i,
    uh: () => s
});
var n = r(993408),
    l = r(442759);

function a(t) {
    var e;
    let r;
    return e = t.items, {
        firstProfileEffect: (r = new l.Ym(e)).firstProfileEffect,
        firstAvatarDecoration: r.firstAvatarDecoration,
        firstNameplate: r.firstNameplate
    }
}

function s(t) {
    return function(t) {
        let {
            firstAvatarDecoration: e,
            firstProfileEffect: r,
            firstNameplate: n
        } = t;
        return null != e && null != r && null == n || null != e && null != r && null != n
    }(a(t))
}

function i(t) {
    if (!(0, n.aw)(t)) return !1;
    let {
        firstNameplate: e
    } = a(t);
    return null != e
}