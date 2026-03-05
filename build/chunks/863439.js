/** chunk id: 863439, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => r,
    z: () => o
});
var i = n(417597),
    s = n(253932),
    l = n(576705),
    a = n(652215);

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
    let t = (0, i.bG)([l.A], () => l.A.can(a.xBc.MANAGE_MESSAGES, e));
    return !r(s.gs.useSetting(), t)
}