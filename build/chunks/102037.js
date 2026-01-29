/** Chunk was on 84018 **/
/** chunk id: 102037, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var r = n(684013),
    s = n(471024),
    l = n(833551),
    o = n(256415),
    a = n(9302),
    c = n(684748),
    d = n(672396),
    u = n(985018);
let p = e => (0, s.sI)(e, (0, c.J)(), u.t["z8/sgJ"]);

function h(e) {
    let {
        type: t
    } = e, {
        icon: s,
        title: h,
        body: f,
        hint: g,
        notifType: y
    } = function(e, t) {
        if (t.type === d.Jr.NEWS) {
            var n, i, r, s, l, o, a, c;
            return {
                icon: null != (n = null == (l = t.news) ? void 0 : l.icon) ? n : e.icon,
                title: null != (i = null == (o = t.news) ? void 0 : o.title) ? i : e.title,
                body: null != (r = null == (a = t.news) ? void 0 : a.body) ? r : e.body,
                hint: null != (s = null == (c = t.news) ? void 0 : c.hint) ? s : e.hint,
                notifType: null != t.news ? d.KS.NewsNudge : e.notifType
            }
        }
        return e
    }({
        icon: n(513653),
        title: u.intl.string(u.t.pkXAeG),
        body: null,
        hint: p,
        notifType: d.KS.WelcomeNudge
    }, e), {
        trackView: m,
        trackClick: _
    } = (0, c.Y)(y, {
        notif_type: y
    });
    return {
        icon: s,
        title: h,
        body: f,
        hint: g,
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
        onNotificationClick: (e, n) => {
            _("unlock"), t === d.Jr.NEWS && r.A.updateNotificationStatus(n), l.default.isOverlayOOPEnabledForPid((0, a.getPID)()) ? r.A.setInputLocked(!1, (0, a.getPID)()) : o.default.isInstanceLocked() && r.A.setInstanceLocked(!1)
        },
        onDismissClick: () => {
            _("dismiss")
        }
    }
}