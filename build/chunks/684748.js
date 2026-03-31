/** chunk id: 684748 params = (module,exports,require) **/
"use strict";
n.d(t, {
    J: () => c,
    Y: () => d
});
var i = n(684013),
    s = n(532624),
    a = n(256415),
    l = n(350535),
    r = n(652215),
    o = n(672396);

function d(e, t) {
    return {
        trackView() {
            let n = a.default.isInstanceLocked() ? r.ThZ.LOCKED_OVERLAY : r.ThZ.UNLOCKED_OVERLAY;
            i.A.track(r.HAw.NOTIFICATION_VIEWED, {
                ...t,
                location: n
            }), i.A.notificationEvent(e, o.uj.Viewed)
        },
        trackClick(n) {
            let s = a.default.isInstanceLocked() ? r.ThZ.LOCKED_OVERLAY : r.ThZ.UNLOCKED_OVERLAY;
            i.A.track(r.HAw.NOTIFICATION_CLICKED, {
                ...t,
                location: s,
                action_type: n
            }), i.A.notificationEvent(e, o.uj.Clicked)
        }
    }
}

function c() {
    let e = s.Ay.getOverlayKeybind();
    return null != e ? (0, l.dI)(e.shortcut, !0).split(" + ") : ["???"]
}