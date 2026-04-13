/** chunk id: 972387 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(73153),
    l = n(846293),
    a = n(159001),
    d = n(960736),
    r = n(253932),
    o = n(954571),
    _ = n(4274),
    u = n(115063),
    s = n(652215);
let c = {
    acceptInvite(e, t) {
        let n = l.Ay.getInviteContext("Desktop Invite Modal", e),
            o = (0, d.tJ)(),
            s = (0, d.Z1)(),
            c = (0, d.N9)();
        l.Ay.acceptInvite({
            inviteKey: e.code,
            context: {
                ...n,
                ...null != t ? {
                    invite_instance_id: t
                } : {}
            },
            callback: e => {
                null == e || null == e.guild || null == e.channel || __OVERLAY__ || l.Ay.transitionToInvite(e)
            }
        }).then(() => {
            if (null != e.guild) {
                if (s) {
                    if (r.$s.getSetting().includes(e.guild.id)) {
                        let t = new Set((0, u.Tb)());
                        t.delete(e.guild.id), r.$s.updateSetting(Array.from(t))
                    }
                } else {
                    let t = new Set((0, u.Tb)());
                    t.add(e.guild?.id), r.$s.updateSetting(Array.from(t))
                }
                if (c) {
                    if (r.JG.getSetting().includes(e.guild.id)) {
                        let t = new Set((0, u.Kk)());
                        t.delete(e.guild.id), r.JG.updateSetting(Array.from(t))
                    }
                } else {
                    let t = new Set((0, u.Kk)());
                    t.add(e.guild.id), r.JG.updateSetting(Array.from(t))
                }
                null != o && o.length > 0 && (0, a.GL)(e.guild.id, {
                    nick: o
                })
            }
            this.close(e.code)
        }, e => {
            i.h.dispatch({
                type: "INVITE_MODAL_ERROR",
                message: (0, _.s)(e.code)
            })
        })
    },
    close(e) {
        let t = e ?? (0, d.p9)(),
            n = (0, d.xD)();
        if ((0, d.jJ)()) {
            let e = (0, d.tJ)(),
                i = (0, d.Z1)(),
                l = (0, d.N9)(),
                a = (0, d.qO)();
            o.default.track(s.HAw.INVITE_ACCEPT_JOIN_SETTINGS_SET, {
                invite_code: t,
                guild_id: n,
                nickname_present: null != e && e.length > 0,
                dms_allowed: i,
                activity_status_shown: l,
                changed_from_default: a
            })
        }(0, d.xP)(), i.h.dispatch({
            type: "INVITE_MODAL_CLOSE",
            inviteCode: t
        })
    }
}