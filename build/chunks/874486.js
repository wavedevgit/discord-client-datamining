/** chunk id: 874486, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(311907),
    s = n(73153),
    a = n(961350),
    l = n(414736),
    r = n(3137),
    o = n(559908);
let c = {
        unlockedAchievements: {}
    },
    d = {
        ...c
    };
class u extends i.Ay.PersistedStore {
    static displayName = "PoggermodeAchievementStore";
    static persistKey = "PoggermodeAchievementStore";
    initialize(e) {
        this.waitFor(a.default, r.A, o.Ay);
        let t = e ?? {
            ...c
        };
        for (let e in t) d[e] = t[e]
    }
    getState() {
        return d
    }
    getAllUnlockedAchievements() {
        return d.unlockedAchievements
    }
    getUnlocked(e) {
        return d.unlockedAchievements[e] ?? null
    }
}
let _ = new u(s.h, {
    POGGERMODE_ACHIEVEMENT_UNLOCK: function(e) {
        let {
            achievementId: t
        } = e;
        if (!r.A.isEnabled()) return !1;
        null != d.unlockedAchievements[t] || (d.unlockedAchievements = {
            ...d.unlockedAchievements,
            [t]: {
                achievementId: t,
                dateUnlocked: Date.now()
            }
        }, setTimeout(() => {
            (0, l.U)(t, !0)
        }, 2e3))
    }
})