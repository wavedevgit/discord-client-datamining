/** chunk id: 375500, original params: t,n,i (module,exports,require) **/
i.d(n, {
    A: () => c
});
var e = i(627968);
i(64700);
var r = i(311907),
    l = i(397927),
    a = i(152007),
    d = i(867455),
    o = i(607508),
    s = i(37411),
    u = i(985018);

function c(t) {
    let n = (0, o.X)(t);
    return (0, r.bG)([a.A], () => a.A.hasJoined(t.id)) ? (0, e.jsx)(l.Drp, {
        id: "thread-notifications",
        label: u.intl.string(u.t.h850Ss),
        children: (0, s.EU)().map(i => {
            let {
                setting: r,
                label: a
            } = i;
            return (0, e.jsx)(l.iDA, {
                group: "thread-notifications",
                id: "".concat(r),
                label: a,
                action: () => d.A.setNotificationSettings(t, {
                    flags: r
                }),
                checked: r === n
            }, r)
        })
    }) : (0, e.jsx)(l.Drp, {
        id: "notifications-disabled",
        label: u.intl.string(u.t.h850Ss),
        disabled: !0
    })
}