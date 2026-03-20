/** chunk id: 148702 params = (module,exports,require) **/
a.d(t, {
    A: () => o
});
var l = a(627968),
    n = a(64700),
    r = a(503698),
    s = a.n(r),
    i = a(752238),
    d = a(230686);

function o(e) {
    let {
        value: t,
        onChange: a
    } = e, r = "json", o = n.useRef(null), [c, u] = n.useState("");
    return n.useEffect(() => {
        if (null != t && i.default.hasLanguage(r)) {
            let e = i.default.highlight(r, t, !0);
            null != e ? u(e.value + "\n") : u(t + "\n")
        } else u(t + "\n")
    }, [t, r]), (0, l.jsxs)("div", {
        className: d.t,
        children: [(0, l.jsx)("pre", {
            className: d.c5,
            "aria-hidden": "true",
            children: (0, l.jsx)("code", {
                className: s()("hljs", r),
                dangerouslySetInnerHTML: {
                    __html: c ?? ""
                }
            })
        }), (0, l.jsx)("textarea", {
            ref: o,
            className: d.mW,
            value: t,
            onChange: e => {
                a(e.target.value)
            },
            onScroll: e => {
                let t = e.target,
                    a = t.previousElementSibling;
                null != a && (a.scrollTop = t.scrollTop, a.scrollLeft = t.scrollLeft)
            },
            onKeyDown: e => {
                if ("Tab" === e.key) {
                    e.preventDefault();
                    let l = e.target,
                        n = l.selectionStart,
                        r = l.selectionEnd;
                    if (e.shiftKey) {
                        let e = t.lastIndexOf("\n", n - 1) + 1,
                            l = t.indexOf("\n", n),
                            r = t.substring(e, -1 === l ? t.length : l),
                            s = 0;
                        for (let e = 0; e < Math.min(2, r.length); e++)
                            if (" " === r[e]) s++;
                            else break;
                        s > 0 && (a(t.substring(0, e) + t.substring(e + s)), setTimeout(() => {
                            if (null != o.current) {
                                let t = Math.max(e, n - s);
                                o.current.selectionStart = o.current.selectionEnd = t
                            }
                        }, 0))
                    } else a(t.substring(0, n) + "  " + t.substring(r)), setTimeout(() => {
                        null != o.current && (o.current.selectionStart = o.current.selectionEnd = n + 2)
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