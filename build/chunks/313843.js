/** chunk id: 313843 params = (module,exports,require) **/
n.d(t, {
    A: () => j,
    Q: () => _
});
var l = n(627968),
    a = n(64700),
    i = n(379834),
    r = n(158954),
    s = n(827734),
    c = n(583846),
    o = n(541830),
    d = n(240248),
    u = n(459746),
    m = n(503364),
    x = n(305080),
    h = n(985018),
    f = n(611731);

function g(e) {
    let {
        game: t
    } = e, n = t.supplementalData, [i] = a.useState(() => Math.random()), r = a.useMemo(() => {
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
    return (0, d.uJ)(r) ? null : (0, l.jsx)("div", {
        className: f.y1,
        style: {
            backgroundImage: `url("${r}")`
        }
    })
}

function p(e) {
    let {
        game: t,
        application: n,
        entries: a
    } = e, s = t.supplementalData, u = a.some(e => (0, c.CZ)(e) === i.m.GLOBAL), m = s?.name ?? t.name ?? n?.name, x = (s?.genres ?? t.genres ?? []).map(o.du).join(", ");
    return (0, l.jsxs)("div", {
        className: f.wt,
        children: [u && (0, l.jsx)(v, {}), (0, l.jsx)(r.DZT, {
            variant: "heading-xxl/semibold",
            children: m
        }), (0, d.uJ)(x) ? null : (0, l.jsx)(r.EYj, {
            variant: "text-md/normal",
            color: "text-default",
            children: x
        })]
    })
}

function _(e) {
    let {
        game: t,
        application: n,
        isTwoColumn: a
    } = e, i = t.supplementalData;
    return null == i ? null : (0, l.jsx)("div", {
        className: a ? f.n8 : f.FS,
        children: (0, l.jsx)(u.A, {
            game: i,
            application: n,
            className: f.xe,
            size: u.w.LARGE
        })
    })
}
let v = () => (0, l.jsxs)("div", {
        className: f.p_,
        children: [(0, l.jsx)(r.Y3C, {
            size: "xs",
            color: s.A.colors.BADGE_EXPRESSIVE_TEXT_DEFAULT,
            "aria-hidden": "true"
        }), (0, l.jsx)(r.EYj, {
            variant: "text-md/bold",
            color: "badge-expressive-text-default",
            children: h.intl.string(h.t.kAlUsy)
        })]
    }),
    j = function(e) {
        let {
            game: t,
            application: n,
            entries: a,
            onClose: i
        } = e, {
            isTwoColumn: r
        } = (0, x.c)();
        return r ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(g, {
                game: t
            }), (0, l.jsx)("div", {
                className: f.kL,
                children: (0, l.jsxs)("div", {
                    className: f.cb,
                    children: [(0, l.jsx)(_, {
                        game: t,
                        application: n,
                        isTwoColumn: !0
                    }), (0, l.jsx)(p, {
                        game: t,
                        application: n,
                        entries: a
                    })]
                })
            }), (0, l.jsx)(m.N, {
                applicationId: n.id,
                onClose: i,
                className: f.HK
            })]
        }) : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(g, {
                game: t
            }), (0, l.jsx)("div", {
                className: f.kL,
                children: (0, l.jsx)(p, {
                    game: t,
                    application: n,
                    entries: a
                })
            }), (0, l.jsx)(m.N, {
                applicationId: n.id,
                onClose: i,
                className: f.HK
            })]
        })
    }