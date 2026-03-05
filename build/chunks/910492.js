/** chunk id: 910492 params = (module,exports,require) **/
n.d(t, {
    O: () => A,
    q: () => u
});
var i = n(735438),
    r = n.n(i),
    a = n(265422),
    s = n(851109),
    l = n(734057),
    o = n(186111),
    d = n(309010),
    _ = n(203982),
    c = n(652215);
let u = {
        binds: ["mod+i"],
        comboKeysBindGlobal: !0,
        action: () => !(o.A.getLayers().length > 0) && ((() => {
            let {
                notificationCenterVariant: e
            } = (0, s.GE)({
                location: "TOGGLE_INBOX"
            });
            if ("sidebar" !== e) return;
            let t = d.A.getChannelId(),
                n = l.A.getChannel(t);
            return window.location.pathname.startsWith(c.BVt.CHANNEL(c.gNP)) && null != n ? (0, a.i)(n.guild_id, t) : (0, a.a)(c.BVt.CHANNEL(c.gNP, t ?? void 0))
        })(), _._.dispatch(c.jej.TOGGLE_INBOX), !1)
    },
    A = {
        binds: ["mod+shift+e"],
        comboKeysBindGlobal: !0,
        action: r().debounce(() => {
            if (_._.hasSubscribers(c.jej.MARK_TOP_INBOX_CHANNEL_READ)) return _._.dispatch(c.jej.MARK_TOP_INBOX_CHANNEL_READ), !1
        }, 100, {
            leading: !0
        })
    }