/** Chunk was on web.js **/
/** chunk id: 200759, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r = n(627968),
    i = n(64700),
    a = n(990078),
    o = n(397927),
    s = n(351001),
    l = n(226884),
    c = n(985018),
    u = n(58855);

function d(e) {
    let {
        guild: t,
        message: n
    } = e, d = i.useRef(null);
    return (0, s.HU)(t.id, n.author.id) ? (0, r.jsx)(o.YNO, {
        targetElementRef: d,
        animation: o.YNO.Animation.TRANSLATE,
        align: "center",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        position: "right",
        renderPopout: e => {
            let {
                closePopout: i
            } = e;
            return (0, r.jsx)(l.A, {
                guild: t,
                message: n,
                onClose: i
            })
        },
        children: e => {
            let {
                onClick: t
            } = e;
            return (0, r.jsx)(o.DUT, {
                onClick: t,
                tag: "span",
                innerRef: d,
                children: (0, r.jsx)(a.m, {
                    text: c.intl.string(c.t["v/OYd2"]),
                    children: (0, r.jsx)("div", {
                        className: u.C,
                        children: (0, r.jsx)(o.NVf, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20
                        })
                    })
                })
            })
        }
    }) : null
}