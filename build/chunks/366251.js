/** Chunk was on 1113 **/
/** chunk id: 366251, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r, l, i = n(311907),
    s = n(73153),
    a = n(383501);
let o = {},
    c = !1,
    u = null;

function d(e) {
    e in o && delete o[e]
}

function h() {
    if (!c && a.A.isConnected()) {
        let e = a.A.getChannelId();
        if (null != e) return d(e), u = e, c = !0, !0
    } else if (c && !a.A.isConnected() && null != u) return d(u), u = null, c = !1, !0;
    return !1
}
class p extends(l = i.Ay.Store) {
    initialize() {
        this.waitFor(a.A), this.syncWith([a.A], h)
    }
    getIsPopoverDismissed(e) {
        var t;
        return null != e && null != (t = o[e]) && t
    }
    getShouldShowPopover(e) {
        return null != e && a.A.isConnected() && a.A.getChannelId() === e && !this.getIsPopoverDismissed(e)
    }
}(r = "displayName") in p ? Object.defineProperty(p, r, {
    value: "VoiceInvitesuggestionsStore ",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : p[r] = "VoiceInvitesuggestionsStore ";
let g = new p(s.h, {
    VOICE_INVITE_SUGGESTIONS_DISMISS_POPOVER: function(e) {
        let {
            channelId: t
        } = e;
        return !o[t] && (o[t] = !0, !0)
    }
})