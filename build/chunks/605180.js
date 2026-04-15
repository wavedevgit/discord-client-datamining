/** chunk id: 605180 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(323889),
    l = n(311907),
    a = n(73153),
    r = n(859703),
    s = n(710969);
let o = new Map;

function d(e) {
    let t = o.get(e);
    return null == t && (t = new Set, o.set(e, t)), t
}

function c() {
    let e = r.A.quests,
        t = d(i.p.QUEST),
        n = !1;
    for (let [i, a] of e) {
        var l;
        t.has(i) || (0, s.Ic)(a) || null == (l = a.userStatus) || null == l.enrolledAt && null == l.completedAt && null == l.claimedAt && 0 === l.dismissedQuestContent || (t.add(i), n = !0)
    }
    if (0 !== r.A.lastFetchedCurrentQuests && e.size > 0)
        for (let i of t) {
            let l = e.get(i);
            (null == l || (0, s.Ic)(l)) && (t.delete(i), n = !0)
        }
    let a = d(i.p.QUEST_HOME_HERO);
    if (null != r.A.getLastFetchedQuestHomeHero() && a.size > 0) {
        let e = r.A.getQuestHomeHero();
        for (let t of a)(null == e || t !== e.id) && (a.delete(t), n = !0)
    }
    return n
}
class u extends l.Ay.PersistedStore {
    static displayName = "AdContentSeenStore";
    static persistKey = "AdContentSeenStore";
    initialize(e) {
        if (this.waitFor(r.A), o = new Map, null != e)
            for (let [t, n] of Object.entries(e.seenContentIds)) o.set(Number(t), new Set(n));
        this.syncWith([r.A], c)
    }
    getState() {
        let e = {};
        for (let [t, n] of o) e[t] = Array.from(n);
        return {
            seenContentIds: e
        }
    }
    hasSeen(e, t) {
        return o.get(e)?.has(t) ?? !1
    }
}
let A = new u(a.h, {
    AD_CONTENT_MARK_SEEN: function(e) {
        let t = d(e.adCreativeType),
            n = !1;
        for (let i of e.contentIds) t.has(i) || (t.add(i), n = !0);
        return n
    },
    AD_CONTENT_MARK_UNSEEN: function(e) {
        let t = o.get(e.adCreativeType);
        if (null == t) return !1;
        let n = !1;
        for (let i of e.contentIds) t.has(i) && (t.delete(i), n = !0);
        return n
    }
})