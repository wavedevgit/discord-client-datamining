/** Chunk was on 78528 **/
/** chunk id: 972387, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(896048);
var r = n(73153),
    l = n(846293),
    i = n(159001),
    s = n(960736),
    a = n(253932),
    o = n(954571),
    c = n(4274),
    u = n(115063),
    d = n(652215);
let p = {
    acceptInvite(e) {
        let t = l.Ay.getInviteContext("Desktop Invite Modal", e),
            n = (0, s.tJ)(),
            o = (0, s.Z1)(),
            d = (0, s.N9)();
        l.Ay.acceptInvite({
            inviteKey: e.code,
            context: t,
            callback: e => {
                null == e || null == e.guild || null == e.channel || __OVERLAY__ || l.Ay.transitionToInvite(e)
            }
        }).then(() => {
            if (null != e.guild) {
                if (o) {
                    if (a.$s.getSetting().includes(e.guild.id)) {
                        let t = new Set((0, u.Tb)());
                        t.delete(e.guild.id), a.$s.updateSetting(Array.from(t))
                    }
                } else {
                    var t;
                    let n = new Set((0, u.Tb)());
                    n.add(null == (t = e.guild) ? void 0 : t.id), a.$s.updateSetting(Array.from(n))
                }
                if (d) {
                    if (a.JG.getSetting().includes(e.guild.id)) {
                        let t = new Set((0, u.Kk)());
                        t.delete(e.guild.id), a.JG.updateSetting(Array.from(t))
                    }
                } else {
                    let t = new Set((0, u.Kk)());
                    t.add(e.guild.id), a.JG.updateSetting(Array.from(t))
                }
                null != n && n.length > 0 && (0, i.GL)(e.guild.id, {
                    nick: n
                })
            }
            this.close()
        }, e => {
            r.h.dispatch({
                type: "INVITE_MODAL_ERROR",
                message: (0, c.s)(e.code)
            })
        })
    },
    close() {
        let e = (0, s.p9)(),
            t = (0, s.xD)();
        if ((0, s.jJ)()) {
            let n = (0, s.tJ)(),
                r = (0, s.Z1)(),
                l = (0, s.N9)(),
                i = (0, s.qO)();
            o.default.track(d.HAw.INVITE_ACCEPT_JOIN_SETTINGS_SET, {
                invite_code: e,
                guild_id: t,
                nickname_present: null != n && n.length > 0,
                dms_allowed: r,
                activity_status_shown: l,
                changed_from_default: i
            })
        }(0, s.xP)(), r.h.dispatch({
            type: "INVITE_MODAL_CLOSE"
        })
    }
}