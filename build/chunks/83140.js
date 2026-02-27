/** chunk id: 83140, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var l = n(873298),
    a = n(444802),
    r = n(17372),
    i = n(985018);
let s = {
    getTitle: () => i.intl.string(i.t.RVX1zT),
    getDisabledTitle: () => i.intl.string(i.t.SYkEBi),
    getDescription: () => i.intl.string(i.t.aqlmp8),
    eligibleReportSubtypes: [r.TS.SUB_GORE, r.TS.SUB_GLORIFYING_VIOLENCE],
    onApply: () => (0, a.qY)(function() {
        let {
            goreContentGuilds: e,
            goreContentFriendDm: t,
            goreContentNonFriendDm: n
        } = (0, a.T4)(), r = {};
        return e === l.TO.SHOW && (r.goreContentGuilds = l.TO.BLUR), t === l.TO.SHOW && (r.goreContentFriendDm = l.TO.BLUR), n === l.TO.SHOW && (r.goreContentNonFriendDm = l.TO.BLUR), r
    }()),
    predicate: () => {
        let {
            goreContentGuilds: e,
            goreContentFriendDm: t,
            goreContentNonFriendDm: n
        } = (0, a.T4)();
        return e === l.TO.SHOW || t === l.TO.SHOW || n === l.TO.SHOW
    }
}