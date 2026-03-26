/** chunk id: 222643 params = (module,exports,require) **/
"use strict";
n.d(t, {
    x: () => u
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(43189),
    o = n(964404),
    c = n(461782),
    d = n(447404);

function u(e) {
    let {
        buttonRef: t,
        dismissed: n,
        onDismiss: u,
        renderComponent: h,
        nudgeAlignIntoViewport: A = !1,
        skipForceHide: m = !1
    } = e, _ = s.useContext(c.vG), [p, g] = s.useState(""), [f, x] = s.useState(!1), E = (0, l.bG)([o.Ay], () => o.Ay.callHeaderHeight), C = s.useRef(null), I = s.useRef(0);
    s.useEffect(() => {
        let e = t.current;
        if (null != e) return e.addEventListener("click", u), () => e.removeEventListener("click", u)
    }), s.useEffect(() => {
        m || (g(String(I.current)), x(void 0 !== E && E < (C.current?.clientHeight ?? 300) + 24), I.current += 1)
    }, [E, C, m]);
    let {
        preventIdle: N,
        allowIdle: b
    } = (0, d.o)("popup");
    return t?.current == null ? null : (0, i.jsx)(r.Ay, {
        children: (0, i.jsx)(a.QCO, {
            targetRef: t,
            position: "top",
            align: "center",
            spacing: 0,
            positionKey: p,
            nudgeAlignIntoViewport: A,
            children: () => (0, i.jsx)("div", {
                ref: C,
                onMouseOver: N,
                onFocus: N,
                onBlur: b,
                onMouseLeave: b,
                children: h({
                    hidden: f || _ || n,
                    onDismiss: u
                })
            })
        })
    })
}