/** chunk id: 222643, original params: e,t,n (module,exports,require) **/
n.d(t, {
    x: () => d
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(43189),
    o = n(964404),
    c = n(461782),
    u = n(447404);

function d(e) {
    let {
        buttonRef: t,
        dismissed: n,
        onDismiss: d,
        renderComponent: p,
        nudgeAlignIntoViewport: h = !1,
        skipForceHide: g = !1
    } = e, f = l.useContext(c.vG), [m, b] = l.useState(""), [A, y] = l.useState(!1), O = (0, i.bG)([o.Ay], () => o.Ay.callHeaderHeight), j = l.useRef(null), x = l.useRef(0);
    l.useEffect(() => {
        let e = t.current;
        if (null != e) return e.addEventListener("click", d), () => e.removeEventListener("click", d)
    }), l.useEffect(() => {
        if (!g) {
            var e, t;
            b(String(x.current)), y(void 0 !== O && O < (null != (e = null == (t = j.current) ? void 0 : t.clientHeight) ? e : 300) + 24), x.current += 1
        }
    }, [O, j, g]);
    let {
        preventIdle: _,
        allowIdle: v
    } = (0, u.o)("popup");
    return (null == t ? void 0 : t.current) == null ? null : (0, r.jsx)(a.Ay, {
        children: (0, r.jsx)(s.QCO, {
            targetRef: t,
            position: "top",
            align: "center",
            spacing: 0,
            positionKey: m,
            nudgeAlignIntoViewport: h,
            children: () => (0, r.jsx)("div", {
                ref: j,
                onMouseOver: _,
                onFocus: _,
                onBlur: v,
                onMouseLeave: v,
                children: p({
                    hidden: A || f || n,
                    onDismiss: d
                })
            })
        })
    })
}