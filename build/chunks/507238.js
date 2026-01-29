/** Chunk was on 59461 **/
/** chunk id: 507238, original params: e,n,t (module,exports,require) **/
"use strict";
t.d(n, {
    A: () => E
});
var i = t(627968);
t(64700);
var l = t(989349),
    r = t.n(l),
    u = t(311907),
    a = t(397927),
    o = t(832712),
    s = t(995102),
    c = t(392567),
    _ = t(543465),
    d = t(477427),
    S = t(985018);

function E(e, n) {
    let t = null == e ? void 0 : e.id,
        {
            muted: l,
            muteConfig: E
        } = (0, u.cf)([_.Ay], () => ({
            muted: null != t ? _.Ay.isMuted(t) : void 0,
            muteConfig: null != t ? _.Ay.getMuteConfig(t) : void 0
        }), [t]),
        g = (0, c.M)(E);
    return null == t ? null : l ? (0, i.jsx)(a.Drp, {
        id: "unmute-guild",
        label: S.intl.string(S.t.De0BTC),
        subtext: g,
        action: () => o.A.updateGuildNotificationSettings(t, {
            muted: !1
        }, d.fd.Unmuted)
    }) : (0, i.jsx)(a.Drp, {
        id: "mute-guild",
        label: S.intl.string(S.t.vRzp7P),
        action: () => o.A.updateGuildNotificationSettings(t, {
            muted: !0
        }, d.fd.Muted),
        children: (0, s.gv)().map(e => {
            let {
                value: l,
                label: u
            } = e;
            return (0, i.jsx)(a.Drp, {
                id: "".concat(l),
                label: u,
                action: () => (function(e) {
                    if (null == t) return;
                    let i = e > 0 ? r()().add(e, "second").toISOString() : null;
                    o.A.updateGuildNotificationSettings(t, {
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