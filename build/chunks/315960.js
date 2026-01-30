/** chunk id: 315960, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => o
});
var l = t(627968),
    i = t(64700),
    r = t(397927),
    d = t(988794),
    s = t(985018),
    a = t(45750);

function o(e) {
    let {
        selectedTab: n,
        onTabSelected: t,
        userCount: o
    } = e, c = i.useRef(null);
    return i.useEffect(() => {
        var e, n, t;
        return null == (t = c.current) || null == (n = t.ref) || null == (e = n.blur) ? void 0 : e.call(n)
    }, []), (0, l.jsx)("div", {
        className: a.kL,
        children: (0, l.jsxs)(r.VQ0, {
            className: a.$H,
            "aria-label": s.intl.string(s.t["+1H47t"]),
            selectedItem: n,
            type: "top",
            onItemSelect: t,
            children: [(0, l.jsx)(r.VQ0.Item, {
                className: a.YU,
                id: d.al.EVENT_INFO,
                children: s.intl.string(s.t.iW6Xuo)
            }), (0, l.jsx)(r.VQ0.Item, {
                className: a.YU,
                id: d.al.RSVP_LIST,
                children: s.intl.formatToPlainString(s.t["ZrTT/N"], {
                    userCount: o
                })
            })]
        })
    })
}