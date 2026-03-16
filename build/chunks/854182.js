/** chunk id: 854182 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(397927),
    a = n(367513),
    s = n(313961),
    o = n(985018);

function d(e) {
    let t = (0, l.bG)([s.A], () => s.A.getVoiceParticipantsHidden(e));
    return (0, i.jsx)(r.sLh, {
        id: "no-video-hide",
        label: o.intl.string(o.t.BL8ss6),
        checked: !t,
        action: () => a.A.toggleVoiceParticipantsHidden(e, !t)
    })
}