/** chunk id: 57907, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => f
}), n(896048);
var i = n(627968);
n(64700);
var r = n(989349),
    l = n.n(r),
    a = n(311907),
    o = n(397927),
    s = n(392567),
    d = n(152007),
    u = n(867455),
    c = n(995102),
    A = n(985018);

function f(t) {
    let [e, n, r] = (0, a.yK)([d.A], () => [d.A.isMuted(t.id), d.A.getMuteConfig(t.id), d.A.hasJoined(t.id)]), f = (0, s.M)(n);

    function g(e) {
        u.A.setNotificationSettings(t, {
            muted: e
        })
    }
    return r ? e ? (0, i.jsx)(o.Drp, {
        id: "unmute-channel",
        label: t.isForumPost() ? A.intl.string(A.t["0JQfsP"]) : A.intl.string(A.t["Cq/TzF"]),
        subtext: f,
        action: () => g(!1)
    }) : (0, i.jsx)(o.Drp, {
        id: "mute-channel",
        label: t.isForumPost() ? A.intl.string(A.t["nP+Ykd"]) : A.intl.string(A.t.bUUd8q),
        action: () => g(!0),
        children: (0, c.gv)().map(e => {
            let {
                value: n,
                label: r
            } = e;
            return (0, i.jsx)(o.Drp, {
                id: "".concat(n),
                label: r,
                action: () => {
                    let e;
                    return e = n > 0 ? l()().add(n, "second").toISOString() : null, void u.A.setNotificationSettings(t, {
                        muted: !0,
                        mute_config: {
                            selected_time_window: n,
                            end_time: e
                        }
                    })
                }
            }, n)
        })
    }) : (0, i.jsx)(o.Drp, {
        id: "mute-disabled",
        label: t.isForumPost() ? A.intl.string(A.t["nP+Ykd"]) : A.intl.string(A.t.bUUd8q),
        disabled: !0
    })
}