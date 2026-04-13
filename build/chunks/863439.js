/** chunk id: 863439 params = (module,exports,require) **/
i.d(t, {
    A: () => r,
    z: () => o
});
var n = i(417597),
    s = i(253932),
    l = i(576705),
    a = i(652215);

function r(e, t) {
    switch (e) {
        case a.P6Q.ALWAYS:
            return !0;
        case a.P6Q.IF_MODERATOR:
            return t;
        case a.P6Q.ON_CLICK:
        default:
            return !1
    }
}

function o(e) {
    let t = (0, n.bG)([l.A], () => l.A.can(a.xBc.MANAGE_MESSAGES, e));
    return !r(s.gs.useSetting(), t)
}