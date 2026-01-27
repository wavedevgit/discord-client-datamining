/** Chunk was on web.js **/
/** chunk id: 824842, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    o = n(397927),
    s = n(813516),
    l = n(931664),
    c = n(631576),
    u = n(148355),
    d = n(985018),
    f = n(115424);

function p(e) {
    var t;
    let {
        channelId: n,
        chatInputType: p
    } = e, [_, h] = i.useState(null), m = (0, a.bG)([l.A], () => l.A.getStickerPreview(n, p.drafts.type));
    return (null == (t = p.stickers) ? void 0 : t.allowSending) && null != m && 0 !== m.length ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
            className: f.Tz,
            children: m.map(e => (0, r.jsxs)("div", {
                className: f.dp,
                children: [(0, r.jsx)(o.DUT, {
                    onFocus: () => h(e.id),
                    onBlur: () => h(null),
                    className: f.b,
                    "aria-label": d.intl.formatToPlainString(d.t.BGAQRd, {
                        name: e.name
                    }),
                    onClick: () => (0, c.x5)(n, p.drafts.type),
                    children: (0, r.jsx)("div", {
                        className: f.Nk,
                        children: (0, r.jsx)(o.aXh, {
                            size: "md",
                            color: "currentColor",
                            className: f.ut
                        })
                    })
                }), (0, r.jsx)(u.A, {
                    isInteracting: _ === e.id,
                    className: f.UV,
                    size: 48,
                    sticker: e
                })]
            }, e.id))
        }), (0, r.jsx)(s.A, {
            className: f.R
        })]
    }) : null
}
let _ = i.memo(p)