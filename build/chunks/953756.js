/** chunk id: 953756, original params: e,t,a (module,exports,require) **/
"use strict";
a.d(t, {
    Hq: () => l,
    O7: () => o,
    zn: () => c
});
var r = a(627968),
    n = a(64700);
let i = n.createContext(null),
    o = {
        Root(e) {
            let {
                containerInnerWidth: t,
                children: a
            } = e, o = n.useMemo(() => ({
                isParentWidthLimited: !0,
                parentContainerInnerWidth: t
            }), [t]);
            return (0, r.jsx)(i.Provider, {
                value: o,
                children: a
            })
        },
        NestedContainer(e) {
            let {
                containerOuterWidth: t,
                containerInnerWidth: a,
                children: o
            } = e, {
                isParentWidthLimited: l,
                parentContainerInnerWidth: c
            } = s(), _ = l && c === t, d = n.useMemo(() => ({
                isParentWidthLimited: _,
                parentContainerInnerWidth: a
            }), [_, a]);
            return (0, r.jsx)(i.Provider, {
                value: d,
                children: o
            })
        },
        AutoMeasuredNestedContainer(e) {
            let {
                children: t
            } = e, [a, n, i] = c(!0);
            return (0, r.jsx)(o.NestedContainer, {
                containerOuterWidth: n,
                containerInnerWidth: i,
                children: t(a)
            })
        }
    };

function s() {
    let e = n.useContext(i);
    if (null == e) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
    return e
}

function l(e) {
    let {
        isParentWidthLimited: t,
        parentContainerInnerWidth: a
    } = s();
    return t && a === e
}

function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = n.useRef(null),
        [a, r] = n.useState(0),
        [i, o] = n.useState(0);
    return n.useLayoutEffect(() => {
        if (null == t.current) return;
        let a = new ResizeObserver(() => {
            let a = t.current.getBoundingClientRect().width,
                n = getComputedStyle(t.current);
            r(a + (parseFloat(n.marginLeft) + parseFloat(n.marginRight))), e && o(a - (parseFloat(n.paddingLeft) + parseFloat(n.paddingRight) + parseFloat(n.borderLeftWidth) + parseFloat(n.borderRightWidth)))
        });
        return a.observe(t.current), () => a.disconnect()
    }, [e]), [t, a, i]
}