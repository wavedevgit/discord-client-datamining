/** chunk id: 552468, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(627968),
    i = n(397927),
    a = n(20805),
    o = n(695311),
    s = n(985018);

function l(e) {
    let {
        display: t,
        entry: n,
        onAction: l,
        onClose: c
    } = e, u = (0, a.yl)(n), d = (0, o.A)({
        applicationId: u ? n.extra.application_id : void 0,
        onClose: c
    });
    return "recent" === t && u ? (0, r.jsx)(i.Drp, {
        id: "view-activity",
        label: s.intl.string(s.t.GDWYR8),
        action: () => {
            null == l || l({
                action: "PRESS_VIEW_ACTIVITY_MENU_ITEM"
            }), d()
        }
    }) : null
}