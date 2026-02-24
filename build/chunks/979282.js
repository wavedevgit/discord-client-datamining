/** chunk id: 979282, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(627968);
n(64700);
var r = n(518620),
    l = n(901319);

function a(e) {
    let {
        rows: t,
        renderRow: n,
        renderSection: a,
        isVirtualizedList: s,
        hasSearchQuery: o,
        sectionFilter: d,
        footer: c,
        renderSectionFooter: u
    } = e;
    return s ? (0, i.jsx)(r.A, {
        rows: t,
        renderRow: n,
        renderSection: a,
        footer: c,
        sectionFilter: d,
        renderSectionFooter: u
    }) : (0, i.jsx)(l.A, {
        rows: t,
        renderRow: n,
        renderSection: a,
        sectionFilter: d,
        hasSearchQuery: o,
        footer: c,
        renderSectionFooter: u
    })
}