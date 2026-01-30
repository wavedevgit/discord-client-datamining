/** Chunk was on 92414 **/
/** chunk id: 863439, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a,
    z: () => o
});
var r = n(417597),
    l = n(253932),
    i = n(576705),
    s = n(652215);

function a(e, t) {
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
    let t = (0, r.bG)([i.A], () => i.A.can(s.xBc.MANAGE_MESSAGES, e));
    return !a(l.gs.useSetting(), t)
}