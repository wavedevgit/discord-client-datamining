/** Chunk was on 83504 **/
/** chunk id: 872243, original params: t,n,e (module,exports,require) **/
e.d(n, {
    default: () => p
}), e(896048), e(228524);
var a = e(627968),
    i = e(64700),
    l = e(311907),
    s = e(732955),
    r = e(397927),
    c = e(47167),
    o = e(734057),
    u = e(181079),
    d = e(422258),
    x = e(985018),
    h = e(129115);

function p(t) {
    let {
        channelId: n,
        onClose: e,
        transitionState: p,
        heading: m,
        formTitle: f,
        allowReset: k = !1
    } = t, v = (0, l.bG)([o.A], () => o.A.getChannel(n)), C = (0, c.Ay)(v), g = u.A.getNickname(n), [b, j] = i.useState(null != g ? g : "");

    function y(t) {
        t.preventDefault(), (0, d.w6)(n, b), e()
    }
    return (0, a.jsx)("form", {
        onSubmit: y,
        children: (0, a.jsxs)(s.aFV, {
            title: m,
            actions: [{
                text: x.intl.string(x.t["ETE/oC"]),
                onClick: e,
                variant: "secondary"
            }, {
                text: m,
                onClick: y,
                variant: "primary",
                type: "submit"
            }],
            onClose: e,
            transitionState: p,
            children: [(0, a.jsx)(r.ksK, {
                label: f,
                value: b,
                onChange: j,
                placeholder: null != C ? C : void 0,
                maxLength: 100,
                autoFocus: !0
            }), k && null != g ? (0, a.jsx)("div", {
                className: h.c,
                children: (0, a.jsx)(r.QWc, {
                    text: x.intl.string(x.t.aE02Rz),
                    onClick: function() {
                        (0, d.w6)(n, null), e()
                    },
                    textVariant: "text-sm/normal"
                })
            }) : null, (0, a.jsx)(r.Text, {
                className: h.h,
                variant: "text-sm/normal",
                color: "text-default",
                children: x.intl.string(x.t["2vyz+N"])
            })]
        })
    })
}