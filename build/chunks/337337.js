/** Chunk was on 46875 **/
/** chunk id: 337337, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var l = n(627968);
n(64700);
var r = n(91871),
    i = n.n(r),
    a = n(311907),
    s = n(397927),
    o = n(565645),
    c = n(508675),
    d = n(435470),
    u = n(985018),
    m = n(553017);
let h = e => {
    let {
        tag: t
    } = e, {
        id: n,
        name: r,
        emojiId: i,
        emojiName: d
    } = t, u = (0, a.bG)([c.Ay], () => null != i ? c.Ay.getUsableCustomEmojiById(i) : null), h = null != i || null != d;
    return (0, l.jsx)(s.x4T, {
        value: n,
        children: (0, l.jsx)(s.x4T.Label, {
            children: (0, l.jsxs)("div", {
                className: m.nM,
                children: [h ? (0, l.jsx)(o.A, {
                    className: m.__invalid_emoji,
                    emojiId: i,
                    emojiName: d,
                    animated: !!(null == u ? void 0 : u.animated)
                }) : (0, l.jsx)(s.gqV, {
                    size: "md",
                    color: "currentColor",
                    className: m.__invalid_emoji
                }), (0, l.jsx)(s.Text, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    children: r
                })]
            })
        })
    }, n)
};

function g(e) {
    let {
        parentChannel: t,
        appliedTags: n,
        maxTagsApplied: r,
        onSelectTag: a,
        onClose: o
    } = e, c = (0, d.OT)(t);
    return (0, l.jsx)(s.pzS, {
        value: n,
        onChange: e => {
            (!r || n.has(e)) && (a(e), o())
        },
        placeholder: u.intl.string(u.t.MbhGm7),
        "aria-label": u.intl.string(u.t.MbhGm7),
        children: e => c.filter(t => i()(e.toLowerCase(), t.name.toLowerCase())).map(e => (0, l.jsx)(h, {
            tag: e
        }, e.id))
    })
}