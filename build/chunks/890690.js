/** chunk id: 890690 params = (module,exports,require) **/
"use strict";
r.d(t, {
    u: () => l
}), r(321073);
var n = r(64700),
    a = r(894858),
    i = r(397274);

function l(e) {
    let t = n.useRef(null),
        r = n.useRef(new Set);
    n.useEffect(() => {
        let e = i.A.getPanelScrollerNode();
        if (null == e) return;
        let n = Array.from(e.querySelectorAll("[data-settings-category-key]")).filter(e => null != e.getAttribute("data-settings-category-key")),
            l = new Map,
            s = [];
        return n.forEach(e => {
            let t = e.getAttribute("data-settings-category-key");
            null != t && (l.set(e, t), s.push(t))
        }), t.current = new IntersectionObserver(e => {
            if (e.forEach(e => {
                    let {
                        isIntersecting: t,
                        target: n
                    } = e, a = l.get(n);
                    null != a && (t ? r.current.add(a) : r.current.delete(a))
                }), !i.A.getIsSidebarCategoryAutoSelectEnabled()) return;
            let t = [];
            if (s.forEach(e => {
                    r.current.has(e) && t.push(e)
                }), 0 === t.length) return;
            let n = t[0];
            a.A.getField("currentCategoryKey") !== n && a.A.setState({
                currentCategoryKey: n
            })
        }, {
            root: e,
            rootMargin: "0px 100000px 0px 100000px",
            threshold: 1
        }), n.forEach(e => t.current?.observe(e)), () => {
            n.forEach(e => t.current?.unobserve(e)), t.current?.disconnect(), t.current = null
        }
    }, [e])
}