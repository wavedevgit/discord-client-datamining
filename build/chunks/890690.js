/** chunk id: 890690 params = (module,exports,require) **/
"use strict";
n.d(t, {
    u: () => a
}), n(321073);
var r = n(64700),
    i = n(894858),
    l = n(397274);

function a(e) {
    let t = r.useRef(null),
        n = r.useRef(new Set);
    r.useEffect(() => {
        let e = l.A.getPanelScrollerNode();
        if (null == e) return;
        let r = Array.from(e.querySelectorAll("[data-settings-category-key]")).filter(e => null != e.getAttribute("data-settings-category-key")),
            a = new Map,
            s = [];
        return r.forEach(e => {
            let t = e.getAttribute("data-settings-category-key");
            null != t && (a.set(e, t), s.push(t))
        }), t.current = new IntersectionObserver(e => {
            if (e.forEach(e => {
                    let {
                        isIntersecting: t,
                        target: r
                    } = e, i = a.get(r);
                    null != i && (t ? n.current.add(i) : n.current.delete(i))
                }), !l.A.getIsSidebarCategoryAutoSelectEnabled()) return;
            let t = [];
            if (s.forEach(e => {
                    n.current.has(e) && t.push(e)
                }), 0 === t.length) return;
            let r = t[0];
            i.A.getField("currentCategoryKey") !== r && i.A.setState({
                currentCategoryKey: r
            })
        }, {
            root: e,
            rootMargin: "0px 100000px 0px 100000px",
            threshold: 1
        }), r.forEach(e => t.current?.observe(e)), () => {
            r.forEach(e => t.current?.unobserve(e)), t.current?.disconnect(), t.current = null
        }
    }, [e])
}