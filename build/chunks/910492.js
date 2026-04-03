/** chunk id: 910492 params = (module,exports,require) **/
n.d(t, {
    O: () => A,
    q: () => u
});
var i = n(735438),
    r = n.n(i),
    a = n(265422),
    l = n(851109),
    s = n(734057),
    o = n(186111),
    d = n(309010),
    c = n(203982),
    _ = n(652215);
let u = {
        binds: ["mod+i"],
        comboKeysBindGlobal: !0,
        action: () => !(o.A.getLayers().length > 0) && ((() => {
            let {
                notificationCenterVariant: e
            } = (0, l.GE)({
                location: "TOGGLE_INBOX"
            });
            if ("sidebar" !== e) return;
            let t = d.A.getChannelId(),
                n = s.A.getChannel(t);
            return window.location.pathname.startsWith(_.BVt.CHANNEL(_.gNP)) && null != n ? (0, a.i)(n.guild_id, t) : (0, a.a)(_.BVt.CHANNEL(_.gNP, t ?? void 0))
        })(), c._.dispatch(_.jej.TOGGLE_INBOX), !1)
    },
    A = {
        binds: ["mod+shift+e"],
        comboKeysBindGlobal: !0,
        action: r().debounce(() => {
            if (c._.hasSubscribers(_.jej.MARK_TOP_INBOX_CHANNEL_READ)) return c._.dispatch(_.jej.MARK_TOP_INBOX_CHANNEL_READ), !1
        }, 100, {
            leading: !0
        })
    }