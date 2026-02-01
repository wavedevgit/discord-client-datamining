/** chunk id: 234658, original params: t,e,i (module,exports,require) **/
i.d(e, {
    x: () => T
});
var n = i(311907),
    l = i(286237),
    s = i(515183),
    r = i(592598),
    u = i(682763),
    a = i(419954),
    o = i(780964),
    d = i(985018);
let T = (0, a.zD)(o.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
    usePredicate: () => {
        let {
            runningGameApplication: t
        } = (0, l.A)();
        return (null == t ? void 0 : t.id) != null
    },
    useDisabled: () => {
        let {
            runningGame: t
        } = (0, l.A)();
        return null != t && (0, s.qJ)(t.pid)
    },
    useValue: () => {
        let {
            runningGame: t,
            runningGameApplication: e
        } = (0, l.A)(), i = null == e ? void 0 : e.id, u = (0, n.bG)([r.A], () => r.A.isLimitedInteractionOverrideEnabled(i)), a = null != t && (0, s.qJ)(t.pid);
        return u || a
    },
    setValue: t => {
        let {
            runningGameApplication: e
        } = (0, l.b)();
        null != e && (0, u.x8)(e.id, t)
    },
    useTitle: () => d.intl.string(d.t.wgVQND),
    useSubtitle: () => d.intl.string(d.t["5SsyF5"])
})