/** chunk id: 953756 params = (module,exports,require) **/
n.d(t, {
    Hq: () => o,
    O7: () => r,
    zn: () => c
});
var l = n(627968),
    s = n(64700);
let a = s.createContext(null),
    r = {
        Root(e) {
            let {
                containerInnerWidth: t,
                children: n
            } = e, r = s.useMemo(() => ({
                isParentWidthLimited: !0,
                parentContainerInnerWidth: t
            }), [t]);
            return (0, l.jsx)(a.Provider, {
                value: r,
                children: n
            })
        },
        NestedContainer(e) {
            let {
                containerOuterWidth: t,
                containerInnerWidth: n,
                children: r
            } = e, {
                isParentWidthLimited: o,
                parentContainerInnerWidth: c
            } = i(), d = o && c === t, u = s.useMemo(() => ({
                isParentWidthLimited: d,
                parentContainerInnerWidth: n
            }), [d, n]);
            return (0, l.jsx)(a.Provider, {
                value: u,
                children: r
            })
        },
        AutoMeasuredNestedContainer(e) {
            let {
                children: t
            } = e, [n, s, a] = c(!0);
            return (0, l.jsx)(r.NestedContainer, {
                containerOuterWidth: s,
                containerInnerWidth: a,
                children: t(n)
            })
        }
    };

function i() {
    let e = s.useContext(a);
    if (null == e) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
    return e
}

function o(e) {
    let {
        isParentWidthLimited: t,
        parentContainerInnerWidth: n
    } = i();
    return t && n === e
}

function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = s.useRef(null),
        [n, l] = s.useState(0),
        [a, r] = s.useState(0);
    return s.useLayoutEffect(() => {
        if (null == t.current) return;
        let n = new ResizeObserver(() => {
            let n = t.current.getBoundingClientRect().width,
                s = getComputedStyle(t.current);
            l(n + (parseFloat(s.marginLeft) + parseFloat(s.marginRight))), e && r(n - (parseFloat(s.paddingLeft) + parseFloat(s.paddingRight) + parseFloat(s.borderLeftWidth) + parseFloat(s.borderRightWidth)))
        });
        return n.observe(t.current), () => n.disconnect()
    }, [e]), [t, n, a]
}