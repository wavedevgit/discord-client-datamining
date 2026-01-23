/** Chunk was on 97492 **/
/** chunk id: 156579, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
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
    p = n(652215);

function h(e) {
    let {
        maxHeight: t,
        renderExternalHeader: n
    } = e, {
        connectedChannelId: h,
        connectedActivity: f,
        activityPanelMode: g
    } = (0, l.cf)([a.Ay], () => {
        let e = a.Ay.getConnectedActivityLocation(),
            t = a.Ay.getSelfEmbeddedActivityForLocation(e);
        return {
            connectedChannelId: (0, o.H)(e),
            connectedActivity: t,
            activityPanelMode: a.Ay.getActivityPanelMode()
        }
    }), m = (0, l.bG)([i.A], () => i.A.getWindowOpen(p.MLl.ACTIVITY_POPOUT));
    if (!(0, s.Gp)(h)) return null;
    let b = null == f ? void 0 : f.applicationId;
    return g !== d.Gd.PANEL || null == b || m || null == h || null == f || (0, c.A)(h) ? null : (0, r.jsx)(u.A, {
        maxHeight: t,
        connectedLocation: f.location,
        renderExternalHeader: n
    })
}