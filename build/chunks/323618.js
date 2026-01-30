/** chunk id: 323618, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(934551),
    l = n(311907),
    c = n(554146),
    u = n(827734),
    d = n(397927),
    f = n(736653),
    p = n(826673),
    _ = n(617617),
    h = n(74396),
    m = n(653523),
    g = n(62504),
    E = n(520650),
    y = n(985018),
    b = n(387376);

function O() {
    return (0, r.jsxs)("svg", {
        className: b.JR,
        width: "68",
        height: "68",
        viewBox: "0 0 68 68",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, r.jsx)("rect", {
            x: "4",
            y: "4",
            width: "60",
            height: "60",
            rx: "8",
            stroke: "url(#paint0_linear_1368_16544)",
            strokeWidth: "2"
        }), (0, r.jsx)("defs", {
            children: (0, r.jsxs)("linearGradient", {
                id: "paint0_linear_1368_16544",
                x1: "33.875",
                y1: "2",
                x2: "33.875",
                y2: "65.75",
                gradientUnits: "userSpaceOnUse",
                children: [(0, r.jsx)("stop", {
                    stopColor: "#B473F5"
                }), (0, r.jsx)("stop", {
                    offset: "1",
                    stopColor: "#E292AA"
                })]
            })
        })]
    })
}

function v(e) {
    let {
        isDisabled: t,
        onSelect: n
    } = e, a = (0, l.bG)([_.A], () => {
        var e, t;
        return null == (t = _.A.settings.appearance) || null == (e = t.clientThemeSettings) ? void 0 : e.customUserThemeSettings
    }), {
        shouldShowNewBadge: v,
        markNewBadgeAsDismissed: A
    } = (0, g.L)(), I = (0, p.JZ)(c.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT), S = (0, f.Ay)(), T = (0, d.Mwr)(S) ? b.Xu : b.VO, C = null != a && null != a.colors && a.colors.length > 0, N = (0, l.bG)([h.A], () => h.A.getSavedCustomTheme()), w = C, R = C || null != N, P = i.useMemo(() => {
        let e, t;
        if (C) e = a.colors, t = a.gradientAngle;
        else {
            if (null === N) return;
            e = N.colors, t = N.gradient_angle
        }
        let n = e[0];
        return e.length > 1 && (n = "linear-gradient(".concat(t, "deg, ").concat(e.join(", "), ")")), {
            background: "var(--background-gradient), ".concat(n)
        }
    }, [C, a, N]), D = R ? u.A.unsafe_rawColors.WHITE.css : void 0, L = i.useCallback(() => {
        v && A(), null == n || n()
    }, [v, A, n]);
    return (0, r.jsxs)("div", {
        className: b.fC,
        children: [(0, r.jsxs)(m.S4, {
            onSelect: t ? void 0 : L,
            isSelected: !1,
            showSelectionCircle: w,
            name: y.intl.string(E.default.KSBBpC),
            className: o()(b.kL, R && T, t && b.r9),
            showBadge: !1,
            showLockedBadge: !1,
            style: P,
            children: [!I && !R && (0, r.jsx)(O, {}), (0, r.jsx)("div", {
                className: b.JU
            }), (0, r.jsx)(s.PaintPaletteIcon, {
                color: D,
                className: b.vL
            })]
        }), v && (0, r.jsx)(d.LpS, {
            className: b.Ad,
            text: y.intl.string(y.t.y2b7CA),
            color: u.A.unsafe_rawColors.RED_430.css
        })]
    })
}