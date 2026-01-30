/** chunk id: 984894, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => u
});
var n = l(627968);
l(64700);
var i = l(311907),
    r = l(397927),
    o = l(367513),
    a = l(313961),
    c = l(977997),
    d = l(652215),
    s = l(985018);

function u(e, t) {
    let l = (0, i.bG)([a.A], () => e === a.A.getSelectedParticipantId(t), [t, e]);
    return (0, i.bG)([a.A, c.A], () => {
        let l = c.A.isInChannel(t, e) && c.A.hasVideo(t),
            n = a.A.getLayout(t),
            i = n === d.DUB.MINIMUM || n === d.DUB.NORMAL;
        return !l || i
    }, [t, e]) ? null : (0, n.jsx)(r.Drp, {
        id: "focus-video",
        label: l ? s.intl.string(s.t.KJPKUT) : s.intl.string(s.t["77cRN4"]),
        action: () => o.A.selectParticipant(t, l ? null : e)
    })
}