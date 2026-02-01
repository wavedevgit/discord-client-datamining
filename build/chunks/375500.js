/** chunk id: 375500, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => c
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(152007),
    o = n(867455),
    s = n(607508),
    d = n(37411),
    u = n(985018);

function c(t) {
    let e = (0, s.X)(t);
    return (0, r.bG)([a.A], () => a.A.hasJoined(t.id)) ? (0, i.jsx)(l.Drp, {
        id: "thread-notifications",
        label: u.intl.string(u.t.h850Ss),
        children: (0, d.EU)().map(n => {
            let {
                setting: r,
                label: a
            } = n;
            return (0, i.jsx)(l.iDA, {
                group: "thread-notifications",
                id: "".concat(r),
                label: a,
                action: () => o.A.setNotificationSettings(t, {
                    flags: r
                }),
                checked: r === e
            }, r)
        })
    }) : (0, i.jsx)(l.Drp, {
        id: "notifications-disabled",
        label: u.intl.string(u.t.h850Ss),
        disabled: !0
    })
}