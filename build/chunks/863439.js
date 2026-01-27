/** Chunk was on 92414 **/
/** chunk id: 863439, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o,
    z: () => a
});
var r = n(417597),
    i = n(253932),
    l = n(576705),
    s = n(652215);

function o(e, t) {
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

function a(e) {
    let t = (0, r.bG)([l.A], () => l.A.can(s.xBc.MANAGE_MESSAGES, e));
    return !o(i.gs.useSetting(), t)
}