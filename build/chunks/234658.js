/** chunk id: 234658, original params: t,e,i (module,exports,require) **/
i.d(e, {
    x: () => A
});
var n = i(311907),
    l = i(286237),
    s = i(515183),
    a = i(592598),
    r = i(682763),
    u = i(419954),
    o = i(780964),
    d = i(985018);
let A = (0, u.zD)(o.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
    usePredicate: () => {
        let {
            runningGameApplication: t
        } = (0, l.A)();
        return t?.id != null
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
        } = (0, l.A)(), i = e?.id, r = (0, n.bG)([a.A], () => a.A.isLimitedInteractionOverrideEnabled(i)), u = null != t && (0, s.qJ)(t.pid);
        return r || u
    },
    setValue: t => {
        let {
            runningGameApplication: e
        } = (0, l.b)();
        null != e && (0, r.x8)(e.id, t)
    },
    useTitle: () => d.intl.string(d.t.wgVQND),
    useSubtitle: () => d.intl.string(d.t["5SsyF5"])
})