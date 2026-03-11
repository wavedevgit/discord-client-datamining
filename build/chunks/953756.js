/** chunk id: 953756 params = (module,exports,require) **/
"use strict";
r.d(t, {
    Hq: () => l,
    O7: () => o,
    zn: () => _
});
var n = r(627968),
    i = r(64700);
let a = i.createContext(null),
    o = {
        Root(e) {
            let {
                containerInnerWidth: t,
                children: r
            } = e, o = i.useMemo(() => ({
                isParentWidthLimited: !0,
                parentContainerInnerWidth: t
            }), [t]);
            return (0, n.jsx)(a.Provider, {
                value: o,
                children: r
            })
        },
        NestedContainer(e) {
            let {
                containerOuterWidth: t,
                containerInnerWidth: r,
                children: o
            } = e, {
                isParentWidthLimited: l,
                parentContainerInnerWidth: _
            } = s(), c = l && _ === t, d = i.useMemo(() => ({
                isParentWidthLimited: c,
                parentContainerInnerWidth: r
            }), [c, r]);
            return (0, n.jsx)(a.Provider, {
                value: d,
                children: o
            })
        },
        AutoMeasuredNestedContainer(e) {
            let {
                children: t
            } = e, [r, i, a] = _(!0);
            return (0, n.jsx)(o.NestedContainer, {
                containerOuterWidth: i,
                containerInnerWidth: a,
                children: t(r)
            })
        }
    };

function s() {
    let e = i.useContext(a);
    if (null == e) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
    return e
}

function l(e) {
    let {
        isParentWidthLimited: t,
        parentContainerInnerWidth: r
    } = s();
    return t && r === e
}

function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = i.useRef(null),
        [r, n] = i.useState(0),
        [a, o] = i.useState(0);
    return i.useLayoutEffect(() => {
        if (null == t.current) return;
        let r = new ResizeObserver(() => {
            let r = t.current.getBoundingClientRect().width,
                i = getComputedStyle(t.current);
            n(r + (parseFloat(i.marginLeft) + parseFloat(i.marginRight))), e && o(r - (parseFloat(i.paddingLeft) + parseFloat(i.paddingRight) + parseFloat(i.borderLeftWidth) + parseFloat(i.borderRightWidth)))
        });
        return r.observe(t.current), () => r.disconnect()
    }, [e]), [t, r, a]
}