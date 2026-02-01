/** chunk id: 854182, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    l = n(367513),
    o = n(313961),
    d = n(985018);

function c(e) {
    let t = (0, i.bG)([o.A], () => o.A.getVoiceParticipantsHidden(e));
    return (0, r.jsx)(a.sLh, {
        id: "no-video-hide",
        label: d.intl.string(d.t.BL8ss6),
        checked: !t,
        action: () => l.A.toggleVoiceParticipantsHidden(e, !t)
    })
}