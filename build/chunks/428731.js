/** chunk id: 428731, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(486020),
    r = n(592598),
    l = n(581730),
    a = n(672396),
    s = n(652215),
    o = n(985018);

function u(e, t) {
    if (r.A.isNotificationDisabled(a.KS.ActivityUserJoin)) return null;
    let n = e.username,
        u = o.intl.format(o.t["Yk+uYG"], {
            username: ""
        }),
        c = (0, i.ku)(e),
        d = o.intl.string(o.t.WRj1Wn),
        {
            trackView: h,
            trackClick: p
        } = (0, l.Y9)(a.KS.ActivityUserJoin, {
            notif_type: a.KS.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: s.xL.JOIN,
            activity_name: t.name
        });
    return {
        icon: c,
        title: n,
        body: u,
        hint: d,
        onNotificationShow: () => {
            h()
        },
        onDismissClick: () => {
            p("dismiss")
        }
    }
}