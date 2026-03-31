/** chunk id: 774300 params = (module,exports,require) **/
i.d(e, {
    A: () => p,
    F: () => u
});
var n, s = i(308528),
    o = i(843472),
    a = i(626584),
    d = i(734057),
    l = i(927813),
    r = i(513391);
let _ = +l.A.Millis.SECOND + 10;
var u = ((n = {})[n.GROUP_DM = 0] = "GROUP_DM", n[n.USER = 1] = "USER", n[n.CHANNEL = 2] = "CHANNEL", n);
class c extends r.A {
    constructor() {
        super(new a.A("InviteQueue"), _)
    }
    _sendInvite(t, e, i, n, s) {
        o.A.sendInvite(t.id, e, i, n).then(() => s(null, !0), () => s(null, !1))
    }
    drain(t, e) {
        let {
            location: i,
            inviteAnalyticsMetadata: n
        } = t;
        switch (t.type) {
            case 0:
            case 2:
                this._sendInvite(t.channel, t.inviteKey, i, n, e);
                break;
            case 1:
                s.A.ensurePrivateChannel(t.user.id).then(s => {
                    let o = d.A.getChannel(s);
                    null != o && this._sendInvite(o, t.inviteKey, i, n, e)
                }, () => e(null, !1))
        }
    }
}
let p = new c