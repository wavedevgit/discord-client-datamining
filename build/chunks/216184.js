/** chunk id: 216184 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(635377),
    l = n.n(i),
    s = n(311907),
    a = n(73153);
let r = new(l())({
    max: 500
});
class o extends s.Ay.Store {
    static displayName = "MessageActivityInviteCoverImageStore";
    getCoverImageURL(e) {
        let {
            messageId: t
        } = e;
        return r.get(t)
    }
}
let d = new o(a.h, {
    SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function(e) {
        let {
            messageId: t,
            coverImageURL: n
        } = e;
        if (r.get(t) === n) return !1;
        r.set(t, n)
    }
})