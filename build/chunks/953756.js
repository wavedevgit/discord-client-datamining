/** chunk id: 953756, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Hq: () => o,
    O7: () => s,
    zn: () => c
});
var a = n(627968),
    r = n(64700);
let i = r.createContext(null),
    s = {
        Root(e) {
            let {
                containerInnerWidth: t,
                children: n
            } = e, s = r.useMemo(() => ({
                isParentWidthLimited: !0,
                parentContainerInnerWidth: t
            }), [t]);
            return (0, a.jsx)(i.Provider, {
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
            } = l(), u = o && c === t, d = r.useMemo(() => ({
                isParentWidthLimited: u,
                parentContainerInnerWidth: n
            }), [u, n]);
            return (0, a.jsx)(i.Provider, {
                value: d,
                children: s
            })
        },
        AutoMeasuredNestedContainer(e) {
            let {
                children: t
            } = e, [n, r, i] = c(!0);
            return (0, a.jsx)(s.NestedContainer, {
                containerOuterWidth: r,
                containerInnerWidth: i,
                children: t(n)
            })
        }
    };

function l() {
    let e = r.useContext(i);
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
        t = r.useRef(null),
        [n, a] = r.useState(0),
        [i, s] = r.useState(0);
    return r.useLayoutEffect(() => {
        if (null == t.current) return;
        let n = new ResizeObserver(() => {
            let n = t.current.getBoundingClientRect().width,
                r = getComputedStyle(t.current);
            a(n + (parseFloat(r.marginLeft) + parseFloat(r.marginRight))), e && s(n - (parseFloat(r.paddingLeft) + parseFloat(r.paddingRight) + parseFloat(r.borderLeftWidth) + parseFloat(r.borderRightWidth)))
        });
        return n.observe(t.current), () => n.disconnect()
    }, [e]), [t, n, i]
}