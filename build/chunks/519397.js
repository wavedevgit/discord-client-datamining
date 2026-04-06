/** chunk id: 519397 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(80682),
    r = n(465364),
    o = n(448368),
    d = n(943220),
    c = n(994500),
    u = n(838541),
    _ = n(767283);

function m(e) {
    let {
        message: t,
        channel: n
    } = e, {
        isBlocked: m,
        isIgnored: h
    } = (0, s.cf)([c.A], () => ({
        isBlocked: c.A.isBlockedForMessage(t),
        isIgnored: c.A.isIgnoredForMessage(t)
    }), [t]), p = l.useMemo(() => ({
        [n.guild_id]: [t.author.id]
    }), [n.guild_id, t.author.id]);
    (0, a.Eq)(p, "ThreadMessageAccessoryMessage");
    let g = l.useMemo(() => null != t.content && "" !== t.content ? (0, r.Ay)(t, {
        formatInline: !0
    }).content : null, [t]);
    return (0, i.jsxs)("div", {
        className: _.up,
        children: [(0, i.jsx)("img", {
            alt: "",
            src: t.author.getAvatarURL(n.guild_id, 16),
            className: _.FJ
        }), (0, i.jsx)(d.A, {
            message: t,
            channel: n,
            compact: !0
        }), (0, i.jsx)("div", {
            className: _.Au,
            children: function(e, t, n, l) {
                let {
                    contentPlaceholder: s,
                    renderedContent: a,
                    leadingIcon: r,
                    trailingIcon: d
                } = (0, o.o)(e, t, n, l, _.tP, {
                    trailingIconClass: _._v,
                    leadingIconClass: _.a5,
                    iconSize: u.eJ
                });
                return (0, i.jsxs)(i.Fragment, {
                    children: [r, a ?? (0, i.jsx)("span", {
                        className: _.dp,
                        children: s
                    }), d]
                })
            }(t, g, m, h)
        })]
    })
}