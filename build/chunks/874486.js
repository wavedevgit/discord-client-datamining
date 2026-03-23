/** chunk id: 874486 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(311907),
    s = n(73153),
    l = n(961350),
    a = n(414736),
    r = n(3137),
    o = n(559908);
let d = {
        unlockedAchievements: {}
    },
    c = {
        ...d
    };
class u extends i.Ay.PersistedStore {
    static displayName = "PoggermodeAchievementStore";
    static persistKey = "PoggermodeAchievementStore";
    initialize(e) {
        this.waitFor(l.default, r.A, o.Ay);
        let t = e ?? {
            ...d
        };
        for (let e in t) c[e] = t[e]
    }
    getState() {
        return c
    }
    getAllUnlockedAchievements() {
        return c.unlockedAchievements
    }
    getUnlocked(e) {
        return c.unlockedAchievements[e] ?? null
    }
}
let m = new u(s.h, {
    POGGERMODE_ACHIEVEMENT_UNLOCK: function(e) {
        let {
            achievementId: t
        } = e;
        if (!r.A.isEnabled()) return !1;
        null != c.unlockedAchievements[t] || (c.unlockedAchievements = {
            ...c.unlockedAchievements,
            [t]: {
                achievementId: t,
                dateUnlocked: Date.now()
            }
        }, setTimeout(() => {
            (0, a.U)(t, !0)
        }, 2e3))
    }
})