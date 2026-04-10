/** chunk id: 843540 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var a = n(873298),
    l = n(632119),
    i = n(17372),
    r = n(985018);
let s = {
    getTitle: () => r.intl.string(r.t["Gtck/t"]),
    getDisabledTitle: () => r.intl.string(r.t.E6UmXa),
    getDescription: () => r.intl.string(r.t.jcRSp6),
    eligibleReportSubtypes: [i.TS.SUB_CSAM, i.TS.SUB_LOLI, i.TS.SUB_NCP, i.TS.SUB_SEXUALLY_DEGRADING_CONTENT, i.TS.SUB_UNSOLICITED_PORN],
    onApply: () => (0, l.Jz)(function() {
        let {
            explicitContentGuilds: e,
            explicitContentFriendDm: t,
            explicitContentNonFriendDm: n
        } = (0, l.C$)(), i = {};
        return e === a.TO.SHOW && (i.explicitContentGuilds = a.TO.BLUR), t === a.TO.SHOW && (i.explicitContentFriendDm = a.TO.BLUR), n === a.TO.SHOW && (i.explicitContentNonFriendDm = a.TO.BLUR), i
    }()),
    predicate: () => {
        let {
            explicitContentGuilds: e,
            explicitContentFriendDm: t,
            explicitContentNonFriendDm: n
        } = (0, l.C$)();
        return e === a.TO.SHOW || t === a.TO.SHOW || n === a.TO.SHOW
    }
}