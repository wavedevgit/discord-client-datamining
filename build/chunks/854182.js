/** chunk id: 854182 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(367513),
    o = n(313961),
    s = n(985018);

function u(e) {
    let t = (0, i.bG)([o.A], () => o.A.getVoiceParticipantsHidden(e));
    return (0, l.jsx)(r.sLh, {
        id: "no-video-hide",
        label: s.intl.string(s.t.BL8ss6),
        checked: !t,
        action: () => a.A.toggleVoiceParticipantsHidden(e, !t)
    })
}