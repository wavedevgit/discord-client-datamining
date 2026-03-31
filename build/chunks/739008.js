/** chunk id: 739008 params = (module,exports,require) **/
n.d(t, {
    P: () => c
});
var i = n(843472),
    r = n(567035),
    s = n(458294),
    a = n(320501),
    l = n(309010),
    o = n(967198),
    d = n(203982),
    _ = n(652215);
let c = {
    binds: ["shift+esc"],
    comboKeysBindGlobal: !0,
    action() {
        let e = o.A.getGuildId();
        if (null == e || !s.default.getGuildHasUnreadIgnoreMuted(e)) return;
        (0, r.A)([e]);
        let t = l.A.getChannelId(e);
        null == t || (a.A.getMessages(t).hasMoreAfter ? i.A.jumpToPresent(t, _.EMb) : d._.dispatch(_.jej.SCROLLTO_PRESENT))
    }
}