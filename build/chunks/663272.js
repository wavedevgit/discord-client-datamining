/** chunk id: 663272, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => o
}), r(65821);
var n = r(627968);
r(64700);
var a = r(311907),
    i = r(412780),
    l = r(828904),
    s = r(985018);
let o = a.Ay.connectStores([i.Ay], e => {
    let {
        context: t,
        index: r,
        videoStreams: n
    } = e, a = i.Ay.getAllStats(t)[r], {
        section: l
    } = (0, i.Bz)(i.Ay.getSection());
    if (null == l) throw Error("Unrecognized section format");
    let s = null;
    if (null != a && null != a.rtp.inbound) {
        var o;
        s = null != (o = a.rtp.inbound[l]) ? o : []
    }
    return {
        mediaEngineConnectionId: null == a ? void 0 : a.mediaEngineConnectionId,
        userId: l,
        streams: s,
        videoStreams: n
    }
})(function(e) {
    let {
        streams: t,
        context: r,
        index: a,
        userId: i,
        mediaEngineConnectionId: o,
        videoStreams: d
    } = e;
    return (0, n.jsx)(l.HI, {
        streams: t,
        context: r,
        index: a,
        mediaEngineConnectionId: o,
        userId: i,
        videoStreams: d,
        title: s.intl.string(s.t.SJmZaq),
        showUserInfo: !0
    })
})