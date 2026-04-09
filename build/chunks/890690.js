/** chunk id: 890690 params = (module,exports,require) **/
"use strict";
n.d(t, {
    u: () => s
}), n(321073), n(134528), n(947204);
var r = n(64700),
    i = n(894858),
    a = n(397274);

function s(e, t) {
    let n = r.useRef(null),
        s = r.useRef(new Set),
        l = r.useRef(!1);
    r.useEffect(() => {
        if (!t) return;
        let e = a.A.getPanelScrollerNode();
        if (null == e) return;
        let r = e.querySelectorAll("[data-settings-category-key]"),
            o = e.querySelector("[data-panel-bottom]"),
            u = Array.from(r).filter(e => null != e.getAttribute("data-settings-category-key")),
            c = new Map,
            d = [];
        return u.forEach(e => {
            let t = e.getAttribute("data-settings-category-key");
            null != t && (c.set(e, t), d.push(t))
        }), n.current = new IntersectionObserver(t => {
            if (t.forEach(t => {
                    let {
                        isIntersecting: n,
                        target: r
                    } = t;
                    if (r === o) {
                        let t = e.scrollHeight > e.clientHeight;
                        l.current = n && t;
                        return
                    }
                    let i = c.get(r);
                    null != i && (n ? s.current.add(i) : s.current.delete(i))
                }), !a.A.getIsSidebarCategoryAutoSelectEnabled()) return;
            let n = [];
            if (d.forEach(e => {
                    s.current.has(e) && n.push(e)
                }), 0 === n.length) return;
            let r = n.at(l.current ? -1 : 0);
            i.A.getField("currentCategoryKey") !== r && i.A.setState({
                currentCategoryKey: r
            })
        }, {
            root: e,
            rootMargin: "0px 100000px 0px 100000px",
            threshold: 1
        }), u.forEach(e => n.current?.observe(e)), null != o && n.current?.observe(o), () => {
            u.forEach(e => n.current?.unobserve(e)), null != o && n.current?.unobserve(o), n.current?.disconnect(), n.current = null
        }
    }, [e, t])
}