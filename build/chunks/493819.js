/** chunk id: 493819 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    l = n(64700),
    s = n(607470),
    a = n(522435);
n(131955);
var r = n(850357);

function o(e) {
    let {
        src: t,
        className: n,
        autoPlayOnMount: a
    } = e, o = l.useRef(null), d = l.useRef(!1), [c, u] = l.useState(!1);
    l.useEffect(() => {
        if (!a) return;
        let e = o.current;
        if (null != e) return d.current = !1, e.addEventListener("canplay", t), e.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA && t(), () => e.removeEventListener("canplay", t);

        function t() {
            d.current || null == e || (d.current = !0, e.play())
        }
    }, [t, a]);
    let h = l.useCallback(() => {
            let e = o.current;
            null != e && (e.currentTime = 0, u(!0), e.play())
        }, []),
        A = l.useCallback(() => {
            let e = o.current;
            null != e && (u(!1), e.pause())
        }, []);
    return (0, i.jsx)("div", {
        className: r.j,
        onMouseEnter: h,
        onMouseLeave: A,
        children: (0, i.jsx)(s.A, {
            ref: o,
            className: n,
            src: t,
            muted: !0,
            playsInline: !0,
            loop: c
        })
    })
}

function d(e) {
    let {
        animatedSrc: t,
        staticSrc: n,
        className: s,
        autoPlayOnMount: a,
        animationDurationMs: r = 4e3
    } = e, [o, d] = l.useState(() => a), c = l.useRef(!a);
    l.useEffect(() => {
        if (!a) return;
        let e = setTimeout(() => {
            c.current = !0, d(!1)
        }, r);
        return () => clearTimeout(e)
    }, [t, a, r]);
    let u = l.useCallback(() => {
            d(!0)
        }, []),
        h = l.useCallback(() => {
            c.current && d(!1)
        }, []);
    return (0, i.jsx)("img", {
        className: s,
        src: o ? t : n,
        alt: "",
        onMouseEnter: u,
        onMouseLeave: h
    })
}

function c(e) {
    let {
        src: t,
        staticSrc: n,
        className: l,
        autoPlayOnMount: s = !0
    } = e;
    return (0, a.LG)(t) ? (0, i.jsx)(o, {
        src: t,
        className: l,
        autoPlayOnMount: s
    }) : null != n ? (0, i.jsx)(d, {
        animatedSrc: t,
        staticSrc: n,
        className: l,
        autoPlayOnMount: s
    }) : (0, i.jsx)("img", {
        className: l,
        src: t,
        alt: ""
    })
}