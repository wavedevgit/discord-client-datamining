/** chunk id: 660653, original params: t,e,n (module,exports,require) **/
n.d(e, {
    Wb: () => s,
    uh: () => a
});
var r = n(993408),
    i = n(442759);

function l(t) {
    var e;
    let n;
    return e = t.items, {
        firstProfileEffect: (n = new i.Ym(e)).firstProfileEffect,
        firstAvatarDecoration: n.firstAvatarDecoration,
        firstNameplate: n.firstNameplate
    }
}

function a(t) {
    return function(t) {
        let {
            firstAvatarDecoration: e,
            firstProfileEffect: n,
            firstNameplate: r
        } = t;
        return null != e && null != n && null == r || null != e && null != n && null != r
    }(l(t))
}

function s(t) {
    if (!(0, r.aw)(t)) return !1;
    let {
        firstNameplate: e
    } = l(t);
    return null != e
}