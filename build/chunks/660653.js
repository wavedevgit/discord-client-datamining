/** chunk id: 660653 params = (module,exports,require) **/
n.d(e, {
    Wb: () => s,
    uh: () => l
});
var i = n(993408),
    r = n(442759);

function a(t) {
    var e;
    let n;
    return e = t.items, {
        firstProfileEffect: (n = new r.Ym(e)).firstProfileEffect,
        firstAvatarDecoration: n.firstAvatarDecoration,
        firstNameplate: n.firstNameplate
    }
}

function l(t) {
    return function(t) {
        let {
            firstAvatarDecoration: e,
            firstProfileEffect: n,
            firstNameplate: i
        } = t;
        return null != e && null != n && null == i || null != e && null != n && null != i
    }(a(t))
}

function s(t) {
    if (!(0, i.aw)(t)) return !1;
    let {
        firstNameplate: e
    } = a(t);
    return null != e
}