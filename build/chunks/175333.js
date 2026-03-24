/** chunk id: 175333 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => d
});
var n = i(471024),
    s = i(486020),
    a = i(684748),
    l = i(652215),
    r = i(672396),
    o = i(985018);

function d(e, t) {
    let i = e.username,
        d = o.intl.format(o.t["Yk+uYG"], {
            username: ""
        }),
        c = (0, s.ku)(e),
        {
            trackView: u,
            trackClick: h
        } = (0, a.Y)(r.KS.ActivityUserJoin, {
            notif_type: r.KS.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: l.xL.JOIN,
            activity_name: t.name
        });
    return {
        icon: c,
        title: i,
        body: d,
        hint: e => (0, n.de)(e, o.intl.string(o.t.WRj1Wn)),
        onNotificationShow: () => {
            u()
        },
        onDismissClick: () => {
            h("dismiss")
        }
    }
}