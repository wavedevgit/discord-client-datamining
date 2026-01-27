/** Chunk was on 92779 **/
/** chunk id: 774300, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u,
    F: () => p
});
var r, o = n(308528),
    s = n(843472),
    i = n(626584),
    a = n(734057),
    c = n(927813),
    l = n(513391);
let d = +c.A.Millis.SECOND + 10;
var p = ((r = {})[r.GROUP_DM = 0] = "GROUP_DM", r[r.USER = 1] = "USER", r[r.CHANNEL = 2] = "CHANNEL", r);
class b extends l.A {
    _sendInvite(e, t, n, r, o) {
        s.A.sendInvite(e.id, t, n, r).then(() => o(null, !0), () => o(null, !1))
    }
    drain(e, t) {
        let {
            location: n,
            inviteAnalyticsMetadata: r
        } = e;
        switch (e.type) {
            case 0:
            case 2:
                this._sendInvite(e.channel, e.inviteKey, n, r, t);
                break;
            case 1:
                o.A.ensurePrivateChannel(e.user.id).then(o => {
                    let s = a.A.getChannel(o);
                    null != s && this._sendInvite(s, e.inviteKey, n, r, t)
                }, () => t(null, !1))
        }
    }
    constructor() {
        super(new i.A("InviteQueue"), d)
    }
}
let u = new b