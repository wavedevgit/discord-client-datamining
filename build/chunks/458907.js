/** Chunk was on 47841 **/
/** chunk id: 458907, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    T: () => u
}), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(460760),
    o = n(997590),
    c = n(324580),
    d = n(985018);

function u(e) {
    let {
        label: t,
        description: n,
        guildId: u,
        guildMetadata: g,
        isDisabled: m,
        clearable: p = !0
    } = e, f = (0, l.yK)([o.A], () => o.A.getPrimaryCategories()), b = i.useCallback(e => {
        (0, a.GX)(u, null != e ? e : c.ig)
    }, [u]), h = i.useMemo(() => f.map(e => {
        let {
            categoryId: t,
            name: n
        } = e;
        return {
            id: t.toString(),
            value: t,
            label: n
        }
    }), [f]);
    return 0 === f.length ? (0, r.jsx)(s.y$y, {}) : (0, r.jsx)(s.ZiE, {
        selectionMode: "single",
        value: g.primaryCategoryId === c.ig ? null : g.primaryCategoryId,
        label: t,
        description: n,
        placeholder: d.intl.string(d.t.XqMe3N),
        options: h,
        onSelectionChange: b,
        disabled: m,
        clearable: p
    }, h.length)
}