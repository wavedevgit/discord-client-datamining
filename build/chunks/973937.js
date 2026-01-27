/** Chunk was on 41727 **/
/** chunk id: 973937, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(477782),
    s = n(367513),
    a = n(313961),
    o = n(806931),
    c = n(985018);

function u(e) {
    let {
        selectedParticipant: t
    } = (0, l.cf)([a.A], () => ({
        selectedParticipant: a.A.getSelectedParticipant(e)
    }), [e]);
    return (0, r.jsx)(i.sL, {
        id: "call-grid-view",
        label: c.intl.string(c.t["3jrUBj"]),
        checked: null == t,
        action: () => {
            null != t ? s.A.selectParticipant(e, null) : s.A.selectParticipant(e, o.jd.AUTO)
        }
    })
}