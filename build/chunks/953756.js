/** chunk id: 953756 params = (module,exports,require) **/
"use strict";
r.d(t, {
    Hq: () => o,
    O7: () => a,
    zn: () => c
});
var n = r(627968),
    i = r(64700);
let s = i.createContext(null),
    a = {
        Root(e) {
            let {
                containerInnerWidth: t,
                children: r
            } = e, a = i.useMemo(() => ({
                isParentWidthLimited: !0,
                parentContainerInnerWidth: t
            }), [t]);
            return (0, n.jsx)(s.Provider, {
                value: a,
                children: r
            })
        },
        NestedContainer(e) {
            let {
                containerOuterWidth: t,
                containerInnerWidth: r,
                children: a
            } = e, {
                isParentWidthLimited: o,
                parentContainerInnerWidth: c
            } = l(), d = o && c === t, u = i.useMemo(() => ({
                isParentWidthLimited: d,
                parentContainerInnerWidth: r
            }), [d, r]);
            return (0, n.jsx)(s.Provider, {
                value: u,
                children: a
            })
        },
        AutoMeasuredNestedContainer(e) {
            let {
                children: t
            } = e, [r, i, s] = c(!0);
            return (0, n.jsx)(a.NestedContainer, {
                containerOuterWidth: i,
                containerInnerWidth: s,
                children: t(r)
            })
        }
    };

function l() {
    let e = i.useContext(s);
    if (null == e) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
    return e
}

function o(e) {
    let {
        isParentWidthLimited: t,
        parentContainerInnerWidth: r
    } = l();
    return t && r === e
}

function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = i.useRef(null),
        [r, n] = i.useState(0),
        [s, a] = i.useState(0);
    return i.useLayoutEffect(() => {
        if (null == t.current) return;
        let r = new ResizeObserver(() => {
            let r = t.current.getBoundingClientRect().width,
                i = getComputedStyle(t.current);
            n(r + (parseFloat(i.marginLeft) + parseFloat(i.marginRight))), e && a(r - (parseFloat(i.paddingLeft) + parseFloat(i.paddingRight) + parseFloat(i.borderLeftWidth) + parseFloat(i.borderRightWidth)))
        });
        return r.observe(t.current), () => r.disconnect()
    }, [e]), [t, r, s]
}