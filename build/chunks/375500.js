/** chunk id: 375500, original params: t,n,e (module,exports,require) **/
e.d(n, {
    A: () => c
});
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(397927),
    a = e(152007),
    d = e(867455),
    s = e(607508),
    o = e(37411),
    u = e(985018);

function c(t) {
    let n = (0, s.X)(t);
    return (0, l.bG)([a.A], () => a.A.hasJoined(t.id)) ? (0, i.jsx)(r.Drp, {
        id: "thread-notifications",
        label: u.intl.string(u.t.h850Ss),
        children: (0, o.EU)().map(e => {
            let {
                setting: l,
                label: a
            } = e;
            return (0, i.jsx)(r.iDA, {
                group: "thread-notifications",
                id: `${l}`,
                label: a,
                action: () => d.A.setNotificationSettings(t, {
                    flags: l
                }),
                checked: l === n
            }, l)
        })
    }) : (0, i.jsx)(r.Drp, {
        id: "notifications-disabled",
        label: u.intl.string(u.t.h850Ss),
        disabled: !0
    })
}