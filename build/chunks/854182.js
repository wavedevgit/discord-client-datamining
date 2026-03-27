/** chunk id: 854182 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    a = n(367513),
    r = n(313961),
    o = n(985018);

function c(e) {
    let t = (0, s.bG)([r.A], () => r.A.getVoiceParticipantsHidden(e));
    return (0, i.jsx)(l.sLh, {
        id: "no-video-hide",
        label: o.intl.string(o.t.BL8ss6),
        checked: !t,
        action: () => a.A.toggleVoiceParticipantsHidden(e, !t)
    })
}