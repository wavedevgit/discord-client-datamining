/** Chunk was on 3911 **/
/** chunk id: 632678, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var i = n(627968),
    s = n(64700),
    r = n(621466),
    l = n(311907),
    o = n(397927),
    a = n(628965),
    d = n(152056),
    u = n(985018);

function c() {
    let e = d.A.useField("query"),
        t = s.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), d.A.setState({
                isActive: e
            })
        }, []),
        n = s.useCallback(() => {
            d.A.setState({
                query: "",
                isActive: !1
            })
        }, []),
        c = s.useRef(null),
        h = (0, l.bG)([a.A], () => a.A.getSection());
    s.useEffect(() => {
        let e = e => {
            var t;
            let n = c.current;
            (null == (t = (0, r.BF)(e)) ? void 0 : t.activeElement) === document.body && (null == n || n.focus())
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
    }, [h]);
    let g = s.useCallback(e => {
        d.A.setState({
            query: e
        })
    }, []);
    return (0, i.jsx)("div", {
        style: {
            marginBottom: "8px"
        },
        children: (0, i.jsx)(o.IWV, {
            ref: c,
            query: e,
            onClear: n,
            onChange: g,
            placeholder: u.intl.string(u.t["5h0QOP"]),
            inputProps: {
                "aria-label": u.intl.string(u.t.pk9BWW),
                "aria-expanded": !0,
                onFocus: e => t(!0, e),
                onBlur: e => t(!1, e)
            }
        })
    })
}