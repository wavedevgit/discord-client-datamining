/** chunk id: 910492 params = (module,exports,require) **/
n.d(t, {
    O: () => A,
    q: () => _
});
var i = n(735438),
    r = n.n(i),
    l = n(265422),
    o = n(851109),
    s = n(734057),
    a = n(186111),
    d = n(309010),
    c = n(203982),
    u = n(652215);
let _ = {
        binds: ["mod+i"],
        comboKeysBindGlobal: !0,
        action: () => !(a.A.getLayers().length > 0) && ((() => {
            let {
                notificationCenterVariant: e
            } = (0, o.GE)({
                location: "TOGGLE_INBOX"
            });
            if ("sidebar" !== e) return;
            let t = d.A.getChannelId(),
                n = s.A.getChannel(t);
            return window.location.pathname.startsWith(u.BVt.CHANNEL(u.gNP)) && null != n ? (0, l.i)(n.guild_id, t) : (0, l.a)(u.BVt.CHANNEL(u.gNP, t ?? void 0))
        })(), c._.dispatch(u.jej.TOGGLE_INBOX), !1)
    },
    A = {
        binds: ["mod+shift+e"],
        comboKeysBindGlobal: !0,
        action: r().debounce(() => {
            if (c._.hasSubscribers(u.jej.MARK_TOP_INBOX_CHANNEL_READ)) return c._.dispatch(u.jej.MARK_TOP_INBOX_CHANNEL_READ), !1
        }, 100, {
            leading: !0
        })
    }