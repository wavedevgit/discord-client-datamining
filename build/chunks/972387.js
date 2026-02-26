/** chunk id: 972387, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => c
});
var n = i(73153),
    l = i(846293),
    r = i(159001),
    d = i(960736),
    a = i(253932),
    o = i(954571),
    u = i(4274),
    s = i(115063),
    _ = i(652215);
let c = {
    acceptInvite(e) {
        let t = l.Ay.getInviteContext("Desktop Invite Modal", e),
            i = (0, d.tJ)(),
            o = (0, d.Z1)(),
            _ = (0, d.N9)();
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
                        let t = new Set((0, s.Tb)());
                        t.delete(e.guild.id), a.$s.updateSetting(Array.from(t))
                    }
                } else {
                    let t = new Set((0, s.Tb)());
                    t.add(e.guild?.id), a.$s.updateSetting(Array.from(t))
                }
                if (_) {
                    if (a.JG.getSetting().includes(e.guild.id)) {
                        let t = new Set((0, s.Kk)());
                        t.delete(e.guild.id), a.JG.updateSetting(Array.from(t))
                    }
                } else {
                    let t = new Set((0, s.Kk)());
                    t.add(e.guild.id), a.JG.updateSetting(Array.from(t))
                }
                null != i && i.length > 0 && (0, r.GL)(e.guild.id, {
                    nick: i
                })
            }
            this.close()
        }, e => {
            n.h.dispatch({
                type: "INVITE_MODAL_ERROR",
                message: (0, u.s)(e.code)
            })
        })
    },
    close() {
        let e = (0, d.p9)(),
            t = (0, d.xD)();
        if ((0, d.jJ)()) {
            let i = (0, d.tJ)(),
                n = (0, d.Z1)(),
                l = (0, d.N9)(),
                r = (0, d.qO)();
            o.default.track(_.HAw.INVITE_ACCEPT_JOIN_SETTINGS_SET, {
                invite_code: e,
                guild_id: t,
                nickname_present: null != i && i.length > 0,
                dms_allowed: n,
                activity_status_shown: l,
                changed_from_default: r
            })
        }(0, d.xP)(), n.h.dispatch({
            type: "INVITE_MODAL_CLOSE"
        })
    }
}