/** chunk id: 872243, original params: t,n,e (module,exports,require) **/
e.d(n, {
    default: () => v
}), e(896048), e(228524);
var i = e(627968),
    a = e(64700),
    o = e(311907),
    l = e(732955),
    r = e(397927),
    s = e(47167),
    c = e(734057),
    u = e(181079),
    f = e(422258),
    d = e(985018),
    p = e(129115);

function v(t) {
    let {
        channelId: n,
        onClose: e,
        transitionState: v,
        heading: C,
        formTitle: E,
        allowReset: h = !1
    } = t, A = (0, o.bG)([c.A], () => c.A.getChannel(n)), N = (0, s.Ay)(A), _ = u.A.getNickname(n), [I, m] = a.useState(null != _ ? _ : "");

    function R(t) {
        t.preventDefault(), (0, f.w6)(n, I), e()
    }
    return (0, i.jsx)("form", {
        onSubmit: R,
        children: (0, i.jsxs)(l.aFV, {
            title: C,
            actions: [{
                text: d.intl.string(d.t["ETE/oC"]),
                onClick: e,
                variant: "secondary"
            }, {
                text: C,
                onClick: R,
                variant: "primary",
                type: "submit"
            }],
            onClose: e,
            transitionState: v,
            children: [(0, i.jsx)(r.ksK, {
                label: E,
                value: I,
                onChange: m,
                placeholder: null != N ? N : void 0,
                maxLength: 100,
                autoFocus: !0
            }), h && null != _ ? (0, i.jsx)("div", {
                className: p.c,
                children: (0, i.jsx)(r.QWc, {
                    text: d.intl.string(d.t.aE02Rz),
                    onClick: function() {
                        (0, f.w6)(n, null), e()
                    },
                    textVariant: "text-sm/normal"
                })
            }) : null, (0, i.jsx)(r.Text, {
                className: p.h,
                variant: "text-sm/normal",
                color: "text-default",
                children: d.intl.string(d.t["2vyz+N"])
            })]
        })
    })
}