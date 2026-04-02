/** chunk id: 15438 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(311907),
    a = n(506774),
    l = n(73153),
    r = n(498642),
    s = n(71393),
    o = n(576705),
    d = n(652215);
let c = {
    MAX_MEMBER_COUNT: new Set
};
class u extends i.Ay.Store {
    static displayName = "MaxMemberCountChannelNoticeStore";
    initialize() {
        this.waitFor(o.A, s.A, r.A), this.syncWith([o.A, s.A, r.A], d.tEg), a.w.remove(d.n5X.MAX_MEMBER_COUNT_100), a.w.remove(d.n5X.MAX_MEMBER_COUNT_250), c[d.n5X.MAX_MEMBER_COUNT] = new Set(a.w.get(d.n5X.MAX_MEMBER_COUNT)) ?? new Set
    }
    isVisible(e) {
        if (null == e) return !1;
        let t = r.A.getMemberCount(e.id) ?? 0,
            n = o.A.can(d.xBc.ADMINISTRATOR, e);
        return !c[d.n5X.MAX_MEMBER_COUNT].has(e.id) && n && e.maxMembers > 0 && e.maxMembers - t <= 1e4
    }
}
let A = new u(l.h, {
    MAX_MEMBER_COUNT_NOTICE_DISMISS: function(e) {
        let t = e.guildId;
        if (!c[d.n5X.MAX_MEMBER_COUNT].has(t)) return c[d.n5X.MAX_MEMBER_COUNT].add(t), a.w.set(d.n5X.MAX_MEMBER_COUNT, c[d.n5X.MAX_MEMBER_COUNT]), !0
    }
})