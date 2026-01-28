/** Chunk was on 78528 **/
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
        skipForceHide: f = !1
    } = e, g = l.useContext(c.vG), [m, b] = l.useState(""), [A, y] = l.useState(!1), _ = (0, i.bG)([o.Ay], () => o.Ay.callHeaderHeight), O = l.useRef(null), j = l.useRef(0);
    l.useEffect(() => {
        let e = t.current;
        if (null != e) return e.addEventListener("click", d), () => e.removeEventListener("click", d)
    }), l.useEffect(() => {
        if (!f) {
            var e, t;
            b(String(j.current)), y(void 0 !== _ && _ < (null != (e = null == (t = O.current) ? void 0 : t.clientHeight) ? e : 300) + 24), j.current += 1
        }
    }, [_, O, f]);
    let {
        preventIdle: v,
        allowIdle: x
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
                ref: O,
                onMouseOver: v,
                onFocus: v,
                onBlur: x,
                onMouseLeave: x,
                children: p({
                    hidden: A || g || n,
                    onDismiss: d
                })
            })
        })
    })
}