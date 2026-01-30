/** chunk id: 864057, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => y
}), r(896048);
var n = r(627968);
r(64700);
var i = r(503698),
    l = r.n(i),
    s = r(299855),
    a = r.n(s),
    o = r(158954),
    c = r(397927),
    d = r(77729),
    u = r(430452),
    f = r(723702),
    h = r(571044),
    p = r(624130),
    x = r(688465),
    m = r(297524),
    j = r(502075),
    g = r(818348),
    _ = r(985018),
    v = r(687637);

function b(e) {
    let {
        id: t,
        text: r,
        icon: i,
        selected: s,
        onClick: a
    } = e;
    return (0, n.jsx)(c.DUT, {
        role: "radio",
        "aria-checked": s,
        onClick: () => a(t),
        tabIndex: 0,
        className: l()(v.tp, v.ey, {
            [v.wH]: s
        }),
        children: (0, n.jsxs)("div", {
            className: v.DD,
            children: [(0, n.jsx)(i, {
                size: "lg"
            }), (0, n.jsx)(o.EYj, {
                variant: "text-sm/medium",
                color: "none",
                children: r
            })]
        })
    })
}

function y(e) {
    let {
        onSourceSelect: t
    } = e;
    (0, h.jd)(), (0, p.A)(t, g.FX);
    let [{
        nativeSourceType: r
    }, i] = (0, x.tS)(), l = (0, f.isMac)() && a().satisfies(null === d.A || void 0 === d.A ? void 0 : d.A.os.release, j.WZ), s = u.A.getUseGamescopeCapture(), y = s ? "gamescope" : "screen";
    return (0, n.jsxs)("div", {
        className: v.zr,
        children: [(0, n.jsx)(o.DZT, {
            className: v.wx,
            variant: "heading-lg/semibold",
            color: "text-default",
            children: _.intl.string(_.t.XyYoFc)
        }), l ? (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(o.EYj, {
                className: v.rf,
                variant: "text-sm/medium",
                color: "text-subtle",
                children: _.intl.format(_.t.sbbPhW, {
                    buttonName: _.intl.string(_.t.FiBjwU)
                })
            }), (0, n.jsx)(m.A, {})]
        }) : (0, n.jsxs)("div", {
            className: v.Ro,
            children: [(0, n.jsx)(b, {
                selected: r === y,
                onClick: () => {
                    i({
                        type: "set_native_source_type",
                        sourceType: y
                    })
                },
                id: "screen",
                text: _.intl.string(_.t.cVUFXY),
                icon: c.kN9
            }), !s && (0, n.jsx)(b, {
                selected: "window" === r,
                onClick: () => {
                    i({
                        type: "set_native_source_type",
                        sourceType: "window"
                    })
                },
                id: "window",
                text: _.intl.string(_.t.dG2A1E),
                icon: c.WxK
            })]
        })]
    })
}