/** chunk id: 841680, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    s: () => l
});
var r = n(723906),
    i = n(290424),
    a = n(805447),
    o = n(64700),
    s = n(925573);

function l(e, t) {
    let {
        role: n = "dialog"
    } = e, l = (0, r.X1)();
    l = e["aria-label"] ? void 0 : l;
    let c = (0, o.useRef)(!1);
    return (0, o.useEffect)(() => {
        if (t.current && !t.current.contains(document.activeElement)) {
            (0, a.l)(t.current);
            let e = setTimeout(() => {
                (document.activeElement === t.current || document.activeElement === document.body) && (c.current = !0, t.current && (t.current.blur(), (0, a.l)(t.current)), c.current = !1)
            }, 500);
            return () => {
                clearTimeout(e)
            }
        }
    }, [t]), (0, s.Se)(), {
        dialogProps: {
            ...(0, i.$)(e, {
                labelable: !0
            }),
            role: n,
            tabIndex: -1,
            "aria-labelledby": e["aria-labelledby"] || l,
            onBlur: e => {
                c.current && e.stopPropagation()
            }
        },
        titleProps: {
            id: l
        }
    }
}