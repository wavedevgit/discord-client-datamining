/** chunk id: 632678, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var s = n(627968),
    i = n(64700),
    r = n(621466),
    l = n(311907),
    o = n(397927),
    a = n(628965),
    c = n(152056),
    d = n(985018);

function u() {
    let e = c.A.useField("query"),
        t = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), c.A.setState({
                isActive: e
            })
        }, []),
        n = i.useCallback(() => {
            c.A.setState({
                query: "",
                isActive: !1
            })
        }, []),
        u = i.useRef(null),
        h = (0, l.bG)([a.A], () => a.A.getSection());
    i.useEffect(() => {
        let e = e => {
            let t = u.current;
            (0, r.BF)(e)?.activeElement === document.body && t?.focus()
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
    }, [h]);
    let _ = i.useCallback(e => {
        c.A.setState({
            query: e
        })
    }, []);
    return (0, s.jsx)("div", {
        style: {
            marginBottom: "8px"
        },
        children: (0, s.jsx)(o.IWV, {
            ref: u,
            query: e,
            onClear: n,
            onChange: _,
            placeholder: d.intl.string(d.t["5h0QOP"]),
            inputProps: {
                "aria-label": d.intl.string(d.t.pk9BWW),
                "aria-expanded": !0,
                onFocus: e => t(!0, e),
                onBlur: e => t(!1, e)
            }
        })
    })
}