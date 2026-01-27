/** Chunk was on 39048 **/
/** chunk id: 690420, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(627794),
    s = n(904813),
    a = n(268749),
    o = n(264349),
    c = n(713072),
    d = n(419707),
    u = n(645105);
let g = i.memo(function(e) {
    let {
        rule: t,
        persistEdit: n = !1,
        initWithEdit: g = !1
    } = e, {
        hasChanges: m,
        editingRule: p,
        createNewEditingRule: f,
        setEditingRule: h
    } = (0, a.U)(), {
        isLoading: b
    } = (0, a.S)(), [x] = i.useState(() => !(0, l.wC)(t)), j = (null == p ? void 0 : p.id) === t.id || n, _ = (0, s.R)(null == t ? void 0 : t.id), O = j && null != p ? p : t, v = i.useMemo(() => (0, o.cT)(t.name), [null == t ? void 0 : t.name]), y = i.useCallback(() => {
        f(t.guildId, t.triggerType)
    }, [t.guildId, t.triggerType, f]), A = i.useCallback(e => {
        b || h(e, !0)
    }, [b, h]);
    i.useEffect(() => {
        g && h(t, !0)
    }, [g, t, h]);
    let E = i.useCallback(() => {
        j ? m || h(null) : m ? v(() => {
            h(t)
        }) : h(t)
    }, [j, m, v, t, h]);
    return (0, r.jsx)(d.A, {
        renderHeader: (0, r.jsx)(u.A, {
            rule: O,
            forceSetup: x && !j && !_,
            triggerType: t.triggerType,
            isEditMode: j,
            isDefaultRule: _,
            onChangeRule: A,
            onSetupRule: y
        }),
        isStuck: j && m,
        isExpanded: j,
        onExpand: E,
        children: j && (0, r.jsx)(c.A, {
            rule: O,
            isLoading: b,
            onChangeRule: A
        })
    })
})