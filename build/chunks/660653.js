/** chunk id: 660653, original params: t,e,n (module,exports,require) **/
n.d(e, {
    W: () => s,
    u: () => a
});
var r = n(993408),
    i = n(442759);

function l(t) {
    let e = new i.Ym(t.items);
    return {
        firstProfileEffect: e.firstProfileEffect,
        firstAvatarDecoration: e.firstAvatarDecoration,
        firstNameplate: e.firstNameplate
    }
}

function a(t) {
    let {
        firstAvatarDecoration: e,
        firstProfileEffect: n,
        firstNameplate: r
    } = l(t);
    return null != e && null != n && null == r || null != e && null != n && null != r
}

function s(t) {
    if (!(0, r.aw)(t)) return !1;
    let {
        firstNameplate: e
    } = l(t);
    return null != e
}