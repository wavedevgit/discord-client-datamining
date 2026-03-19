/** chunk id: 313843 params = (module,exports,require) **/
n.d(t, {
    A: () => A,
    Q: () => h
});
var a = n(627968),
    l = n(64700),
    i = n(379834),
    r = n(158954),
    s = n(827734),
    o = n(583846),
    c = n(541830),
    d = n(240248),
    u = n(459746),
    m = n(503364),
    x = n(305080),
    _ = n(985018),
    g = n(967725);

function f(e) {
    let {
        game: t
    } = e, n = t.supplementalData, [i] = l.useState(() => Math.random()), r = l.useMemo(() => {
        if (null == n) return "";
        let {
            artwork: e,
            screenshots: t
        } = n;
        if (e.length > 0) {
            let t = Math.floor(i * e.length);
            return e[t]
        }
        if (t.length > 0) {
            let e = Math.floor(i * t.length);
            return t[e]
        }
        return ""
    }, [n, i]);
    return (0, d.uJ)(r) ? null : (0, a.jsx)("div", {
        className: g.y1,
        style: {
            backgroundImage: `url("${r}")`
        }
    })
}

function p(e) {
    let {
        game: t,
        application: n,
        entries: l
    } = e, s = t.supplementalData, u = l.some(e => (0, o.CZ)(e) === i.m.GLOBAL), m = s?.name ?? t.name ?? n?.name, x = (s?.genres ?? t.genres ?? []).map(c.du).join(", ");
    return (0, a.jsxs)("div", {
        className: g.wt,
        children: [u && (0, a.jsx)(v, {}), (0, a.jsx)(r.DZT, {
            variant: "heading-xxl/semibold",
            children: m
        }), (0, d.uJ)(x) ? null : (0, a.jsx)(r.EYj, {
            variant: "text-md/normal",
            color: "text-default",
            children: x
        })]
    })
}

function h(e) {
    let {
        game: t,
        application: n,
        isTwoColumn: l
    } = e, i = t.supplementalData;
    return null == i ? null : (0, a.jsx)("div", {
        className: l ? g.n8 : g.FS,
        children: (0, a.jsx)(u.A, {
            game: i,
            application: n,
            className: g.xe,
            size: u.w.LARGE
        })
    })
}
let v = () => (0, a.jsxs)("div", {
        className: g.p_,
        children: [(0, a.jsx)(r.Y3C, {
            size: "xs",
            color: s.A.colors.BADGE_EXPRESSIVE_TEXT_DEFAULT,
            "aria-hidden": "true"
        }), (0, a.jsx)(r.EYj, {
            variant: "text-md/bold",
            color: "badge-expressive-text-default",
            children: _.intl.string(_.t.kAlUsy)
        })]
    }),
    A = function(e) {
        let {
            game: t,
            application: n,
            entries: l,
            onClose: i
        } = e, {
            isTwoColumn: r
        } = (0, x.c)();
        return r ? (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(f, {
                game: t
            }), (0, a.jsx)("div", {
                className: g.kL,
                children: (0, a.jsxs)("div", {
                    className: g.cb,
                    children: [(0, a.jsx)(h, {
                        game: t,
                        application: n,
                        isTwoColumn: !0
                    }), (0, a.jsx)(p, {
                        game: t,
                        application: n,
                        entries: l
                    })]
                })
            }), (0, a.jsx)(m.N, {
                applicationId: n.id,
                onClose: i,
                className: g.HK
            })]
        }) : (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(f, {
                game: t
            }), (0, a.jsx)("div", {
                className: g.kL,
                children: (0, a.jsx)(p, {
                    game: t,
                    application: n,
                    entries: l
                })
            }), (0, a.jsx)(m.N, {
                applicationId: n.id,
                onClose: i,
                className: g.HK
            })]
        })
    }