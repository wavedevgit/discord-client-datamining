/** chunk id: 57907 params = (module,exports,require) **/
i.d(n, {
    A: () => h
});
var e = i(627968);
i(64700);
var r = i(311907),
    l = i(397927),
    a = i(145408),
    s = i(152007),
    d = i(867455),
    o = i(812141),
    u = i(995102),
    c = i(985018);

function h(t) {
    let [n, i, h] = (0, r.yK)([s.A], () => [s.A.isMuted(t.id), s.A.getMuteConfig(t.id), s.A.hasJoined(t.id)]), A = (0, a.M)(i);

    function g(n) {
        d.A.setNotificationSettings(t, {
            muted: n
        })
    }
    return h ? n ? (0, e.jsx)(l.Drp, {
        id: "unmute-channel",
        label: t.isForumPost() ? c.intl.string(c.t["0JQfsP"]) : c.intl.string(c.t["Cq/TzF"]),
        subtext: A,
        action: () => g(!1)
    }) : (0, e.jsx)(l.Drp, {
        id: "mute-channel",
        label: t.isForumPost() ? c.intl.string(c.t["nP+Ykd"]) : c.intl.string(c.t.bUUd8q),
        action: () => g(!0),
        children: (0, u.g)().map(n => {
            let {
                value: i,
                label: r
            } = n;
            return (0, e.jsx)(l.Drp, {
                id: `${i}`,
                label: r,
                action: () => {
                    let n;
                    return n = o.p(i), void d.A.setNotificationSettings(t, n)
                }
            }, i)
        })
    }) : (0, e.jsx)(l.Drp, {
        id: "mute-disabled",
        label: t.isForumPost() ? c.intl.string(c.t["nP+Ykd"]) : c.intl.string(c.t.bUUd8q),
        disabled: !0
    })
}