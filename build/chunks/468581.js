/** Chunk was on web.js **/
/** chunk id: 468581, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $: () => u,
    A: () => f
});
var r = n(627968),
    i = n(64700),
    a = n(939341),
    o = n(263577),
    s = n(506326),
    l = n(868065),
    c = n(332225);
let u = [s.iq, s.Zc, s.Xy, s.$X, s.fg, s.MK],
    d = e => {
        let {
            entry: t,
            channel: n,
            selected: i,
            hovered: d
        } = e, {
            largeImage: f
        } = (0, a.nO)({
            entry: t,
            showCoverImage: !1
        });
        return (0, r.jsxs)(l.Zp, {
            selected: i,
            children: [(0, r.jsxs)(l.UA, {
                children: [(0, r.jsx)(l.Hp, {
                    entry: t,
                    channelId: n.id,
                    guildId: n.guild_id
                }), (0, r.jsx)(l.ZB, {
                    children: t.extra.activity_name
                }), (0, r.jsx)(s.mG, {
                    location: s.N5.CARD,
                    children: u.map((e, n) => (0, r.jsx)(e, {
                        entry: t,
                        hovered: d
                    }, n))
                })]
            }), (0, r.jsx)(o.V, {
                alt: null == f ? void 0 : f.alt,
                src: null == f ? void 0 : f.src,
                size: 48,
                className: c.xn
            })]
        })
    },
    f = i.memo(d)