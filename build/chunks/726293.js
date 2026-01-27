/** Chunk was on web.js **/
/** chunk id: 726293, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(397927),
    s = n(60809),
    l = n(985018),
    c = n(502573);

function u(e) {
    let {
        sortOrder: t,
        onSortOptionClick: n,
        closePopout: i
    } = e, u = e => {
        n(e), i()
    };
    return (0, r.jsx)("div", {
        className: a()(s.Wx, c.k),
        children: (0, r.jsx)(o.W1t, {
            "data-menu-migrated": !0,
            navId: "command-list-sort",
            "aria-label": l.intl.string(l.t.Ugo9ud),
            hideScroller: !0,
            onClose: i,
            onSelect: i,
            children: (0, r.jsxs)(o.rXV, {
                label: l.intl.string(l.t.yeYaHf),
                children: [(0, r.jsx)(o.iDA, {
                    id: "sort-by-popular",
                    group: "sort-by",
                    label: l.intl.string(l.t.SzxiqK),
                    action: () => u(s.Ug.POPULAR),
                    checked: t === s.Ug.POPULAR
                }), (0, r.jsx)(o.iDA, {
                    id: "sort-by-alphabetical",
                    group: "sort-by",
                    label: l.intl.string(l.t.m8xsti),
                    action: () => u(s.Ug.ALPHABETICAL),
                    checked: t === s.Ug.ALPHABETICAL
                })]
            })
        })
    })
}