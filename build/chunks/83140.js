/** chunk id: 83140 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var a = n(873298),
    l = n(444802),
    i = n(17372),
    r = n(985018);
let s = {
    getTitle: () => r.intl.string(r.t.RVX1zT),
    getDisabledTitle: () => r.intl.string(r.t.SYkEBi),
    getDescription: () => r.intl.string(r.t.aqlmp8),
    eligibleReportSubtypes: [i.TS.SUB_GORE, i.TS.SUB_GLORIFYING_VIOLENCE],
    onApply: () => (0, l.qY)(function() {
        let {
            goreContentGuilds: e,
            goreContentFriendDm: t,
            goreContentNonFriendDm: n
        } = (0, l.T4)(), i = {};
        return e === a.TO.SHOW && (i.goreContentGuilds = a.TO.BLUR), t === a.TO.SHOW && (i.goreContentFriendDm = a.TO.BLUR), n === a.TO.SHOW && (i.goreContentNonFriendDm = a.TO.BLUR), i
    }()),
    predicate: () => {
        let {
            goreContentGuilds: e,
            goreContentFriendDm: t,
            goreContentNonFriendDm: n
        } = (0, l.T4)();
        return e === a.TO.SHOW || t === a.TO.SHOW || n === a.TO.SHOW
    }
}