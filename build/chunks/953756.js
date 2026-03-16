/** chunk id: 953756 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Hq: () => o,
    O7: () => s,
    zn: () => c
});
var i = n(627968),
    a = n(64700);
let r = a.createContext(null),
    s = {
        Root(e) {
            let {
                containerInnerWidth: t,
                children: n
            } = e, s = a.useMemo(() => ({
                isParentWidthLimited: !0,
                parentContainerInnerWidth: t
            }), [t]);
            return (0, i.jsx)(r.Provider, {
                value: s,
                children: n
            })
        },
        NestedContainer(e) {
            let {
                containerOuterWidth: t,
                containerInnerWidth: n,
                children: s
            } = e, {
                isParentWidthLimited: o,
                parentContainerInnerWidth: c
            } = l(), _ = o && c === t, d = a.useMemo(() => ({
                isParentWidthLimited: _,
                parentContainerInnerWidth: n
            }), [_, n]);
            return (0, i.jsx)(r.Provider, {
                value: d,
                children: s
            })
        },
        AutoMeasuredNestedContainer(e) {
            let {
                children: t
            } = e, [n, a, r] = c(!0);
            return (0, i.jsx)(s.NestedContainer, {
                containerOuterWidth: a,
                containerInnerWidth: r,
                children: t(n)
            })
        }
    };

function l() {
    let e = a.useContext(r);
    if (null == e) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
    return e
}

function o(e) {
    let {
        isParentWidthLimited: t,
        parentContainerInnerWidth: n
    } = l();
    return t && n === e
}

function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = a.useRef(null),
        [n, i] = a.useState(0),
        [r, s] = a.useState(0);
    return a.useLayoutEffect(() => {
        if (null == t.current) return;
        let n = new ResizeObserver(() => {
            let n = t.current.getBoundingClientRect().width,
                a = getComputedStyle(t.current);
            i(n + (parseFloat(a.marginLeft) + parseFloat(a.marginRight))), e && s(n - (parseFloat(a.paddingLeft) + parseFloat(a.paddingRight) + parseFloat(a.borderLeftWidth) + parseFloat(a.borderRightWidth)))
        });
        return n.observe(t.current), () => n.disconnect()
    }, [e]), [t, n, r]
}