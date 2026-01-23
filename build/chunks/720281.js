/** Chunk was on 47841 **/
/** chunk id: 720281, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(990078),
    s = n(397927),
    a = n(615900),
    o = n(260509),
    c = n(287809),
    d = n(985018),
    u = n(552873);

function g(e) {
    let {
        guild: t
    } = e, n = (0, i.bG)([c.default], () => {
        let e = c.default.getCurrentUser();
        return (0, o.bM)(t, e)
    });
    return (0, r.jsxs)(s.BJc, {
        gap: 24,
        className: u.k,
        children: [(0, r.jsx)(s.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: d.intl.string(d.t.Ms33Ds)
        }), (0, r.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: d.intl.string(d.t.xK7oic)
        }), (0, r.jsx)(l.m, {
            text: d.intl.string(d.t.VAIHXQ),
            shouldShow: !n,
            children: (0, r.jsx)("div", {
                children: (0, r.jsx)(s.Button, {
                    variant: "primary",
                    text: d.intl.string(d.t.ZXeJbS),
                    disabled: !n,
                    onClick: () => {
                        (0, a.h)(t.id, {
                            demonetized: !0
                        })
                    }
                })
            })
        })]
    })
}