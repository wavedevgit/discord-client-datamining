/** chunk id: 268749 params = (module,exports,require) **/
n.d(t, {
    S: () => f,
    U: () => C
});
var i = n(735438),
    l = n.n(i),
    a = n(942381),
    r = n(265690),
    s = n(121894),
    o = n(198982),
    c = n(403362),
    u = n(753738),
    d = n(627794),
    _ = n(53594),
    A = n(137207),
    m = n(789821),
    E = n(904813),
    T = n(652215),
    I = n(985018);
let g = Object.freeze({
        editingRule: null,
        hasChanges: !1,
        isLoading: !1,
        errorMessage: null
    }),
    N = (0, r.h)((e, t) => ({
        editingRule: null,
        hasChanges: !1,
        setEditingRule: n => {
            let i = t().editingRule,
                a = null != n && null != i && n.id === i.id,
                r = l().cloneDeep(n);
            null != r && (r = {
                ...r,
                actions: r.actions.filter(c.Vq)
            }), (0, s.r)(() => e({
                editingRule: r,
                hasChanges: a,
                errorMessage: null
            }))
        },
        createNewEditingRule: (t, n, i) => {
            let l = {
                ...(0, d._I)(t, n),
                ...i ?? {}
            };
            return (0, s.r)(() => e({
                editingRule: l,
                hasChanges: !1
            })), l
        },
        isLoading: !1,
        errorMessage: null,
        cancelEditingRule: () => {
            (0, s.r)(() => e({
                ...g
            }))
        },
        saveRule: async (t, n) => {
            if (null == t) return (0, s.r)(() => e({
                ...g
            })), null;
            try {
                (0, d.KU)(t) && (t.triggerMetadata.keywordFilter = (0, m.HR)((0, m.Uq)(t.triggerMetadata.keywordFilter ?? [])), t.triggerMetadata.allowList = (0, m.HR)((0, m.Uq)(t.triggerMetadata.allowList ?? []))), (0, d.ZG)(t) && (t.triggerMetadata.allowList = (0, m.HR)((0, m.Uq)(t.triggerMetadata.allowList ?? []))), (0, _.xG)(t, n), (0, d.uV)(t)
            } catch (t) {
                return t instanceof u.lH ? (0, s.r)(() => {
                    e({
                        errorMessage: I.intl.string(I.t["4Dxaus"]),
                        isLoading: !1
                    })
                }) : t instanceof u.Nr ? (0, s.r)(() => {
                    e({
                        errorMessage: I.intl.string(I.t.hDPEu1),
                        isLoading: !1
                    })
                }) : (0, s.r)(() => {
                    e({
                        errorMessage: t.message,
                        isLoading: !1
                    })
                }), null
            }
            try {
                (0, s.r)(() => {
                    e({
                        isLoading: !0
                    })
                });
                let n = null;
                return n = (0, d.wC)(t) && !(0, E.R)(t.id) ? await (0, A.Vj)(t) : await (0, A.G6)(t), (0, s.r)(() => e({
                    ...g
                })), n
            } catch (n) {
                let t = new o.LG(n);
                (0, s.r)(() => {
                    e({
                        isLoading: !1,
                        errorMessage: t.code === T.t02.INVALID_FORM_BODY && t.errors?.trigger_metadata?.regex_patterns != null ? I.intl.string(I.t.hDPEu1) : t.getAnyErrorMessage()
                    })
                })
            }
            return null
        },
        saveEditingRule: e => {
            let {
                editingRule: n,
                saveRule: i
            } = t();
            return i(n, e)
        }
    }));

function f() {
    return N(e => ({
        hasChanges: e.hasChanges,
        editingRule: e.editingRule,
        isLoading: e.isLoading,
        errorMessage: e.errorMessage,
        saveRule: e.saveRule,
        saveEditingRule: e.saveEditingRule,
        cancelEditingRule: e.cancelEditingRule
    }), a.x)
}

function C() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = N(e => ({
            hasChanges: e.hasChanges,
            editingRule: e.editingRule,
            setEditingRule: e.setEditingRule,
            createNewEditingRule: e.createNewEditingRule
        }), a.x);
    return null != e && t.setEditingRule(e), t
}