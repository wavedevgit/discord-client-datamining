/** chunk id: 774300, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => p,
    F: () => c
});
var n, s = i(308528),
    o = i(843472),
    a = i(626584),
    d = i(734057),
    r = i(927813),
    l = i(513391);
let _ = +r.A.Millis.SECOND + 10;
var c = ((n = {})[n.GROUP_DM = 0] = "GROUP_DM", n[n.USER = 1] = "USER", n[n.CHANNEL = 2] = "CHANNEL", n);
class u extends l.A {
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
let p = new u