/** chunk id: 684748 params = (module,exports,require) **/
"use strict";
i.d(t, {
    J: () => c,
    Y: () => d
});
var n = i(684013),
    s = i(532624),
    a = i(256415),
    l = i(350535),
    r = i(652215),
    o = i(672396);

function d(e, t) {
    return {
        trackView() {
            let i = a.default.isInstanceLocked() ? r.ThZ.LOCKED_OVERLAY : r.ThZ.UNLOCKED_OVERLAY;
            n.A.track(r.HAw.NOTIFICATION_VIEWED, {
                ...t,
                location: i
            }), n.A.notificationEvent(e, o.uj.Viewed)
        },
        trackClick(i) {
            let s = a.default.isInstanceLocked() ? r.ThZ.LOCKED_OVERLAY : r.ThZ.UNLOCKED_OVERLAY;
            n.A.track(r.HAw.NOTIFICATION_CLICKED, {
                ...t,
                location: s,
                action_type: i
            }), n.A.notificationEvent(e, o.uj.Clicked)
        }
    }
}

function c() {
    let e = s.Ay.getOverlayKeybind();
    return null != e ? (0, l.dI)(e.shortcut, !0).split(" + ") : ["???"]
}