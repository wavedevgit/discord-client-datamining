/** chunk id: 215307 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var a = n(311907),
    l = n(713654),
    r = n(289357),
    s = n(607567),
    o = n(985018),
    d = n(533502);
let c = function(e) {
    let {
        name: t,
        channel: n
    } = e, c = (0, a.yK)([s.Ay], () => s.Ay.getVoiceStatesForChannel(n).map(e => {
        let {
            user: t
        } = e;
        return t
    }), [n]), u = (0, l.gU)(n);
    return (0, i.jsx)(r.Qv, {
        heading: o.intl.string(o.t["X2K3/4"]),
        topic: t,
        location: o.intl.string(o.t.LZA6Na),
        locationIcon: null != u ? (0, i.jsx)(u, {
            size: "xs",
            color: "currentColor",
            className: d.K
        }) : null,
        children: (0, i.jsx)(r.$i, {
            channel: n,
            speakers: c,
            voiceType: r.SY.STUDY_ROOM
        })
    })
}