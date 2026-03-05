/** chunk id: 854182, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(367513),
    o = n(313961),
    s = n(985018);

function d(e) {
    let t = (0, r.bG)([o.A], () => o.A.getVoiceParticipantsHidden(e));
    return (0, i.jsx)(l.sLh, {
        id: "no-video-hide",
        label: s.intl.string(s.t.BL8ss6),
        checked: !t,
        action: () => a.A.toggleVoiceParticipantsHidden(e, !t)
    })
}