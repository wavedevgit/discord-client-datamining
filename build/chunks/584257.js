/** chunk id: 584257, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(896048);
var r = n(73153),
    i = n(272355),
    l = n(961350),
    a = n(414736),
    s = n(874486),
    o = n(927018),
    c = n(3137),
    u = n(559908);

function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let p = new Set;
class h extends i.A {
    _initialize() {
        r.h.subscribe("MESSAGE_CREATE", this.handleMessageCreate), r.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate)
    }
    _terminate() {
        r.h.unsubscribe("MESSAGE_CREATE", this.handleMessageCreate), r.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate)
    }
    constructor(...e) {
        super(...e), d(this, "handleSettingsUpdate", e => {
            let {
                settings: t
            } = e;
            t.enabled ? (0, a._)(o.sn.ENABLE_POGGERMODE) : !1 === t.enabled && (0, a._)(o.sn.DISABLE_POGGERMODE), Object.keys(t).some(e => e.startsWith("confetti")) && (0, a._)(o.sn.CUSTOMIZE_CONFETTI)
        }), d(this, "handleMessageCreate", e => {
            var t;
            let {
                channelId: n,
                message: {
                    author: r,
                    nonce: i,
                    mentions: d
                }
            } = e;
            if (!c.A.isEnabled()) return !1;
            let h = l.default.getId();
            if ((null == d ? void 0 : d.find(e => e.id === h)) != null ? (0, a._)(o.sn.PING_ME) : (null != (t = null == d ? void 0 : d.length) ? t : 0) > 0 && (null == r ? void 0 : r.id) === h && (0, a._)(o.sn.PING_SOMEONE), !(0, u.gN)(null == r ? void 0 : r.id, h, i, p)) return !1;
            let g = u.Ay.getMostRecentMessageCombo(n),
                {
                    combo: m
                } = null != g ? g : {};
            if (null == m) return !1;
            Object.values(o.sn).forEach(e => {
                if (null != s.A.getUnlocked(e)) return;
                let t = (0, o.vM)(e),
                    n = null == t ? void 0 : t.checkUnlock;
                null == n || !1 !== n(m) && (0, a._)(e)
            })
        })
    }
}
let g = new h