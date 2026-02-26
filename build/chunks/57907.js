/** chunk id: 57907, original params: t,n,e (module,exports,require) **/
e.d(n, {
    A: () => A
});
var i = e(627968);
e(64700);
var l = e(989349),
    r = e.n(l),
    a = e(311907),
    d = e(397927),
    s = e(392567),
    o = e(152007),
    u = e(867455),
    c = e(995102),
    g = e(985018);

function A(t) {
    let [n, e, l] = (0, a.yK)([o.A], () => [o.A.isMuted(t.id), o.A.getMuteConfig(t.id), o.A.hasJoined(t.id)]), A = (0, s.M)(e);

    function h(n) {
        u.A.setNotificationSettings(t, {
            muted: n
        })
    }
    return l ? n ? (0, i.jsx)(d.Drp, {
        id: "unmute-channel",
        label: t.isForumPost() ? g.intl.string(g.t["0JQfsP"]) : g.intl.string(g.t["Cq/TzF"]),
        subtext: A,
        action: () => h(!1)
    }) : (0, i.jsx)(d.Drp, {
        id: "mute-channel",
        label: t.isForumPost() ? g.intl.string(g.t["nP+Ykd"]) : g.intl.string(g.t.bUUd8q),
        action: () => h(!0),
        children: (0, c.gv)().map(n => {
            let {
                value: e,
                label: l
            } = n;
            return (0, i.jsx)(d.Drp, {
                id: `${e}`,
                label: l,
                action: () => {
                    let n;
                    return n = e > 0 ? r()().add(e, "second").toISOString() : null, void u.A.setNotificationSettings(t, {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: n
                        }
                    })
                }
            }, e)
        })
    }) : (0, i.jsx)(d.Drp, {
        id: "mute-disabled",
        label: t.isForumPost() ? g.intl.string(g.t["nP+Ykd"]) : g.intl.string(g.t.bUUd8q),
        disabled: !0
    })
}