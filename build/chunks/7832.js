/** chunk id: 7832 params = (module,exports,require) **/
n.d(t, {
    I: () => c
});
var i = n(64700),
    l = n(311907),
    a = n(554146),
    r = n(932001),
    s = n(661191),
    o = n(859703),
    d = n(49999);

function c() {
    let e = (0, l.bG)([o.A], () => o.A.getQuestHomeHeroConfig()),
        t = i.useMemo(() => e?.startsAt != null ? s.default.fromTimestamp(new Date(e?.startsAt).valueOf()) : null, [e?.startsAt]),
        [n, c] = (0, r.Cc)(null != t && e?.questHomeEntrypoint != null ? a.M.QUEST_HOME_ENTRYPOINT_TAKEOVER_BADGE : null, t ?? "", d.m.PRIVATE_CHANNELS_LIST, !0),
        u = i.useCallback(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.i.TAKE_ACTION;
            c(e)
        }, [c]);
    return {
        shouldShowQuestHomeHeroContent: n === a.M.QUEST_HOME_ENTRYPOINT_TAKEOVER_BADGE,
        dismissQuestHomeHeroContent: u,
        questHomeHeroConfig: e
    }
}