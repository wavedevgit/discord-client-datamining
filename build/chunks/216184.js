/** chunk id: 216184 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(635377),
    a = n.n(i),
    r = n(311907),
    l = n(73153);
let s = new(a())({
    max: 500
});
class o extends r.Ay.Store {
    static displayName = "MessageActivityInviteCoverImageStore";
    getCoverImageURL(e) {
        let {
            messageId: t
        } = e;
        return s.get(t)
    }
}
let d = new o(l.h, {
    SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function(e) {
        let {
            messageId: t,
            coverImageURL: n
        } = e;
        if (s.get(t) === n) return !1;
        s.set(t, n)
    }
})