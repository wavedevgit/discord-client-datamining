/** chunk id: 863439 params = (module,exports,require) **/
n.d(t, {
    A: () => l,
    z: () => o
});
var a = n(417597),
    i = n(253932),
    r = n(576705),
    s = n(652215);

function l(e, t) {
    switch (e) {
        case s.P6Q.ALWAYS:
            return !0;
        case s.P6Q.IF_MODERATOR:
            return t;
        case s.P6Q.ON_CLICK:
        default:
            return !1
    }
}

function o(e) {
    let t = (0, a.bG)([r.A], () => r.A.can(s.xBc.MANAGE_MESSAGES, e));
    return !l(i.gs.useSetting(), t)
}