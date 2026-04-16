/** chunk id: 854182 params = (module,exports,require) **/
n.d(e, {
    A: () => u
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(367513),
    o = n(313961),
    d = n(985018);

function u(t) {
    let e = (0, r.bG)([o.A], () => o.A.getVoiceParticipantsHidden(t));
    return (0, i.jsx)(l.sLh, {
        id: "no-video-hide",
        label: d.intl.string(d.t.BL8ss6),
        checked: !e,
        action: () => a.A.toggleVoiceParticipantsHidden(t, !e)
    })
}