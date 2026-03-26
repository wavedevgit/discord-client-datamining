/** chunk id: 507238 params = (module,exports,require) **/
"use strict";
t.d(n, {
    A: () => E
});
var i = t(627968);
t(64700);
var l = t(989349),
    r = t.n(l),
    s = t(311907),
    a = t(397927),
    u = t(832712),
    c = t(995102),
    o = t(145408),
    _ = t(543465),
    d = t(477427),
    S = t(985018);

function E(e, n) {
    let t = e?.id,
        {
            muted: l,
            muteConfig: E
        } = (0, s.cf)([_.Ay], () => ({
            muted: null != t ? _.Ay.isMuted(t) : void 0,
            muteConfig: null != t ? _.Ay.getMuteConfig(t) : void 0
        }), [t]),
        g = (0, o.M)(E);
    return null == t ? null : l ? (0, i.jsx)(a.Drp, {
        id: "unmute-guild",
        label: S.intl.string(S.t.De0BTC),
        subtext: g,
        action: () => u.A.updateGuildNotificationSettings(t, {
            muted: !1
        }, d.fd.Unmuted)
    }) : (0, i.jsx)(a.Drp, {
        id: "mute-guild",
        label: S.intl.string(S.t.vRzp7P),
        action: () => u.A.updateGuildNotificationSettings(t, {
            muted: !0
        }, d.fd.Muted),
        children: (0, c.g)().map(e => {
            let {
                value: l,
                label: s
            } = e;
            return (0, i.jsx)(a.Drp, {
                id: `${l}`,
                label: s,
                action: () => (function(e) {
                    if (null == t) return;
                    let i = e > 0 ? r()().add(e, "second").toISOString() : null;
                    u.A.updateGuildNotificationSettings(t, {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: i
                        }
                    }, d.fd.Muted, n)
                })(l)
            }, l)
        })
    })
}