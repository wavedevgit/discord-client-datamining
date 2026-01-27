/** Chunk was on 77870 **/
/** chunk id: 507238, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968);
n(64700);
var l = n(989349),
    i = n.n(l),
    s = n(311907),
    a = n(397927),
    o = n(832712),
    c = n(995102),
    u = n(392567),
    d = n(543465),
    p = n(477427),
    h = n(985018);

function f(e, t) {
    let n = null == e ? void 0 : e.id,
        {
            muted: l,
            muteConfig: f
        } = (0, s.cf)([d.Ay], () => ({
            muted: null != n ? d.Ay.isMuted(n) : void 0,
            muteConfig: null != n ? d.Ay.getMuteConfig(n) : void 0
        }), [n]),
        g = (0, u.M)(f);
    return null == n ? null : l ? (0, r.jsx)(a.Drp, {
        id: "unmute-guild",
        label: h.intl.string(h.t.De0BTC),
        subtext: g,
        action: () => o.A.updateGuildNotificationSettings(n, {
            muted: !1
        }, p.fd.Unmuted)
    }) : (0, r.jsx)(a.Drp, {
        id: "mute-guild",
        label: h.intl.string(h.t.vRzp7P),
        action: () => o.A.updateGuildNotificationSettings(n, {
            muted: !0
        }, p.fd.Muted),
        children: (0, c.gv)().map(e => {
            let {
                value: l,
                label: s
            } = e;
            return (0, r.jsx)(a.Drp, {
                id: "".concat(l),
                label: s,
                action: () => (function(e) {
                    if (null == n) return;
                    let r = e > 0 ? i()().add(e, "second").toISOString() : null;
                    o.A.updateGuildNotificationSettings(n, {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: r
                        }
                    }, p.fd.Muted, t)
                })(l)
            }, l)
        })
    })
}