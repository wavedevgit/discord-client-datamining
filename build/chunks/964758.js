/** Chunk was on 39048 **/
/** chunk id: 964758, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(397927),
    o = n(915089),
    c = n(599941),
    d = n(11351),
    u = n(306444),
    g = n(922975),
    m = n(67097),
    p = n(244912),
    f = n(963175),
    h = n(985018);

function b() {
    var e;
    let {
        editStateId: t
    } = (0, u.O)(), [n, l] = g.V_(t), [b, x] = g.hh(t), j = (0, c.dL)(t), {
        options: _
    } = (0, p.A)(null != (e = null == j ? void 0 : j.active_trial) ? e : null), O = (0, m.A)(), v = null != n, y = i.useCallback(e => {
        let t = _.find(e => e.isDefault);
        s()(null != t, "Missing default trial duartion option"), l(e ? t.value : null)
    }, [l, _]), A = (0, d.gN)(), E = (0, o.GV)(), N = (0, o.GV)();
    return (0, r.jsxs)(f.A, {
        title: h.intl.string(h.t["6anton"]),
        description: h.intl.string(h.t.urVijS),
        children: [(0, r.jsx)(a.dOG, {
            label: h.intl.string(h.t["+hTmdb"]),
            checked: v,
            onChange: e => y(e),
            disabled: A
        }), (0, r.jsx)(a.l6P, {
            selectionMode: "single",
            label: h.intl.string(h.t.m1KuWd),
            description: h.intl.string(h.t.NB9NLF),
            "aria-labelledby": E,
            options: _,
            formatOption: e => {
                let {
                    value: t,
                    label: n
                } = e;
                return {
                    id: t.interval.toString(),
                    value: t,
                    label: n
                }
            },
            placeholder: h.intl.string(h.t.WZG1BU),
            value: n,
            onSelectionChange: l,
            maxOptionsVisible: 5,
            disabled: !v || A
        }), (0, r.jsx)(a.hKd, {
            size: 24
        }), (0, r.jsx)(a.l6P, {
            selectionMode: "single",
            label: h.intl.string(h.t["/JD9oe"]),
            description: h.intl.string(h.t.Cg5eBm),
            "aria-labelledby": N,
            options: O,
            formatOption: e => {
                let {
                    value: t,
                    label: n
                } = e;
                return {
                    id: t.toString(),
                    value: t,
                    label: n
                }
            },
            value: b,
            onSelectionChange: x,
            maxOptionsVisible: 5,
            disabled: !v || A
        })]
    })
}