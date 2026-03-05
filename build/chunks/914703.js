/** chunk id: 914703, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(660273),
    a = n(57907),
    r = n(867455),
    o = n(607508),
    c = n(37411);

function d(e) {
    let {
        channel: t,
        closePopout: n,
        onSelect: d,
        navId: u,
        label: h
    } = e, A = (0, l.A)(t, "Notifications Bell"), m = (0, a.A)(t), p = (0, o.X)(t);
    return (0, i.jsxs)(s.W1t, {
        "data-menu-migrated-auto": !0,
        navId: u,
        onClose: n,
        "aria-label": h,
        onSelect: d,
        children: [(0, i.jsxs)(s.rXV, {
            children: [t.isForumPost() ? A : null, m]
        }), (0, i.jsx)(s.rXV, {
            children: (0, c.EU)().map(e => {
                let {
                    setting: n,
                    label: l
                } = e;
                return (0, i.jsx)(s.iDA, {
                    group: "thread-notifications",
                    id: `${n}`,
                    label: l,
                    action: () => r.A.setNotificationSettings(t, {
                        flags: n
                    }),
                    checked: n === p
                }, n)
            })
        })]
    })
}