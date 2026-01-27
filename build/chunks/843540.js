/** Chunk was on 12236 **/
/** chunk id: 843540, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var l = n(873298),
    r = n(632119),
    i = n(17372),
    a = n(985018);
let s = {
    getTitle: () => a.intl.string(a.t["Gtck/t"]),
    getDisabledTitle: () => a.intl.string(a.t.E6UmXa),
    getDescription: () => a.intl.string(a.t.jcRSp6),
    eligibleReportSubtypes: [i.TS.SUB_CSAM, i.TS.SUB_LOLI, i.TS.SUB_NCP, i.TS.SUB_SEXUALLY_DEGRADING_CONTENT, i.TS.SUB_UNSOLICITED_PORN],
    onApply: () => (0, r.Jz)(function() {
        let {
            explicitContentGuilds: e,
            explicitContentFriendDm: t,
            explicitContentNonFriendDm: n
        } = (0, r.C$)(), i = {};
        return e === l.TO.SHOW && (i.explicitContentGuilds = l.TO.BLUR), t === l.TO.SHOW && (i.explicitContentFriendDm = l.TO.BLUR), n === l.TO.SHOW && (i.explicitContentNonFriendDm = l.TO.BLUR), i
    }()),
    predicate: () => {
        let {
            explicitContentGuilds: e,
            explicitContentFriendDm: t,
            explicitContentNonFriendDm: n
        } = (0, r.C$)();
        return e === l.TO.SHOW || t === l.TO.SHOW || n === l.TO.SHOW
    }
}