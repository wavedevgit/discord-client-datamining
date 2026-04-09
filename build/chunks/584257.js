/** chunk id: 584257 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(73153),
    a = n(272355),
    l = n(961350),
    r = n(414736),
    s = n(874486),
    o = n(927018),
    d = n(3137),
    c = n(559908);
let u = new Set;
class A extends a.A {
    _initialize() {
        i.h.subscribe("MESSAGE_CREATE", this.handleMessageCreate), i.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate)
    }
    _terminate() {
        i.h.unsubscribe("MESSAGE_CREATE", this.handleMessageCreate), i.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate)
    }
    handleSettingsUpdate = e => {
        let {
            settings: t
        } = e;
        t.enabled ? (0, r._)(o.sn.ENABLE_POGGERMODE) : !1 === t.enabled && (0, r._)(o.sn.DISABLE_POGGERMODE), Object.keys(t).some(e => e.startsWith("confetti")) && (0, r._)(o.sn.CUSTOMIZE_CONFETTI)
    };
    handleMessageCreate = e => {
        let {
            channelId: t,
            message: {
                author: n,
                nonce: i,
                mentions: a
            }
        } = e;
        if (!d.A.isEnabled()) return !1;
        let A = l.default.getId();
        if (a?.find(e => e.id === A) != null ? (0, r._)(o.sn.PING_ME) : (a?.length ?? 0) > 0 && n?.id === A && (0, r._)(o.sn.PING_SOMEONE), !(0, c.gN)(n?.id, A, i, u)) return !1;
        let {
            combo: h
        } = c.Ay.getMostRecentMessageCombo(t) ?? {};
        if (null == h) return !1;
        Object.values(o.sn).forEach(e => {
            if (null != s.A.getUnlocked(e)) return;
            let t = (0, o.vM)(e),
                n = t?.checkUnlock;
            null == n || !1 !== n(h) && (0, r._)(e)
        })
    }
}
let h = new A