/** chunk id: 854182 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(367513),
    s = n(313961),
    d = n(985018);

function o(e) {
    let t = (0, i.bG)([s.A], () => s.A.getVoiceParticipantsHidden(e));
    return (0, l.jsx)(r.sLh, {
        id: "no-video-hide",
        label: d.intl.string(d.t.BL8ss6),
        checked: !t,
        action: () => a.A.toggleVoiceParticipantsHidden(e, !t)
    })
}