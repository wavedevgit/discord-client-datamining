/** chunk id: 86933, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var r = n(627968);
n(64700);
var i = n(73939),
    l = n(36525),
    s = n(397927),
    a = n(627794),
    o = n(928348),
    c = n(268749),
    d = n(985018),
    u = n(181765);

function g(e) {
    let {
        guildId: t,
        existingRules: n
    } = e, {
        cancelEditingRule: g,
        isLoading: m,
        hasChanges: p,
        editingRule: f,
        errorMessage: h,
        saveEditingRule: b
    } = (0, c.S)(), {
        updateRule: x
    } = (0, o.wP)(t), j = null != f, _ = j && !(0, a.wC)(f), O = j || p || _, v = async () => {
        if (!p && !_) return g();
        null == f || _ || x(f);
        let e = n.find(e => {
            let {
                id: t
            } = e;
            return t === (null == f ? void 0 : f.id)
        });
        try {
            let e = await b(n);
            null != e && x(e)
        } catch (t) {
            null != e && x(e)
        }
    }, y = d.intl.string(d.t["ETE/oC"]), A = !p && j ? d.intl.formatToPlainString(d.t.nula34, {
        ruleName: null == f ? void 0 : f.name
    }) : void 0;
    return null != h && (A = (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-feedback-critical",
        className: u.i,
        children: h
    })), (0, r.jsx)(i.F, {
        component: "div",
        className: u.n,
        children: O && (0, r.jsx)(s.FQk, {
            children: (0, r.jsx)(l.A, {
                submitting: m,
                disabled: m,
                onSave: v,
                onReset: g,
                onResetText: y,
                message: A
            })
        })
    })
}