/** chunk id: 953756, original params: e,t,a (module,exports,require) **/
"use strict";
a.d(t, {
    Hq: () => l,
    O7: () => o,
    zn: () => c
});
var n = a(627968),
    r = a(64700);
let i = r.createContext(null),
    o = {
        Root(e) {
            let {
                containerInnerWidth: t,
                children: a
            } = e, o = r.useMemo(() => ({
                isParentWidthLimited: !0,
                parentContainerInnerWidth: t
            }), [t]);
            return (0, n.jsx)(i.Provider, {
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
            } = s(), _ = l && c === t, d = r.useMemo(() => ({
                isParentWidthLimited: _,
                parentContainerInnerWidth: a
            }), [_, a]);
            return (0, n.jsx)(i.Provider, {
                value: d,
                children: o
            })
        },
        AutoMeasuredNestedContainer(e) {
            let {
                children: t
            } = e, [a, r, i] = c(!0);
            return (0, n.jsx)(o.NestedContainer, {
                containerOuterWidth: r,
                containerInnerWidth: i,
                children: t(a)
            })
        }
    };

function s() {
    let e = r.useContext(i);
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
        t = r.useRef(null),
        [a, n] = r.useState(0),
        [i, o] = r.useState(0);
    return r.useLayoutEffect(() => {
        if (null == t.current) return;
        let a = new ResizeObserver(() => {
            let a = t.current.getBoundingClientRect().width,
                r = getComputedStyle(t.current);
            n(a + (parseFloat(r.marginLeft) + parseFloat(r.marginRight))), e && o(a - (parseFloat(r.paddingLeft) + parseFloat(r.paddingRight) + parseFloat(r.borderLeftWidth) + parseFloat(r.borderRightWidth)))
        });
        return a.observe(t.current), () => a.disconnect()
    }, [e]), [t, a, i]
}