/** chunk id: 102037 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var i = n(627968);
n(64700);
var s = n(684013),
    a = n(471024),
    l = n(833551),
    r = n(256415),
    o = n(9302),
    d = n(684748),
    c = n(672396),
    u = n(985018);
let h = e => (0, a.sI)(e, (0, d.J)(), u.t["z8/sgJ"]);

function p(e) {
    var t;
    let {
        type: a
    } = e, {
        icon: p,
        title: f,
        body: A,
        hint: _,
        notifType: g
    } = (t = {
        icon: n(513653),
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
        trackView: m,
        trackClick: x
    } = (0, d.Y)(g, {
        notif_type: g
    });
    return {
        icon: p,
        title: f,
        body: A,
        hint: _,
        renderFooter: () => (0, i.jsx)("div", {
            style: {
                textAlign: "center",
                padding: 2
            },
            children: u.intl.string(u.t["9MyuT0"])
        }),
        onNotificationShow: () => {
            m()
        },
        onNotificationClick: (e, t) => {
            x("unlock"), a === c.Jr.NEWS && s.A.updateNotificationStatus(t), l.default.isOverlayOOPEnabledForPid((0, o.getPID)()) ? s.A.setInputLocked(!1, (0, o.getPID)()) : r.default.isInstanceLocked() && s.A.setInstanceLocked(!1)
        },
        onDismissClick: () => {
            x("dismiss")
        }
    }
}