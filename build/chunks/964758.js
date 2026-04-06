/** chunk id: 964758 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(284009),
    r = n.n(l),
    a = n(397927),
    o = n(915089),
    d = n(599941),
    c = n(11351),
    u = n(306444),
    m = n(922975),
    g = n(67097),
    x = n(244912),
    h = n(963175),
    _ = n(985018);

function p() {
    let {
        editStateId: e
    } = (0, u.O)(), [t, n] = m.V_(e), [l, p] = m.hh(e), A = (0, d.dL)(e), {
        options: f
    } = (0, x.A)(A?.active_trial ?? null), j = (0, g.A)(), N = null != t, E = s.useCallback(e => {
        let t = f.find(e => e.isDefault);
        r()(null != t, "Missing default trial duartion option"), n(e ? t.value : null)
    }, [n, f]), C = (0, c.gN)(), b = (0, o.GV)(), T = (0, o.GV)();
    return (0, i.jsxs)(h.A, {
        title: _.intl.string(_.t["6anton"]),
        description: _.intl.string(_.t.urVijS),
        children: [(0, i.jsx)(a.dOG, {
            label: _.intl.string(_.t["+hTmdb"]),
            checked: N,
            onChange: e => E(e),
            disabled: C
        }), (0, i.jsx)(a.l6P, {
            selectionMode: "single",
            label: _.intl.string(_.t.m1KuWd),
            description: _.intl.string(_.t.NB9NLF),
            "aria-labelledby": b,
            options: f,
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
            placeholder: _.intl.string(_.t.WZG1BU),
            value: t,
            onSelectionChange: n,
            maxOptionsVisible: 5,
            disabled: !N || C
        }), (0, i.jsx)(a.hKd, {
            size: 24
        }), (0, i.jsx)(a.l6P, {
            selectionMode: "single",
            label: _.intl.string(_.t["/JD9oe"]),
            description: _.intl.string(_.t.Cg5eBm),
            "aria-labelledby": T,
            options: j,
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
            value: l,
            onSelectionChange: p,
            maxOptionsVisible: 5,
            disabled: !N || C
        })]
    })
}