/** chunk id: 234658, original params: e,t,i (module,exports,require) **/
i.d(t, {
    x: () => T
});
var n = i(311907),
    l = i(286237),
    s = i(515183),
    r = i(592598),
    a = i(682763),
    u = i(419954),
    o = i(780964),
    d = i(985018);
let T = (0, u.zD)(o.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
    usePredicate: () => {
        let {
            runningGameApplication: e
        } = (0, l.A)();
        return (null == e ? void 0 : e.id) != null
    },
    useDisabled: () => {
        let {
            runningGame: e
        } = (0, l.A)();
        return null != e && (0, s.qJ)(e.pid)
    },
    useValue: () => {
        let {
            runningGame: e,
            runningGameApplication: t
        } = (0, l.A)(), i = null == t ? void 0 : t.id, a = (0, n.bG)([r.A], () => r.A.isLimitedInteractionOverrideEnabled(i)), u = null != e && (0, s.qJ)(e.pid);
        return a || u
    },
    setValue: e => {
        let {
            runningGameApplication: t
        } = (0, l.b)();
        null != t && (0, a.x8)(t.id, e)
    },
    useTitle: () => d.intl.string(d.t.wgVQND),
    useSubtitle: () => d.intl.string(d.t["5SsyF5"])
})