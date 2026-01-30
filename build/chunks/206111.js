/** chunk id: 206111, original params: e,n,t (module,exports,require) **/
t.d(n, {
    l: () => u
});
var l = t(627968),
    r = t(64700),
    i = t(158954),
    s = t(217483);

function u(e) {
    let {
        title: n,
        subtitle: t,
        iconSrc: u,
        backgroundSrc: o,
        animatedBackgroundSrc: a,
        prefersReducedMotion: c = !0
    } = e, d = r.useMemo(() => {
        let e = null != o ? o : u;
        if (null != e) return {
            "--custom-background-url": "url(".concat(e.toString(), ")")
        }
    }, [o, u]), p = r.useMemo(() => {
        if (null == o) return;
        let e = {
            "--custom-background-static": "url(".concat(o.toString())
        };
        return c || null == a || (e["--custom-background-animated"] = "url(".concat(a.toString(), ")")), e
    }, [a, o, c]);
    return (0, l.jsxs)("div", {
        className: s.iE,
        children: [(0, l.jsx)("div", {
            className: s.Tp,
            style: d
        }), (0, l.jsxs)("div", {
            className: s.Qs,
            children: [null != u && (0, l.jsx)("div", {
                className: s.Kk,
                children: (0, l.jsx)("img", {
                    src: u.toString(),
                    alt: ""
                })
            }), (0, l.jsxs)("div", {
                children: [(0, l.jsx)(i.EYj, {
                    variant: "heading-xl/bold",
                    tag: "div",
                    children: n
                }), null != t && (0, l.jsxs)(i.EYj, {
                    variant: "text-sm/normal",
                    children: ["“", t, "”"]
                })]
            })]
        }), null != o ? (0, l.jsx)("div", {
            className: s.Sl,
            style: p
        }) : null]
    })
}