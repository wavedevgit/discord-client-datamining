/** chunk id: 507238 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var i = n(627968);
n(64700);
var r = n(989349),
    a = n.n(r),
    o = n(311907),
    l = n(397927),
    s = n(832712),
    c = n(995102),
    _ = n(145408),
    u = n(543465),
    d = n(477427),
    b = n(985018);

function g(e, t) {
    let n = e?.id,
        {
            muted: r,
            muteConfig: g
        } = (0, o.cf)([u.Ay], () => ({
            muted: null != n ? u.Ay.isMuted(n) : void 0,
            muteConfig: null != n ? u.Ay.getMuteConfig(n) : void 0
        }), [n]),
        m = (0, _.M)(g);
    return null == n ? null : r ? (0, i.jsx)(l.Drp, {
        id: "unmute-guild",
        label: b.intl.string(b.t.De0BTC),
        subtext: m,
        action: () => s.A.updateGuildNotificationSettings(n, {
            muted: !1
        }, d.fd.Unmuted)
    }) : (0, i.jsx)(l.Drp, {
        id: "mute-guild",
        label: b.intl.string(b.t.vRzp7P),
        action: () => s.A.updateGuildNotificationSettings(n, {
            muted: !0
        }, d.fd.Muted),
        children: (0, c.g)().map(e => {
            let {
                value: r,
                label: o
            } = e;
            return (0, i.jsx)(l.Drp, {
                id: `${r}`,
                label: o,
                action: () => (function(e) {
                    if (null == n) return;
                    let i = e > 0 ? a()().add(e, "second").toISOString() : null;
                    s.A.updateGuildNotificationSettings(n, {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: i
                        }
                    }, d.fd.Muted, t)
                })(r)
            }, r)
        })
    })
}