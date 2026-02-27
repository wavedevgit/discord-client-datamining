/** chunk id: 843540, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var l = n(873298),
    a = n(632119),
    r = n(17372),
    i = n(985018);
let s = {
    getTitle: () => i.intl.string(i.t["Gtck/t"]),
    getDisabledTitle: () => i.intl.string(i.t.E6UmXa),
    getDescription: () => i.intl.string(i.t.jcRSp6),
    eligibleReportSubtypes: [r.TS.SUB_CSAM, r.TS.SUB_LOLI, r.TS.SUB_NCP, r.TS.SUB_SEXUALLY_DEGRADING_CONTENT, r.TS.SUB_UNSOLICITED_PORN],
    onApply: () => (0, a.Jz)(function() {
        let {
            explicitContentGuilds: e,
            explicitContentFriendDm: t,
            explicitContentNonFriendDm: n
        } = (0, a.C$)(), r = {};
        return e === l.TO.SHOW && (r.explicitContentGuilds = l.TO.BLUR), t === l.TO.SHOW && (r.explicitContentFriendDm = l.TO.BLUR), n === l.TO.SHOW && (r.explicitContentNonFriendDm = l.TO.BLUR), r
    }()),
    predicate: () => {
        let {
            explicitContentGuilds: e,
            explicitContentFriendDm: t,
            explicitContentNonFriendDm: n
        } = (0, a.C$)();
        return e === l.TO.SHOW || t === l.TO.SHOW || n === l.TO.SHOW
    }
}