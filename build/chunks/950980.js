/** Chunk was on web.js **/
/** chunk id: 950980, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Z: () => y
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    o = n(397927),
    s = n(961350),
    l = n(287809),
    c = n(957565),
    u = n(100392),
    d = n(102609),
    f = n(271478),
    p = n(386976),
    _ = n(257433),
    h = n(32523),
    m = n(688151),
    g = n(717482);

function E(e) {
    let {
        url: t
    } = e, n = i.useCallback(() => {
        (0, c.C)(t, () => (0, o.showToast)({
            id: "experiment-link-copied",
            message: "Copied experiment link",
            type: o.ToastType.SUCCESS
        }))
    }, [t]);
    return (0, r.jsx)(o.DUT, {
        className: g.wp,
        onClick: n,
        children: (0, r.jsx)(o.qYV, {
            size: "sm",
            color: "currentColor"
        })
    })
}

function y(e) {
    let {
        url: t
    } = e, n = (0, u.OL)(t), c = (0, u.Kb)(t), {
        experiments: y,
        overridesInfo: b
    } = (0, h.hI)(), {
        experiments: O,
        overridesInfo: v
    } = (0, p.op)(), A = i.useMemo(() => null == n ? null : null != y[n] ? y[n] : O[n], [y, O, n]), I = i.useMemo(() => {
        if (null == n);
        else if (null != b[n]) return b[n];
        else if (null != v[n]) return v[n]
    }, [b, v, n]), S = s.default.getId(), T = (0, _.Fm)(A, S), C = i.useMemo(() => (0, u.GI)(A, T), [T, A]), N = (0, a.bG)([l.default], () => {
        let e = l.default.getCurrentUser();
        return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal())
    });
    if (null == n || null == A) return null;
    let w = (0, u.hp)(A).find(e => e.value === c),
        R = null != w ? m.Ps.EXPERIMENT_TREATMENT : m.Ps.EXPERIMENT,
        P = null != I && null != w && I.variantId === w.value,
        D = () => {
            null != w && (P ? (0, d.t$)(A.system, n, null) : (0, d.t$)(A.system, n, w.value))
        },
        L = (0, r.jsx)(E, {
            url: t
        }),
        x = null;
    return (R === m.Ps.EXPERIMENT_TREATMENT && null != w ? x = (0, r.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: w.label
    }) : null != T && (x = (0, r.jsxs)(o.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: ["Server Config: ", C]
    })), N) ? (0, r.jsxs)("div", {
        className: g.zr,
        children: [(0, r.jsx)("div", {
            children: (0, r.jsx)("div", {
                className: g.wx,
                children: (0, r.jsxs)(o.BJc, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [(0, r.jsxs)(o.BJc, {
                        direction: "horizontal",
                        gap: 8,
                        children: [(0, r.jsx)(o.gR_, {
                            size: "lg"
                        }), (0, r.jsxs)(o.BJc, {
                            direction: "vertical",
                            gap: 0,
                            children: [(0, r.jsx)(o.Text, {
                                variant: "text-md/semibold",
                                children: A.title
                            }), x]
                        })]
                    }), L]
                })
            })
        }), null != w ? (0, r.jsx)(o.Button, {
            fullWidth: !0,
            variant: P ? "critical-primary" : "primary",
            text: P ? "Clear Treatment ".concat(w.value) : "Apply Treatment ".concat(w.value),
            onClick: D
        }) : (0, r.jsx)("div", {
            className: g.uh,
            children: (0, r.jsx)(f.g, {
                experiment: A,
                experimentId: n,
                overrideInfo: I
            })
        })]
    }) : null
}