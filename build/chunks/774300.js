/** chunk id: 774300, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => u,
    F: () => c
});
var n, o = i(308528),
    s = i(843472),
    a = i(626584),
    d = i(734057),
    r = i(927813),
    l = i(513391);
let _ = +r.A.Millis.SECOND + 10;
var c = ((n = {})[n.GROUP_DM = 0] = "GROUP_DM", n[n.USER = 1] = "USER", n[n.CHANNEL = 2] = "CHANNEL", n);
class p extends l.A {
    constructor() {
        super(new a.A("InviteQueue"), _)
    }
    _sendInvite(e, t, i, n, o) {
        s.A.sendInvite(e.id, t, i, n).then(() => o(null, !0), () => o(null, !1))
    }
    drain(e, t) {
        let {
            location: i,
            inviteAnalyticsMetadata: n
        } = e;
        switch (e.type) {
            case 0:
            case 2:
                this._sendInvite(e.channel, e.inviteKey, i, n, t);
                break;
            case 1:
                o.A.ensurePrivateChannel(e.user.id).then(o => {
                    let s = d.A.getChannel(o);
                    null != s && this._sendInvite(s, e.inviteKey, i, n, t)
                }, () => t(null, !1))
        }
    }
}
let u = new p