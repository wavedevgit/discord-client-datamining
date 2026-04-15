/** chunk id: 7832 params = (module,exports,require) **/
n.d(t, {
    I: () => d
});
var i = n(64700),
    l = n(323889),
    a = n(311907),
    r = n(605180),
    s = n(829219),
    o = n(859703);

function d() {
    let e = (0, a.bG)([o.A], () => o.A.getQuestHomeHero()),
        t = e?.id,
        n = (0, a.bG)([r.A], () => null != t && r.A.hasSeen(l.p.QUEST_HOME_HERO, t), [t]);
    return {
        shouldShowQuestHomeHeroContent: e?.questHomeEntrypoint != null && !n,
        dismissQuestHomeHeroContent: i.useCallback(() => {
            null != t && (0, s.zh)(l.p.QUEST_HOME_HERO, [t])
        }, [t]),
        questHomeHero: e
    }
}