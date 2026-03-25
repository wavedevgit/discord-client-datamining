/** chunk id: 156579 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var i = n(627968);
n(64700);
var s = n(417597),
    l = n(87001),
    r = n(811024),
    a = n(933958),
    o = n(969151),
    c = n(108959),
    d = n(829861),
    u = n(5867),
    h = n(652215);

function A(e) {
    let {
        maxHeight: t,
        renderExternalHeader: n
    } = e, {
        connectedChannelId: A,
        connectedActivity: m,
        activityPanelMode: _
    } = (0, s.cf)([a.Ay], () => {
        let e = a.Ay.getConnectedActivityLocation(),
            t = a.Ay.getSelfEmbeddedActivityForLocation(e);
        return {
            connectedChannelId: (0, o.H)(e),
            connectedActivity: t,
            activityPanelMode: a.Ay.getActivityPanelMode()
        }
    }), p = (0, s.bG)([l.A], () => l.A.getWindowOpen(h.MLl.ACTIVITY_POPOUT));
    if (!(0, r.Gp)(A)) return null;
    let g = m?.applicationId;
    return _ !== u.Gd.PANEL || null == g || p || null == A || null == m || (0, c.A)(A) ? null : (0, i.jsx)(d.A, {
        maxHeight: t,
        connectedLocation: m.location,
        renderExternalHeader: n
    })
}