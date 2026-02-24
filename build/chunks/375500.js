/** chunk id: 375500, original params: t,n,e (module,exports,require) **/
e.d(n, {
    A: () => c
});
var i = e(627968);
e(64700);
var a = e(311907),
    l = e(397927),
    r = e(152007),
    s = e(867455),
    d = e(607508),
    o = e(37411),
    u = e(985018);

function c(t) {
    let n = (0, d.X)(t);
    return (0, a.bG)([r.A], () => r.A.hasJoined(t.id)) ? (0, i.jsx)(l.Drp, {
        id: "thread-notifications",
        label: u.intl.string(u.t.h850Ss),
        children: (0, o.EU)().map(e => {
            let {
                setting: a,
                label: r
            } = e;
            return (0, i.jsx)(l.iDA, {
                group: "thread-notifications",
                id: `${a}`,
                label: r,
                action: () => s.A.setNotificationSettings(t, {
                    flags: a
                }),
                checked: a === n
            }, a)
        })
    }) : (0, i.jsx)(l.Drp, {
        id: "notifications-disabled",
        label: u.intl.string(u.t.h850Ss),
        disabled: !0
    })
}