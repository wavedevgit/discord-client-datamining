/** chunk id: 507238 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var a = n(627968);
n(64700);
var i = n(989349),
    r = n.n(i),
    o = n(311907),
    c = n(397927),
    _ = n(832712),
    l = n(995102),
    s = n(145408),
    d = n(543465),
    u = n(477427),
    b = n(985018);

function m(e, t) {
    let n = e?.id,
        {
            muted: i,
            muteConfig: m
        } = (0, o.cf)([d.Ay], () => ({
            muted: null != n ? d.Ay.isMuted(n) : void 0,
            muteConfig: null != n ? d.Ay.getMuteConfig(n) : void 0
        }), [n]),
        g = (0, s.M)(m);
    return null == n ? null : i ? (0, a.jsx)(c.Drp, {
        id: "unmute-guild",
        label: b.intl.string(b.t.De0BTC),
        subtext: g,
        action: () => _.A.updateGuildNotificationSettings(n, {
            muted: !1
        }, u.fd.Unmuted)
    }) : (0, a.jsx)(c.Drp, {
        id: "mute-guild",
        label: b.intl.string(b.t.vRzp7P),
        action: () => _.A.updateGuildNotificationSettings(n, {
            muted: !0
        }, u.fd.Muted),
        children: (0, l.g)().map(e => {
            let {
                value: i,
                label: o
            } = e;
            return (0, a.jsx)(c.Drp, {
                id: `${i}`,
                label: o,
                action: () => (function(e) {
                    if (null == n) return;
                    let a = e > 0 ? r()().add(e, "second").toISOString() : null;
                    _.A.updateGuildNotificationSettings(n, {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: a
                        }
                    }, u.fd.Muted, t)
                })(i)
            }, i)
        })
    })
}