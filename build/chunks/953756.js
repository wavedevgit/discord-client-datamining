/** chunk id: 953756 params = (module,exports,require) **/
n.d(t, {
    Hq: () => d,
    O7: () => _,
    zn: () => l
});
var r = n(627968),
    a = n(64700);
let o = a.createContext(null),
    _ = {
        Root(e) {
            let {
                containerInnerWidth: t,
                children: n
            } = e, _ = a.useMemo(() => ({
                isParentWidthLimited: !0,
                parentContainerInnerWidth: t
            }), [t]);
            return (0, r.jsx)(o.Provider, {
                value: _,
                children: n
            })
        },
        NestedContainer(e) {
            let {
                containerOuterWidth: t,
                containerInnerWidth: n,
                children: _
            } = e, {
                isParentWidthLimited: d,
                parentContainerInnerWidth: l
            } = i(), c = d && l === t, s = a.useMemo(() => ({
                isParentWidthLimited: c,
                parentContainerInnerWidth: n
            }), [c, n]);
            return (0, r.jsx)(o.Provider, {
                value: s,
                children: _
            })
        },
        AutoMeasuredNestedContainer(e) {
            let {
                children: t
            } = e, [n, a, o] = l(!0);
            return (0, r.jsx)(_.NestedContainer, {
                containerOuterWidth: a,
                containerInnerWidth: o,
                children: t(n)
            })
        }
    };

function i() {
    let e = a.useContext(o);
    if (null == e) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
    return e
}

function d(e) {
    let {
        isParentWidthLimited: t,
        parentContainerInnerWidth: n
    } = i();
    return t && n === e
}

function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = a.useRef(null),
        [n, r] = a.useState(0),
        [o, _] = a.useState(0);
    return a.useLayoutEffect(() => {
        if (null == t.current) return;
        let n = new ResizeObserver(() => {
            let n = t.current.getBoundingClientRect().width,
                a = getComputedStyle(t.current);
            r(n + (parseFloat(a.marginLeft) + parseFloat(a.marginRight))), e && _(n - (parseFloat(a.paddingLeft) + parseFloat(a.paddingRight) + parseFloat(a.borderLeftWidth) + parseFloat(a.borderRightWidth)))
        });
        return n.observe(t.current), () => n.disconnect()
    }, [e]), [t, n, o]
}