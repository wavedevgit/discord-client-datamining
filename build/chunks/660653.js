/** Chunk was on 92643 **/
/** chunk id: 660653, original params: t,e,n (module,exports,require) **/
n.d(e, {
    W: () => s,
    u: () => a
});
var i = n(993408),
    r = n(442759);

function l(t) {
    let e = new r.Ym(t.items);
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
        firstNameplate: i
    } = l(t);
    return null != e && null != n && null == i || null != e && null != n && null != i
}

function s(t) {
    if (!(0, i.aw)(t)) return !1;
    let {
        firstNameplate: e
    } = l(t);
    return null != e
}