/** chunk id: 863439 params = (module,exports,require) **/
n.d(t, {
    A: () => s,
    z: () => o
});
var a = n(417597),
    i = n(253932),
    l = n(576705),
    r = n(652215);

function s(e, t) {
    switch (e) {
        case r.P6Q.ALWAYS:
            return !0;
        case r.P6Q.IF_MODERATOR:
            return t;
        case r.P6Q.ON_CLICK:
        default:
            return !1
    }
}

function o(e) {
    let t = (0, a.bG)([l.A], () => l.A.can(r.xBc.MANAGE_MESSAGES, e));
    return !s(i.gs.useSetting(), t)
}