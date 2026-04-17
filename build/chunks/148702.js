/** chunk id: 148702 params = (module,exports,require) **/
l.d(t, {
    A: () => c
});
var a = l(627968),
    r = l(64700),
    n = l(503698),
    s = l.n(n),
    i = l(157941),
    o = l(752238),
    d = l(585289);

function c(e) {
    let {
        value: t,
        onChange: l
    } = e, n = "json", c = r.useRef(null), [u, x] = r.useState("");
    return r.useEffect(() => {
        if (null != t && o.default.hasLanguage(n)) {
            let e = o.default.highlight(n, t, !0);
            null != e ? x(e.value + "\n") : x(t + "\n")
        } else x(t + "\n")
    }, [t, n]), (0, a.jsxs)("div", {
        className: d.t,
        children: [(0, a.jsx)("pre", {
            className: d.c5,
            "aria-hidden": "true",
            children: (0, a.jsx)(i.l, {
                location: "LayoutEditor",
                code: t,
                lang: "json",
                className: "hljs",
                children: (0, a.jsx)("code", {
                    className: s()("hljs", n),
                    dangerouslySetInnerHTML: {
                        __html: u ?? ""
                    }
                })
            })
        }), (0, a.jsx)("textarea", {
            ref: c,
            className: d.mW,
            value: t,
            onChange: e => {
                l(e.target.value)
            },
            onScroll: e => {
                let t = e.target,
                    l = t.previousElementSibling;
                null != l && (l.scrollTop = t.scrollTop, l.scrollLeft = t.scrollLeft)
            },
            onKeyDown: e => {
                if ("Tab" === e.key) {
                    e.preventDefault();
                    let a = e.target,
                        r = a.selectionStart,
                        n = a.selectionEnd;
                    if (e.shiftKey) {
                        let e = t.lastIndexOf("\n", r - 1) + 1,
                            a = t.indexOf("\n", r),
                            n = t.substring(e, -1 === a ? t.length : a),
                            s = 0;
                        for (let e = 0; e < Math.min(2, n.length); e++)
                            if (" " === n[e]) s++;
                            else break;
                        s > 0 && (l(t.substring(0, e) + t.substring(e + s)), setTimeout(() => {
                            if (null != c.current) {
                                let t = Math.max(e, r - s);
                                c.current.selectionStart = c.current.selectionEnd = t
                            }
                        }, 0))
                    } else l(t.substring(0, r) + "  " + t.substring(n)), setTimeout(() => {
                        null != c.current && (c.current.selectionStart = c.current.selectionEnd = r + 2)
                    }, 0)
                }
            },
            spellCheck: !1,
            autoCapitalize: "off",
            autoComplete: "off",
            autoCorrect: "off",
            rows: 30
        })]
    })
}