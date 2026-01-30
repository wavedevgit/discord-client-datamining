/** chunk id: 903618, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    o = n(788868),
    s = n(298116),
    l = n(134839),
    c = n(974704),
    u = n(703707),
    d = n(460024),
    f = n(889056),
    p = n(579401),
    _ = n(991564),
    h = n(336417),
    m = n(790193);
let g = {
        [o.o2.STANDARD_BOX]: f,
        [o.o2.CAKE]: p,
        [o.o2.CHEST]: _,
        [o.o2.COFFEE]: h,
        [o.o2.SNOWGLOBE]: "",
        [o.o2.BOX]: "",
        [o.o2.CUP]: "",
        [o.o2.SEASONAL_CAKE]: c,
        [o.o2.SEASONAL_CHEST]: u,
        [o.o2.SEASONAL_COFFEE]: d,
        [o.o2.SEASONAL_STANDARD_BOX]: l,
        [o.o2.NITROWEEN_STANDARD]: m.A
    },
    E = i.forwardRef(function(e, t) {
        let {
            isSelected: n,
            giftStyle: i,
            setSelectedGiftStyle: o,
            onFocus: l,
            onBlur: c
        } = e;
        return (0, r.jsx)(a.DUT, {
            className: s.x6,
            innerRef: t,
            onClick: () => o(i),
            onFocus: l,
            onBlur: c,
            children: (0, r.jsx)("img", {
                style: {
                    width: "100%",
                    height: "100%"
                },
                alt: "",
                src: g[i],
                className: n ? s.MY : s.dk
            })
        })
    })