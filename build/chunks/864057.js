/** chunk id: 864057, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => S
});
var s = r(627968);
r(64700);
var i = r(503698),
    n = r.n(i),
    l = r(299855),
    a = r.n(l),
    o = r(158954),
    c = r(397927),
    d = r(77729),
    u = r(430452),
    f = r(723702),
    h = r(571044),
    x = r(624130),
    p = r(688465),
    m = r(297524),
    _ = r(502075),
    g = r(818348),
    j = r(985018),
    v = r(687637);

function A(e) {
    let {
        id: t,
        text: r,
        icon: i,
        selected: l,
        onClick: a
    } = e;
    return (0, s.jsx)(c.DUT, {
        role: "radio",
        "aria-checked": l,
        onClick: () => a(t),
        tabIndex: 0,
        className: n()(v.tp, v.ey, {
            [v.wH]: l
        }),
        children: (0, s.jsxs)("div", {
            className: v.DD,
            children: [(0, s.jsx)(i, {
                size: "lg"
            }), (0, s.jsx)(o.EYj, {
                variant: "text-sm/medium",
                color: "none",
                children: r
            })]
        })
    })
}

function S(e) {
    let {
        onSourceSelect: t
    } = e;
    (0, h.jd)(), (0, x.A)(t, g.FX);
    let [{
        nativeSourceType: r
    }, i] = (0, p.tS)(), n = (0, f.isMac)() && a().satisfies(d.A?.os.release, _.WZ), l = u.Ay.getUseGamescopeCapture(), S = l ? "gamescope" : "screen";
    return (0, s.jsxs)("div", {
        className: v.zr,
        children: [(0, s.jsx)(o.DZT, {
            className: v.wx,
            variant: "heading-lg/semibold",
            color: "text-default",
            children: j.intl.string(j.t.XyYoFc)
        }), n ? (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(o.EYj, {
                className: v.rf,
                variant: "text-sm/medium",
                color: "text-subtle",
                children: j.intl.format(j.t.sbbPhW, {
                    buttonName: j.intl.string(j.t.FiBjwU)
                })
            }), (0, s.jsx)(m.A, {})]
        }) : (0, s.jsxs)("div", {
            className: v.Ro,
            children: [(0, s.jsx)(A, {
                selected: r === S,
                onClick: () => {
                    i({
                        type: "set_native_source_type",
                        sourceType: S
                    })
                },
                id: "screen",
                text: j.intl.string(j.t.cVUFXY),
                icon: c.kN9
            }), !l && (0, s.jsx)(A, {
                selected: "window" === r,
                onClick: () => {
                    i({
                        type: "set_native_source_type",
                        sourceType: "window"
                    })
                },
                id: "window",
                text: j.intl.string(j.t.dG2A1E),
                icon: c.WxK
            })]
        })]
    })
}