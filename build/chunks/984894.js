/** chunk id: 984894, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(367513),
    s = n(313961),
    o = n(977997),
    d = n(652215),
    u = n(985018);

function c(e, t) {
    let n = (0, r.bG)([s.A], () => e === s.A.getSelectedParticipantId(t), [t, e]);
    return (0, r.bG)([s.A, o.A], () => {
        let n = o.A.isInChannel(t, e) && o.A.hasVideo(t),
            i = s.A.getLayout(t),
            r = i === d.DUB.MINIMUM || i === d.DUB.NORMAL;
        return !n || r
    }, [t, e]) ? null : (0, i.jsx)(l.Drp, {
        id: "focus-video",
        label: n ? u.intl.string(u.t.KJPKUT) : u.intl.string(u.t["77cRN4"]),
        action: () => a.A.selectParticipant(t, n ? null : e)
    })
}