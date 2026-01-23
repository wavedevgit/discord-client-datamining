/** Chunk was on 47841 **/
/** chunk id: 964758, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
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
    b = n(985018);

function h() {
    var e;
    let {
        editStateId: t
    } = (0, u.O)(), [n, l] = g.V_(t), [h, x] = g.hh(t), j = (0, c.dL)(t), {
        options: _
    } = (0, p.A)(null != (e = null == j ? void 0 : j.active_trial) ? e : null), O = (0, m.A)(), v = null != n, y = i.useCallback(e => {
        let t = _.find(e => e.isDefault);
        s()(null != t, "Missing default trial duartion option"), l(e ? t.value : null)
    }, [l, _]), A = (0, d.gN)(), E = (0, o.GV)(), N = (0, o.GV)();
    return (0, r.jsxs)(f.A, {
        title: b.intl.string(b.t["6anton"]),
        description: b.intl.string(b.t.urVijS),
        children: [(0, r.jsx)(a.dOG, {
            label: b.intl.string(b.t["+hTmdb"]),
            checked: v,
            onChange: e => y(e),
            disabled: A
        }), (0, r.jsx)(a.l6P, {
            selectionMode: "single",
            label: b.intl.string(b.t.m1KuWd),
            description: b.intl.string(b.t.NB9NLF),
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
            placeholder: b.intl.string(b.t.WZG1BU),
            value: n,
            onSelectionChange: l,
            maxOptionsVisible: 5,
            disabled: !v || A
        }), (0, r.jsx)(a.hKd, {
            size: 24
        }), (0, r.jsx)(a.l6P, {
            selectionMode: "single",
            label: b.intl.string(b.t["/JD9oe"]),
            description: b.intl.string(b.t.Cg5eBm),
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
            value: h,
            onSelectionChange: x,
            maxOptionsVisible: 5,
            disabled: !v || A
        })]
    })
}