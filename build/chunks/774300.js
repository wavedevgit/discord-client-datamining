/** Chunk was on 41278 **/
/** chunk id: 774300, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => v,
    F: () => c
});
var a, i = t(308528),
    _ = t(843472),
    s = t(626584),
    r = t(734057),
    o = t(927813),
    d = t(513391);
let b = +o.A.Millis.SECOND + 10;
var c = ((a = {})[a.GROUP_DM = 0] = "GROUP_DM", a[a.USER = 1] = "USER", a[a.CHANNEL = 2] = "CHANNEL", a);
class l extends d.A {
    _sendInvite(e, n, t, a, i) {
        _.A.sendInvite(e.id, n, t, a).then(() => i(null, !0), () => i(null, !1))
    }
    drain(e, n) {
        let {
            location: t,
            inviteAnalyticsMetadata: a
        } = e;
        switch (e.type) {
            case 0:
            case 2:
                this._sendInvite(e.channel, e.inviteKey, t, a, n);
                break;
            case 1:
                i.A.ensurePrivateChannel(e.user.id).then(i => {
                    let _ = r.A.getChannel(i);
                    null != _ && this._sendInvite(_, e.inviteKey, t, a, n)
                }, () => n(null, !1))
        }
    }
    constructor() {
        super(new s.A("InviteQueue"), b)
    }
}
let v = new l