/** chunk id: 15438 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(311907),
    a = n(506774),
    r = n(73153),
    l = n(498642),
    s = n(71393),
    o = n(576705),
    d = n(652215);
let c = {
    MAX_MEMBER_COUNT: new Set
};
class u extends i.Ay.Store {
    static displayName = "MaxMemberCountChannelNoticeStore";
    initialize() {
        this.waitFor(o.A, s.A, l.A), this.syncWith([o.A, s.A, l.A], d.tEg), a.w.remove(d.n5X.MAX_MEMBER_COUNT_100), a.w.remove(d.n5X.MAX_MEMBER_COUNT_250), c[d.n5X.MAX_MEMBER_COUNT] = new Set(a.w.get(d.n5X.MAX_MEMBER_COUNT)) ?? new Set
    }
    isVisible(e) {
        if (null == e) return !1;
        let t = l.A.getMemberCount(e.id) ?? 0,
            n = o.A.can(d.xBc.ADMINISTRATOR, e);
        return !c[d.n5X.MAX_MEMBER_COUNT].has(e.id) && n && e.maxMembers > 0 && e.maxMembers - t <= 1e4
    }
}
let A = new u(r.h, {
    MAX_MEMBER_COUNT_NOTICE_DISMISS: function(e) {
        let t = e.guildId;
        if (!c[d.n5X.MAX_MEMBER_COUNT].has(t)) return c[d.n5X.MAX_MEMBER_COUNT].add(t), a.w.set(d.n5X.MAX_MEMBER_COUNT, c[d.n5X.MAX_MEMBER_COUNT]), !0
    }
})