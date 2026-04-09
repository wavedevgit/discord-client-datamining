/** chunk id: 953756 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Hq: () => c,
    O7: () => o,
    zn: () => l
});
var a = n(627968),
    r = n(64700);
let i = r.createContext(null),
    o = {
        Root(e) {
            let {
                containerInnerWidth: t,
                children: n
            } = e, o = r.useMemo(() => ({
                isParentWidthLimited: !0,
                parentContainerInnerWidth: t
            }), [t]);
            return (0, a.jsx)(i.Provider, {
                value: o,
                children: n
            })
        },
        NestedContainer(e) {
            let {
                containerOuterWidth: t,
                containerInnerWidth: n,
                children: o
            } = e, {
                isParentWidthLimited: c,
                parentContainerInnerWidth: l
            } = s(), _ = c && l === t, u = r.useMemo(() => ({
                isParentWidthLimited: _,
                parentContainerInnerWidth: n
            }), [_, n]);
            return (0, a.jsx)(i.Provider, {
                value: u,
                children: o
            })
        },
        AutoMeasuredNestedContainer(e) {
            let {
                children: t
            } = e, [n, r, i] = l(!0);
            return (0, a.jsx)(o.NestedContainer, {
                containerOuterWidth: r,
                containerInnerWidth: i,
                children: t(n)
            })
        }
    };

function s() {
    let e = r.useContext(i);
    if (null == e) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
    return e
}

function c(e) {
    let {
        isParentWidthLimited: t,
        parentContainerInnerWidth: n
    } = s();
    return t && n === e
}

function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = r.useRef(null),
        [n, a] = r.useState(0),
        [i, o] = r.useState(0);
    return r.useLayoutEffect(() => {
        if (null == t.current) return;
        let n = new ResizeObserver(() => {
            let n = t.current.getBoundingClientRect().width,
                r = getComputedStyle(t.current);
            a(n + (parseFloat(r.marginLeft) + parseFloat(r.marginRight))), e && o(n - (parseFloat(r.paddingLeft) + parseFloat(r.paddingRight) + parseFloat(r.borderLeftWidth) + parseFloat(r.borderRightWidth)))
        });
        return n.observe(t.current), () => n.disconnect()
    }, [e]), [t, n, i]
}