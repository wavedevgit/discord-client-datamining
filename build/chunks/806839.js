/** chunk id: 806839, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
}), n(65821);
var r = n(64700),
    i = n(253018),
    a = n(770178),
    o = n(728458),
    s = n(711371);
let l = {
    enabled: !0,
    fireOnMount: !0,
    fireOnDepsChange: !0
};

function c(e) {
    try {
        return s.VW.toDOMNode(e, e)
    } catch (t) {
        let e = Error("Unable to find Slate EditorDOMNode: ".concat(t.message));
        return e.stack = t.stack, o.A.captureException(e), null
    }
}

function u(e, t, n) {
    let o = r.useRef(null),
        s = r.useRef(null),
        u = r.useRef(null);
    r.useLayoutEffect(() => {
        s.current = c(e), null == s.current && null == u.current && (u.current = setTimeout(() => {
            s.current = c(e)
        }, 100))
    }, [e]), r.useEffect(() => {
        let e = u.current;
        return () => {
            null != e && clearTimeout(e)
        }
    }, []);
    let d = r.useCallback(() => {
        let e = s.current;
        if (null == e) return;
        let r = e.offsetHeight;
        o.current !== r && (null != t.current && (t.current.style.height = "".concat(r, "px")), o.current = r, null == n || n(r))
    }, [t, n]);
    (0, a.g)(s, d, [d, e, n], l), r.useLayoutEffect(() => {
        let t = i.rL.findDocumentOrShadowRoot(e).defaultView;
        if ((null == t ? void 0 : t.ResizeObserver) == null) return;
        let r = c(e);
        null != r && (o.current = r.offsetHeight, null == n || n(o.current))
    }, [t, e, n])
}