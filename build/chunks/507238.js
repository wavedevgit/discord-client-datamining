/** chunk id: 507238, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
});
var a = n(627968);
n(64700);
var i = n(989349),
    r = n.n(i),
    o = n(311907),
    l = n(397927),
    c = n(832712),
    s = n(995102),
    _ = n(392567),
    d = n(543465),
    u = n(477427),
    g = n(985018);

function b(e, t) {
    let n = e?.id,
        {
            muted: i,
            muteConfig: b
        } = (0, o.cf)([d.Ay], () => ({
            muted: null != n ? d.Ay.isMuted(n) : void 0,
            muteConfig: null != n ? d.Ay.getMuteConfig(n) : void 0
        }), [n]),
        m = (0, _.M)(b);
    return null == n ? null : i ? (0, a.jsx)(l.Drp, {
        id: "unmute-guild",
        label: g.intl.string(g.t.De0BTC),
        subtext: m,
        action: () => c.A.updateGuildNotificationSettings(n, {
            muted: !1
        }, u.fd.Unmuted)
    }) : (0, a.jsx)(l.Drp, {
        id: "mute-guild",
        label: g.intl.string(g.t.vRzp7P),
        action: () => c.A.updateGuildNotificationSettings(n, {
            muted: !0
        }, u.fd.Muted),
        children: (0, s.gv)().map(e => {
            let {
                value: i,
                label: o
            } = e;
            return (0, a.jsx)(l.Drp, {
                id: `${i}`,
                label: o,
                action: () => (function(e) {
                    if (null == n) return;
                    let a = e > 0 ? r()().add(e, "second").toISOString() : null;
                    c.A.updateGuildNotificationSettings(n, {
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