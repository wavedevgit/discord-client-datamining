/** chunk id: 953756 params = (module,exports,require) **/
a.d(t, {
    Hq: () => _,
    O7: () => i,
    zn: () => d
});
var r = a(627968),
    n = a(64700);
let o = n.createContext(null),
    i = {
        Root(e) {
            let {
                containerInnerWidth: t,
                children: a
            } = e, i = n.useMemo(() => ({
                isParentWidthLimited: !0,
                parentContainerInnerWidth: t
            }), [t]);
            return (0, r.jsx)(o.Provider, {
                value: i,
                children: a
            })
        },
        NestedContainer(e) {
            let {
                containerOuterWidth: t,
                containerInnerWidth: a,
                children: i
            } = e, {
                isParentWidthLimited: _,
                parentContainerInnerWidth: d
            } = c(), s = _ && d === t, l = n.useMemo(() => ({
                isParentWidthLimited: s,
                parentContainerInnerWidth: a
            }), [s, a]);
            return (0, r.jsx)(o.Provider, {
                value: l,
                children: i
            })
        },
        AutoMeasuredNestedContainer(e) {
            let {
                children: t
            } = e, [a, n, o] = d(!0);
            return (0, r.jsx)(i.NestedContainer, {
                containerOuterWidth: n,
                containerInnerWidth: o,
                children: t(a)
            })
        }
    };

function c() {
    let e = n.useContext(o);
    if (null == e) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
    return e
}

function _(e) {
    let {
        isParentWidthLimited: t,
        parentContainerInnerWidth: a
    } = c();
    return t && a === e
}

function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = n.useRef(null),
        [a, r] = n.useState(0),
        [o, i] = n.useState(0);
    return n.useLayoutEffect(() => {
        if (null == t.current) return;
        let a = new ResizeObserver(() => {
            let a = t.current.getBoundingClientRect().width,
                n = getComputedStyle(t.current);
            r(a + (parseFloat(n.marginLeft) + parseFloat(n.marginRight))), e && i(a - (parseFloat(n.paddingLeft) + parseFloat(n.paddingRight) + parseFloat(n.borderLeftWidth) + parseFloat(n.borderRightWidth)))
        });
        return a.observe(t.current), () => a.disconnect()
    }, [e]), [t, a, o]
}