/** chunk id: 313843 params = (module,exports,require) **/
n.d(t, {
    A: () => _,
    Q: () => f
});
var a = n(627968),
    i = n(64700),
    l = n(158954),
    r = n(541830),
    s = n(240248),
    c = n(459746),
    o = n(503364),
    d = n(305080),
    u = n(985018),
    m = n(230845);

function x(e) {
    let {
        game: t
    } = e, n = t.supplementalData, [l] = i.useState(() => Math.random()), r = i.useMemo(() => {
        if (null == n) return "";
        let {
            artwork: e,
            screenshots: t
        } = n;
        if (e.length > 0) {
            let t = Math.floor(l * e.length);
            return e[t]
        }
        if (t.length > 0) {
            let e = Math.floor(l * t.length);
            return t[e]
        }
        return ""
    }, [n, l]);
    return (0, s.uJ)(r) ? null : (0, a.jsx)("div", {
        className: m.y1,
        style: {
            backgroundImage: `url("${r}")`
        }
    })
}

function h(e) {
    let {
        game: t,
        application: n
    } = e, i = t.supplementalData, c = i?.name ?? t.name ?? n?.name, o = (i?.genres ?? t.genres ?? []).map(r.du).join(", ");
    return (0, a.jsxs)("div", {
        className: m.wt,
        children: [null != t.l30Rank && (0, a.jsx)(g, {
            rank: t.l30Rank
        }), (0, a.jsx)(l.DZT, {
            variant: "heading-xxl/semibold",
            children: c
        }), (0, s.uJ)(o) ? null : (0, a.jsx)(l.EYj, {
            variant: "text-md/normal",
            color: "text-default",
            children: o
        })]
    })
}

function f(e) {
    let {
        game: t,
        application: n,
        isTwoColumn: i
    } = e, l = t.supplementalData;
    return null == l ? null : (0, a.jsx)("div", {
        className: i ? m.n8 : m.FS,
        children: (0, a.jsx)(c.A, {
            game: l,
            application: n,
            className: m.xe,
            size: c.w.LARGE
        })
    })
}
let g = e => {
        let {
            rank: t
        } = e;
        return (0, a.jsxs)("div", {
            className: m.Qc,
            children: [(0, a.jsx)(l.OR, {
                size: "xxs",
                color: "currentColor",
                "aria-hidden": "true"
            }), (0, a.jsx)(l.EYj, {
                variant: "text-xs/bold",
                color: "none",
                children: u.intl.formatToPlainString(u.t.ehZXlZ, {
                    rank: t
                })
            })]
        })
    },
    _ = function(e) {
        let {
            game: t,
            application: n,
            onClose: i,
            trackAction: l
        } = e, {
            isTwoColumn: r
        } = (0, d.c)();
        return r ? (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(x, {
                game: t
            }), (0, a.jsx)("div", {
                className: m.kL,
                children: (0, a.jsxs)("div", {
                    className: m.cb,
                    children: [(0, a.jsx)(f, {
                        game: t,
                        application: n,
                        isTwoColumn: !0
                    }), (0, a.jsx)(h, {
                        game: t,
                        application: n
                    })]
                })
            }), (0, a.jsx)(o.N, {
                applicationId: n.id,
                onClose: i,
                className: m.HK,
                trackAction: l
            })]
        }) : (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(x, {
                game: t
            }), (0, a.jsx)("div", {
                className: m.kL,
                children: (0, a.jsx)(h, {
                    game: t,
                    application: n
                })
            }), (0, a.jsx)(o.N, {
                applicationId: n.id,
                onClose: i,
                className: m.HK,
                trackAction: l
            })]
        })
    }