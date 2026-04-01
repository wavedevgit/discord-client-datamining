/** chunk id: 507238 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var i = n(627968);
n(64700);
var r = n(989349),
    l = n.n(r),
    a = n(311907),
    c = n(397927),
    o = n(832712),
    s = n(995102),
    u = n(145408),
    _ = n(543465),
    d = n(477427),
    S = n(985018);

function g(e, t) {
    let n = e?.id,
        {
            muted: r,
            muteConfig: g
        } = (0, a.cf)([_.Ay], () => ({
            muted: null != n ? _.Ay.isMuted(n) : void 0,
            muteConfig: null != n ? _.Ay.getMuteConfig(n) : void 0
        }), [n]),
        E = (0, u.M)(g);
    return null == n ? null : r ? (0, i.jsx)(c.Drp, {
        id: "unmute-guild",
        label: S.intl.string(S.t.De0BTC),
        subtext: E,
        action: () => o.A.updateGuildNotificationSettings(n, {
            muted: !1
        }, d.fd.Unmuted)
    }) : (0, i.jsx)(c.Drp, {
        id: "mute-guild",
        label: S.intl.string(S.t.vRzp7P),
        action: () => o.A.updateGuildNotificationSettings(n, {
            muted: !0
        }, d.fd.Muted),
        children: (0, s.g)().map(e => {
            let {
                value: r,
                label: a
            } = e;
            return (0, i.jsx)(c.Drp, {
                id: `${r}`,
                label: a,
                action: () => (function(e) {
                    if (null == n) return;
                    let i = e > 0 ? l()().add(e, "second").toISOString() : null;
                    o.A.updateGuildNotificationSettings(n, {
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