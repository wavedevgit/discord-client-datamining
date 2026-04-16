/** chunk id: 425897 params = (module,exports,require) **/
l.d(t, {
    A: () => o
});
var s = l(627968),
    n = l(64700),
    i = l(397927),
    r = l(327143),
    a = l(573758),
    c = l(462367);

function d(e) {
    let {
        item: t,
        coords: l,
        onSelect: r
    } = e, a = n.useCallback(() => {
        r(t.url)
    }, [t.url, r]);
    return (0, s.jsx)(i.DUT, {
        className: c.Se,
        style: l,
        onClick: a,
        children: (0, s.jsx)("img", {
            src: t.url,
            alt: "",
            className: c.rx,
            loading: "lazy"
        })
    })
}

function o(e) {
    let {
        guildId: t,
        onSelect: l
    } = e, {
        mediaItems: o,
        isLoading: u
    } = (0, a.A)(t), g = n.useCallback((e, t, l) => {
        if (e > 0) return 0;
        let s = o[t];
        return null == s ? 0 : l * (s.height / s.width)
    }, [o]), h = n.useCallback((e, t) => o[t]?.url ?? null, [o]), m = n.useCallback((e, t, n, i) => {
        if (e > 0) return null;
        let r = o[t];
        return null == r ? null : (0, s.jsx)(d, {
            item: r,
            coords: n,
            onSelect: l
        }, i)
    }, [o, l]), f = n.useCallback(e => (0, s.jsx)(i.a0_, {
        fade: !0,
        className: c.q4,
        columns: e,
        sections: [o.length],
        itemGutter: 8,
        getItemKey: h,
        getItemHeight: g,
        renderItem: m,
        chunkSize: 128
    }), [o, h, g, m]);
    return u ? (0, s.jsx)("div", {
        className: c.qE,
        children: (0, s.jsx)(i.y$y, {
            type: i.y$y.Type.WANDERING_CUBES
        })
    }) : 0 === o.length ? null : (0, s.jsx)("div", {
        className: c.HU,
        children: (0, s.jsx)(r.A, {
            desiredItemWidth: 150,
            maxColumns: 3,
            children: f
        })
    })
}