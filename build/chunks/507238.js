/** chunk id: 507238 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
});
var i = n(627968);
n(64700);
var r = n(989349),
    a = n.n(r),
    l = n(311907),
    o = n(397927),
    s = n(832712),
    _ = n(995102),
    c = n(145408),
    d = n(543465),
    u = n(477427),
    g = n(985018);

function b(e, t) {
    let n = e?.id,
        {
            muted: r,
            muteConfig: b
        } = (0, l.cf)([d.Ay], () => ({
            muted: null != n ? d.Ay.isMuted(n) : void 0,
            muteConfig: null != n ? d.Ay.getMuteConfig(n) : void 0
        }), [n]),
        I = (0, c.M)(b);
    return null == n ? null : r ? (0, i.jsx)(o.Drp, {
        id: "unmute-guild",
        label: g.intl.string(g.t.De0BTC),
        subtext: I,
        action: () => s.A.updateGuildNotificationSettings(n, {
            muted: !1
        }, u.fd.Unmuted)
    }) : (0, i.jsx)(o.Drp, {
        id: "mute-guild",
        label: g.intl.string(g.t.vRzp7P),
        action: () => s.A.updateGuildNotificationSettings(n, {
            muted: !0
        }, u.fd.Muted),
        children: (0, _.g)().map(e => {
            let {
                value: r,
                label: l
            } = e;
            return (0, i.jsx)(o.Drp, {
                id: `${r}`,
                label: l,
                action: () => (function(e) {
                    if (null == n) return;
                    let i = e > 0 ? a()().add(e, "second").toISOString() : null;
                    s.A.updateGuildNotificationSettings(n, {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: i
                        }
                    }, u.fd.Muted, t)
                })(r)
            }, r)
        })
    })
}