/** chunk id: 953756 params = (module,exports,require) **/
n.d(t, {
    Hq: () => o,
    O7: () => a,
    zn: () => d
});
var i = n(627968),
    s = n(64700);
let r = s.createContext(null),
    a = {
        Root(e) {
            let {
                containerInnerWidth: t,
                children: n
            } = e, a = s.useMemo(() => ({
                isParentWidthLimited: !0,
                parentContainerInnerWidth: t
            }), [t]);
            return (0, i.jsx)(r.Provider, {
                value: a,
                children: n
            })
        },
        NestedContainer(e) {
            let {
                containerOuterWidth: t,
                containerInnerWidth: n,
                children: a
            } = e, {
                isParentWidthLimited: o,
                parentContainerInnerWidth: d
            } = l(), c = o && d === t, u = s.useMemo(() => ({
                isParentWidthLimited: c,
                parentContainerInnerWidth: n
            }), [c, n]);
            return (0, i.jsx)(r.Provider, {
                value: u,
                children: a
            })
        },
        AutoMeasuredNestedContainer(e) {
            let {
                children: t
            } = e, [n, s, r] = d(!0);
            return (0, i.jsx)(a.NestedContainer, {
                containerOuterWidth: s,
                containerInnerWidth: r,
                children: t(n)
            })
        }
    };

function l() {
    let e = s.useContext(r);
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

function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = s.useRef(null),
        [n, i] = s.useState(0),
        [r, a] = s.useState(0);
    return s.useLayoutEffect(() => {
        if (null == t.current) return;
        let n = new ResizeObserver(() => {
            let n = t.current.getBoundingClientRect().width,
                s = getComputedStyle(t.current);
            i(n + (parseFloat(s.marginLeft) + parseFloat(s.marginRight))), e && a(n - (parseFloat(s.paddingLeft) + parseFloat(s.paddingRight) + parseFloat(s.borderLeftWidth) + parseFloat(s.borderRightWidth)))
        });
        return n.observe(t.current), () => n.disconnect()
    }, [e]), [t, n, r]
}