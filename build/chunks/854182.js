/** chunk id: 854182 params = (module,exports,require) **/
n.d(e, {
    A: () => d
});
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(397927),
    a = n(367513),
    o = n(313961),
    u = n(985018);

function d(t) {
    let e = (0, l.bG)([o.A], () => o.A.getVoiceParticipantsHidden(t));
    return (0, i.jsx)(r.sLh, {
        id: "no-video-hide",
        label: u.intl.string(u.t.BL8ss6),
        checked: !e,
        action: () => a.A.toggleVoiceParticipantsHidden(t, !e)
    })
}