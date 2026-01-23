/** Chunk was on 41031 **/
/** chunk id: 980302, original params: e,t,a (module,exports,require) **/
a.d(t, {
    r: () => u
});
var r = a(627968);
a(64700);
var s = a(134402),
    l = a(877227),
    n = a(489569),
    i = a(137540),
    o = a(818348),
    c = a(705492);
let d = o.sE.MAIN_NAVIGATION_MENU;

function u(e) {
    let {
        isOpen: t,
        dropdownLinks: a,
        TrackClick: u,
        avoidRouter: _,
        id: N,
        "aria-label": A
    } = e, p = (0, l.dI)({
        history: (0, s.W6)()
    }), h = a.map((e, t) => e.divider ? (0, r.jsx)("hr", {
        className: c.divider
    }, "divider-".concat(t)) : e.external ? (0, r.jsx)("li", {
        className: c.moreListItemInactive,
        children: (0, r.jsx)(u, {
            className: c.moreListLink,
            eventName: d,
            data: {
                linkClicked: e.linkClicked
            },
            href: e.route,
            rel: "me",
            children: (0, r.jsx)("span", {
                className: c.moreListLinkCopy,
                children: e.title
            })
        })
    }, e.route) : (0, r.jsx)("li", {
        className: (0, n.t)(c, "moreListItem", p(e.route) ? "Active" : "Inactive"),
        children: (0, r.jsx)(i.A, {
            avoidRouter: _,
            className: c.moreListLink,
            to: e.route,
            from: o.sE.MAIN_NAVIGATION_MENU,
            role: "menuitem",
            children: (0, r.jsx)(u, {
                tag: "span",
                className: c.moreListLinkCopy,
                eventName: d,
                data: {
                    linkClicked: e.linkClicked
                },
                children: e.title
            })
        })
    }, e.route));
    return (0, r.jsx)("ul", {
        id: N,
        className: (0, n.t)(c, "moreList", t ? "Open" : "Closed"),
        "aria-label": A,
        children: h
    })
}