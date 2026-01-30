/** chunk id: 156579, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968);
n(64700);
var l = n(417597),
    i = n(87001),
    s = n(811024),
    a = n(933958),
    o = n(969151),
    c = n(108959),
    u = n(829861),
    d = n(5867),
    h = n(652215);

function p(e) {
    let {
        maxHeight: t,
        renderExternalHeader: n
    } = e, {
        connectedChannelId: p,
        connectedActivity: g,
        activityPanelMode: f
    } = (0, l.cf)([a.Ay], () => {
        let e = a.Ay.getConnectedActivityLocation(),
            t = a.Ay.getSelfEmbeddedActivityForLocation(e);
        return {
            connectedChannelId: (0, o.H)(e),
            connectedActivity: t,
            activityPanelMode: a.Ay.getActivityPanelMode()
        }
    }), m = (0, l.bG)([i.A], () => i.A.getWindowOpen(h.MLl.ACTIVITY_POPOUT));
    if (!(0, s.Gp)(p)) return null;
    let b = null == g ? void 0 : g.applicationId;
    return f !== d.Gd.PANEL || null == b || m || null == p || null == g || (0, c.A)(p) ? null : (0, r.jsx)(u.A, {
        maxHeight: t,
        connectedLocation: g.location,
        renderExternalHeader: n
    })
}