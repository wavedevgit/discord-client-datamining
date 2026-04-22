/** chunk id: 425897 params = (module,exports,require) **/
t.d(l, {
    A: () => o
});
var s = t(627968),
    n = t(64700),
    r = t(397927),
    a = t(327143),
    i = t(573758),
    c = t(462367);

function u(e) {
    let {
        item: l,
        coords: t,
        onSelect: a
    } = e, i = n.useCallback(() => {
        a(l.url)
    }, [l.url, a]);
    return (0, s.jsx)(r.DUT, {
        className: c.Se,
        style: t,
        onClick: i,
        children: (0, s.jsx)("img", {
            src: l.url,
            alt: "",
            className: c.rx,
            loading: "lazy"
        })
    })
}

function o(e) {
    let {
        guildId: l,
        onSelect: t
    } = e, {
        mediaItems: o,
        isLoading: d
    } = (0, i.A)(l), g = n.useCallback((e, l, t) => {
        if (e > 0) return 0;
        let s = o[l];
        return null == s ? 0 : t * (s.height / s.width)
    }, [o]), m = n.useCallback((e, l) => o[l]?.url ?? null, [o]), h = n.useCallback((e, l, n, r) => {
        if (e > 0) return null;
        let a = o[l];
        return null == a ? null : (0, s.jsx)(u, {
            item: a,
            coords: n,
            onSelect: t
        }, r)
    }, [o, t]), f = n.useCallback(e => (0, s.jsx)(r.a0_, {
        fade: !0,
        className: c.q4,
        columns: e,
        sections: [o.length],
        itemGutter: 8,
        getItemKey: m,
        getItemHeight: g,
        renderItem: h,
        chunkSize: 128
    }), [o, m, g, h]);
    return d ? (0, s.jsx)("div", {
        className: c.qE,
        children: (0, s.jsx)(r.y$y, {
            type: r.y$y.Type.WANDERING_CUBES
        })
    }) : 0 === o.length ? null : (0, s.jsx)("div", {
        className: c.HU,
        children: (0, s.jsx)(a.A, {
            desiredItemWidth: 150,
            maxColumns: 3,
            children: f
        })
    })
}