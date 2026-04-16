/** chunk id: 881136 params = (module,exports,require) **/
i.d(t, {
    A: () => A
});
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(397927),
    r = i(832712),
    a = i(568873),
    d = i(543465),
    c = i(477427),
    o = i(652215),
    u = i(985018);

function g() {
    return [{
        setting: o.orn.ALL_MESSAGES,
        label: u.intl.string(u.t["n/bTaY"])
    }, {
        setting: o.orn.ONLY_MENTIONS,
        label: u.intl.format(u.t.L2hmYy, {})
    }, {
        setting: o.orn.NO_MESSAGES,
        label: u.intl.string(u.t.CtVGyQ)
    }]
}

function A(e) {
    let t = function(e) {
            let {
                suppressEveryone: t,
                suppressRoles: i,
                mobilePush: A,
                messageNotifications: E,
                notifyHighlights: h
            } = (0, l.cf)([d.Ay], () => ({
                suppressEveryone: d.Ay.isSuppressEveryoneEnabled(e.id),
                suppressRoles: d.Ay.isSuppressRolesEnabled(e.id),
                mobilePush: d.Ay.isMobilePushEnabled(e.id),
                messageNotifications: d.Ay.getMessageNotifications(e.id),
                notifyHighlights: d.Ay.getNotifyHighlights(e.id)
            }), [e.id]), p = h === o.guM.DISABLED, _ = (0, a.A)(e.id);

            function S(t, i) {
                r.A.updateGuildNotificationSettings(e.id, t, i)
            }
            return (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(s.rXV, {
                    children: g().map(e => {
                        let {
                            setting: t,
                            label: i
                        } = e;
                        return (0, n.jsx)(s.iDA, {
                            group: "guild-notifications",
                            id: `${t}`,
                            label: i,
                            action: () => S({
                                message_notifications: t
                            }, c.G_.notifications(t)),
                            checked: t === E
                        }, t)
                    })
                }), (0, n.jsxs)(s.rXV, {
                    children: [(0, n.jsx)(s.sLh, {
                        id: "suppress-everyone",
                        label: u.intl.format(u.t.OWiWAp, {}),
                        action: () => S({
                            suppress_everyone: !t
                        }, c.G_.suppressEveryone(!t)),
                        checked: t
                    }), (0, n.jsx)(s.sLh, {
                        id: "suppress-roles",
                        label: u.intl.string(u.t["O/QdoD"]),
                        action: () => S({
                            suppress_roles: !i
                        }, c.G_.suppressRoles(!i)),
                        checked: i
                    }), (0, n.jsx)(s.sLh, {
                        id: "suppress-highlights",
                        label: u.intl.string(u.t.gPuteJ),
                        action: () => {
                            S({
                                notify_highlights: p ? o.guM.ENABLED : o.guM.DISABLED
                            }, c.G_.highlights(p))
                        },
                        checked: p
                    }), _]
                }), (0, n.jsx)(s.rXV, {
                    children: (0, n.jsx)(s.sLh, {
                        id: "mobile-push",
                        label: u.intl.string(u.t.h1DL66),
                        action: () => S({
                            mobile_push: !A
                        }, c.G_.mobilePush(!A)),
                        checked: A
                    })
                })]
            })
        }(e),
        A = (0, l.bG)([d.Ay], () => d.Ay.getMessageNotifications(e.id), [e.id]),
        E = g()?.find(e => {
            let {
                setting: t
            } = e;
            return t === A
        })?.label;
    return null != t ? (0, n.jsx)(s.Drp, {
        id: "guild-notifications",
        label: u.intl.string(u.t.h850Ss),
        subtext: E,
        action: () => (0, s.mMO)(async () => {
            let {
                default: t
            } = await Promise.all([i.e("64992"), i.e("59566")]).then(i.bind(i, 401539));
            return i => (0, n.jsx)(t, {
                ...i,
                guildId: e.id
            })
        }),
        children: t
    }) : null
}