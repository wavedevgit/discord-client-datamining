/** chunk id: 972387, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => s
}), i(896048);
var a = i(73153),
    n = i(846293),
    _ = i(159001),
    l = i(960736),
    r = i(253932),
    d = i(954571),
    o = i(4274),
    f = i(115063),
    p = i(652215);
let s = {
    acceptInvite(e) {
        let t = n.Ay.getInviteContext("Desktop Invite Modal", e),
            i = (0, l.tJ)(),
            d = (0, l.Z1)(),
            p = (0, l.N9)();
        n.Ay.acceptInvite({
            inviteKey: e.code,
            context: t,
            callback: e => {
                null == e || null == e.guild || null == e.channel || __OVERLAY__ || n.Ay.transitionToInvite(e)
            }
        }).then(() => {
            if (null != e.guild) {
                if (d) {
                    if (r.$s.getSetting().includes(e.guild.id)) {
                        let t = new Set((0, f.Tb)());
                        t.delete(e.guild.id), r.$s.updateSetting(Array.from(t))
                    }
                } else {
                    var t;
                    let i = new Set((0, f.Tb)());
                    i.add(null == (t = e.guild) ? void 0 : t.id), r.$s.updateSetting(Array.from(i))
                }
                if (p) {
                    if (r.JG.getSetting().includes(e.guild.id)) {
                        let t = new Set((0, f.Kk)());
                        t.delete(e.guild.id), r.JG.updateSetting(Array.from(t))
                    }
                } else {
                    let t = new Set((0, f.Kk)());
                    t.add(e.guild.id), r.JG.updateSetting(Array.from(t))
                }
                null != i && i.length > 0 && (0, _.GL)(e.guild.id, {
                    nick: i
                })
            }
            this.close()
        }, e => {
            a.h.dispatch({
                type: "INVITE_MODAL_ERROR",
                message: (0, o.s)(e.code)
            })
        })
    },
    close() {
        let e = (0, l.p9)(),
            t = (0, l.xD)();
        if ((0, l.jJ)()) {
            let i = (0, l.tJ)(),
                a = (0, l.Z1)(),
                n = (0, l.N9)(),
                _ = (0, l.qO)();
            d.default.track(p.HAw.INVITE_ACCEPT_JOIN_SETTINGS_SET, {
                invite_code: e,
                guild_id: t,
                nickname_present: null != i && i.length > 0,
                dms_allowed: a,
                activity_status_shown: n,
                changed_from_default: _
            })
        }(0, l.xP)(), a.h.dispatch({
            type: "INVITE_MODAL_CLOSE"
        })
    }
}