/** Chunk was on 84841 **/
/** chunk id: 984894, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(367513),
    d = n(313961),
    c = n(977997),
    u = n(652215),
    o = n(985018);

function s(e, t) {
    let n = (0, i.bG)([d.A], () => e === d.A.getSelectedParticipantId(t), [t, e]);
    return (0, i.bG)([d.A, c.A], () => {
        let n = c.A.isInChannel(t, e) && c.A.hasVideo(t),
            l = d.A.getLayout(t),
            i = l === u.DUB.MINIMUM || l === u.DUB.NORMAL;
        return !n || i
    }, [t, e]) ? null : (0, l.jsx)(r.Drp, {
        id: "focus-video",
        label: n ? o.intl.string(o.t.KJPKUT) : o.intl.string(o.t["77cRN4"]),
        action: () => a.A.selectParticipant(t, n ? null : e)
    })
}