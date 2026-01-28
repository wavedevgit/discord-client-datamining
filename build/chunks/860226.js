/** Chunk was on 60449 **/
/** chunk id: 860226, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(827343),
    a = n(195043),
    o = n(430452),
    c = n(531525),
    d = n(985018);

function u() {
    let e = (0, s.bG)([o.A], () => o.A.getQoS());
    return (0, i.jsx)(a.x, {
        setting: c.H.VOICE_AND_VIDEO_ADVANCED_QOS,
        children: (0, i.jsx)(l.dOG, {
            label: d.intl.string(d.t["3CqDxp"]),
            description: d.intl.string(d.t.I1Eoqq),
            checked: e,
            onChange: e => r.A.setQoS(e)
        })
    })
}