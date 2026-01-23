/** Chunk was on 16864 **/
/** chunk id: 698894, original params: e,t,r (module,exports,require) **/
"use strict";
r.d(t, {
    r: () => p
});
var n = r(627968),
    a = r(64700),
    s = r(333748),
    i = r(397927),
    l = r(647053),
    o = r(985018),
    c = r(856229),
    d = r(806782),
    u = r(277606);
let p = e => {
    let {
        onComplete: t,
        data: r
    } = e, p = (0, a.useId)(), f = null, h = null, x = r.scopes.some(e => (0, l.RM)(e));
    return r.clientId === s.i.PLAYSTATION_APPLICATION_ID || r.clientId === s.i.PLAYSTATION_STAGING_APPLICATION_ID ? f = d.A : x && (f = u.A), null != r.twoWayLinkCode ? h = o.intl.string(o.t.QhATl2) : x && (h = o.intl.string(o.t.vBPvK3)), (0, n.jsxs)("div", {
        className: c.Qs,
        children: [null != f ? (0, n.jsx)("img", {
            src: f,
            className: c.xX,
            alt: "",
            "aria-labelledby": p
        }) : null, (0, n.jsxs)("div", {
            className: c.gx,
            children: [(0, n.jsx)(i.Heading, {
                variant: "heading-xl/extrabold",
                id: p,
                children: o.intl.string(o.t.qDtJmD)
            }), null != h ? (0, n.jsx)(i.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: h
            }) : null]
        }), (0, n.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: c.wC,
            children: (0, n.jsx)(i.Button, {
                variant: "primary",
                text: o.intl.string(o.t.i4jeWR),
                onClick: t
            })
        })]
    })
}