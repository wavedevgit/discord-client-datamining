/** chunk id: 519397 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(80682),
    s = n(465364),
    o = n(448368),
    d = n(943220),
    c = n(994500),
    u = n(838541),
    _ = n(222590);

function m(e) {
    let {
        message: t,
        channel: n
    } = e, {
        isBlocked: m,
        isIgnored: h
    } = (0, a.cf)([c.A], () => ({
        isBlocked: c.A.isBlockedForMessage(t),
        isIgnored: c.A.isIgnoredForMessage(t)
    }), [t]), p = r.useMemo(() => ({
        [n.guild_id]: [t.author.id]
    }), [n.guild_id, t.author.id]);
    (0, l.Eq)(p, "ThreadMessageAccessoryMessage");
    let g = r.useMemo(() => null != t.content && "" !== t.content ? (0, s.Ay)(t, {
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
            children: function(e, t, n, r) {
                let {
                    contentPlaceholder: a,
                    renderedContent: l,
                    leadingIcon: s,
                    trailingIcon: d
                } = (0, o.o)(e, t, n, r, _.tP, {
                    trailingIconClass: _._v,
                    leadingIconClass: _.a5,
                    iconSize: u.eJ
                });
                return (0, i.jsxs)(i.Fragment, {
                    children: [s, l ?? (0, i.jsx)("span", {
                        className: _.dp,
                        children: a
                    }), d]
                })
            }(t, g, m, h)
        })]
    })
}