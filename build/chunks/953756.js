/** chunk id: 953756, original params: e,t,r (module,exports,require) **/
"use strict";
r.d(t, {
    Hq: () => c,
    O7: () => l,
    zn: () => o
});
var n = r(627968),
    a = r(64700);
let s = a.createContext(null),
    l = {
        Root(e) {
            let {
                containerInnerWidth: t,
                children: r
            } = e, l = a.useMemo(() => ({
                isParentWidthLimited: !0,
                parentContainerInnerWidth: t
            }), [t]);
            return (0, n.jsx)(s.Provider, {
                value: l,
                children: r
            })
        },
        NestedContainer(e) {
            let {
                containerOuterWidth: t,
                containerInnerWidth: r,
                children: l
            } = e, {
                isParentWidthLimited: c,
                parentContainerInnerWidth: o
            } = i(), u = c && o === t, d = a.useMemo(() => ({
                isParentWidthLimited: u,
                parentContainerInnerWidth: r
            }), [u, r]);
            return (0, n.jsx)(s.Provider, {
                value: d,
                children: l
            })
        },
        AutoMeasuredNestedContainer(e) {
            let {
                children: t
            } = e, [r, a, s] = o(!0);
            return (0, n.jsx)(l.NestedContainer, {
                containerOuterWidth: a,
                containerInnerWidth: s,
                children: t(r)
            })
        }
    };

function i() {
    let e = a.useContext(s);
    if (null == e) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
    return e
}

function c(e) {
    let {
        isParentWidthLimited: t,
        parentContainerInnerWidth: r
    } = i();
    return t && r === e
}

function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = a.useRef(null),
        [r, n] = a.useState(0),
        [s, l] = a.useState(0);
    return a.useLayoutEffect(() => {
        if (null == t.current) return;
        let r = new ResizeObserver(() => {
            let r = t.current.getBoundingClientRect().width,
                a = getComputedStyle(t.current);
            n(r + (parseFloat(a.marginLeft) + parseFloat(a.marginRight))), e && l(r - (parseFloat(a.paddingLeft) + parseFloat(a.paddingRight) + parseFloat(a.borderLeftWidth) + parseFloat(a.borderRightWidth)))
        });
        return r.observe(t.current), () => r.disconnect()
    }, [e]), [t, r, s]
}