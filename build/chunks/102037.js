/** chunk id: 102037 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => _
});
var n = i(627968);
i(64700);
var s = i(684013),
    a = i(471024),
    l = i(833551),
    r = i(256415),
    o = i(9302),
    d = i(684748),
    c = i(672396),
    u = i(985018);
let h = e => (0, a.sI)(e, (0, d.J)(), u.t["z8/sgJ"]);

function _(e) {
    var t;
    let {
        type: a
    } = e, {
        icon: _,
        title: p,
        body: f,
        hint: m,
        notifType: g
    } = (t = {
        icon: i(513653),
        title: u.intl.string(u.t.pkXAeG),
        body: null,
        hint: h,
        notifType: c.KS.WelcomeNudge
    }, e.type === c.Jr.NEWS ? {
        icon: e.news?.icon ?? t.icon,
        title: e.news?.title ?? t.title,
        body: e.news?.body ?? t.body,
        hint: e.news?.hint ?? t.hint,
        notifType: null != e.news ? c.KS.NewsNudge : t.notifType
    } : t), {
        trackView: A,
        trackClick: x
    } = (0, d.Y)(g, {
        notif_type: g
    });
    return {
        icon: _,
        title: p,
        body: f,
        hint: m,
        renderFooter: () => (0, n.jsx)("div", {
            style: {
                textAlign: "center",
                padding: 2
            },
            children: u.intl.string(u.t["9MyuT0"])
        }),
        onNotificationShow: () => {
            A()
        },
        onNotificationClick: (e, t) => {
            x("unlock"), a === c.Jr.NEWS && s.A.updateNotificationStatus(t), l.default.isOverlayOOPEnabledForPid((0, o.getPID)()) ? s.A.setInputLocked(!1, (0, o.getPID)()) : r.default.isInstanceLocked() && s.A.setInstanceLocked(!1)
        },
        onDismissClick: () => {
            x("dismiss")
        }
    }
}