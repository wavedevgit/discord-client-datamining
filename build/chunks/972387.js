/** chunk id: 972387, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(73153),
    l = n(846293),
    a = n(159001),
    r = n(960736),
    o = n(253932),
    _ = n(954571),
    d = n(4274),
    s = n(115063),
    u = n(652215);
let c = {
    acceptInvite(e) {
        let t = l.Ay.getInviteContext("Desktop Invite Modal", e),
            n = (0, r.tJ)(),
            _ = (0, r.Z1)(),
            u = (0, r.N9)();
        l.Ay.acceptInvite({
            inviteKey: e.code,
            context: t,
            callback: e => {
                null == e || null == e.guild || null == e.channel || __OVERLAY__ || l.Ay.transitionToInvite(e)
            }
        }).then(() => {
            if (null != e.guild) {
                if (_) {
                    if (o.$s.getSetting().includes(e.guild.id)) {
                        let t = new Set((0, s.Tb)());
                        t.delete(e.guild.id), o.$s.updateSetting(Array.from(t))
                    }
                } else {
                    let t = new Set((0, s.Tb)());
                    t.add(e.guild?.id), o.$s.updateSetting(Array.from(t))
                }
                if (u) {
                    if (o.JG.getSetting().includes(e.guild.id)) {
                        let t = new Set((0, s.Kk)());
                        t.delete(e.guild.id), o.JG.updateSetting(Array.from(t))
                    }
                } else {
                    let t = new Set((0, s.Kk)());
                    t.add(e.guild.id), o.JG.updateSetting(Array.from(t))
                }
                null != n && n.length > 0 && (0, a.GL)(e.guild.id, {
                    nick: n
                })
            }
            this.close()
        }, e => {
            i.h.dispatch({
                type: "INVITE_MODAL_ERROR",
                message: (0, d.s)(e.code)
            })
        })
    },
    close() {
        let e = (0, r.p9)(),
            t = (0, r.xD)();
        if ((0, r.jJ)()) {
            let n = (0, r.tJ)(),
                i = (0, r.Z1)(),
                l = (0, r.N9)(),
                a = (0, r.qO)();
            _.default.track(u.HAw.INVITE_ACCEPT_JOIN_SETTINGS_SET, {
                invite_code: e,
                guild_id: t,
                nickname_present: null != n && n.length > 0,
                dms_allowed: i,
                activity_status_shown: l,
                changed_from_default: a
            })
        }(0, r.xP)(), i.h.dispatch({
            type: "INVITE_MODAL_CLOSE"
        })
    }
}