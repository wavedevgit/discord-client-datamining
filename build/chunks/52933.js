/** chunk id: 52933, original params: e,t,s (module,exports,require) **/
s.d(t, {
    Ay: () => f,
    BA: () => p
});
var i = s(627968);
s(64700);
var n = s(503698),
    r = s.n(n),
    l = s(827734),
    a = s(990078),
    o = s(397927),
    d = s(422844),
    h = s(435470),
    c = s(376310),
    u = s(746080),
    g = s(985018),
    m = s(558997),
    v = s(902049);

function p(e) {
    let {
        channel: t,
        isNew: s
    } = e, i = (0, h.kt)(t), n = i.slice(void 0, 3), r = i.slice(3), l = i.length > 3 ? i.length - 3 : 0, a = t.hasFlag(u.lx.PINNED), o = n.length > 0 || a || s;
    return {
        shownTags: n,
        remainingTags: r,
        moreTagsCount: l,
        isPinned: a,
        shouldRenderTagsRow: o,
        forumPostContainsTags: i.length > 0
    }
}

function f(e) {
    let {
        channel: t,
        isNew: s,
        tagsClassName: n,
        className: h
    } = e, {
        shownTags: u,
        remainingTags: f,
        moreTagsCount: x,
        isPinned: A,
        shouldRenderTagsRow: b
    } = p({
        channel: t,
        isNew: s
    }), {
        tagFilter: j
    } = (0, d.R)(t.id);
    return b ? (0, i.jsxs)("div", {
        className: r()(v._A, h),
        children: [s ? (0, i.jsx)(o.LpS, {
            className: r()(m.Ad, m.PP),
            color: l.A.unsafe_rawColors.BRAND_260.css,
            text: g.intl.string(g.t.y2b7CA)
        }) : null, A && (0, i.jsx)("div", {
            className: v.Ne,
            children: (0, i.jsx)(a.m, {
                text: g.intl.string(g.t["1QLRYb"]),
                children: (0, i.jsx)(o.tsw, {
                    size: "custom",
                    width: 16,
                    height: 16,
                    color: "white"
                })
            })
        }), u.map(e => (0, i.jsx)(c.A, {
            tag: e,
            size: c.A.Sizes.SMALL,
            className: r()(n, {
                [v.At]: j.has(e.id)
            })
        }, e.id)), x > 0 ? (0, i.jsx)(c.q, {
            tags: f,
            count: x,
            size: c.A.Sizes.SMALL
        }) : null]
    }) : null
}